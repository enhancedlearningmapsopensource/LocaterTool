(function () {

    //var async = require('async');
    var fs = require('fs');
    var _ = require('underscore');
    //	Get Tests By UserId
    module.exports.getTestsByUserId = function (userId, withRevision, con, logger, callback) {
        logger.info('DAO Test Retrieving Tests for User Id:' + userId);
        var queryString = "SELECT tests.ID as ID," +
            "tests.ACTIVE_TEST_ID as ACTIVE_TEST_ID," +
            "tests.TEST_TITLE," +
            "tests.STUDENT_TITLE," +
            "tests.TEST_PASSAGE," +
            "tests.ISPUBLIC," +
            "tests.ISACTIVE," +
            "user.EMAIL as AUTHOR," +
            "tests.VERSION," +
            "tests.COMPANION_ID," +
            "DATE_FORMAT(tests.CREATED_DATE,'%m/%e/%Y, %r') as CREATED_DATE," +
            "COUNT(questions.ID) as QUESTION_COUNT " +
            "FROM ELM_TESTS tests " +
            "LEFT JOIN ELM_QUESTIONS questions on tests.ID=questions.TEST_ID and tests.ISACTIVE=1 and questions.QUESTION_TYPE <> 'multipart' " +
            "LEFT JOIN ELM_USER user on tests.CREATED_USER=user.USERID " +
            "WHERE ( (SELECT count(GROUPID) FROM ELM_USERGROUP WHERE userid=" + userId + " and GROUPID in (select GROUPID from ELM_GROUP where name='admin') ) OR" +
            " tests.CREATED_USER=" + userId + " OR tests.ISPUBLIC=1) and tests.ISACTIVE=1 " +
            "GROUP BY tests.ID;";
        con.query(queryString, function (err, result) {
            if (err) {
                logger.error('Error at getTestsByUserId :' + err);
                callback(err);
            } else {
                logger.debug('getTestsByUserId Row Count ' + result.length);
                if (result != null) {
                    var getRevisionQuery = `SELECT revCount.ACTIVE_TEST_ID,revCount.Count, CONCAT('[', revData.Revision,']') as Revision from
                            (SELECT tests.ACTIVE_TEST_ID AS ACTIVE_TEST_ID, count(tests.ID) as Count
                                FROM ELM_TESTS as tests LEFT JOIN ELM_USER user on tests.CREATED_USER=user.USERID
                                WHERE ( (SELECT count(GROUPID) FROM ELM_USERGROUP WHERE USERID=${userId}  and GROUPID in (select GROUPID from ELM_GROUP where NAME='admin')) OR 
                                tests.CREATED_USER=${userId} OR tests.ISPUBLIC=1) group by tests.ACTIVE_TEST_ID   ) as revCount
                        JOIN
                            (SELECT limitRev.ACTIVE_TEST_ID,
                                GROUP_CONCAT( JSON_OBJECT('ID',limitRev.ID, 'CREATED_DATE', DATE_FORMAT(limitRev.CREATED_DATE,'%m/%e/%Y, %r'),'AUTHOR', limitRev.EMAIL) 
                                ORDER BY  limitRev.CREATED_DATE) AS Revision FROM ( 
                                SELECT tests.ACTIVE_TEST_ID, tests.ID,tests.CREATED_DATE,user.EMAIL, 
                                    @active_rank := IF(@current_active = tests.ACTIVE_TEST_ID, @active_rank + 1, 1) AS active_rank, 
                                    @current_active := tests.ACTIVE_TEST_ID 
                            FROM ELM_TESTS as tests LEFT JOIN ELM_USER user on tests.CREATED_USER=user.USERID 
                        WHERE ( (SELECT count(GROUPID) FROM ELM_USERGROUP WHERE USERID=${userId}  and GROUPID in (select GROUPID from ELM_GROUP where NAME='admin') ) OR tests.CREATED_USER=${userId} OR tests.ISPUBLIC=1)   ORDER BY tests.ACTIVE_TEST_ID, tests.CREATED_DATE DESC) as limitRev 
                        WHERE limitRev.active_rank <=20 GROUP BY limitRev.ACTIVE_TEST_ID  ) as revData 
                        ON revCount.ACTIVE_TEST_ID = revData.ACTIVE_TEST_ID;`;

                    con.query(getRevisionQuery, function (errRev, revResult) {
                        if (errRev) {
                            logger.error('Error at getTestsByUserId & Revision :' + err);
                            callback(err);
                        } else {
                            if (revResult != null) {
                                try {
                                    revResult.forEach(element => {
                                        for (var i = 0; i < result.length; i++) {
                                            if (result[i].ACTIVE_TEST_ID == element.ACTIVE_TEST_ID) {
                                                var revJSON = JSON.parse(element.Revision);
                                                result[i].Revision = (revJSON == null) ? [] : revJSON;
                                                result[i].RevisionCount = element.Count;
                                            }
                                        }
                                    });
                                } catch (e) {
                                    logger.error("Error in getRevisionQuery", e);
                                }
                            }
                        }
                        callback(null, result);
                    });
                }
            }
        });
    };

    // Delete the assigned test by testId and password
    module.exports.deleteAssignedTest = async function (userId, passwordId, con, logger, callback) {
        var resultObj = {};
        try {
            try {
                transactionConn = await con.getConnectionSync();
            } catch (conErr) {
                logger.error("Error occurred in deleteAssignedTest while getting a connection: ", conErr.stack);
                return (callback(conErr));
            }

            transactionConn.beginTransaction(function (errTrans) {//start transaction
                if (errTrans) {
                    con.release(transactionConn, logger);
                    callback("Error in transaction: assignTest.");
                } else {
                    logger.info("Enter testDAO,deleteAssignedTest with passwordId: " + passwordId + " and userId: " + userId);
                    var deleteStdTestQuery = "DELETE FROM STUDENT_TESTS  WHERE " +
                        "LOCATER_PASSWORD_ID=" + passwordId + " " +
                        "AND CREATED_USER=" + userId + ";";
                    transactionConn.query(deleteStdTestQuery, function (err, result) {
                        if (err) {
                            logger.error('Error in deleteStdTestQuery: ' + err);
                            transactionConn.rollback(function () {// rollback all  transcations in this service
                                con.release(transactionConn, logger);
                                logger.info("Error: Transaction rolledback.");
                            });
                            callback(null, { 'deleteFlag': 'false' });
                        } else {
                            try {
                                if (result != null) {
                                    logger.debug("Successfully deleted the student tests  from assigned test: ", result.affectedRows);
                                    logger.debug("Deleteing the password with ID: " + passwordId);
                                    var deletePswdQuery = "DELETE FROM LOCATER_PASSWORD where ID=" + passwordId + ";";
                                    transactionConn.query(deletePswdQuery, function (err, result2) {
                                        if (err) {
                                            logger.error('Error in deletePswdQuery: ' + err);
                                            transactionConn.rollback(function () {// rollback all  transcations in this service
                                                con.release(transactionConn, logger);
                                                logger.info("Error: Transaction rolledback.");
                                            });
                                            callback(err);
                                        } else {
                                            resultObj = {
                                                "successMsg": "Yes",
                                            };
                                            logger.debug("Successfully deleted the password for the userId ", result2.affectedRows);
                                            transactionConn.commit(function (commitErr) {// commit the whole transcation if sucessfull
                                                if (commitErr) {
                                                    transactionConn.rollback(function () {// rollback all  transcations in this service
                                                        con.release(transactionConn, logger);
                                                        throw commitErr;
                                                    });
                                                } else {
                                                    con.release(transactionConn, logger);
                                                }
                                            });
                                            callback(null, resultObj);
                                        }
                                    });
                                } else {
                                    transactionConn.rollback(function () {// rollback all  transcations in this service
                                        con.release(transactionConn, logger);
                                        logger.info("Error: Transaction rolledback.");
                                    });
                                    callback(null, resultObj);
                                }
                            } catch (e) {
                                transactionConn.rollback(function () {// rollback all  transcations in this service
                                    con.release(transactionConn, logger);
                                    logger.info("Error: Transaction rolledback.");
                                });
                                logger.error("Error occurred at deleting Password for the assigned deleted test: ", e.stack);
                                callback(e);
                            }
                        }
                    });
                }
            });  /* End transaction */
        } catch (e) {
            logger.error("Error occurred while deleting the assigned deleted tests: ", e.stack);
            callback(e);
        }
    };


    module.exports.getAllTests = function (userId, con, logger, callback) {
        logger.info('Enter testDAO, getAllTests which are in Active state. ');
        var resultJsonArray = {};
        var jsonArray = [];
        var resultJson = {};
        var getAllTestsQuery;

        getAllTestsQuery = "SELECT tests.ID as ID," +
            "tests.ACTIVE_TEST_ID," +
            "tests.TEST_TITLE," +
            "tests.STUDENT_TITLE," +
            "tests.TEST_PASSAGE," +
            "tests.SUBJECT_ID," +
            "tests.ISPUBLIC," +
            "user.EMAIL as AUTHOR," +
            "tests.VERSION," +
            "tests.COMPANION_ID," +
            "DATE_FORMAT(tests.CREATED_DATE,'%m/%e/%Y, %r') as CREATED_DATE," +
            "COUNT(questions.ID) as QUESTION_COUNT " +
            "FROM ELM_TESTS tests " +
            "LEFT JOIN ELM_QUESTIONS questions on tests.ID=questions.TEST_ID and tests.ISACTIVE=1 " +
            "LEFT JOIN ELM_USER user on tests.CREATED_USER=user.USERID " +
            "WHERE  tests.ISPUBLIC=1 and tests.ISACTIVE=1 AND (tests.COMPANION_ID IS NOT NULL) " +
            "GROUP BY tests.ID,tests.ACTIVE_TEST_ID;";

        con.query(getAllTestsQuery, function (err, result) {
            if (err) {
                logger.error('Error in getAllTestsQuery :' + err);
                callback(err);
            } else {
                logger.debug('getAllTests Successfull. Row Count is: ' + result.length);
                try {
                    if (result != null) {
                        if (result.length > 0) {
                            for (var i = 0; i < result.length; i++) {
                                var resultObj = {};
                                resultObj = {
                                    "ID": result[i].ID,
                                    "ACTIVE_TEST_ID": result[i].ACTIVE_TEST_ID,
                                    "TEST_TITLE": result[i].TEST_TITLE,
                                    "COMPANION_ID": result[i].COMPANION_ID,
                                    "TEST_VERSION": result[i].VERSION
                                };
                                jsonArray.push(resultObj);
                            }
                            resultJson = jsonArray;
                            callback(null, resultJson);
                        }
                    }
                } catch (e) {
                    logger.error("Error occured while pasring resultset(result)/ getAllActiveTests. ", e.stack);
                    callback(e);
                }
            }
        });
    };

    //	Get all Tests By UserId - Active & Deleted
    module.exports.getAllTestsByUserId = function (userId, withRevision, con, logger, callback) {
        logger.info('DAO Test Retrieving Tests for User Id:' + userId);
        var queryString = "SELECT tests.ID as ID," +
            "tests.ACTIVE_TEST_ID as ACTIVE_TEST_ID," +
            "tests.TEST_TITLE," +
            "tests.STUDENT_TITLE," +
            "tests.TEST_PASSAGE," +
            //"tests.SUBJECT_ID," +
            //"tests.TEST_SUBJECT," +
            "tests.ISPUBLIC," +
            "tests.ISACTIVE," +
            "user.EMAIL as AUTHOR," +
            "tests.VERSION," +
            "tests.COMPANION_ID," +
            "DATE_FORMAT(tests.CREATED_DATE,'%m/%e/%Y, %r') as CREATED_DATE," +
            "COUNT(questions.ID) as QUESTION_COUNT " +
            "FROM ELM_TESTS tests " +
            "LEFT JOIN ELM_QUESTIONS questions on tests.ID=questions.TEST_ID and questions.QUESTION_TYPE <> 'multipart'" +
            "LEFT JOIN ELM_USER user on tests.CREATED_USER=user.USERID " +
            "WHERE ( (SELECT count(GROUPID) FROM ELM_USERGROUP WHERE USERID=" + userId + "  and GROUPID in (select GROUPID from ELM_GROUP where NAME='admin') ) OR" +
            " tests.CREATED_USER=" + userId + " OR tests.ISPUBLIC=1) " +
            "GROUP BY tests.ID;";
        con.query(queryString, function (err, result) {
            if (err) {
                logger.error('Error at getAllTestsByUserId :' + err);
                callback(err);
            } else {
                logger.debug('getAllTestsByUserId Row Count ' + result.length);
                if (result != null) {
                    if (!withRevision) {
                        callback(null, result);
                    } else {
                        // var getRevisionQuery = "select t.ACTIVE_TEST_ID,CONCAT('[', t.Revision,']') as Revision from ( " +
                        //     "select tests.ACTIVE_TEST_ID AS ACTIVE_TEST_ID, " +
                        //     "GROUP_CONCAT( " +
                        //     "JSON_OBJECT('ID',tests.ID, 'CREATED_DATE', DATE_FORMAT(tests.CREATED_DATE,'%m/%e/%Y, %r'),'AUTHOR', user.EMAIL)) " +
                        //     "AS Revision " +
                        //     "from ELM_TESTS as tests " +
                        //     "LEFT JOIN ELM_USER user on tests.CREATED_USER=user.USERID where (tests.CREATED_USER=" + userId + " OR tests.ISPUBLIC=1) " +
                        //     "group by tests.ACTIVE_TEST_ID " +
                        //     "order by tests.ACTIVE_TEST_ID, tests.CREATED_DATE  ) t ; ";

                        var getRevisionQuery = `SELECT revCount.ACTIVE_TEST_ID,revCount.Count, CONCAT('[', revData.Revision,']') as Revision from
                                        (SELECT tests.ACTIVE_TEST_ID AS ACTIVE_TEST_ID, count(tests.ID) as Count
                                            FROM ELM_TESTS as tests LEFT JOIN ELM_USER user on tests.CREATED_USER=user.USERID
                                            WHERE ( (SELECT count(GROUPID) FROM ELM_USERGROUP WHERE USERID=${userId}  and GROUPID in (select GROUPID from ELM_GROUP where NAME='admin') ) OR tests.CREATED_USER=${userId} OR tests.ISPUBLIC=1) group by tests.ACTIVE_TEST_ID   ) as revCount
                                    JOIN
                                        (SELECT limitRev.ACTIVE_TEST_ID,
                                            GROUP_CONCAT( JSON_OBJECT('ID',limitRev.ID, 'CREATED_DATE', DATE_FORMAT(limitRev.CREATED_DATE,'%m/%e/%Y, %r'),'AUTHOR', limitRev.EMAIL) 
                                            ORDER BY  limitRev.CREATED_DATE) AS Revision FROM ( 
                                            SELECT tests.ACTIVE_TEST_ID, tests.ID,tests.CREATED_DATE,user.EMAIL, 
                                                @active_rank := IF(@current_active = tests.ACTIVE_TEST_ID, @active_rank + 1, 1) AS active_rank, 
                                                @current_active := tests.ACTIVE_TEST_ID 
                                        FROM ELM_TESTS as tests LEFT JOIN ELM_USER user on tests.CREATED_USER=user.USERID 
                                    WHERE ( (SELECT count(GROUPID) FROM ELM_USERGROUP WHERE USERID=${userId}  and GROUPID in (select GROUPID from ELM_GROUP where NAME='admin') ) OR tests.CREATED_USER=${userId} OR tests.ISPUBLIC=1)   ORDER BY tests.ACTIVE_TEST_ID, tests.CREATED_DATE DESC) as limitRev 
                                    WHERE limitRev.active_rank <=20 GROUP BY limitRev.ACTIVE_TEST_ID  ) as revData 
                                    ON revCount.ACTIVE_TEST_ID = revData.ACTIVE_TEST_ID;`;

                        con.query(getRevisionQuery, function (errRev, revResult) {
                            if (errRev) {
                                logger.error('Error at getAllTestsByUserId & Revision :' + err);
                                callback(err);
                            } else {
                                try {
                                    if (revResult != null) {
                                        revResult.forEach(element => {
                                            for (var i = 0; i < result.length; i++) {
                                                if (result[i].ACTIVE_TEST_ID == element.ACTIVE_TEST_ID) {
                                                    var revJSON = JSON.parse(element.Revision);
                                                    //For Overriden Tests
                                                    var filterRevJSON = _.filter(revJSON, function (v) { return (v.ID <= result[i].ID); });
                                                    result[i].Revision = (filterRevJSON == null) ? {} : filterRevJSON;

                                                    if (revJSON.length == filterRevJSON.length) {
                                                        result[i].RevisionCount = element.Count;
                                                    } else {
                                                        result[i].RevisionCount = (filterRevJSON == null) ? element.Count : filterRevJSON.length;
                                                    }
                                                }
                                            }
                                        });
                                    }
                                } catch (e) {
                                    logger.error("Exception in getAllTestsByUserId:", e);
                                }
                                callback(null, result);
                            }
                        });
                    }
                }
            }
        });
    };

    module.exports.validateTestData = function (userId, tempTestData, con, logger, callback) {
        let testData = tempTestData;
        var finalQuery = "";
        if (testData != null) {
            //Nodes Validation
            // if (!IsNull(testData.targetnodes)) {
            //     var nodeIds = testData.targetnodes.split(",");
            //     nodeIds.map(Function.prototype.call, String.prototype.trim);

            //     if (!nodeIds.some(isNaN)) {
            //         finalQuery += "SELECT IF(COUNT(NODEID) = " + nodeIds.length + ",1,0) as STATUS " +
            //             "FROM ELM_NODE WHERE NODEID IN ( " + nodeIds.join() + ");"; // If count = nodes count return true else false
            //     } else {
            //         finalQuery += "SELECT 0 as STATUS;"; //If entered nodes value is incorrect return false
            //     }
            // } else {
            //     finalQuery += "SELECT 1 as STATUS;"; //If user didn't enter nodes, return true
            // }

            //CompanionId Validation
            if (testData.companionid && !IsNullOrEmpty(testData.companionid)) {
                finalQuery += "SELECT IF(COUNT(ID) = 1,1,0) STATUS " +
                    "FROM ELM_TESTS WHERE ACTIVE_TEST_ID = " + testData.companionid + " AND ISACTIVE=1;";
            } else {
                finalQuery += "SELECT 1 as STATUS;";
            }

            //User Access Validation - Only Owner can edit public tests or If user is Admin
            if (!IsNullOrUndefined(testData.ACTIVE_TEST_ID)) // Applicable only to Overriden Test
                finalQuery += "SELECT IF(ISPUBLIC = 0,1, IF(CREATED_USER = " + userId + " || " +
                    "(Select count(GROUPID) from ELM_USERGROUP where USERID =" + userId + " and GROUPID in (select GROUPID from ELM_GROUP where NAME='admin')),1,0)) as STATUS " +
                    "FROM ELM_TESTS WHERE ACTIVE_TEST_ID=" + testData.ACTIVE_TEST_ID + " AND ISACTIVE=1;";
            else {
                finalQuery += "SELECT 1 as STATUS;"; //Not applicable to New Test
            }

            /*When User tries to Override an overridden test when there exists an active record - 
                To avoid duplicate active records  */
            if (!IsNullOrUndefined(testData.ACTIVE_TEST_ID))// Applicable only to Overriden Test
                finalQuery += "SELECT IF(COUNT(ID)>0,0,1) as STATUS FROM ELM_TESTS " +
                    "WHERE ACTIVE_TEST_ID= " + testData.ACTIVE_TEST_ID + " AND ID <> " + testData.ID + " AND ISACTIVE =1 ;";
            else {
                finalQuery += "SELECT 1 as STATUS;";
            }

            con.query(finalQuery, function (err, result) {
                if (err) {
                    logger.error("Error in validate Test Data db query:", err);
                } else {
                    var errMsg = "";
                    try {
                        if (result != null) {
                            for (var i = 0; i < result.length; i++) {
                                if (result[i][0] && result[i][0].STATUS == 0) {
                                    // if (i == 0)
                                    //     errMsg += "Incorrect NodeIds; ";
                                    if (i == 0)
                                        errMsg += "Incorrect Companion Id; ";
                                    if (i == 1)
                                        errMsg += "Access Denied. Only test owner/admin can edit public test.";
                                    if (i == 2)
                                        errMsg += "Cannot Override a Overridden Test when there is another Active Test";
                                }
                            }
                        }
                    } catch (e) {
                        logger.error("Error in Validating test data: ", e);
                    }
                    if (errMsg != "")
                        callback(errMsg);
                    else
                        callback(null);
                }
            });
        } else {
            callback(null);
        }
    };

    module.exports.createNewTest = async function (userId, tempTestData, con, logger, callback) {
        let testData = tempTestData;
        let transactionConn;
        try {
            try {
                transactionConn = await con.getConnectionSync();
            } catch (conErr) {
                logger.error("Error occurred in createNewTest while getting a connection: ", conErr.stack);
                return (callback(conErr));
            }
            /* Begin transaction */
            await transactionConn.beginTransactionSync();
            if (testData != null) {
                var firstQuery = "";
                if (CheckIfTrue(testData.isOverriden) == true && (testData.ACTIVE_TEST_ID != null || testData.ACTIVE_TEST_ID != "null")) {
                    firstQuery = "UPDATE ELM_TESTS SET ISACTIVE=0 WHERE ACTIVE_TEST_ID = " + testData.ACTIVE_TEST_ID + " ;";
                } else {
                    firstQuery = "select max(ACTIVE_TEST_ID) as MAXID from ELM_TESTS;";
                }
                let firstQueryResult = await transactionConn.querySync(firstQuery);
                if (firstQueryResult != null) {
                    var testId = (CheckIfTrue(testData.isOverriden)) ? parseInt(testData.ACTIVE_TEST_ID) : firstQueryResult[0].MAXID + 1;
                    var insertTestQry = "INSERT INTO ELM_TESTS (" +
                        "TEST_TITLE,STUDENT_TITLE,TEST_PASSAGE," +
                        "SUBJECT_ID,ISACTIVE,ISPUBLIC," +
                        "SUBJECT_NODE_PREFIX,TEST_STANDARDS," +
                        "TEST_MAP_VIEWS,REPORTING_NODES,VERSION," +
                        "COMPANION_ID,ACTIVE_TEST_ID,CREATED_USER, MODIFIED_USER) " +
                        "VALUES (?)  ;";
                    var testValues = [
                        [nullIfEmpty(testData.title), nullIfEmpty(testData.studenttitle), nullIfEmpty(testData.passage),
                        nullIfEmpty(testData.subject), 1, stringToDbBit(testData.ispublic),
                        nullIfEmpty(testData.prefix), nullIfEmpty(testData.standards),
                        nullIfEmpty(testData.mapviews), nullIfEmpty(testData.targetnodes), nullIfEmpty(testData.testversion),
                        nullIfEmpty(testData.companionid), testId, userId, userId
                        ]
                    ];
                    logger.debug("Insert Test Query:" + insertTestQry + ";Values:" + getArrayString(testValues));
                    //Insert New Test 
                    let insertTestResult = await transactionConn.querySync(insertTestQry, testValues);
                    //IF Questions Exist
                    if (testData.questions && testData.questions.length > 0) {
                        var insertQuestQry = "INSERT INTO ELM_QUESTIONS " +
                            "(QUESTION,DOK,NOTE," +
                            "TEST_ID,`QUESTION_ORDER`,`PARENT_QUESTION_ID`," +
                            "PART_ORDER,CREATED_USER,MODIFIED_USER," +
                            "QUESTION_TYPE) " +
                            "VALUES ( ? ); ";

                        var insertQuestWithOptnQry = insertQuestQry +
                            "INSERT INTO ELM_OPTIONS " +
                            "(ANSWER,ISVALID,NOTE, " +
                            "NODES,ANTI_NODES,PERCENTAGE, " +
                            "`QUESTION_ID`, OPTION_ORDER,REGEX," +
                            "CREATED_USER,MODIFIED_USER) " +
                            "VALUES ? ;";

                        for (let quest = 0; quest < testData.questions.length; quest++) {
                            //If Parts Exist
                            if (testData.questions[quest].parts && testData.questions[quest].parts.length > 0) {
                                if (testData.questions[quest].parts.length > 0) {
                                    var parentId = await insertParentQuestion(testData.questions[quest],
                                        quest + 1, //Question Order
                                        insertTestResult.insertId, // Test Id
                                        userId, transactionConn, logger);

                                    for (var part = 0; part < testData.questions[quest].parts.length; part++) {
                                        var queryValues = [];
                                        var optData = [];
                                        var insertQuery = insertQuestQry;

                                        var questdata = [nullIfEmpty(testData.questions[quest].parts[part].text),
                                        nullIfEmpty(testData.questions[quest].parts[part].dok),
                                        nullIfEmpty(testData.questions[quest].parts[part].note),
                                        insertTestResult.insertId, //id
                                        quest + 1, // Question Order
                                        nullIfEmpty(parentId), // Parent Question Id
                                        part + 1, // Part Order
                                            userId, userId,
                                        nullIfEmpty(testData.questions[quest].parts[part].type)
                                        ];

                                        queryValues.push(questdata);

                                        var LAST_INSERT_ID = {
                                            toSqlString: function () {
                                                return 'LAST_INSERT_ID()';
                                            }
                                        };

                                        //If Options Exist
                                        if (testData.questions[quest].parts[part].options &&
                                            testData.questions[quest].parts[part].options.length > 0) {
                                            insertQuery = insertQuestWithOptnQry;

                                            for (var option = 0; option < testData.questions[quest].parts[part].options.length; option++) {
                                                optData.push([nullIfEmpty(testData.questions[quest].parts[part].options[option].text),
                                                stringToDbBit(testData.questions[quest].parts[part].options[option].valid),
                                                nullIfEmpty(testData.questions[quest].parts[part].options[option].note),
                                                nullIfEmpty(testData.questions[quest].parts[part].options[option].node),
                                                nullIfEmpty(testData.questions[quest].parts[part].options[option].antinode),
                                                    0, //Percentage
                                                    LAST_INSERT_ID, //QUESTION_ID
                                                option + 1, //OPTION_ORDER
                                                nullIfEmpty(testData.questions[quest].parts[part].options[option].regex),
                                                    userId, userId
                                                ]);
                                            }
                                            queryValues.push(optData);
                                        }
                                        logger.debug("Insert Question & Option Query:" + insertQuery + ";Values:" + getArrayString(queryValues));
                                        var quest1Result = await transactionConn.querySync(insertQuery, queryValues);
                                    }
                                }
                            }
                        }
                        await transactionConn.commitSync();
                        con.release(transactionConn, logger);
                        logger.debug("Test committed");
                        callback(null, { newId: insertTestResult.insertId, ACTIVE_TEST_ID: testId });
                    } else {
                        await transactionConn.commitSync();
                        con.release(transactionConn, logger);
                        logger.debug("Test committed without questions");
                        callback(null, { newId: insertTestResult.insertId, ACTIVE_TEST_ID: testId });
                    }
                } else {
                    throw "TestId Error";
                }
            } else {
                throw "TestData Empty";
            }
        } catch (e) {
            try {
                await transactionConn.rollbackSync();
                con.release(transactionConn, logger);
                logger.error("Create new test failed - Rollbacked" + (e.stack) ? e.stack : e);
                callback(e);
            } catch (e1) { callback(e1); }
        }
    }

    module.exports.deleteTest = function (userId, testId, con, logger, callback) {
        if (testId != null) {
            var deleteTestQry = "UPDATE ELM_TESTS SET ISACTIVE= 0 " +
                ",MODIFIED_USER=? WHERE ACTIVE_TEST_ID=? AND ISACTIVE=1;";

            var queryValues = [userId, testId];

            con.query(deleteTestQry, queryValues, function (err, result) {
                if (err) {
                    logger.error(err);
                    callback(err);
                } else {
                    callback(null, {
                        status: 'Success'
                    });
                }
            });
        } else {
            callback(null, null);
        }
    };

    module.exports.getTestData = function (userId, test_id, con, logger, callback) {
        logger.info('DAO Test Retrieving Test Data for Test ID:' + test_id);
        var queryString = "SELECT tests.ID, tests.ACTIVE_TEST_ID, " + //Result[0] - Test & Question Data
            "tests.TEST_TITLE,tests.STUDENT_TITLE,tests.TEST_PASSAGE, " +
            "tests.SUBJECT_ID, tests.ISACTIVE, tests.SUBJECT_NODE_PREFIX, " +
            "tests.TEST_STANDARDS, tests.TEST_MAP_VIEWS, tests.REPORTING_NODES, " +
            "tests.VERSION, tests.COMPANION_ID, tests.ISPUBLIC, " +
            "IF(quest.ID is null,'[]', CONCAT('[',GROUP_CONCAT(JSON_OBJECT('QUESTION_ID', " +
            "quest.ID,'text', quest.QUESTION,'QUESTION_ORDER', quest.QUESTION_ORDER, " +
            "'dok',quest.DOK, 'note',quest.NOTE,'PART_ORDER', quest.PART_ORDER, " +
            "'type',quest.QUESTION_TYPE,'PARENT_QUESTION_ID',quest.PARENT_QUESTION_ID)),']')) as Questions " +
            "FROM ELM_TESTS tests " +
            "LEFT JOIN ELM_QUESTIONS quest on tests.ID=quest.TEST_ID " +
            "WHERE tests.ID = " + test_id + "  " + //+ " AND tests.ISACTIVE=1 " +
            "GROUP BY tests.ID " +
            "ORDER BY quest.QUESTION_ORDER,quest.PART_ORDER;  " +
            //Result[1] - Options Data 
            "SELECT quest.ID as QUESTION_ID,  " +
            "IF(opt.ID is null,'[]',  CONCAT('[',GROUP_CONCAT(JSON_OBJECT('OPTION_ID',opt.ID,'text', opt.ANSWER, " +
            "'note', opt.NOTE,'OPTION_ORDER', opt.OPTION_ORDER, " +
            "'PERCENTAGE',opt.PERCENTAGE, 'node',opt.NODES,'regex',opt.REGEX, " +
            "'valid',IF(opt.ISVALID=1,True,False),'antinode',opt.ANTI_NODES) ORDER BY opt.OPTION_ORDER),']')) as Options " +
            "from ELM_TESTS tests " +
            "LEFT JOIN ELM_QUESTIONS quest on tests.ID=quest.TEST_ID and quest.QUESTION_TYPE <> 'multipart' " +
            "LEFT JOIN ELM_OPTIONS opt on quest.ID=opt.QUESTION_ID " +
            "WHERE tests.ID = " + test_id + " " +
            "GROUP BY quest.ID " +
            "ORDER BY quest.QUESTION_ORDER, opt.OPTION_ORDER;";

        con.query(queryString, function (err, result) {
            if (err) {
                logger.error('Error at getTestsByUserId :' + err);
                callback(err);
            } else {
                try {
                    var questData = result[0]; // Test Data with Questions
                    var optData = result[1]; // Options Data
                    var resultTestJson = {};
                    if (questData != null && questData.length == 1) {
                        questData = questData[0];
                        resultTestJson.ID = questData.ID;
                        resultTestJson.ACTIVE_TEST_ID = questData.ACTIVE_TEST_ID;
                        resultTestJson.title = questData.TEST_TITLE;
                        resultTestJson.studenttitle = questData.STUDENT_TITLE;
                        resultTestJson.passage = questData.TEST_PASSAGE;
                        resultTestJson.prefix = questData.SUBJECT_NODE_PREFIX;
                        resultTestJson.subject = questData.SUBJECT_ID;
                        resultTestJson.standards = questData.TEST_STANDARDS;
                        resultTestJson.mapviews = questData.TEST_MAP_VIEWS;
                        resultTestJson.targetnodes = questData.REPORTING_NODES;
                        resultTestJson.testversion = questData.VERSION;
                        resultTestJson.ispublic = questData.ISPUBLIC; // add public column
                        resultTestJson.companionid = questData.COMPANION_ID;
                        resultTestJson.questions = [];

                        var questionsJSON = JSON.parse(questData.Questions);
                        if (questionsJSON && questionsJSON.length > 0) {
                            var parentQuesGrp = _.groupBy(questionsJSON, "PARENT_QUESTION_ID");

                            //Group By Parent Question Id and Iterate for values 'null'
                            _.sortBy(parentQuesGrp['null'], "QUESTION_ORDER").forEach(question => {
                                if (question) {
                                    var tempQuestion = {};
                                    //For Multipart Questions
                                    if (question.type == 'multipart') {
                                        tempQuestion.text = question.text;
                                        tempQuestion.question_id = question.QUESTION_ID;
                                        tempQuestion.parts = [];
                                        if (parentQuesGrp[question.QUESTION_ID]) {
                                            parentQuesGrp[question.QUESTION_ID].forEach(part => {
                                                var tempPart = {};
                                                tempPart = part;
                                                tempPart.options = [];
                                                tempPart.options = _.sortBy(JSON.parse(_.first(_.where(optData, {
                                                    "QUESTION_ID": part.QUESTION_ID
                                                })).Options), "OPTION_ORDER");
                                                tempQuestion.parts.push(tempPart);
                                            });
                                        }
                                    } else { // For Single Questions
                                        tempQuestion.text = null;
                                        tempQuestion.parts = [];
                                        var tempPart = {};
                                        tempPart = question;
                                        tempPart.options = _.sortBy(JSON.parse(_.first(_.where(optData, {
                                            "QUESTION_ID": question.QUESTION_ID
                                        })).Options), "OPTION_ORDER");
                                        tempQuestion.parts.push(tempPart);
                                    }
                                    resultTestJson.questions.push(tempQuestion);
                                    //});
                                }
                            });
                        }
                    }
                    callback(null, resultTestJson);
                } catch (e) {
                    logger.error("Error occurred in getTestData: ", e.stack);
                    callback(e);
                }
            }
        });
    };

    module.exports.getAllSubjects = function (con, logger, callback) {
        var queryString = "select * from ELM_SUBJECT GROUP BY NAME;";

        con.query(queryString, function (err, result) {
            if (err) {
                logger.error('Error at getAllSubjects :' + err);
                callback(err);
            } else {
                callback(null, result);
            }
        });
    };

    module.exports.getTestReportDetails = function (userId, testId, password, con, logger, callback) {
        var resultObj = {};
        var testID = parseInt(testId);
        var queryString = "SELECT distinct stdtest.STUDENT_ID,elmstd.USERNAME,tests.ID AS TEST_ID,stdtest.ACTIVE_TEST_ID," +
            "stdtest.TEST_VERSION,tests.TEST_TITLE,tests.SUBJECT_NODE_PREFIX,tests.STUDENT_TITLE,tests.TEST_PASSAGE," +
            "(SELECT tst.TEST_TITLE FROM ELM_TESTS tst WHERE tst.ID=" + testID + ") AS ASSIGNED_TEST_TITLE," +
            "DATE_FORMAT(stdtest.DATE_FINISHED,'%a %b %e %l   %p') AS DATE_FINISHED,DATE_FORMAT(stdtest.DUE_DATE,'%a %b %e') AS DUE_DATE," +
            "DATE_FORMAT(stdtest.DUE_TIME,'%l   %p') AS DUE_TIME,stdresponse.QUESTION_ID," +
            "(SELECT ques.QUESTION_ORDER FROM ELM_QUESTIONS ques WHERE ques.ID=stdresponse.QUESTION_ID) AS QUESTION_ORDER," +
            "(SELECT ques.PART_ORDER FROM ELM_QUESTIONS ques WHERE ques.ID=stdresponse.QUESTION_ID AND (ques.PARENT_QUESTION_ID IS NOT NULL)) AS PART_ORDER," +
            "stdresponse.OPTION_ID,stdresponse.RESPONSE_VALUE,stdresponse.ISVALID,stdtest.LOCATER_PASSWORD_ID," +
            "(SELECT  count(questions.ID) FROM ELM_QUESTIONS questions WHERE questions.TEST_ID=tests.ID " +
            "AND questions.QUESTION_TYPE!='multipart') AS NOOFQs," +
            "(SELECT ques.QUESTION_TYPE FROM ELM_QUESTIONS ques WHERE ques.ID=stdresponse.QUESTION_ID) AS QUESTION_TYPE," +
            "(SELECT count(stdresponse.ISVALID) FROM STUDENT_RESPONSE stdresponse WHERE stdresponse.TEST_ID=tests.ID " +
            "AND stdresponse.ISVALID=1 AND stdresponse.STUDENT_ID=stdtest.STUDENT_ID AND stdresponse.LOCATER_PASSWORD_ID=" + password + ") AS OUTCOME," +
            "(SELECT CONCAT(TRUNCATE(((SELECT count(stdresp.STUDENT_ID) AS COUNT_ONE FROM STUDENT_RESPONSE stdresp WHERE " +
            "stdresp.TEST_ID=tests.ID AND stdresp.LOCATER_PASSWORD_ID=stdtest.LOCATER_PASSWORD_ID AND " +
            "stdresp.QUESTION_ID=stdresponse.QUESTION_ID AND stdresp.ISVALID=1)/(SELECT count(stdresp.STUDENT_ID) AS COUNT_TWO " +
            "FROM STUDENT_RESPONSE stdresp WHERE stdresp.TEST_ID=tests.ID AND " +
            "stdresp.LOCATER_PASSWORD_ID=stdtest.LOCATER_PASSWORD_ID AND stdresp.QUESTION_ID=stdresponse.QUESTION_ID))*100,1),'%') " +
            "AS correct_percent) AS CORRECT_PERCENT FROM STUDENT_TESTS stdtest " +
            "INNER JOIN ELM_TESTS tests ON tests.ACTIVE_TEST_ID=stdtest.ACTIVE_TEST_ID " +
            "INNER JOIN STUDENT_RESPONSE stdresponse ON stdresponse.STUDENT_ID=stdtest.STUDENT_ID AND " +
            "stdresponse.TEST_ID=tests.ID AND stdresponse.LOCATER_PASSWORD_ID=stdtest.LOCATER_PASSWORD_ID " +
            "INNER JOIN ELM_QUESTIONS questions ON questions.TEST_ID=tests.ID " +
            "INNER JOIN ELM_OPTIONS opts ON opts.QUESTION_ID=stdresponse.QUESTION_ID " +
            "INNER JOIN ELM_STUDENTS elmstd ON elmstd.ID=stdtest.STUDENT_ID " +
            "WHERE stdtest.ISCOMPLETE=1 AND " +
            "stdtest.LOCATER_PASSWORD_ID=" + password + " group by stdtest.STUDENT_ID," +
            "stdresponse.QUESTION_ID order by stdtest.STUDENT_ID,QUESTION_ORDER,PART_ORDER;";
        con.query(queryString, function (err, result) {
            if (err) {
                logger.error('Error at getTestReportDetails :' + err);
                callback(err);
            } else {
                try {
                    var resultJson = {};
                    logger.debug('getTestReportDetails Row Count ' + result.length);
                    if (result != null && result.length > 0) {
                        logger.debug("Result query: " + JSON.stringify(result));
                        setStdTestReport(result, con, logger, function (resultJson) {
                            if (resultJson != null) {
                                if (resultJson.studentTestADetails != null && resultJson.studentTestADetails.length > 0) {
                                    var jsonAObj = resultJson.studentTestADetails[0];
                                    var testId = resultJson.studentTestADetails[0].TEST_ID;
                                    var pswdId = resultJson.PASSWORD_ID;
                                    getResponseData(jsonAObj, testId, pswdId, con, logger, function (respJson1) {
                                        resultJson.studentTestADetails[0].incorrectAResponse = respJson1;
                                        if (resultJson.studentTestBDetails != null && resultJson.studentTestBDetails.length > 0) {
                                            var jsonBObj = resultJson.studentTestBDetails[0];
                                            var testId = resultJson.studentTestBDetails[0].TEST_ID;
                                            var pswdId = resultJson.PASSWORD_ID;
                                            getResponseData(jsonBObj, testId, pswdId, con, logger, function (respJson2) {
                                                resultJson.studentTestBDetails[0].incorrectBResponse = respJson2;
                                                resultObj = JSON.parse(JSON.stringify(resultJson));
                                                callback(null, resultObj);
                                            });
                                        } else {
                                            resultObj = JSON.parse(JSON.stringify(resultJson));
                                            callback(null, resultObj);
                                        }
                                    });
                                } else if (resultJson.studentTestBDetails != null && resultJson.studentTestBDetails.length > 0) {
                                    var jsonBObj = resultJson.studentTestBDetails[0];
                                    var testId = resultJson.TEST_ID;
                                    var pswdId = resultJson.PASSWORD_ID;
                                    getResponseData(jsonBObj, testId, pswdId, con, logger, function (respJson) {
                                        resultJson.studentTestBDetails[0].incorrectBResponse = respJson;
                                        resultObj = JSON.parse(JSON.stringify(resultJson));
                                        logger.debug("Result3: " + JSON.stringify(resultObj));
                                        callback(null, resultObj);
                                    });
                                }
                            }
                        });


                    } else {
                        callback(null, resultObj);
                    }
                } catch (e) {
                    logger.error("Error occurred in getTestReportDetails parsing resultset: ", e.stack);
                    callback(e);
                }
            }
        });

    };

    function setStdTestReport(result, con, logger, callback) {
        try {
            var stdObjArrayA = [];
            var stdObjArrayB = [];
            var testObj = {};
            var prevStdId = result[0].STUDENT_ID;
            testObj.TEST_ID = result[0].TEST_ID;
            testObj.TEST_TITLE = result[0].TEST_TITLE;
            testObj.ASSIGNED_TEST_TITLE = result[0].ASSIGNED_TEST_TITLE;
            testObj.PASSWORD_ID = result[0].LOCATER_PASSWORD_ID;
            testObj.DUE_DATE = result[0].DUE_DATE;
            testObj.DUE_TIME = result[0].DUE_TIME;
            for (var i = 0; i < result.length; i++) {
                var stdObj = {};
                if (i != 0) {
                    if (prevStdId == result[i].STUDENT_ID) {
                        continue;
                    }
                }
                stdObj.STUDENT_NAME = result[i].USERNAME;
                stdObj.STUDENT_ID = result[i].STUDENT_ID;
                stdObj.TEST_TITLE = result[i].TEST_TITLE;
                stdObj.ACTIVE_TEST_ID = result[i].ACTIVE_TEST_ID;
                stdObj.TEST_PASSAGE = result[i].TEST_PASSAGE;
                stdObj.STUDENT_TITLE = result[i].STUDENT_TITLE;
                stdObj.TEST_VERSION = result[i].TEST_VERSION;
                stdObj.TEST_ID = result[i].TEST_ID;
                stdObj.NOOFQUEST = result[i].NOOFQs;
                stdObj.SUBJECT_NODE_PREFIX = result[i].SUBJECT_NODE_PREFIX;
                stdObj.DATE_FINISHED = result[i].DATE_FINISHED;
                stdObj.OUTCOME = result[i].OUTCOME;
                prevStdId = result[i].STUDENT_ID;
                var quesObjArray = [];
                for (var j = 0; j < result.length; j++) {// loop through each question Id for each student for the test
                    if (result[i].STUDENT_ID == result[j].STUDENT_ID) {
                        var quesObj = {};
                        quesObj.QUESTION_ID = result[j].QUESTION_ID;
                        quesObj.QUESTION_ORDER = result[j].QUESTION_ORDER;
                        if (result[j].PART_ORDER) {
                            quesObj.PART_ORDER = String.fromCharCode(96 + parseInt(result[j].PART_ORDER));
                        } else {
                            quesObj.PART_ORDER = '';
                        }
                        quesObj.OPTION_ID = result[j].OPTION_ID;
                        quesObj.ISVALID = result[j].ISVALID;
                        quesObj.NODES = result[j].NODES;
                        quesObj.PERCENT = result[j].CORRECT_PERCENT;
                        quesObj.QUESTION_TYPE = result[j].QUESTION_TYPE;
                        if (result[j].QUESTION_TYPE == 'mc') {
                            //checking for null response values
                            if (result[j].RESPONSE_VALUE) {
                                quesObj.RESPONSE = String.fromCharCode(64 + parseInt(result[j].RESPONSE_VALUE));
                            } else {
                                quesObj.RESPONSE = "";
                            }
                        } else if (result[j].QUESTION_TYPE == 'cr') {
                            //checking for null response values
                            if (result[j].RESPONSE_VALUE) {
                                quesObj.RESPONSE = result[j].RESPONSE_VALUE;
                            } else {
                                quesObj.RESPONSE = "";
                            }

                        } else if (result[j].QUESTION_TYPE == 'ms') {
                            var pattern = '[,\/]';// set the regex pattern for searching comma separated values for 'ms' ques type
                            var response;
                            var commonIncorrect;
                            //checking for null response values
                            if (result[j].RESPONSE_VALUE) {
                                response = result[j].RESPONSE_VALUE;
                            } else {
                                response = "";
                            }
                            // setting final char converted response 
                            var respArray = [];
                            if (String(response).search(pattern) >= 1) {
                                respArray = response.split(",");
                            } else {
                                respArray[0] = response;
                            }
                            var finalresponse = "";
                            for (var k = 0; k < parseInt(respArray.length); k++) {
                                if (k == parseInt(respArray.length) - 1) {
                                    if (respArray[k] != "") {
                                        finalresponse = finalresponse + String.fromCharCode(64 + parseInt(respArray[k]));
                                    } else {
                                        finalresponse = "";
                                    }
                                } else {
                                    finalresponse = finalresponse + String.fromCharCode(64 + parseInt(respArray[k])) + ",";
                                }
                            }
                            quesObj.RESPONSE = finalresponse;
                        }
                        quesObjArray.push(quesObj);
                    }
                }// end for loop fo question obj
                stdObj.questionDetails = quesObjArray;
                if (result[i].TEST_VERSION == 'A') {
                    stdObjArrayA.push(stdObj);
                    testObj.studentTestADetails = stdObjArrayA;
                } else {
                    stdObjArrayB.push(stdObj);
                    testObj.studentTestBDetails = stdObjArrayB;
                }

            }
            if (testObj.studentTestADetails == null) {
                testObj.studentTestADetails = [];
            }
            if (testObj.studentTestBDetails == null) {
                testObj.studentTestBDetails = [];
            }
            logger.debug("Std Obj: " + JSON.stringify(testObj));
            callback(testObj);
        } catch (e) {
            logger.error("Error occurred in setStdTestReport while parsing resultset: ", e.stack);
            callback(e);
        }

    };

    function getResponseData(jsonObj, testId, passwordId, con, logger, callback) {
        var resultObj = {};
        var incorrectArray = [];
        var getIncorrectResponseQuery;
        var quesLength = Object.keys(jsonObj.questionDetails).length;
        for (var i = 0; i < Object.keys(jsonObj.questionDetails).length; i++) {
            var testId = testId;
            var passwordId = passwordId;
            var questionId = jsonObj.questionDetails[i].QUESTION_ID;
            var questionType = jsonObj.questionDetails[i].QUESTION_TYPE;
            //set the query based on the question type
            if (questionType == 'mc') {
                getIncorrectResponseQuery = "SELECT distinct stdresp.RESPONSE_VALUE AS SELECTED_OPTION,questions.QUESTION_TYPE," +
                    "stdresp.QUESTION_ID,tests.SUBJECT_NODE_PREFIX,CONCAT('','',options.ANTI_NODES) AS TEXT_ID," +
                    "options.ANTI_NODES ,antinode.TITLE as ANTINODE_TITLE,options.NODES,node.TITLE as NODE_TITLE,  " +
                    "if((IFNULL(options.ANTI_NODES,'')!='' or IFNULL(options.NODES,'') !=''),CONCAT(CHAR(options.OPTION_ORDER+64),':',IFNULL(options.ANTI_NODES,''),IFNULL(options.NODES,'')),'') AS COMMON_NODES," +
                    "count(stdresp.RESPONSE_VALUE) AS NO_OF_INCORRECT FROM STUDENT_RESPONSE stdresp " +
                    "INNER JOIN ELM_QUESTIONS questions ON questions.ID=stdresp.QUESTION_ID " +
                    "INNER JOIN ELM_TESTS tests ON tests.ID=stdresp.TEST_ID " +
                    "LEFT JOIN ELM_OPTIONS options ON options.QUESTION_ID=stdresp.QUESTION_ID AND stdresp.OPTION_ID=options.ID " +
                    "LEFT JOIN ELM_NODE node ON (node.TEXTID=CONCAT('','',options.NODES) OR node.TEXTID=CONCAT('','',options.NODES)) " +
                    "LEFT JOIN ELM_NODE antinode ON (antinode.TEXTID=CONCAT('','',options.ANTI_NODES) OR antinode.TEXTID=CONCAT('','',options.ANTI_NODES)) " +
                    "WHERE stdresp.TEST_ID=" + testId + " " +
                    "AND stdresp.LOCATER_PASSWORD_ID=" + passwordId + " AND stdresp.ISVALID=0 AND stdresp.RESPONSE_VALUE!='' AND " +
                    "stdresp.QUESTION_ID =" + questionId + " group by stdresp.RESPONSE_VALUE order by NO_OF_INCORRECT DESC;";
            }
            else if (questionType == 'ms') {
                getIncorrectResponseQuery = "SELECT distinct options.ID AS OPTION_ID,options.OPTION_ORDER AS SELECTED_OPTION," +
                    "questions.QUESTION_TYPE,stdresp.QUESTION_ID,node.TITLE as NODE_TITLE,options.ANTI_NODES ," +
                    " options.NODES,antinode.TITLE as ANTINODE_TITLE,CONCAT('','',options.ANTI_NODES) AS TEXT_ID, " +
                    "if((IFNULL(options.ANTI_NODES,'')!='' or IFNULL(options.NODES,'') !=''),CONCAT(CHAR(options.OPTION_ORDER+64),':',IFNULL(options.ANTI_NODES,''),IFNULL(options.NODES,'')),'') AS COMMON_NODES," +
                    "count(stdresp.RESPONSE_VALUE REGEXP CONCAT(',*',options.OPTION_ORDER,',*')) AS NO_OF_INCORRECT " +
                    "FROM STUDENT_RESPONSE stdresp " +
                    "LEFT JOIN ELM_OPTIONS options ON options.QUESTION_ID=stdresp.QUESTION_ID " +
                    "INNER JOIN ELM_QUESTIONS questions ON questions.ID=stdresp.QUESTION_ID " +
                    "INNER JOIN ELM_TESTS tests ON tests.ID=stdresp.TEST_ID " +
                    "LEFT JOIN ELM_NODE antinode ON (antinode.TEXTID=CONCAT('','',options.ANTI_NODES) OR antinode.TEXTID=CONCAT('','',options.ANTI_NODES)) " +
                    "LEFT JOIN ELM_NODE node ON (node.TEXTID=CONCAT('','',options.NODES) OR node.TEXTID=CONCAT('','',options.NODES)) " +
                    "WHERE stdresp.TEST_ID=" + testId + " AND stdresp.LOCATER_PASSWORD_ID=" + passwordId + " AND " +
                    "stdresp.ISVALID=0 AND stdresp.RESPONSE_VALUE!='' AND " +
                    "stdresp.QUESTION_ID=" + questionId + " AND (stdresp.RESPONSE_VALUE REGEXP CONCAT(',*',options.OPTION_ORDER,',*')) " +
                    "group by (stdresp.RESPONSE_VALUE REGEXP CONCAT(',*',options.OPTION_ORDER,',*')),options.OPTION_ORDER " +
                    "order by NO_OF_INCORRECT DESC;";
            } else if (questionType == 'cr') {
                getIncorrectResponseQuery = "SELECT distinct stdresp.RESPONSE_VALUE AS SELECTED_OPTION,questions.QUESTION_TYPE," +
                    "stdresp.QUESTION_ID,CONCAT('','',options.ANTI_NODES) AS TEXT_ID," +
                    "options.ANTI_NODES,tests.SUBJECT_NODE_PREFIX,node.TITLE as NODE_TITLE, options.NODES,antinode.TITLE as ANTINODE_TITLE," +
                    "if((IFNULL(options.ANTI_NODES,'')!='' or IFNULL(options.NODES,'') !=''),CONCAT(stdresp.RESPONSE_VALUE,':',IFNULL(options.ANTI_NODES,''),IFNULL(options.NODES,'')),'') AS COMMON_NODES," +
                    "count(stdresp.RESPONSE_VALUE) AS NO_OF_INCORRECT FROM STUDENT_RESPONSE stdresp " +
                    "INNER JOIN ELM_QUESTIONS questions ON questions.ID=stdresp.QUESTION_ID " +
                    "INNER JOIN ELM_TESTS tests ON tests.ID=stdresp.TEST_ID " +
                    "LEFT JOIN ELM_OPTIONS options ON options.QUESTION_ID=stdresp.QUESTION_ID AND stdresp.RESPONSE_VALUE=options.ANSWER " +
                    "LEFT JOIN ELM_NODE node ON (node.TEXTID=CONCAT('','',options.NODES) OR node.TEXTID=CONCAT('','',options.NODES)) " +
                    "LEFT JOIN ELM_NODE antinode ON (antinode.TEXTID=CONCAT('','',options.ANTI_NODES) OR antinode.TEXTID=CONCAT('','',options.ANTI_NODES)) " +
                    "WHERE stdresp.TEST_ID=" + testId + " " +
                    "AND stdresp.LOCATER_PASSWORD_ID=" + passwordId + " AND stdresp.ISVALID=0 AND stdresp.RESPONSE_VALUE!='' AND " +
                    "stdresp.QUESTION_ID =" + questionId + " group by stdresp.RESPONSE_VALUE order by NO_OF_INCORRECT DESC;";

            }
            con.query(getIncorrectResponseQuery, function (err, result) {
                if (err) {
                    logger.error('Error at getIncorrectResponseQuery :' + err);
                    //callback(err);
                } else {
                    try {
                        logger.debug('getIncorrectResponseQuery Row Count ' + result.length);
                        logger.debug("Result: " + JSON.stringify(result));
                        if (result != null && result.length > 0) {
                            // for question type MS
                            if (result[0].QUESTION_TYPE == 'ms') {

                                var commonNodeArray = [];
                                var incorrectRespObj = {};
                                incorrectRespObj.SELECTED_OPTION = result[0].SELECTED_OPTION;
                                var tempVal = result[0].NO_OF_INCORRECT;
                                var commonnodes = result[0].COMMON_NODES;
                                var incorrectResp = String.fromCharCode(64 + parseInt(result[0].SELECTED_OPTION));
                                if (result[0].ANTI_NODES || result[0].NODES) {
                                    var commonNodeObj = {};
                                    commonNodeObj.response = incorrectResp;
                                    commonNodeObj.nodes = result[0].NODES;
                                    commonNodeObj.antinodes = result[0].ANTI_NODES;
                                    commonNodeObj.nodetitle = result[0].NODE_TITLE;
                                    commonNodeObj.antititle = result[0].ANTINODE_TITLE;
                                    commonNodeArray.push(commonNodeObj);
                                }
                                //to get other options with same number of response vals
                                for (var j = 1; j < result.length; j++) {
                                    if (parseInt(result[j].NO_OF_INCORRECT) == parseInt(tempVal)) {
                                        incorrectResp = incorrectResp + "," + String.fromCharCode(64 + parseInt(result[j].SELECTED_OPTION));
                                        if (commonNodeArray != null && commonNodeArray.length > 0) {
                                            var commonNodeObj = {};
                                            commonNodeObj.response = String.fromCharCode(64 + parseInt(result[j].SELECTED_OPTION));
                                            commonNodeObj.nodes = result[j].NODES;
                                            commonNodeObj.antinodes = result[j].ANTI_NODES;
                                            commonNodeObj.nodetitle = result[j].NODE_TITLE;
                                            commonNodeObj.antititle = result[j].ANTINODE_TITLE;
                                            commonNodeArray.push(commonNodeObj);
                                        }
                                    } else {
                                        break;
                                    }
                                }
                                incorrectRespObj.commonNodes = commonNodeArray;
                                incorrectRespObj.NODE_TITLE = result[0].TITLE;
                                incorrectRespObj.TEXT_ID = result[0].TEXT_ID;
                                incorrectRespObj.SUBJECT_NODE_PREFIX = result[0].SUBJECT_NODE_PREFIX;
                                incorrectRespObj.QUESTION_ID = result[0].QUESTION_ID;
                                incorrectRespObj.INCORRECT_RESPONSE = incorrectResp;
                                incorrectArray.push(incorrectRespObj);
                            } else if (result[0].QUESTION_TYPE == 'mc') {
                                // for question types MC
                                var commonNodeArray = [];
                                var incorrectRespObj = {};
                                incorrectRespObj.SELECTED_OPTION = parseInt(result[0].SELECTED_OPTION);
                                var tempVal = result[0].NO_OF_INCORRECT;
                                var incorrectResp = String.fromCharCode(64 + parseInt(result[0].SELECTED_OPTION));
                                var commonnodes = result[0].COMMON_NODES;
                                if (result[0].ANTI_NODES || result[0].NODES) {
                                    var commonNodeObj = {};
                                    commonNodeObj.response = incorrectResp;
                                    commonNodeObj.nodes = result[0].NODES;
                                    commonNodeObj.antinodes = result[0].ANTI_NODES;
                                    commonNodeObj.nodetitle = result[0].NODE_TITLE;
                                    commonNodeObj.antititle = result[0].ANTINODE_TITLE;
                                    commonNodeArray.push(commonNodeObj);
                                }
                                for (var j = 1; j < result.length; j++) {
                                    if (parseInt(result[j].NO_OF_INCORRECT) == parseInt(tempVal)) {
                                        incorrectResp = incorrectResp + "," + String.fromCharCode(64 + parseInt(result[j].SELECTED_OPTION));
                                        if (commonNodeArray != null && commonNodeArray.length > 0) {
                                            var commonNodeObj = {};
                                            commonNodeObj.response = String.fromCharCode(64 + parseInt(result[j].SELECTED_OPTION));
                                            commonNodeObj.nodes = result[j].NODES;
                                            commonNodeObj.antinodes = result[j].ANTI_NODES;
                                            commonNodeObj.nodetitle = result[j].NODE_TITLE;
                                            commonNodeObj.antititle = result[j].ANTINODE_TITLE;
                                            commonNodeArray.push(commonNodeObj);
                                        }
                                    } else {
                                        break;
                                    }
                                }
                                incorrectRespObj.commonNodes = commonNodeArray;
                                incorrectRespObj.NODE_TITLE = result[0].TITLE;
                                incorrectRespObj.TEXT_ID = result[0].TEXT_ID;
                                incorrectRespObj.SUBJECT_NODE_PREFIX = result[0].SUBJECT_NODE_PREFIX;
                                incorrectRespObj.QUESTION_ID = result[0].QUESTION_ID;
                                incorrectRespObj.INCORRECT_RESPONSE = incorrectResp;
                                incorrectArray.push(incorrectRespObj);
                            } else if (result[0].QUESTION_TYPE == 'cr') {
                                // if question type is cr set the response val without converting
                                var commonNodeArray = [];
                                var incorrectRespObj = {};
                                incorrectRespObj.SELECTED_OPTION = parseInt(result[0].SELECTED_OPTION);
                                var tempVal = result[0].NO_OF_INCORRECT;
                                var incorrectResp = result[0].SELECTED_OPTION;
                                var commonnodes = result[0].COMMON_NODES;
                                if (result[0].ANTI_NODES || result[0].NODES) {
                                    var commonNodeObj = {};
                                    commonNodeObj.response = incorrectResp;
                                    commonNodeObj.nodes = result[0].NODES;
                                    commonNodeObj.antinodes = result[0].ANTI_NODES;
                                    commonNodeObj.nodetitle = result[0].NODE_TITLE;
                                    commonNodeObj.antititle = result[0].ANTINODE_TITLE;
                                    commonNodeArray.push(commonNodeObj);
                                }
                                for (var j = 1; j < result.length; j++) {
                                    if (parseInt(result[j].NO_OF_INCORRECT) == parseInt(tempVal)) {
                                        incorrectResp = incorrectResp + "," + result[j].SELECTED_OPTION;
                                        if (commonNodeArray != null && commonNodeArray.length > 0) {
                                            var commonNodeObj = {};
                                            commonNodeObj.response = String.fromCharCode(64 + parseInt(result[j].SELECTED_OPTION));
                                            commonNodeObj.nodes = result[j].NODES;
                                            commonNodeObj.antinodes = result[j].ANTI_NODES;
                                            commonNodeObj.nodetitle = result[j].NODE_TITLE;
                                            commonNodeObj.antititle = result[j].ANTINODE_TITLE;
                                            commonNodeArray.push(commonNodeObj);
                                        }
                                    } else {
                                        break;
                                    }
                                }
                                incorrectRespObj.commonNodes = commonNodeArray;
                                incorrectRespObj.NODE_TITLE = result[0].TITLE;
                                incorrectRespObj.TEXT_ID = result[0].TEXT_ID;
                                incorrectRespObj.SUBJECT_NODE_PREFIX = result[0].SUBJECT_NODE_PREFIX;
                                incorrectRespObj.QUESTION_ID = result[0].QUESTION_ID;
                                incorrectRespObj.INCORRECT_RESPONSE = incorrectResp;
                                incorrectArray.push(incorrectRespObj);

                            }
                        }
                        if (0 === --quesLength) {
                            logger.debug("All the incorrect answers for question Ids received. ");
                            callback(incorrectArray);
                        }
                    } catch (e) {
                        logger.error("Error occurred in getResponseData: ", e.stack);
                        callback(e);
                    }
                }
            });
        }

    };

    module.exports.getQuestionReport = function (userId, questionId, testId, passwordId, questionType, con, logger, callback) {
        var queryString;
        var resultObj = {};
        if (questionType == 'cr') {
            queryString = "SELECT questions.ID,questions.QUESTION_ORDER,if((questions.PARENT_QUESTION_ID IS NOT NULL) ,questions.PART_ORDER,0) AS PART_ORDER," +
                "questions.QUESTION,questions.QUESTION_TYPE," +
                "stdresponse.LOCATER_PASSWORD_ID,options.ID AS OPTION_ID,options.ANSWER,options.ISVALID," +
                "node.TITLE,options.OPTION_ORDER,options.NODES as NODES, options.ANTI_NODES as ANTI_NODES, tests.SUBJECT_NODE_PREFIX as SUBPREF," +
                "(SELECT if(options.ISVALID=1,options.NODES, options.ANTI_NODES)) AS NODE_TEXT," +
                "(SELECT node.TITLE FROM ELM_NODE node WHERE node.TEXTID=NODE_TEXT) AS TITLE," +
                "(SELECT " +
                "CONCAT(TRUNCATE(((SELECT count(stdresponse.STUDENT_ID) FROM STUDENT_RESPONSE stdresponse WHERE stdresponse.TEST_ID=" + testId + " AND stdresponse.LOCATER_PASSWORD_ID=" + passwordId + " " +
                "AND stdresponse.QUESTION_ID=questions.ID AND stdresponse.OPTION_ID='')/" +
                "(SELECT count(stdresponse.STUDENT_ID) FROM STUDENT_RESPONSE stdresponse WHERE stdresponse.TEST_ID=" + testId +
                " AND stdresponse.LOCATER_PASSWORD_ID=" + passwordId + " " +
                "AND stdresponse.QUESTION_ID=questions.ID)*100),1),'%') AS PERCENT) AS OTHER_PERCENT," +
                "(SELECT " +
                "CONCAT(TRUNCATE(((SELECT count(stdresponse.STUDENT_ID) FROM STUDENT_RESPONSE stdresponse WHERE stdresponse.TEST_ID=" + testId + " AND stdresponse.LOCATER_PASSWORD_ID=" + passwordId + " " +
                "AND stdresponse.QUESTION_ID=questions.ID AND stdresponse.OPTION_ID=options.ID)/" +
                "(SELECT count(stdresponse.STUDENT_ID) FROM STUDENT_RESPONSE stdresponse WHERE stdresponse.TEST_ID=" + testId +
                " AND stdresponse.LOCATER_PASSWORD_ID=" + passwordId + " " +
                "AND stdresponse.QUESTION_ID=questions.ID)*100),1),'%') AS PERCENT) AS ANSWER_PERCENT FROM ELM_QUESTIONS questions " +
                "INNER JOIN ELM_OPTIONS options ON options.QUESTION_ID=questions.ID " +
                "INNER JOIN ELM_TESTS tests ON tests.ID=" + testId + " " +
                "LEFT JOIN ELM_NODE node ON node.TEXTID like tests.SUBJECT_NODE_PREFIX " +
                "INNER JOIN STUDENT_RESPONSE stdresponse ON stdresponse.TEST_ID=" + testId + " AND stdresponse.LOCATER_PASSWORD_ID=" + passwordId + " " +
                "WHERE questions.ID=" + questionId + " group by options.ID;";
        }
        else if (questionType == 'mc') {
            queryString = "SELECT questions.ID,questions.QUESTION_ORDER,if((questions.PARENT_QUESTION_ID IS NOT NULL) ,questions.PART_ORDER,0) AS PART_ORDER," +
                "questions.QUESTION,questions.QUESTION_TYPE," +
                "stdresponse.LOCATER_PASSWORD_ID,options.ID AS OPTION_ID,options.ANSWER,options.ISVALID," +
                "node.TITLE,options.OPTION_ORDER,options.NODES as NODES,options.ANTI_NODES as ANTI_NODES, tests.SUBJECT_NODE_PREFIX as SUBPREF, " +
                "(SELECT if(options.ISVALID=1, options.NODES, options.ANTI_NODES)) AS NODE_TEXT," +
                "(SELECT node.TITLE FROM ELM_NODE node WHERE node.TEXTID=NODE_TEXT) AS TITLE," +
                "(SELECT " +
                "CONCAT(TRUNCATE(((SELECT count(stdresponse.STUDENT_ID) FROM STUDENT_RESPONSE stdresponse WHERE stdresponse.TEST_ID=" + testId + " AND stdresponse.LOCATER_PASSWORD_ID=" + passwordId + " " +
                "AND stdresponse.QUESTION_ID=questions.ID AND stdresponse.OPTION_ID=options.ID)/" +
                "(SELECT count(stdresponse.STUDENT_ID) FROM STUDENT_RESPONSE stdresponse WHERE stdresponse.TEST_ID=" + testId +
                " AND stdresponse.LOCATER_PASSWORD_ID=" + passwordId + " " +
                "AND stdresponse.QUESTION_ID=questions.ID)*100),1),'%') AS PERCENT) AS ANSWER_PERCENT FROM ELM_QUESTIONS questions " +
                "INNER JOIN ELM_OPTIONS options ON options.QUESTION_ID=questions.ID " +
                "INNER JOIN ELM_TESTS tests ON tests.ID=" + testId + " " +
                "LEFT JOIN ELM_NODE node ON node.TEXTID like tests.SUBJECT_NODE_PREFIX " +
                "INNER JOIN STUDENT_RESPONSE stdresponse ON stdresponse.TEST_ID=" + testId + " AND stdresponse.LOCATER_PASSWORD_ID=" + passwordId + " " +
                "WHERE questions.ID=" + questionId + " group by options.ID;";
        }
        else if (questionType == 'ms') {
            queryString = "SELECT questions.ID,questions.QUESTION_ORDER,if((questions.PARENT_QUESTION_ID IS NOT NULL) ,questions.PART_ORDER,0) AS PART_ORDER," +
                "questions.QUESTION,questions.QUESTION_TYPE," +
                "stdresponse.LOCATER_PASSWORD_ID,options.ID AS OPTION_ID,options.ANSWER,options.ISVALID," +
                "options.OPTION_ORDER,options.NODES as NODES, options.ANTI_NODES as ANTI_NODES,tests.SUBJECT_NODE_PREFIX as SUBPREF, " +
                "(SELECT if(options.ISVALID=1, options.NODES, options.ANTI_NODES)) AS NODE_TEXT," +
                "(SELECT node.TITLE FROM ELM_NODE node WHERE node.TEXTID=NODE_TEXT) AS TITLE," +
                "(SELECT " +
                "CONCAT(TRUNCATE(((SELECT count(stdresponse.STUDENT_ID) FROM STUDENT_RESPONSE stdresponse WHERE stdresponse.TEST_ID=" + testId + " AND " +
                "stdresponse.LOCATER_PASSWORD_ID=" + passwordId + " AND stdresponse.QUESTION_ID=questions.ID AND " +
                "(stdresponse.RESPONSE_VALUE REGEXP CONCAT(',*',options.OPTION_ORDER,',*')))/" +
                "(SELECT count(stdresponse.STUDENT_ID) FROM STUDENT_RESPONSE stdresponse WHERE stdresponse.TEST_ID=" + testId +
                " AND stdresponse.LOCATER_PASSWORD_ID=" + passwordId + " " +
                "AND stdresponse.QUESTION_ID=questions.ID)*100),1),'%') AS PERCENT) AS ANSWER_PERCENT FROM ELM_QUESTIONS questions " +
                "INNER JOIN ELM_OPTIONS options ON options.QUESTION_ID=questions.ID " +
                "INNER JOIN ELM_TESTS tests ON tests.ID=" + testId + " " +
                "LEFT JOIN ELM_NODE node ON node.TEXTID like tests.SUBJECT_NODE_PREFIX " +
                "INNER JOIN STUDENT_RESPONSE stdresponse ON stdresponse.TEST_ID=" + testId + " AND stdresponse.LOCATER_PASSWORD_ID=" + passwordId +
                " WHERE questions.ID=" + questionId + " group by options.ID,options.OPTION_ORDER";
        }

        con.query(queryString, function (err, result) {
            if (err) {
                logger.error('Error at getTestReportDetails :' + err);
                callback(err);
            } else {
                try {
                    if (result != null) {
                        var optionsArray = [];
                        resultObj.QUESTION_ID = result[0].ID;
                        resultObj.QUESTION_ORDER = result[0].QUESTION_ORDER;
                        if (parseInt(result[0].PART_ORDER) == 0) {
                            resultObj.PART_ORDER = '';
                        } else {
                            resultObj.PART_ORDER = String.fromCharCode(96 + parseInt(result[0].PART_ORDER));
                        }
                        resultObj.QUESTION = result[0].QUESTION;
                        resultObj.QUESTION_TYPE = result[0].QUESTION_TYPE;
                        resultObj.LOCATER_PASSWORD_ID = result[0].LOCATER_PASSWORD_ID;
                        if (result[0].QUESTION_TYPE == 'cr') {
                            resultObj.OTHER_PERCENT = result[0].OTHER_PERCENT;
                        }
                        for (var i = 0; i < result.length; i++) {
                            var optionsObj = {};
                            optionsObj.OPTION_ID = result[i].OPTION_ID;
                            optionsObj.OPTION_ORDER = String.fromCharCode(64 + parseInt(result[i].OPTION_ORDER));
                            optionsObj.OPTION_TITLE = result[i].ANSWER;
                            optionsObj.ISVALID = result[i].ISVALID;
                            optionsObj.NODES = result[i].TITLE;
                            optionsObj.NODE_TEXT = "";
                            if (result[i].NODES != null && result[i].NODES != '' && result[i].NODES != "null")
                                optionsObj.NODE_TEXT += "" + result[i].NODES;
                            if (result[i].ANTI_NODES != null && result[i].ANTI_NODES != '' && result[i].ANTI_NODES != "null")
                                optionsObj.NODE_TEXT += " \n " + "" + result[i].ANTI_NODES;
                            optionsObj.PERCENT = result[i].ANSWER_PERCENT;
                            optionsArray.push(optionsObj);
                        }
                        resultObj.optionDetails = optionsArray;
                    }
                    callback(null, resultObj);
                } catch (e) {
                    logger.error("Exception in getQuestionReport: ", e);
                    callback(e);
                }
            }
        });
    };

    module.exports.getStudentReport = function (userId, studentId, con, logger, callback) {
        var queryString;
        var resultObj = {};
        queryString = "SELECT stdtest.STUDENT_ID,elmstd.USERNAME,tests.ID AS TEST_ID,tests.VERSION AS TEST_VERSION,tests.TEST_TITLE," +
            "tests.STUDENT_TITLE,tests.TEST_PASSAGE,DATE_FORMAT(stdtest.DUE_DATE,'%a %b %e') AS DUE_DATE," +
            "DATE_FORMAT(stdtest.DUE_TIME,'%l   %p') AS DUE_TIME," +
            "DATE_FORMAT(stdtest.DATE_FINISHED,'%a %b %e %l     %p') AS DATE_FINISHED," +
            "questions.ID AS QUESTION_ID,questions.QUESTION_ORDER,if((questions.PARENT_QUESTION_ID IS NOT NULL) ,questions.PART_ORDER,0) AS PART_ORDER," +
            "(SELECT ques.QUESTION_TYPE FROM ELM_QUESTIONS ques WHERE ques.ID=questions.ID) AS QUESTION_TYPE," +
            "(SELECT stdresp.RESPONSE_VALUE FROM STUDENT_RESPONSE stdresp WHERE stdresp.QUESTION_ID=questions.ID AND" +
            " stdresp.STUDENT_ID=stdtest.STUDENT_ID AND stdresp.LOCATER_PASSWORD_ID=stdtest.LOCATER_PASSWORD_ID) AS RESPONSE_VALUE," +
            "(SELECT stdresp.ISVALID FROM STUDENT_RESPONSE stdresp WHERE stdresp.QUESTION_ID=questions.ID AND" +
            " stdresp.STUDENT_ID=stdtest.STUDENT_ID AND stdresp.LOCATER_PASSWORD_ID=stdtest.LOCATER_PASSWORD_ID) AS RESPONSE_VALID," +
            "(SELECT  count(questions.ID) " +
            "FROM ELM_QUESTIONS questions WHERE questions.TEST_ID=tests.ID AND questions.QUESTION_TYPE!='multipart') AS NOOFQs," +
            "stdtest.LOCATER_PASSWORD_ID,pswd.PASSWORD," +
            "(SELECT count(stdresponse.ISVALID) FROM STUDENT_RESPONSE stdresponse WHERE stdresponse.TEST_ID=tests.ID AND " +
            "stdresponse.ISVALID=1 AND stdresponse.STUDENT_ID=stdtest.STUDENT_ID AND " +
            "stdresponse.LOCATER_PASSWORD_ID=stdtest.LOCATER_PASSWORD_ID) AS OUTCOME " +
            "FROM STUDENT_TESTS stdtest " +
            "INNER JOIN ELM_TESTS tests ON tests.ACTIVE_TEST_ID=stdtest.ACTIVE_TEST_ID " +
            "INNER JOIN STUDENT_RESPONSE stdresponse ON stdresponse.STUDENT_ID=stdtest.STUDENT_ID AND " +
            "stdresponse.TEST_ID=tests.ID AND stdresponse.LOCATER_PASSWORD_ID=stdtest.LOCATER_PASSWORD_ID " +
            "INNER JOIN ELM_QUESTIONS questions ON questions.TEST_ID=tests.ID AND questions.QUESTION_TYPE!='multipart' " +
            "INNER JOIN LOCATER_PASSWORD pswd ON pswd.ID=stdtest.LOCATER_PASSWORD_ID " +
            "INNER JOIN ELM_STUDENTS elmstd ON elmstd.ID=stdtest.STUDENT_ID " +
            "WHERE stdtest.ISCOMPLETE=1 AND stdtest.STUDENT_ID=" + studentId + " " +
            "group by stdtest.STUDENT_ID,tests.ID,stdtest.LOCATER_PASSWORD_ID,questions.ID " +
            "order by tests.ID,stdtest.LOCATER_PASSWORD_ID,questions.QUESTION_ORDER,questions.PART_ORDER;";
        con.query(queryString, function (err, result) {
            if (err) {
                logger.error('Error at getStudentReport :' + err);
                callback(err);
            } else {
                try {
                    if (result != null) {
                        var stdObjArray = [];
                        var testObj = {};
                        var prevPswdId = result[0].LOCATER_PASSWORD_ID;
                        for (var i = 0; i < result.length; i++) {
                            var stdObj = {};
                            if (i != 0) {
                                if (prevPswdId == result[i].LOCATER_PASSWORD_ID) {
                                    continue;
                                }
                            }
                            stdObj.STUDENT_NAME = result[i].USERNAME;
                            stdObj.STUDENT_ID = result[i].STUDENT_ID;
                            stdObj.TEST_VERSION = result[i].TEST_VERSION;
                            stdObj.DATE_FINISHED = result[i].DATE_FINISHED;
                            stdObj.DUE_DATE = result[i].DUE_DATE;
                            stdObj.DUE_TIME = result[i].DUE_TIME;
                            stdObj.OUTCOME = result[i].OUTCOME;
                            stdObj.NOOFQUEST = result[i].NOOFQs;
                            stdObj.PASSWORD = result[i].PASSWORD;
                            stdObj.PASSWORD_ID = result[i].LOCATER_PASSWORD_ID;
                            stdObj.TEST_TITLE = result[i].TEST_TITLE;
                            stdObj.STUDENT_TITLE = result[i].STUDENT_TITLE;
                            stdObj.TEST_PASSAGE = result[i].TEST_PASSAGE;
                            stdObj.SUBJECT_NODE_PREFIX = result[i].SUBJECT_NODE_PREFIX;
                            stdObj.TEST_ID = result[i].TEST_ID;
                            prevPswdId = result[i].LOCATER_PASSWORD_ID;
                            var quesObjArray = [];
                            for (var j = 0; j < result.length; j++) {
                                if (result[i].LOCATER_PASSWORD_ID == result[j].LOCATER_PASSWORD_ID) {
                                    var quesObj = {};
                                    quesObj.QUESTION_ID = result[j].QUESTION_ID;
                                    quesObj.QUESTION_ORDER = result[j].QUESTION_ORDER;
                                    if (parseInt(result[j].PART_ORDER) == 0) {
                                        quesObj.PART_ORDER = '';
                                    } else {
                                        quesObj.PART_ORDER = String.fromCharCode(96 + parseInt(result[j].PART_ORDER));
                                    }
                                    quesObj.QUESTION_TYPE = result[j].QUESTION_TYPE;
                                    //quesObj.ISVALID = result[j].ISVALID;
                                    quesObj.RESPONSE_VALID = result[j].RESPONSE_VALID;
                                    if (result[j].QUESTION_TYPE == 'cr') {
                                        if (result[j].RESPONSE_VALUE) {
                                            quesObj.RESPONSE = result[j].RESPONSE_VALUE;
                                        } else {
                                            quesObj.RESPONSE = "";
                                        }

                                    } else if (result[j].QUESTION_TYPE == 'mc') {
                                        if (result[j].RESPONSE_VALUE) {
                                            quesObj.RESPONSE = String.fromCharCode(64 + parseInt(result[j].RESPONSE_VALUE));
                                        } else {
                                            quesObj.RESPONSE = "";
                                        }

                                    } else if (result[j].QUESTION_TYPE == 'ms') {
                                        if (result[j].RESPONSE_VALUE) {
                                            var response = result[j].RESPONSE_VALUE;
                                            var respArray = [];
                                            var pattern = '[,\/]';
                                            if (String(response).search(pattern) >= 1) {
                                                respArray = response.split(",");
                                            } else {
                                                respArray[0] = response;
                                            }
                                            var finalresponse = "";
                                            for (var k = 0; k < respArray.length; k++) {
                                                if (k == parseInt(respArray.length - 1)) {
                                                    finalresponse = finalresponse + String.fromCharCode(64 + parseInt(respArray[k]));
                                                } else {
                                                    finalresponse = finalresponse + String.fromCharCode(64 + parseInt(respArray[k])) + ",";
                                                }
                                            }
                                            quesObj.RESPONSE = finalresponse;

                                        } else {
                                            quesObj.RESPONSE = "";
                                        }

                                    }
                                    quesObjArray.push(quesObj);
                                }
                            }
                            stdObj.questionDetails = quesObjArray;
                            stdObjArray.push(stdObj);
                        }
                        resultObj.studentTestDetails = stdObjArray;
                    }
                    callback(null, resultObj);
                } catch (e) {
                    logger.error("Exception in getStudentReport method: ", e);
                }
            }
        });
    };

    module.exports.getAllUploadedFiles = function (dirPath, rootDirPath, tempDirPath, relativePath, con, logger, callback) {
        try {
            logger.debug("In getAllUploadedFiles");
            var resultJSON = [];
            var files = GetFilesFromUploadFolder(dirPath, rootDirPath, tempDirPath, logger);

            files.forEach(file => {
                var statJSON = {};
                var filestat = fs.statSync(dirPath + file);//,function(err,stats){
                statJSON.Path = relativePath + file;
                statJSON.FileName = file;
                statJSON.Size = filestat.size;
                statJSON.TimeStamp = filestat.mtimeMs;
                resultJSON.push(statJSON);
            });
            callback(null, resultJSON);
        } catch (e) {
            logger.error("Error occurred in getQuestionReport: ", e.stack);
            callback(e);
        }
    };


    module.exports.validateNodes = function (nodes, subPrefix, con, logger, callback) {
        try {
            var params = nodes.map(function (a) { return "'" + a.trim().replace("'", "''") + "'"; }).join();
            params = params + " , " + params.replace(/-/g, "&#45;");
            var queryString = "select NODEID,TITLE,TEXTID from ELM_NODE where TEXTID IN (" + params + ");";
            con.query(queryString, function (err, result) {
                if (err) {
                    logger.error('Error at validateNodes :' + err);
                    callback(err);
                } else {
                    callback(null, result);
                }
            });
        } catch (e) {
            logger.error("Error occurred in validateNodes: ", e.stack);
            callback(e);
        }
    };


    /********************************
     *          Helpers             *
     ********************************/

    function nullIfEmpty(data) {
        if (!data || data == undefined || data == "" || data == 'null')
            return null;
        else
            return data;
    }

    function CheckIfTrue(data) {
        if (data && (data == true || data == 'true')) {
            return true;
        } else
            return false;
    }

    function stringToDbBit(data) {
        if (data == 'true' || data == true)
            return 1;
        else
            return 0;
    }

    function getNoOfQuestions(data) {
        var count = 0;
        data.questions.forEach(quest => {
            quest.parts.forEach(part => {
                count++;
            });
        });
        return count;
    }

    function IsNull(data) {
        if (data == null || data.toLowerCase() == 'null')
            return true;
        else
            return false;
    }

    function IsNullOrEmpty(data) {
        if (IsNull(data) || data == "")
            return true;
        else
            return false;
    }

    function IsNullOrUndefined(data) {
        if (IsNullOrEmpty(data) || typeof data == 'undefined')
            return true;
        else
            return false;
    }

    function getArrayString(arr) {
        try {
            var stringData = "";
            if (arr) {
                arr.forEach(val => {
                    stringData += val.toString() + ";";
                });
            }
            return stringData;
        } catch (e) {
            return "";
        }

    }

    function GetFilesFromUploadFolder(dirPath, rootdirPath, tempDirPath, logger) {
        var files = [];
        try {
            files = fs.readdirSync(dirPath);
        } catch (NoDirErr) {//If No Directory Exists
            try {
                if (NoDirErr.code == "ENOENT") {
                    if (!fs.existsSync(rootdirPath)) {
                        fs.mkdirSync(rootdirPath);
                    }
                    if (!fs.existsSync(dirPath)) {
                        fs.mkdirSync(dirPath);
                    }
                    if (!fs.existsSync(tempDirPath)) {
                        fs.mkdirSync(tempDirPath);
                    }
                    files = fs.readdirSync(dirPath);
                } else {
                    throw NoDirErr;
                }
            } catch (dirCreationErr) {
                logger.error("Two Error Occurred" + NoDirErr.stack + dirCreationErr.stack);
                throw dirCreationErr;
            }
        }
        return files;
    }

    /* Inserts Parent Question if Questions has parts - Return Inserted Question ID
       Else - Return null - has no parts
    */
    async function insertParentQuestion(question, questOrder, testId, userId, con, logger) {
        try {
            if (question.parts.length > 1) {
                var insertQuestQry = "INSERT INTO ELM_QUESTIONS " +
                    "(QUESTION,DOK,NOTE," +
                    "TEST_ID,`QUESTION_ORDER`,`PARENT_QUESTION_ID`," +
                    "PART_ORDER,CREATED_USER,MODIFIED_USER," +
                    "QUESTION_TYPE) " +
                    "VALUES ( ? ) ; ";

                var questdata = [nullIfEmpty(question.text),
                nullIfEmpty(''), // dok
                nullIfEmpty(''), // note
                    testId, //test_id
                    questOrder, // Question Order
                    null, // Parent Question Id
                    null, // Part Order
                    userId, userId,
                nullIfEmpty("multipart")
                ];
                var insertParentResult = await con.querySync(insertQuestQry, [questdata]);
                return insertParentResult.insertId;

            } else
                return null;
        } catch (e) {
            logger.error("InsertParentQuestion Failed: " + e);
            throw e;
        }
    }

    // function getMaxTestID(con, logger, callback) {
    //     var getMaxTestIdQry = "select max(ACTIVE_TEST_ID) as MAXID from ELM_TESTS;";

    //     con.query(getMaxTestIdQry, function (err, resMaxId) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             if (resMaxId != null && resMaxId.length > 0) {
    //                 var testId = resMaxId[0].MAXID + 1;
    //                 callback(null, testId);
    //             } else {
    //                 callback(null, 0);
    //             }
    //         }
    //     });
    // }

    // function insertNewTest(userId, test_Id, tempTest, con, logger) {
    //     var newTestId;
    //     if (!test_Id)
    //         newTestId = getMaxTestID(con, logger, function (err, testId) {
    //             newTestId = test_Id;
    //         });
    //     else
    //         newTestId = test_Id;

    //     if (newTestId != null) {
    //         let testData = {};
    //         let companion;
    //         var insertTestQry = "INSERT INTO ELM_TESTS (" +
    //             "TEST_TITLE,STUDENT_TITLE,TEST_PASSAGE," +
    //             "TEST_SUBJECT,ISACTIVE,ISPUBLIC," +
    //             "ISOVERRIDEN,SUBJECT_NODE_PREFIX,TEST_STANDARDS," +
    //             "TEST_MAP_VIEWS,REPORTING_NODES,VERSION," +
    //             "COMPANION_ID,ACTIVE_TEST_ID,CREATED_USER, MODIFIED_USER) " +
    //             "VALUES (?)  ;";
    //         var testValues = [
    //             [testData.title, testData.studenttitle, testData.passage,
    //             testData.subject, 1, (testData.ispublic == 'true') ? 1 : 0,
    //                 0, testData.prefix, testData.standards,
    //             nullIfEmpty(testData.mapviews), testData.studenttitle, testData.testversion,
    //                 companion, newTestId, userId, userId
    //             ]
    //         ];

    //         con.query(insertTestQry, testValues, function (err, insertTestResult) {
    //             if (err) {
    //                 logger.error(err);
    //                 throw err;
    //             } else {
    //                 return insertTestResult.insertId;
    //             }
    //         });
    //     }
    // }

}());