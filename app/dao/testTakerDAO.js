(function () {
    var _ = require('underscore');

    //	Get test by username, password
    module.exports.getStudentTest = function (userName, password, con, logger, callback) {
        try {
            var lettersAndSpaceRegex = /^[a-zA-Z\s]*$/;
            if (!lettersAndSpaceRegex.test(userName) || password == null || password == "") {
                logger.info("username has values other than letters and spaces or password is null");
                callback("Username or Password is null", null);
            } else {
                logger.info('DAO  Retrieving Tests for student:', userName);
                var resultJsonArray = {};
                var queryString = "SELECT * FROM ELM_STUDENTS WHERE USERNAME = ?;";
                logger.info("running query in getStudentTest: ", queryString);
                con.query(queryString, userName, function (err, result) {
                    if (err) {
                        logger.error('Error at getStudentTest :' + err);
                        callback("Could not load test for the Username and Password");
                    } else {
                        logger.debug('getStudentTest Row Count ' + result.length);
                        if (result != null && result.length == 1) {
                            var studentId = {};
                            studentId = result[0].ID;
                            getActiveTestIdFromStudentIdPassword(studentId, password, con, logger, callback);
                        } else {
                            callback("The Username is not found", null);
                        }
                    }
                });
            }
        }
        catch (e) {
            logger.error("Error occurred in getStudentTest: ", e);
            callback("Could not load test for the Username and Password");
        }
    };

    module.exports.getTestPreviewById = function (testId, con, logger, callback) {
        try {
            var isPreview = true;
            //NOTE: This is set to true only if you are using this for preview. 
            //If you use this method for any other purpose set it accordingly.
            getTestDetailsFromTestId(testId, null, null, null, null, isPreview, null, con, logger, callback);
        } catch (e) {
            logger.error("Error occurred in getTestPreviewById: ", e);
        }
    };

    function getResponses(testId, passwordId, studentId, con, logger, callback) {
        var isPreview = true;
        var responsesQuery = "SELECT * FROM STUDENT_RESPONSE WHERE TEST_ID = ? AND LOCATER_PASSWORD_ID = ? AND STUDENT_ID = ?;";
        con.query(responsesQuery, [testId, passwordId, studentId], function (err, result) {
            if (err) {
                logger.error("Error in responsesQuery of getResponses method ", err);
                callback(err);
            } else {
                if (result != null && result.length > 0) {
                    getTestDetailsFromTestId(testId, null, null, null, passwordId, isPreview, JSON.parse(JSON.stringify(result)), con, logger, callback);
                }
            }
        });
    };

    module.exports.getTestResults = function (testId, passwordId, studentId, userId, con, logger, callback) {
        try {
            var isPreview = true;
            var resultView = true;
            var hasStudentAccessQuery = "SELECT CREATED_USER FROM ROSTER_STUDENT WHERE STUDENT_ID = ?;";
            con.query(hasStudentAccessQuery, studentId, function (err, result) {
                if (err) {
                    logger.error("Error in hasStudentAccessQuery of getTestResults method ", err);
                    callback(err);
                } else {
                    if (result != null && result.length > 0) {
                        var userJson = JSON.parse(JSON.stringify(result));
                        //Check if user has access to view the result
                        if (_.where(userJson, { "CREATED_USER": userId })) {
                            //NOTE: This is set to true only if you are using this for preview. 
                            //If you use this method for any other purpose set it accordingly. Results view is set to true if we need to view the results.
                            getResponses(testId, passwordId, studentId, con, logger, callback);
                        } else {
                            logger.info("The user doesnt have access to find the result.", userId);
                            callback("Unable to find the test.");
                        }
                    } else {
                        callback("Unable to find the test.");
                    }
                }
            });
        } catch (e) {
            logger.error("Error occurred in getTestPreviewById: ", e);
        }
    };
    module.exports.getCompanionPreviewById = function (testId, con, logger, callback) {
        //Companion is viewed for only active companion, if the companion is not active it will not be displayed.
        //For given test ID, get it's companion id which would be active_test_id of the companion test and check only active tests.
        var companionTestIdFromIdQuery = "SELECT ID FROM ELM_TESTS WHERE ACTIVE_TEST_ID IN (SELECT COMPANION_ID FROM ELM_TESTS WHERE ID=?) and ISACTIVE=true;"
        con.query(companionTestIdFromIdQuery, testId, function (err, result) {
            if (err) {
                logger.error('Error at companionTestIdFromIdQuery: ' + err);
                callback(null, null);
            } else {
                try {
                    if (result != null && result.length >= 1) {
                        var companiontestId = result[0].ID;
                        var isPreview = true;
                        //NOTE: This is set to true only if you are using this for preview. 
                        //If you use this method for any other purpose set it accordingly.
                        getTestDetailsFromTestId(companiontestId, null, null, null, null, isPreview, null, con, logger, callback);
                    }
                } catch (e) {
                    logger.error("Error occurred in getCompanionPreviewById: ", e);
                }
            }
        });
    };

    function getActiveTestIdFromStudentIdPassword(studentId, password, con, logger, callback) {
        try {
            var queryString = "SELECT st.ACTIVE_TEST_ID, st.ID, rost.ID as rosterId, st.ISCOMPLETE as isComplete, st.LOCATER_PASSWORD_ID as locaterPasswordId FROM STUDENT_TESTS st "
                + " JOIN ROSTER_STUDENT rs ON rs.STUDENT_ID = st.STUDENT_ID AND rs.ROSTER_ID = st.ROSTER_ID "
                + " JOIN ELM_ROSTERS rost ON rost.ID = rs.ROSTER_ID "
                + " JOIN LOCATER_PASSWORD lp ON lp.USER_ID = rost.USER_ID AND lp.PASSWORD = ? AND lp.ID = st.LOCATER_PASSWORD_ID "
                + " where st.STUDENT_ID = ?  AND rost.ACTIVEFLAG='1' AND rs.ACTIVEFLAG='1' "
                + " AND (st.DUE_DATE is null OR (DATE(st.DUE_DATE) > CURRENT_DATE OR (DATE(st.DUE_DATE) = CURRENT_DATE AND st.DUE_TIME > CURRENT_TIME))); ";
            //logger.info("queryString in getTestIdFromStudentId: ", queryString);
            con.query(queryString, [password, studentId], function (err, result) {
                if (err) {
                    logger.error('Error at getStudentTest: ' + err);
                    callback("Could not load test for the Username and Password");
                } else {
                    if (result != null && result.length == 1) {
                        result.forEach(res => {
                            logger.debug("res: ", res);
                        });
                        if (result[0].isComplete) {
                            callback(null, null, true);
                        } else {
                            var activetestId = result[0].ACTIVE_TEST_ID;
                            var studentTestId = result[0].ID;
                            var rosterId = result[0].rosterId;
                            var locaterPasswordId = result[0].locaterPasswordId;
                            var isPreview = false;
                            //NOTE: This is set to false only if this method since this method is used for actual test taken by student. 
                            //If you use this method for any other purpose set it accordingly.
                            getTestDetailsFromTestId(activetestId, studentTestId, studentId, rosterId, locaterPasswordId, isPreview, null, con, logger, callback);
                        }
                    } else {
                        if (result.length == 0) {
                            logger.debug("result length is 0");
                            callback("No active tests found for the username and password", null);
                        } else {
                            logger.debug("result has multiple rows");
                            callback("More than one test exists for the username and password, contact ELM for support", null);
                        }
                    }
                }
            });
        } catch (e) {
            logger.error("Error occurred in getTestIdFromStudentIdPassword: ", e);
            callback("Could not load test for the Username and Password");
        }
    };

    function getTestDetailsFromTestId(id, studentTestId, studentId, rosterId, locaterPasswordId, isPreview, studentResponseObj, con, logger, callback) {
        try {
            var resultJSON = {};
            let stTestId = studentTestId;
            var queryString = "SELECT tests.ID as testId, tests.TEST_TITLE as title,tests.TEST_PASSAGE as passage,tests.STUDENT_TITLE as studenttitle, "
                + " subject.NAME as subject, questions.ID as questionId, questions.QUESTION as questionValue, questions.QUESTION_TYPE as questionType,"
                + " questions.QUESTION_ORDER as questionOrder, questions.PARENT_QUESTION_ID as parentQuestionId, questions.PART_ORDER as partOrder, "
                + " optionstable.ID as optionId, optionstable.ANSWER as optionValue, optionstable.ISVALID as isValid, optionstable.PERCENTAGE as percentage, "
                + " optionstable.OPTION_ORDER as optionOrder, optionstable.REGEX as regex, optionstable.NODES as node, optionstable.ANTI_NODES as antinode from ELM_TESTS tests "
                + " LEFT OUTER JOIN ELM_QUESTIONS questions ON questions.TEST_ID = tests.ID "
                + " LEFT OUTER JOIN ELM_OPTIONS optionstable ON optionstable.QUESTION_ID=questions.ID "
                + " LEFT JOIN ELM_SUBJECT subject ON tests.SUBJECT_ID = subject.SUBJECT_ID ";
            if (isPreview) {
                //If test is preview we dont care if the test is active, since deleted tests can also be previewed in Tests page.
                queryString = queryString + " where tests.ID=? order by  questionOrder asc, partOrder asc, optionOrder asc;";
            } else {
                queryString = queryString + " where tests.ACTIVE_TEST_ID=? and tests.ISACTIVE = true order by  questionOrder asc, partOrder asc, optionOrder asc;";
            }
            logger.debug("queryString in getTestDetailsFromTestId: ", queryString);
            con.query(queryString, id, function (err, result) {
                if (err) {
                    logger.error('Error at getStudentTest :' + err);
                    callback("Could not load test for the Username and Password");
                } else {
                    if (result != null && result.length > 0) {
                        result.stTestId = stTestId;
                        result.studentId = studentId;
                        result.rosterId = rosterId;
                        result.locaterPasswordId = locaterPasswordId;
                        try {
                            parseTestJSON(result, studentResponseObj, isPreview, logger, function (testObj) {
                                callback(null, testObj);
                            });
                        } catch (e) {
                            logger.error("Error occurred parseTestJSON block of getTestDetailsFromTestId: ", e);
                            callback("Could not load test for the Username and Password");
                        }
                    } else {
                        callback("No active tests found for the username and password", null);
                    }
                }
            });
        } catch (e) {
            logger.error("Error occurred in getTestDetailsFromTestId: ", e);
            callback("Could not load test for the Username and Password");
        }
    };
    function getPrefixFromSubject(subject) {
        if (subject)
            switch (subject.toLowerCase()) {
                case 'science':
                    return 'SCI';
                case 'math':
                    return 'M';
                case 'ela':
                    return 'ELA';
                default:
                    return '';
            }
    };
    function parseTestJSON(resultObj, studentResponseObj, isPreview, logger, callback) {
        var testObj = {};
        var uniqueQuestionIdList = [];
        var uniquePartQuestionIdList = [];
        var uniqueOptionIdList = [];
        var part = {};
        var option = {};
        var jsonObj = JSON.parse(JSON.stringify(resultObj));
        testObj.questions = [];
        var subjectPrefix = getPrefixFromSubject(resultObj[0].subject);
        testObj.studentTestId = resultObj.stTestId;
        testObj.studentId = resultObj.studentId;
        testObj.rosterId = resultObj.rosterId;
        testObj.locaterPasswordId = resultObj.locaterPasswordId;
        for (var idx = 0; idx < jsonObj.length; idx++) {
            if (idx == 0) {
                testObj.title = jsonObj[0].title;
                testObj.testId = resultObj[0].testId;
                testObj.passage = jsonObj[0].passage;
                testObj.studenttitle = jsonObj[0].studenttitle;
            }
            var questionId = jsonObj[idx].questionId;
            //Only look for Part Questions, ignore Parent questions.
            if (!jsonObj[idx].parentQuestionId) {
                var questions = {};
                questions.parts = [];
                if (!_.contains(uniqueQuestionIdList, questionId)) {
                    uniqueQuestionIdList.push(questionId);
                    var partQuestions = _.where(jsonObj, { "parentQuestionId": questionId });
                    var parts = [];
                    //If Question has parts, list out each part.
                    if (partQuestions.length > 0) {
                        //All parts of the question are added to parts.
                        questions.text = jsonObj[idx].questionValue;
                        for (var i = 0; i < partQuestions.length; i++) {
                            var partQuestion = partQuestions[i];
                            if (!_.contains(uniquePartQuestionIdList, partQuestion.questionId)) {
                                uniquePartQuestionIdList.push(partQuestion.questionId);
                                part = {};
                                part.text = partQuestions[i].questionValue;
                                part.questionId = partQuestions[i].questionId;
                                part.type = partQuestion.questionType;
                                var responseObj = {};
                                //All options for the part question.
                                var optionJson = _.where(jsonObj, { "questionId": partQuestion.questionId });
                                if (studentResponseObj) {
                                    responseObj = _.where(studentResponseObj, { "QUESTION_ID": partQuestion.questionId });
                                    if (optionJson[0].questionType == "mc") {
                                        part.response = responseObj[0].RESPONSE_VALUE - 1;
                                    } else if (optionJson[0].questionType == "ms") {
                                        msResponses = responseObj[0].RESPONSE_VALUE;
                                    } else if (optionJson[0].questionType == "cr") {
                                        part.response = responseObj[0].RESPONSE_VALUE;
                                    }
                                }
                                part.options = [];
                                var options = [];
                                for (var j = 0; j < optionJson.length; j++) {
                                    var optionId = optionJson[j].optionId;
                                    if (!_.contains(uniqueOptionIdList, optionId)) {
                                        uniqueOptionIdList.push(optionId);
                                        option = {};
                                        option.text = optionJson[j].optionValue;
                                        option.optionId = optionJson[j].optionId;
                                        option.optionOrder = optionJson[j].optionOrder;
                                        if (studentResponseObj || isPreview) {
                                            option.valid = optionJson[j].isValid;
                                            if (subjectPrefix && subjectPrefix != "") {
                                                if (optionJson[j].node && optionJson[j].node != "")
                                                    option.node = "" + optionJson[j].node;
                                                if (optionJson[j].antinode && optionJson[j].antinode != "")
                                                    option.antinode = "" + optionJson[j].antinode;
                                            }
                                            if (optionJson[0].questionType == "ms" && msResponses && msResponses.indexOf(option.optionOrder) > -1) {
                                                option.response = option.optionOrder;
                                            } else if (optionJson[0].questionType == "cr") {
                                                option.regex = optionJson[j].regex;
                                            }
                                        }
                                        options.push(option);
                                    }
                                }
                                // Add option info for CR items only for report view.
                                if (studentResponseObj || isPreview) {
                                    part.options = options;
                                } else if (jsonObj[idx].questionType != "cr") {
                                    part.options = options;
                                }
                                options = [];
                                uniqueOptionIdList = [];
                                parts.push(part);
                            }
                        }
                    } else {// The question has no parts, so add the question to parts[0] location.
                        questions.text = "";
                        uniqueQuestionIdList.push(questionId);
                        part = {};
                        parts = [];
                        part.text = jsonObj[idx].questionValue;
                        part.type = jsonObj[idx].questionType;
                        part.questionId = jsonObj[idx].questionId;
                        var responseObj = {};
                        var msResponses = [];
                        if (studentResponseObj) {
                            responseObj = _.where(studentResponseObj, { "QUESTION_ID": questionId });
                            if (jsonObj[idx].questionType == "mc") {
                                part.response = responseObj[0].RESPONSE_VALUE - 1;
                            } else if (jsonObj[idx].questionType == "ms") {
                                msResponses = responseObj[0].RESPONSE_VALUE;
                            } else if (jsonObj[idx].questionType == "cr") {
                                part.response = responseObj[0].RESPONSE_VALUE;
                            }
                        }
                        part.options = [];
                        var options = [];
                        //All options for the part question.
                        var optionJson = _.where(jsonObj, { "questionId": questionId });
                        for (var j = 0; j < optionJson.length; j++) {
                            uniqueOptionIdList.push(optionId);
                            var optionId = optionJson[j].optionId;
                            if (!_.contains(uniqueOptionIdList, optionId)) {
                                option = {};
                                option.text = optionJson[j].optionValue;
                                option.optionId = optionJson[j].optionId;
                                option.optionOrder = optionJson[j].optionOrder;
                                if (studentResponseObj || isPreview) {
                                    option.valid = optionJson[j].isValid;
                                    if (subjectPrefix && subjectPrefix != "") {
                                        if (optionJson[j].node && optionJson[j].node != "")
                                            option.node = "" + optionJson[j].node;
                                        if (optionJson[j].antinode && optionJson[j].antinode != "")
                                            option.antinode = "" + optionJson[j].antinode;
                                    }
                                    if (jsonObj[idx].questionType == "ms" && msResponses && msResponses.indexOf(option.optionOrder) > -1) {
                                        option.response = optionJson[j].optionOrder;
                                    } else if (jsonObj[idx].questionType == "cr") {
                                        option.regex = optionJson[j].regex;
                                    }
                                }
                                options.push(option);
                            }
                        }
                        // Add option info for CR items only for report view.
                        if (studentResponseObj || isPreview) {
                            part.options = options;
                        } else if (jsonObj[idx].questionType != "cr") {
                            part.options = options;
                        }
                        uniqueOptionIdList = [];
                        parts.push(part);
                    }
                    questions.parts = parts;
                    testObj.questions.push(questions);
                }
            }
        }
        callback(testObj);
    };

    module.exports.postStudentTest = async function (responses, con, logger, callback) {
        var resultJSON = {};
        var queryString = "SELECT opts.ID as OPTION_ID, opts.ANSWER, opts.REGEX, opts.ISVALID, opts.PERCENTAGE, opts.OPTION_ORDER, opts.QUESTION_ID, opts.NODES as NODES, ques.QUESTION_TYPE "
            + " FROM ELM_OPTIONS opts LEFT JOIN ELM_QUESTIONS ques ON opts.QUESTION_ID = ques.ID LEFT JOIN ELM_TESTS tests ON ques.TEST_ID = tests.ID "
            + " WHERE tests.ID = ?";
        logger.info("queryString in postStudentTest: ", queryString);

        var transactionConn;
        try{
			transactionConn	= await con.getConnectionSync();
		}catch(conErr){
			logger.error("Error occurred in assignTest while getting a connection: ", conErr.stack);
			return(callback(conErr));
		}

        try {
            transactionConn.query(queryString, responses.testId, function (err, result) {
                if (err) {
                    logger.error('Error at postStudentTest :' + err);
                    callback("Error saving the test.");
                } else {
                    try {
                        if (result != null && result.length > 0) {
                            var insertValues = "";
                            var keyJSON = JSON.parse(JSON.stringify(result));
                            responses.questions.forEach(question => {
                                question.parts.forEach(partQuestion => {
                                    var percentage = 0.00;
                                    var isValid = 0;
                                    var optionIdSelected = [];
                                    var nodesSelected = [];
                                    var optionOrder = [];
                                    var responseValue = [];
                                    var questionId = parseInt(partQuestion.questionId);
                                    var correctAnsJson = _.where(keyJSON, { "QUESTION_ID": questionId, "ISVALID": true });
                                    var isCorrectResponse = false;
                                    if (partQuestion.type == 'ms') {
                                        var multiresponses = _.where(partQuestion.options, { response: 'true' });
                                        multiresponses.forEach(multiresponse => {
                                            optionIdSelected.push(multiresponse.optionId);
                                            optionOrder.push(multiresponse.optionOrder);
                                            responseValue.push(multiresponse.optionOrder);
                                        });
                                        if (multiresponses.length == correctAnsJson.length) {
                                            isCorrectResponse = true;
                                            correctAnsJson.forEach(correctJson => {
                                                var findByOption = _.where(multiresponses, { optionId: correctJson.OPTION_ID.toString() });
                                                if (findByOption.length == 0) {
                                                    isCorrectResponse = false;
                                                }
                                            });
                                        }
                                    } else {
                                        if (partQuestion.response != null) {
                                            var questionId = parseInt(partQuestion.questionId);
                                            var correctAnsJson = _.where(keyJSON, { "QUESTION_ID": questionId, "ISVALID": true });
                                            if (partQuestion.type == 'mc') {
                                                if (correctAnsJson[0].OPTION_ORDER == (parseInt(partQuestion.response) + 1)) {
                                                    isCorrectResponse = true;
                                                    optionIdSelected.push(correctAnsJson[0].OPTION_ID);
                                                    optionOrder.push(correctAnsJson[0].OPTION_ORDER);
                                                    responseValue.push(correctAnsJson[0].OPTION_ORDER);
                                                } else {
                                                    //Get the selected option by question ID and option order. 
                                                    var wrongAnsJson = _.where(keyJSON, { "QUESTION_ID": questionId, "OPTION_ORDER": parseInt(partQuestion.response) + 1 });
                                                    optionIdSelected.push(wrongAnsJson[0].OPTION_ID);
                                                    optionOrder.push(wrongAnsJson[0].OPTION_ORDER);
                                                    responseValue.push(wrongAnsJson[0].OPTION_ORDER);
                                                }
                                            } else if (partQuestion.type == 'cr') {
                                                //If CR, we have to get all the options and compare if the answer enetered matches any of the options.
                                                var allCROptionsJson = _.where(keyJSON, { "QUESTION_ID": questionId });
                                                var allValidCROptions = _.where(keyJSON, { "QUESTION_ID": questionId, "ISVALID": true });
                                                allValidCROptions.forEach(validCROption => {
                                                    validCROption.ANSWER = validCROption.ANSWER.replace(/<\/?(p|h[1-6]|div|pre|blockquote)(>| [^>]*>)/ig, " ").replace(/<br>/ig, " ");
                                                });
                                                //Comparing the regex first, if it matches, whichever option first appears will be saved as option selected.
                                                //NOTE: Sometimes the response may not match answer, but based on regex it might be valid, still we are saving that particular option id.
                                                isCorrectResponse = allValidCROptions.some(function (validanswer) {
                                                    var regexregex = /^\/(.*)\/([a-z]*)$/;
                                                    var regexmatch = (validanswer.REGEX || "NOTAREGEX").match(regexregex);
                                                    if (regexmatch) {
                                                        var regex = new RegExp(regexmatch[1], regexmatch[2]);
                                                        if (regex.test(partQuestion.response)) {
                                                            nodesSelected.push(validanswer.NODES);
                                                            optionIdSelected.push(validanswer.OPTION_ID);
                                                            optionOrder.push(validanswer.OPTION_ORDER);
                                                            return true;
                                                        } else {
                                                            return false;
                                                        }
                                                    }
                                                    else {
                                                        if ((partQuestion.response.toLowerCase() === validanswer.ANSWER.toLowerCase())) {
                                                            nodesSelected.push(validanswer.NODES);
                                                            optionIdSelected.push(validanswer.OPTION_ID);
                                                            optionOrder.push(validanswer.OPTION_ORDER);
                                                            return true;
                                                        } else {
                                                            return false;
                                                        }
                                                    }
                                                });
                                                responseValue.push(partQuestion.response);
                                                allCROptionsJson.forEach(key => {
                                                    if (!key.ISVALID && !isCorrectResponse) { // Only for incorrect response, node and option value are not set.
                                                        if (partQuestion.response == key.ANSWER) {
                                                            nodesSelected.push(key.NODES);
                                                            optionIdSelected.push(key.OPTION_ID);
                                                            optionOrder.push(key.OPTION_ORDER);
                                                        }
                                                    }
                                                });
                                            }
                                        } else {
                                            //Response is null;
                                        }
                                    }
                                    if (isCorrectResponse) {
                                        percentage = 100.00;
                                        percentage = Math.round(percentage * 100) / 100;
                                        isValid = 1;
                                    }
                                    if (insertValues == "") {
                                        insertValues = "(" + responses.testId + "," + responses.studentId + "," + responses.rosterId + "," + responses.studentTestId + "," + responses.locaterPasswordId + "," + questionId + ", '" + optionIdSelected.toString() + "','" + nodesSelected.toString() + "','" + optionOrder.toString() + "'," + percentage + ",'" + responseValue + "'," + isValid + "),";
                                    } else {
                                        insertValues = insertValues + " (" + responses.testId + "," + responses.studentId + "," + responses.rosterId + "," + responses.studentTestId + "," + responses.locaterPasswordId + "," + questionId + ",'" + optionIdSelected.toString() + "','" + nodesSelected.toString() + "','" + optionOrder.toString() + "'," + percentage + ",'" + responseValue + "'," + isValid + "),";
                                    }
                                });
                            });
                            var insertResponsesQuery = "INSERT INTO STUDENT_RESPONSE(TEST_ID, STUDENT_ID, ROSTER_ID, STUDENT_TEST_ID, LOCATER_PASSWORD_ID, QUESTION_ID, OPTION_ID, "
                                + " NODES, OPTION_ORDER, PERCENTAGE, RESPONSE_VALUE, ISVALID) VALUES ";
                            if (insertValues != "" && insertValues.length > 0) {
                                try {
                                    //Remove trailing comma.
                                    transactionConn.beginTransaction(function (errTrans) {
                                        if (errTrans) {
                                            callback("Error saving the test.");
                                        } else {
                                            insertValues = insertValues.substring(0, insertValues.length - 1);
                                            insertResponsesQuery = insertResponsesQuery + insertValues;
                                            logger.debug(insertResponsesQuery);
                                            transactionConn.query(insertResponsesQuery, function (errRespQuery, resultInsert) {
                                                if (errRespQuery) {
                                                    logger.error('Error at insertResponsesQuery :' + errRespQuery);
                                                    transactionConn.rollback(function () {
                                                        con.release(transactionConn,logger);
                                                        logger.debug("Error: Transaction rolledback.");
                                                    });
                                                    callback("Error saving the test.");
                                                } else {
                                                    logger.info("Response inserted");
                                                    var updteStudentTestQuery = "UPDATE STUDENT_TESTS SET ISCOMPLETE = 1, DATE_FINISHED = CURRENT_TIMESTAMP WHERE ID = ?";
                                                    try {
                                                        transactionConn.query(updteStudentTestQuery, responses.studentTestId, function (errUpdateQuery, resultStTestUpdate) {
                                                            if (errUpdateQuery) {
                                                                logger.error('Error at updteStudentTestQuery :' + errUpdateQuery);
                                                                transactionConn.rollback(function () {
                                                                    con.release(transactionConn,logger);
                                                                    logger.debug("Error: Transaction rolledback.");
                                                                });
                                                                callback("Error saving the test.");
                                                            } else {
                                                                transactionConn.commit(function (commitErr) {// commit the whole transcation if sucessfull
																	if (commitErr) {
                                                                        logger.error("Error occurred in postStudentTest Commit Failed: ", commitErr);
																		transactionConn.rollback(function () {
																			con.release(transactionConn,logger);
																			throw commitErr;
																		});
																	}else
																	    con.release(transactionConn,logger);
																});
                                                                callback(null, "SUCCESS");
                                                            }

                                                        });
                                                    } catch (e) {
                                                        //Catch block of update StudentTest.
                                                        logger.error("Error occurred in updteStudentTestQuery of postStudentTest: ", e);
                                                        callback("Error saving the test.");
                                                    }
                                                }
                                            });
                                        }
                                    });// End Transaction.
                                } catch (e) {
                                    //Catch of insert try block;
                                    logger.error("Error occurred in insertResponsesQuery of postStudentTest: ", e);
                                    callback("Error saving the test.");
                                }
                            }
                        } else {
                            callback("Error saving the test.");
                        }
                    } catch (e) {
                        logger.error("Error occurred in postStudentTest: ", e);
                        callback("Error saving the test.");
                    }
                }
            });
        } catch (e) {
            logger.error("Error occurred in postStudentTest: ", e);
            callback("Error saving the test.");
        }
    };
}()); 