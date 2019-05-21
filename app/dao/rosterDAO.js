(function () {
	var mail = require('../util/mail')();
	var _ = require('underscore');
	// create roster using  rostername and rosterlength

	module.exports.createRoster = async function (userId, rosterName, rosterLength, con, logger, callback) {
		var resultJson = {};
		logger.info("Enter rosterDAO, createRoster with userId: " + userId);
		var transactionConn;
		try {
			transactionConn = await con.getConnectionSync();
		} catch (conErr) {
			logger.error("Error occurred in CreateRosters while getting a connection: ", conErr.stack);
			return (callback(conErr));
		}
		transactionConn.beginTransaction(function (errTrans) {//start transaction
			if (errTrans) {
				con.release(transactionConn, logger);
				callback("Error in transaction: createRoster.");
			} else {
				if (isNaN(rosterLength) || rosterLength > 99) {
					//Don't add rosters with more than 99 students or if the length is not a number.
					con.release(transactionConn, logger);
					callback("Invalid Length");
				} else {
					// check if rosterName already exixts
					checkRosterName(userId, rosterName, transactionConn, logger, function (flag) {
						if (flag == 'true') {
							resultJson = { "success": "false" };
							con.release(transactionConn, logger);
							callback(null, resultJson);
						} else {
							// Inserting Roster Details created by User into ELM_ROSTERS
							var createRosterQuery = "INSERT INTO ELM_ROSTERS(USER_ID," +
								"ROSTER_NAME,CREATED_USER,MODIFIED_USER) " +
								"values(" + userId + ",'" + rosterName + "'," + userId + "," + userId + ")";
							let rosterId = 0;
							transactionConn.query(createRosterQuery,
								function (err, result) {
									if (err) {
										logger.error('Error in createRosterQuery' + err);
										transactionConn.rollback(function () {// rollback all  transcations in this service
											logger.info("Error: Transaction rolledback.");
											con.release(transactionConn, logger);
										});
										callback(err);
									}
									else {
										try {
											// Selecting random unassigned students.
											rosterId = result.insertId;
											var selectStudentIdsQuery = "SELECT ID FROM ELM_STUDENTS WHERE ID NOT IN (SELECT DISTINCT (STUDENT_ID) "
												+ "FROM ROSTER_STUDENT FOR UPDATE) ORDER BY ID ASC LIMIT " + rosterLength + " FOR UPDATE;";
											transactionConn.query(selectStudentIdsQuery, function (err2, result2) {
												if (err2) {
													transactionConn.rollback(function () {// rollback all  transcations in this service
														logger.info("Error: Transaction rolledback.");
													});
													logger.error('Error in selectStudentIdsQuery' + err2);
													con.release(transactionConn, logger);
													callback(err2);
												} else {
													try {
														var values;
														for (let idx = 0; idx < result2.length; idx++) {
															var jsonObj = JSON.parse(JSON.stringify(result2[idx]));
															if (idx != 0 && result2.length != 1) {
																if (idx != result2.length - 1) {
																	values = values + '(' + [jsonObj.ID, rosterId, userId, userId] + '),';
																} else {
																	values = values + '(' + [jsonObj.ID, rosterId, userId, userId] + ')';
																}
															} else {
																if (result2.length != 1) {
																	values = '(' + [jsonObj.ID, rosterId, userId, userId] + '),';
																} else {
																	values = '(' + [jsonObj.ID, rosterId, userId, userId] + ')';
																}
															}
														}
													} catch (e) {
														transactionConn.rollback(function () {// rollback all  transcations in this service
															logger.info("Error: Transaction rolledback.");
															con.release(transactionConn, logger);
														});
														logger.error("Error occurred in CreateRosters while parsing/inserting the values: ", e.stack);
														callback(e);
													}

													//Inserting the selected number of Students into  the Roster created above.
													var insertRosterStudentQuery = "INSERT INTO ROSTER_STUDENT(STUDENT_ID, ROSTER_ID, CREATED_USER, MODIFIED_USER) "
														+ " VALUES " + values;
													transactionConn.query(insertRosterStudentQuery, function (err3, result3) {
														if (err3) {
															logger.error('Error in insertRosterStudentQuery' + err3);
															transactionConn.rollback(function () {// rollback all  transcations in this service
																logger.info("Error: Transaction rolledback.");
															});
															con.release(transactionConn, logger);
															callback(err3);
														} else {
															if (result3 != null) {
																transactionConn.commit(function (commitErr) {// commit the whole transcation if sucessfull
																	if (commitErr) {
																		transactionConn.rollback(function () {// rollback all  transcations in this service
																			con.release(transactionConn, logger);
																			throw commitErr;
																		});
																	} else
																		con.release(transactionConn, logger);
																});
																resultJson = { "success": "true" };
																callback(null, resultJson);
															}
														}
													});
												}
											});
										} catch (e) {
											transactionConn.rollback(function () {// rollback all  transcations in this service
												logger.info("Error: Transaction rolledback.");
												con.release(transactionConn, logger);
											});
											logger.error("Error occurred in CreateRosters while selecting stds for created rosters: ", e);
											callback(e);
										}
									}
								});

						}

					});

				}
			}
		});
	};

	//Check duplicate roster name and send true or false to createRoster service

	function checkRosterName(userId, rosterName, transactionConn, logger, callback) {
		var rstrName = rosterName.trim();
		var getRosterNameQuery = "SELECT * FROM ELM_ROSTERS WHERE USER_ID=" + userId + " AND ROSTER_NAME='" + rstrName + "';";
		transactionConn.query(getRosterNameQuery, function (err, result) {
			if (err) {
				logger.error('Error in getRosterNameQuery' + err);
				callback(err);
			} else {
				try {
					if (result != null) {
						if (result.length > 0) {
							var resultObj = 'true';
							logger.info("The roster name already exists for the userId.");
							callback(resultObj);
						} else {
							var resultObj = 'false';
							logger.info("The roster name does not exists for the userId.");
							callback(resultObj);
						}

					}
				} catch (e) {
					logger.error('Error while setting resultObj in checkRosterName.: ' + e.stack);
					callback(e);
				}
			}
		});
	};


	//	Get Rosters By UserId
	module.exports.getRostersByUserId = function (userId, con, logger, callback) {
		//Retreiving all the rosters and its students created by the User with userId
		logger.info('Enter rosterDAO, getRostersByUserId for UserId:' + userId);
		var resultJsonArray = {};
		var getRostersQuery = "SELECT rstr.ID as ROSTER_ID," +
			"rstr.USER_ID," +
			"rstr.ROSTER_NAME," +
			"rstr.ACTIVEFLAG as ROSTERFLAG," +
			"std.ID as STUDENT_ID," +
			"rstrstd.ACTIVEFLAG as STUDENTFLAG," +
			"(select count(stdtest.STUDENT_ID) FROM STUDENT_TESTS stdtest WHERE stdtest.ISCOMPLETE=1 AND stdtest.STUDENT_ID=rstrstd.STUDENT_ID ) AS VIEW_REPORT," +
			"std.USERNAME FROM ELM_ROSTERS rstr " +
			"LEFT JOIN ROSTER_STUDENT rstrstd on rstr.ID=rstrstd.ROSTER_ID AND rstrstd.ACTIVEFLAG=1 " +
			"LEFT JOIN ELM_STUDENTS std on rstrstd.STUDENT_ID=std.ID " +
			"LEFT JOIN STUDENT_TESTS stdtest on rstrstd.STUDENT_ID=stdtest.STUDENT_ID " +
			"WHERE rstr.USER_ID=" + userId + " " +
			"AND rstr.ACTIVEFLAG=1 group by rstr.ID,std.ID ORDER BY rstr.ID,std.ID ;";
		con.query(getRostersQuery, function (err, result) {
			if (err) {
				logger.error('Error in getRostersQuery :' + err);
				callback(err);
			} else {
				logger.debug('getRostersQuery successfull.Row count is: ' + result.length);
				try {
					if (result != null) {
						resultJsonArray = convertDaoToJson(result);
						callback(null, resultJsonArray);
					}
				} catch (e) {
					logger.error("Error occurred in getRostersByUserId while converting to JSON ", e.stack)
					callback(e);
				}
			}
		});
	};


	// Get last downloaded timestamp
	module.exports.getLastDownloadedTime = function(userId, con, logger, callback){
		logger.info('Enter rosterDAO, getLastDownloadedTime for user Id:' + userId);
		var resultJson = {};
		// query to get last downloaded time from elm_userstring for the particular user.
		var getDownloadTimeQuery = "SELECT DOWNLOAD_TIME FROM ELM_USERSTRING WHERE USER_ID="+userId+";";
		con.query(getDownloadTimeQuery, function (err, result) {
			if (err) {
				logger.error('Error in getDownloadTimeQuery :' + err);
				callback(err);
			} else {
				logger.debug('getDownloadTimeQuery successfull.Row count is: ' + result.length);
				try {
					if (result != null && result.length>0) {
						resultJson.downloadTime = result[0].DOWNLOAD_TIME;
						callback(null, resultJson);
					}else{
						callback(null, resultJson);
					}
				} catch (e) {
					logger.error("Error occurred in getLastDownloadedTime while converting to JSON ", e.stack)
					callback(e);
				}
			}
		});
	};

	 
  	//Author: Vidya
	//Issue: PII change 
	//Update Downloaded timestamp in database
	// Update last downloaded timestamp in database once user clicks "Export ALL"
	module.exports.updateLastDownloadedTime = function(userId, con, logger, callback){
		logger.info('Enter rosterDAO, updateLastDownloadedTime for user Id:' + userId);
		//this query will be inserting  new users in the elm_userstring table after the PII save to database is removed
		var updateTimeQuery = "INSERT INTO ELM_USERSTRING (USER_ID, DOWNLOAD_TIME) VALUES(?,CURRENT_TIMESTAMP) ON DUPLICATE KEY UPDATE DOWNLOAD_TIME=CURRENT_TIMESTAMP;"
		/* For INSERT ... ON DUPLICATE KEY UPDATE statements, the affected-rows value in result is:
		1 if the row is inserted as a new row, 
		2 if an existing row is updated, and 
		0 if an existing row is set to its current values */
		con.query(updateTimeQuery, [userId], function (err, result) {							        
			if (err) {
				logger.error('Error in updateTimeQuery :' + err);
				callback(err);
			} else {
				logger.debug('updateTimeQuery successful. Status code returned: ' + JSON.stringify(result.affectedRows));
				try {
					if (result) {						 
						callback(null, result);
					}
				} catch (e) {
					logger.error("Error occurred in updateLastDownloadedTime while converting to JSON ", e.stack)
					callback(e);
				}
			}
		});
	};
	 
  	//Author: Vidya
	//Issue: PII change 
	//check if a user has any rosters
	module.exports.checkIfRostersExist = function(userId, con, logger, callback){
		logger.info('Enter rosterDAO, checkIfRostersExist for user Id:' + userId);
		//this query will be counting the number of 'not deleted' rosters user has
		var updateTimeQuery = "SELECT COUNT(*) AS count FROM ELM_ROSTERS WHERE USER_ID=? AND ACTIVEFLAG=1;"
		con.query(updateTimeQuery, [userId], function (err, result) {
			if (err) {
				logger.error('Error in checkIfRostersExist :' + err);
				callback(err);
			} else {
				try {
					if (result && result.length) {
						logger.debug('checkIfRostersExist successfull.Row count is: ' + result[0].count);
						callback(null, result[0]);
					}
				} catch (e) {
					logger.error("Error occurred in checkIfRostersExist while converting to JSON ", e.stack)
					callback(e);
				}
			}
		});
	};

	

	//	Get Rosters names of student
	module.exports.getRosterNamesofStudent = function (userId, studentId, con, logger, callback) {
		logger.info('Enter rosterDAO, getRosterNamesofStudent for Student Id:' + studentId);
		var resultJson = {};
		var resultObjArray = [];
		var resultObj = {};

		// Retreiving all the roster names where the student with studentId is present.
		var getRosterNamesQuery = "SELECT ID,ROSTER_NAME FROM ELM_ROSTERS" +
			" WHERE ID IN (SELECT DISTINCT(ROSTER_ID) FROM ROSTER_STUDENT WHERE STUDENT_ID=" + studentId + ") AND USER_ID=" + userId + ";";
		con.query(getRosterNamesQuery, function (err, result) {
			if (err) {
				logger.error('Error in getRosterNamesQuery :' + err);
				callback(err);
			} else {
				logger.debug('getRosterNamesQuery Successfull. Row Count is: ' + result.length);
				try {
					if (result.length > 0) {
						for (var i = 0; i < result.length; i++) {
							if (i != 0) {
								resultObjArray.push(resultObj);
								resultObj = {};
							}
							resultObj.rosterId = result[i].ID;
							resultObj.rosterName = result[i].ROSTER_NAME;
							if (i == result.length - 1) {
								resultObjArray.push(resultObj);
							}
						}
						resultJson = resultObjArray;
						callback(null, resultJson);
					} else {
						callback(null, {});
					}
				} catch (e) {
					logger.error("Error occured while parsing the resultset(result) : ", e.stack);
					callback(e);
				}
			}
		});
	};

	//Get InActive Rosters and students By UserId
	module.exports.getInActiveRostersByUserId = function (userId, con, logger, callback) {
		logger.info('Enter rosterDAO, getInActiveRostersByUserId  for User Id:' + userId);
		var resultInactiveRosters = {};
		var resultInactiveStudents = {};
		var resultJson = {};
		var inactiveRostersQuery = "SELECT rstr.ID as ROSTER_ID," +
			"rstr.USER_ID," +
			"rstr.ROSTER_NAME," +
			"rstr.ACTIVEFLAG as ROSTERFLAG," +
			"std.ID as STUDENT_ID," +
			"map.ACTIVEFLAG as STUDENTFLAG," +
			"std.USERNAME FROM ELM_ROSTERS rstr " +
			"LEFT JOIN ROSTER_STUDENT map on rstr.ID=map.ROSTER_ID " +
			"LEFT JOIN ELM_STUDENTS std on map.STUDENT_ID=std.ID " +
			"WHERE rstr.USER_ID=" + userId + " " +
			"AND rstr.ACTIVEFLAG=0 ORDER BY rstr.ID ; ";
		var inactiveStudentsQuery = "SELECT rstr.ID as ROSTER_ID," +
			"rstr.USER_ID," +
			"rstr.ROSTER_NAME," +
			"rstr.ACTIVEFLAG as ROSTERFLAG," +
			"std.ID as STUDENT_ID," +
			"map.ACTIVEFLAG as STUDENTFLAG," +
			"std.USERNAME FROM ELM_ROSTERS rstr " +
			"LEFT JOIN ROSTER_STUDENT map on rstr.ID=map.ROSTER_ID " +
			"LEFT JOIN ELM_STUDENTS std on map.STUDENT_ID=std.ID " +
			"WHERE rstr.USER_ID=" + userId + " " +
			"AND rstr.ACTIVEFLAG=1 AND map.ACTIVEFLAG=0 ORDER BY rstr.ID ; ";

		//Getting all inactive rosters for the user with userId
		con.query(inactiveRostersQuery, function (err, result) {
			if (err) {
				logger.error('Error in inactiveRostersQuery :' + err);
				callback(err);
			} else {
				logger.debug('inactiveRostersQuery Successfull. Row Count is: ' + result.length);
				try {
					if (result != null) {
						resultInactiveRosters = convertDaoToJson(result);
						resultJson.InactiveRosters = resultInactiveRosters;

						//Getting all Inactive students for the user with UserId
						con.query(inactiveStudentsQuery, function (err, result1) {
							if (err) {
								logger.error('Error in inactiveStudentsQuery :' + err);
								callback(err);
							} else {
								logger.debug('inactiveStudentsQuery successfull. Row Count is: ' + result1.length);
								try {
									if (result1 != null) {
										resultInactiveStudents = convertDaoToJson(result1);
										resultJson.InactiveStudents = resultInactiveStudents;
										callback(null, resultJson);
									}
								} catch (e) {
									logger.error("Error while parsing (result1) resultset for inactiveStudents: ", e.stack);
									callback(e);
								}
							}
						});
					}
				} catch (e) {
					logger.error("Error while parsing (result) resultset for inactiveRosters: ", e.stack);
					callback(e);
				}
			}
		});
	};


	//Rename a Student associated with the Roster - Using RosterId and Student Id
	module.exports.renameStudent = async function (userId, rosterId, studentId, con, logger, callback) {
		var resultObj = {};
		var resultJSONArray = [];
		var transactionConn;
		try {
			transactionConn = await con.getConnectionSync();
			logger.info("Enter rosterDAO, renameStudent with StudentId:" + studentId + " and RosterId: " + rosterId + " for UserId: " + userId);
			var resultNewStudentJSON = {};
			// Checking if the student is assigned in any test. If already assigned any test ,the User cannot rename the std(Error Msg is sent as Alert)
			var getStudentTestQuery = "SELECT * FROM STUDENT_TESTS WHERE STUDENT_ID=" + studentId + ";";
			transactionConn.query(getStudentTestQuery, function (err, result1) {
				if (err) {
					logger.error('Error int getStudentTestQuery :' + err);
					con.release(transactionConn, logger);
					callback(err);
				} else {
					try {
						if (result1 != null && result1.length > 0) {
							resultObj.errorMsg = "ERROR: Cannot rename.The student is already assigned a test.";
							resultObj.renameStudentFlag = false;
							con.release(transactionConn, logger);
							callback(null, resultObj);
						} else {
							try {
								//if student is not assigned any test check & get all the roster names where the student is present.
								var getRostersForStdQuery = "SELECT ID,ROSTER_NAME FROM ELM_ROSTERS" +
									" WHERE ID IN (SELECT DISTINCT(ROSTER_ID) FROM ROSTER_STUDENT WHERE STUDENT_ID=" + studentId + " AND ACTIVEFLAG=1 AND CREATED_USER=" + userId + " AND ROSTER_ID<>" + rosterId + ");";
								transactionConn.query(getRostersForStdQuery, function (err, result2) {
									if (err) {
										logger.error('Error in getRostersForStdQuery :' + err);
										con.release(transactionConn, logger);
										callback(err);
									} else {
										try {
											if (result2 != null && result2.length > 0) {
												// if student is present in multiple rosters, send errosMsg for alert
												resultObj.errorMsg = "ERROR: student  is enrolled in multiple classes:";
												resultObj.renameStudentFlag = false;
												for (var i = 0; i < result2.length; i++) {
													var rosterObj = {};
													rosterObj.ROSTER_ID = result2[i].ID;
													rosterObj.ROSTER_NAME = result2[i].ROSTER_NAME;
													resultJSONArray.push(rosterObj);
												}
												resultObj.rosterdetails = resultJSONArray;
												con.release(transactionConn, logger);
												callback(null, resultObj);
											} else {
												try {
													//if student is not is any other roster select one random unassigned username to rename the current std
													var selectNewStudentQry = "SELECT ID,USERNAME FROM ELM_STUDENTS WHERE ID NOT IN (SELECT DISTINCT (STUDENT_ID) " +
														"FROM ROSTER_STUDENT) AND ID <> " + studentId + " ORDER BY RAND() LIMIT 1;";

													// Get New Student Id & Name
													transactionConn.query(selectNewStudentQry, function (err, result) {
														if (err) {
															logger.error("Error in selectNewStudentQry" + err);
															con.release(transactionConn, logger);
															callback(err);
														} else {
															try {
																if (result != null && result.length > 0) {
																	resultNewStudentJSON = { STUDENT_ID: result[0].ID, STUDENT_NAME: result[0].USERNAME, renameStudentFlag: true };
																	var newStudentId = result[0].ID;
																	transactionConn.beginTransaction(function (errTrans) {//start transaction
																		if (errTrans) {
																			con.release(transactionConn, logger);
																			callback("Error in transaction: renameStudent.");
																		} else {
																			try {
																				//Updates New Student Id  and name for the student in ROSTER_STUDENT table
																				var updateNewstudentQry = "UPDATE ROSTER_STUDENT SET STUDENT_ID=" + resultNewStudentJSON.STUDENT_ID + "," +
																					"MODIFIED_USER =" + userId + " " +
																					"WHERE ROSTER_ID= " + rosterId + " AND STUDENT_ID=" + studentId + ";";
																				transactionConn.query(updateNewstudentQry, function (err, result4) {
																					if (err) {
																						logger.error("Error in updateNewstudentQry" + err);
																						transactionConn.rollback(function () {// rollback all  transcations in this service
																							logger.info("Error: Transaction rolledback.");
																							con.release(transactionConn, logger);
																						});
																						callback(err);
																					} else {
																						if (result4.affectedRows > 0) {
																							logger.debug("Updated Student Id from " + studentId + " to " + resultNewStudentJSON.STUDENT_ID);
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
																							callback(null, resultNewStudentJSON);
																						}
																						else {
																							//Return Empty if Roster/Student not found
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
																							callback(null, {});
																						}
																					}
																				});
																			} catch (e) {
																				transactionConn.rollback(function () {// rollback all  transcations in this service
																					logger.info("Error: Transaction rolledback.");
																					con.release(transactionConn, logger);
																				});
																				logger.error("Error occurred while updating studentName with new name: " + e);
																				callback(e);
																			}
																		}
																	});
																} else {
																	logger.error("No new Student Id");
																	con.release(transactionConn, logger);
																	throw new Error("No new Student Id");
																}
															} catch (e) {
																logger.error("Error occurred while parsing resultset(result4): " + e);
																con.release(transactionConn, logger);
																callback(e);
															}
														}
													});
												} catch (e) {
													logger.error("Error occurred while parsing resultset(result): " + e);
													con.release(transactionConn, logger);
													callback(e);
												}

											}
										} catch (e) {
											logger.error("Error occurred while parsing resultset(result2)/ sending ErrorMsg resultJson: " + e);
											con.release(transactionConn, logger);
											callback(e);
										}
									}
								});
							} catch (e) {
								logger.error("Error occurred while getting all roster names of student : " + e);
								con.release(transactionConn, logger);
								callback(e);
							}
						}
					} catch (e) {
						logger.error("Error occurred while parsing resultset(result1)/ sending ErrorMsg resultJson: " + e);
						con.release(transactionConn, logger);
						callback(e);
					}
				}
			});
		} catch (e) {
			logger.error("Error occurred while renaming the student: " + e);
			con.release(transactionConn, logger);
			callback(e);
		}
	}



	//Add a new Student to the Roster - Using RosterId and userId
	module.exports.addNewStudent = async function (userId, rosterId, con, logger, callback) {
		logger.info("Enter rosterDAO, addNewStudent with UserId:" + userId + "into roster with RosterId :" + rosterId);
		var rosterSizeQuery = "SELECT COUNT(*) as rosterSize FROM ROSTER_STUDENT WHERE ROSTER_ID=?;";

		var transactionConn;
		try {
			transactionConn = await con.getConnectionSync();
		} catch (conErr) {
			logger.error("Error occurred in addNewStudent while getting a connection: ", conErr.stack);
			return (callback(conErr));
		}

		transactionConn.query(rosterSizeQuery, rosterId, function (errLength, resultLength) {
			if (errLength) {
				logger.error("Error in rosterSizeQuery of addNewStudent in rosterDAO", errLength);
				con.release(transactionConn, logger);
				callback(errLength);
			} else {
				if (resultLength && resultLength.length > 0) {
					if (resultLength[0].rosterSize < 99) {
						try {
							var resultNewStudentJSON = {};
							transactionConn.beginTransaction(function (errTrans) {//start transaction
								if (errTrans) {
									con.release(transactionConn, logger);
									callback("Error in transaction: addNewstudent.");
								} else {
									var selectNewStudentQry = "SELECT ID,USERNAME FROM ELM_STUDENTS WHERE ID NOT IN (SELECT DISTINCT (STUDENT_ID) " +
										"FROM ROSTER_STUDENT) ORDER BY ID ASC LIMIT 1;";
									// Select a random unassigned student from elm_students to add to the roster
									transactionConn.query(selectNewStudentQry, function (err, result) {
										if (err) {
											transactionConn.rollback(function () {// rollback all  transcations in this service
												con.release(transactionConn, logger);
												logger.info("Error: Transaction rolledback.");
											});
											logger.error("Error in selectNewStudentQry" + err);
											callback(err);
										} else {
											try {
												if (result != null && result.length > 0) {
													resultNewStudentJSON = { STUDENT_ID: result[0].ID, STUDENT_NAME: result[0].USERNAME };
													try {
														//Insert the New Student Id into  ROSTER_STUDENT table
														var insertNewRosterStudentQuery = "INSERT INTO ROSTER_STUDENT(STUDENT_ID, ROSTER_ID, CREATED_USER, MODIFIED_USER) "
															+ " VALUES(" + resultNewStudentJSON.STUDENT_ID + "," +
															rosterId + "," + userId + "," + userId + "); ";

														transactionConn.query(insertNewRosterStudentQuery, function (err, result1) {
															if (err) {
																logger.error("Error in insertNewRosterStudentQuery" + err);
																transactionConn.rollback(function () {// rollback all  transcations in this service
																	logger.info("Error: Transaction rolledback.");
																	con.release(transactionConn, logger);
																});
																callback(err);
															} else {
																if (result1.affectedRows > 0) {
																	logger.debug("Inserted New Student Id into the table: " + resultNewStudentJSON.STUDENT_ID);
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
																	callback(null, resultNewStudentJSON);
																} else {
																	//Return Empty if Roster/Student not found
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
																	callback(null, {});
																}
															}
														});
													} catch (e) {
														transactionConn.rollback(function () {// rollback all  transcations in this service
															con.release(transactionConn, logger);
															logger.info("Error: Transaction rolledback.");
														});
														logger.error("Error occurred while parsing the resultset(result1) for InsertNewStudent: " + e);
														callback(e);
													}
												} else {
													logger.error("No new Student Id");
													throw new Error("No new Student Id");
												}
											} catch (e) {
												transactionConn.rollback(function () {// rollback all  transcations in this service
													logger.info("Error: Transaction rolledback.");
													con.release(transactionConn, logger);
												});
												logger.error("Error occurred while parsing the resultset(result) for selectNewstudent: " + e);
												callback(e);
											}
										}
									});
								}
							});

						} catch (e) {
							logger.error("Error occurred while adding new student into the roster: " + e);
							con.release(transactionConn, logger);
							callback(e);
						}
					} else {
						logger.error("Roster length already 99, cannot add more students in the Roster.");
						con.release(transactionConn, logger);
						callback();
					}
				} else { // Roster Length >= 99
					logger.error("Roster length not found.");
					con.release(transactionConn, logger);
					callback();
				}
			}
		});
	};

	// Deletes a Roster - Using UserId & RosterId
	module.exports.deleteRoster = async function (userId, rosterId, con, logger, callback) {
		logger.info('Enter rosterDAO, deleteRoster with UserId:' + userId + ' and Roster Id :' + rosterId);
		// Setting the roster to be deleted  to Inactive and also Students inside that roster to Inactive
		var transactionConn;
		try {
			transactionConn = await con.getConnectionSync();
		} catch (conErr) {
			logger.error("Error occurred in deleteRoster while getting a connection: ", conErr.stack);
			return (callback(conErr));
		}
		transactionConn.beginTransaction(function (errTrans) {//start transaction
			if (errTrans) {
				con.release(transactionConn, logger);
				callback("Error in transaction: DeleteRoster.");
			} else {
				var deleteRosterquery = "UPDATE ELM_ROSTERS rostr " +
					"INNER JOIN ROSTER_STUDENT stud on rostr.ID=stud.ROSTER_ID " +
					"SET rostr.ACTIVEFLAG=0," +
					"rostr.MODIFIED_USER=" + userId + "," +
					"stud.ACTIVEFLAG=0," +
					"stud.MODIFIED_USER=" + userId + " " +
					"WHERE rostr.USER_ID=" + userId + " AND rostr.ID=" + rosterId + ";";

				//Soft Delete the Roster and Students associated with the roster
				transactionConn.query(deleteRosterquery, function (err, result) {
					if (err) {
						logger.error('Error in deleteRosterquery :' + err);
						transactionConn.rollback(function () {// rollback all  transcations in this service
							logger.info("Error: Transaction rolledback.");
							con.release(transactionConn, logger);
						});
						callback(err);
					} else {
						logger.debug("Deleted students from studentTests .Row count is: " + result.affectedRows);
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
						callback(null, result);
					}
				});
			}
		});
	};

	//Activate the roster  - Using UserId and RosterName
	module.exports.activateRoster = async function (userId, rosterName, con, logger, callback) {
		logger.info('Enter rosterDAO, activateRoster with User Id:' + userId + ' and Roster Name :' + rosterName);
		// Setting the roster and its students to Active state

		var transactionConn;
		try {
			transactionConn = await con.getConnectionSync();
		} catch (conErr) {
			logger.error("Error occurred in activateRoster while getting a connection: ", conErr.stack);
			return (callback(conErr));
		}
		transactionConn.beginTransaction(function (errTrans) {//start transaction
			if (errTrans) {
				con.release(transactionConn, logger);
				callback("Error in transaction: ActivateRoster.");
			} else {
				var activateRosterQuery = "UPDATE ELM_ROSTERS rostr " +
					"INNER JOIN ROSTER_STUDENT stud on rostr.ID=stud.ROSTER_ID " +
					"SET rostr.ACTIVEFLAG=1," +
					"rostr.MODIFIED_USER=" + userId + "," +
					"stud.ACTIVEFLAG=1," +
					"stud.MODIFIED_USER=" + userId + " " +
					"WHERE rostr.USER_ID=" + userId + " AND rostr.ROSTER_NAME='" + rosterName + "';";

				//Soft unDelete the Roster and Students associated with the roster
				transactionConn.query(activateRosterQuery, function (err, result) {
					if (err) {
						logger.error('Error in activateRosterQuery :' + err);
						transactionConn.rollback(function () {// rollback all  transcations in this service
							logger.info("Error: Transaction rolledback.");
							con.release(transactionConn, logger);
						});
						callback(err);
					} else {
						logger.debug("ActivateRoster successfull.Row count is: " + result.affectedRows);
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
						callback(null, result);
					}
				});
			}
		});
	};

	//Activate the Student  - Using UserId and RosterName
	module.exports.activateStudent = async function (userId, studentId, rosterId, con, logger, callback) {
		logger.info('Enter rosterDAO, activateStudent with UserId:' + userId + ' and studentID :' + studentId + " and RosterId: " + rosterId);
		// Setting the student of the particular to Active state
		var transactionConn;
		try {
			transactionConn = await con.getConnectionSync();
		} catch (conErr) {
			logger.error("Error occurred in activateRoster while getting a connection: ", conErr.stack);
			return (callback(conErr));
		}
		transactionConn.beginTransaction(function (errTrans) {//start transaction
			if (errTrans) {
				con.release(transactionConn, logger);
				callback("Error in transaction: activateStudent.");
			} else {
				var activateStudentQuery = "UPDATE ELM_ROSTERS rostr " +
					"INNER JOIN ROSTER_STUDENT stud on rostr.ID=stud.ROSTER_ID " +
					"SET stud.ACTIVEFLAG=1," +
					"stud.MODIFIED_USER=" + userId + " " +
					"WHERE rostr.ACTIVEFLAG =1 AND rostr.USER_ID=" + userId + " " +
					"AND rostr.ID=" + rosterId + " " +
					"AND stud.STUDENT_ID =" + studentId + ";";

				//Soft unDelete the Roster and Students associated with the roster
				transactionConn.query(activateStudentQuery, function (err, result) {
					if (err) {
						logger.error('Error in activateStudentQuery :' + err);
						transactionConn.rollback(function () {// rollback all  transcations in this service
							logger.info("Error: Transaction rolledback.");
							con.release(transactionConn, logger);
						});
						callback(err);
					} else {
						logger.debug("Activate Student Sucesssfull. Row count is: " + result.affectedRows);
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
						callback(null, result);
					}
				});
			}
		});
	};

	//
	module.exports.checkExistingStudent = async function (userId, psuedonym, rosterId, con, logger, callback) {
		logger.debug('Enter rosterDAO ,checkExistingStudent with User Id:' + userId + ' ,rosterId: ' + rosterId + ' and psuedonym :' + psuedonym);
		var rosterObj = {};
		var resultJSONArray = [];
		var resultJSON = {};
		var reportVal = 0;
		var getIdforUserNameQuery = "SELECT ID FROM ELM_STUDENTS" +
			" WHERE USERNAME='" + psuedonym + "';";
		var transactionConn;
		try {
			transactionConn = await con.getConnectionSync();
		} catch (conErr) {
			logger.error("Error occurred in checkExistingStudent while getting a connection: ", conErr.stack);
			return (callback(conErr));
		}
		transactionConn.beginTransaction(function (errTrans) {//start transaction
			if (errTrans) {
				con.release(transactionConn, logger);
				callback("Error in transaction: checkExixtingStudent.");
			} else {
				var studentCountQry = "select COUNT(STUDENT_ID) as Count from ROSTER_STUDENT where ROSTER_ID=? ;";
				//Check Number of students in the Roster - Max Possible count 99
				transactionConn.query(studentCountQry, rosterId, function (errCount, countResult) {
					if (errCount) {
						logger.error('Error in getIdforUserNameQuery :' + errCount);
						con.release(transactionConn, logger);
						callback(errCount);
					} else {
						if (countResult && countResult[0] && countResult[0].Count >= 99) {
							logger.debug("Max Student Count Reached: " + countResult[0].Count);
							rosterObj.errorMsg = "ERROR: Selected Roster already has 99 students, cant add more.";
							rosterObj.addStudentFlag = false;
							con.release(transactionConn, logger);
							callback(null, rosterObj);
						} else {
							//Query if the student name is valid and if present inside the same roster table
							transactionConn.query(getIdforUserNameQuery, function (errId, result1) {
								if (errId) {
									logger.error('Error in getIdforUserNameQuery :' + errId);
									con.release(transactionConn, logger);
									callback(errId);
								} else {
									// If no rows are retreived then No valid username exits with the given name
									if (result1.length == 0) {
										logger.debug("Invalid  psuedonym: " + psuedonym);
										rosterObj.errorMsg = "ERROR: Pseudonym <b>" + psuedonym + "</b> is not in use";
										rosterObj.addStudentFlag = false;
										con.release(transactionConn, logger);
										callback(null, rosterObj);
									}
									else {
										try {
											logger.info("Valid Username exists with the psuedonym and its ID is: " + result1[0].ID);
											//get the other rosternames and IDs in which psuedonym already exists for the userId
											var studentId = result1[0].ID;
											var getOtherRostersQuery = "SELECT ID,ROSTER_NAME," +
												"(SELECT count(stdtest.STUDENT_ID) FROM STUDENT_TESTS stdtest WHERE stdtest.ISCOMPLETE=1 AND stdtest.STUDENT_ID=" + studentId + " ) AS VIEW_REPORT " +
												" FROM ELM_ROSTERS" +
												" WHERE ID IN (SELECT DISTINCT(ROSTER_ID) FROM ROSTER_STUDENT WHERE STUDENT_ID=" + studentId + " AND ACTIVEFLAG=1 AND CREATED_USER=" + userId + ");"

											transactionConn.query(getOtherRostersQuery, function (errOther, result2) {
												if (errOther) {
													logger.error('Error in getOtherRostersQuery :' + errOther);
													con.release(transactionConn, logger);
													callback(errOther);
												} else {
													if (result2 != null && result2.length > 0) {
														reportVal = result2[0].VIEW_REPORT;
														if (result2.length >= 1) {
															for (var i = 0; i < result2.length; i++) {

																if (result2[i].ID == rosterId) {
																	logger.info("Psuedonym already exists in Roster ");
																	rosterObj.errorMsg = "ERROR: Pseudonym <b>" + psuedonym + "</b> is already enrolled in your class.";
																	break;
																}
																if (i != 0) {
																	resultJSONArray.push(rosterObj);
																	rosterObj = {};
																}
																rosterObj.ROSTER_ID = result2[i].ID;
																rosterObj.ROSTER_NAME = result2[i].ROSTER_NAME;
																if (i == result2.length - 1) {
																	resultJSONArray.push(rosterObj);
																}

															}
															if (rosterObj.errorMsg != null) {
																rosterObj.addStudentFlag = false;
																con.release(transactionConn, logger);
																callback(null, rosterObj);

															} else {
																try {
																	// insert the psuedonym into the roster if not exists else update active flag from false to true 
																	var insertPsuedonymQuery = "INSERT INTO ROSTER_STUDENT(STUDENT_ID,ROSTER_ID,CREATED_USER,MODIFIED_USER)" +
																		" VALUES(" + studentId + "," + rosterId + "," + userId + "," + userId + ") ON DUPLICATE KEY UPDATE ACTIVEFLAG=1;"
																	transactionConn.query(insertPsuedonymQuery, function (errStud, result3) {
																		if (errStud) {
																			transactionConn.rollback(function () {// rollback all  transcations in this service
																				logger.info("Error: Transaction rolledback.");
																				con.release(transactionConn, logger);
																			});
																			logger.error('Error in insertPsuedonymQuery :' + errStud);
																			callback(errStud);
																		} else {
																			logger.debug("Inserted the student " + studentId + " into the roster successfully. Affected rows :" + result3.length);
																		}
																	});
																	resultJSON.rosterNames = resultJSONArray;
																	resultJSON.addStudentFlag = true;
																	resultJSON.studentId = studentId;
																	resultJSON.studentName = psuedonym;
																	resultJSON.reportVal = reportVal;
																	logger.debug("List of rosterNames of pseudonym: " + JSON.stringify(resultJSON));
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
																	callback(null, resultJSON);
																} catch (e) {
																	transactionConn.rollback(function () {// rollback all  transcations in this service
																		logger.info("Error: Transaction rolledback.");
																		con.release(transactionConn, logger);
																	});
																	logger.error("Error occured while parsing resultset(result3)/while inserting pseudonym into roster: ", e.stack);
																	callback(e);
																}
															}
														} else {
															try {
																logger.info("The psuedonym " + psuedonym + " does not exist in any roster class");
																// insert the psuedonym into the roster with rosterId
																var insertExistingStudentQuery = "INSERT INTO ROSTER_STUDENT(STUDENT_ID,ROSTER_ID,CREATED_USER,MODIFIED_USER)" +
																	" VALUES(" + studentId + "," + rosterId + "," + userId + "," + userId + ") ON DUPLICATE KEY UPDATE ACTIVEFLAG=1;"
																transactionConn.query(insertExistingStudentQuery, function (errExist, result4) {
																	if (errExist) {
																		logger.error('Error in insertExistingStudentQuery :' + errExist);
																		transactionConn.rollback(function () {// rollback all  transcations in this service
																			logger.info("Error: Transaction rolledback.");
																			con.release(transactionConn, logger);
																		});
																		callback(errExist);
																	} else {
																		con.release(transactionConn, logger);
																		logger.debug("Inserted the student " + studentId + " into the roster successfully. Affected rows :" + result4.length);
																	}
																});
																rosterObj.rosterNames = [];
																rosterObj.addStudentFlag = true;
																rosterObj.studentId = studentId;
																rosterObj.studentName = psuedonym;
																rosterObj.reportVal = reportVal;
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
																callback(null, rosterObj);
															} catch (e1) {
																transactionConn.rollback(function () {// rollback all  transcations in this service
																	con.release(transactionConn, logger);
																	logger.info("Error: Transaction rolledback.");
																});
																logger.error("Error occured while parsing resultset(result4)/while inserting Student into roster : ", e1.stack);
																callback(e1);
															}
														}
													}
												}


											});
										} catch (e2) {
											transactionConn.rollback(function () {// rollback all  transcations in this service
												con.release(transactionConn, logger);
												logger.info("Error: Transaction rolledback.");
											});
											logger.error("Error occured while parsing resultset(result2)/while retreiving other rosterNames for the student: ", e2.stack);
											callback(e2);
										}
									}

								}
							});

						}
					}

				});
			}
		});
	};


	// Deletes a Student associated with the Roster - Using UserId, RosterId & StudentId
	module.exports.deleteStudentFromRoster = async function (userId, rosterId, studentId, con, logger, callback) {
		var transactionConn;
		try {
			transactionConn = await con.getConnectionSync();
		} catch (conErr) {
			logger.error("Error occurred in deleteStudentFromRoster while getting a connection: ", conErr.stack);
			return (callback(conErr));
		}
		transactionConn.beginTransaction(function (errTrans) {//start transaction
			if (errTrans) {
				con.release(transactionConn, logger);
				callback("Error in transaction: deleteStudentFromRoster.");
			} else {
				logger.info('Enter rosterDAO, deleteStudentFromRoster  with User Id:' + userId + ' and Roster Id :' + rosterId + ' and Student Id :' + studentId);
				// Setting student to Inactive state on delete of student in that Roster
				var deleteStudentQuery = "UPDATE ELM_ROSTERS rostr " +
					"INNER JOIN ROSTER_STUDENT stud on rostr.ID=stud.ROSTER_ID " +
					"SET stud.ACTIVEFLAG=0," +
					"stud.MODIFIED_USER=" + userId + " " +
					"WHERE rostr.USER_ID=" + userId + " " +
					"AND rostr.ID=" + rosterId + " " +
					"AND stud.STUDENT_ID =" + studentId + ";";
				//Soft Delete the Student associated with the roster
				transactionConn.query(deleteStudentQuery, function (err, result) {
					if (err) {
						logger.error('Error in deleteStudentQuery :' + err);
						transactionConn.rollback(function () {// rollback all  transcations in this service
							con.release(transactionConn, logger);
							logger.info("Error: Transaction rolledback.");
						});
						callback(err);
					} else {
						try {
							//After deleting the student,Update the roster student Length feild
							//var updateRosterLengthQuery = "UPDATE ELM_ROSTERS SET LENGTH = IF(LENGTH>0, LENGTH-1, 0) " +
							//"WHERE USER_ID = " + userId + " AND ID = " + rosterId + ";";
							if (result.changedRows > 0) {
								// transactionConn.query(updateRosterLengthQuery, function (error, result1) {
								// 	if (error) {
								// 		logger.error('Error in updateRosterLengthQuery:' + rosterId);
								// 		transactionConn.rollback(function () {// rollback all  transcations in this service
								// 			logger.info("Error: Transaction rolledback.");
								// 		});
								// 		callback(error);
								// 	} else {
								//logger.debug("Update Roster Length Successfull. Row count is: " + result1.changedRows);
								transactionConn.commit(function (commitErr) {// commit the whole transcation if successfull
									if (commitErr) {
										transactionConn.rollback(function () {// rollback all  transcations in this service
											con.release(transactionConn, logger);
											throw commitErr;
										});
									} else {
										con.release(transactionConn, logger);
									}
								});
								callback(null, result);
							}
							//});
						}
						catch (e) {
							transactionConn.rollback(function () {// rollback all  transcations in this service
								con.release(transactionConn, logger);
								logger.info("Error: Transaction rolledback.");
							});
							logger.error("Error occurred while updating roster length/ parsing resultset(result) : " + e.stack);
							callback(e);
						}
					}
				});
			}
		});
	};

	module.exports.getUserIdFromEmail = function (email, con, logger, callback) {
		logger.info("Enter rosterDAO, getUserIdFromEmail with emailId: ", email);
		var getUserFromEmailQuery = "SELECT USERID FROM ELM_USER users " +
			"WHERE users.EMAIL='" + email + "';";

		con.query(getUserFromEmailQuery, function (err, result) {
			if (err) {
				logger.error('Error at getUserFromEmailQuery :' + err);
				callback(err);
			} else {
				logger.debug("Get UserId From Email successfull. Row count is: " + result);
				callback(null, result);
			}
		});
	};


	// get assigned tests by userId

	module.exports.getAssignedTests = function (userId, con, logger, callback) {
		var resultJSON = {};
		var resultJSONArray = [];
		logger.info('Enter rosterDAO, getAssignedTests for User Id:' + userId);
		var resultJsonArray = {};
		// Get all the students assigned to a test
		var getAssignedStdsQuery = "SELECT stdtests.STUDENT_ID,stdtests.ACTIVE_TEST_ID," +
			"(SELECT elmtst.COMPANION_ID FROM ELM_TESTS elmtst WHERE elmtst.ACTIVE_TEST_ID=stdtests.ACTIVE_TEST_ID AND elmtst.ISACTIVE=1) AS COMPANION_ID," +
			"elmtest.ID,stdtests.ROSTER_ID," +
			"stdtests.TEST_VERSION,elmtest.TEST_TITLE," +
			"pswd.PASSWORD,stdtests.LOCATER_PASSWORD_ID AS PASSWORD_ID,elmstds.USERNAME," +
			"DATE_FORMAT(stdtests.DUE_DATE,'%a %b %e') AS DUE_DATE,DATE_FORMAT(stdtests.DUE_TIME,'%l   %p') AS DUE_TIME," +
			"DATE_FORMAT(stdtests.DUE_DATE,'%c/%e/%Y') AS DUE_TIMESTAMP,DATE_FORMAT(stdtests.DUE_TIME,'%r') AS DUE_HOURS," +
			"stdtests.ISCOMPLETE,stdtests.NOTE_TO_SELF,stdtests.NOTE_TO_ELM," +
			"(SELECT count(stdtst.STUDENT_ID) FROM STUDENT_TESTS stdtst WHERE stdtst.ISCOMPLETE=1 AND stdtst.STUDENT_ID=stdtests.STUDENT_ID) AS VIEW_REPORT," +
			"(SELECT  count(ques.ID) FROM ELM_QUESTIONS ques WHERE ques.TEST_ID=stdtests.ASSIGNED_TEST_ID " +
			"AND ques.QUESTION_TYPE!='multipart') AS NOOFQUESTIONS," +
			"stdtests.CREATED_USER,stdtests.ASSIGNED_TEST_ID " +
			"FROM STUDENT_TESTS stdtests " +
			"LEFT JOIN LOCATER_PASSWORD pswd ON pswd.ID=stdtests.LOCATER_PASSWORD_ID " +
			"LEFT JOIN ELM_TESTS elmtest ON elmtest.ID=stdtests.ASSIGNED_TEST_ID " +
			"LEFT JOIN ELM_QUESTIONS questions ON questions.TEST_ID=elmtest.ID " +
			"LEFT JOIN ELM_STUDENTS elmstds ON elmstds.ID=stdtests.STUDENT_ID " +
			"WHERE stdtests.CREATED_USER=" + userId + " " +
			"AND elmtest.ISPUBLIC=1 AND stdtests.STUDENT_ID IN " +
			"(SELECT STUDENT_ID FROM ROSTER_STUDENT WHERE ACTIVEFLAG=1 AND ROSTER_ID=stdtests.ROSTER_ID) " +
			"GROUP BY stdtests.LOCATER_PASSWORD_ID,elmtest.ID,elmtest.TEST_TITLE,stdtests.ROSTER_ID,stdtests.STUDENT_ID;";
		con.query(getAssignedStdsQuery, function (err, result) {
			if (err) {
				logger.error('Error in getAssignedStdsQuery :' + err);
				callback(err);
			} else {
				try {
					logger.debug('GetAssignedStdsbased on Tests Successfull. Row Count is: ' + result.length);
					if (result != null && result.length > 0) {

						var prevPassword = result[0].PASSWORD_ID;
						for (var i = 0; i < result.length; i++) {
							if (prevPassword != result[i].PASSWORD_ID || i == 0) {
								prevPassword = result[i].PASSWORD_ID;
								var testObj = {};
								var studentjsonArray = [];
								testObj.ID = result[i].ID;
								testObj.TEST_TITLE = result[i].TEST_TITLE;
								testObj.PASSWORD = result[i].PASSWORD;
								testObj.PASSWORD_ID = result[i].PASSWORD_ID;
								testObj.CREATED_USER = result[i].CREATED_USER;
								if (result[i].DUE_DATE != null) {
									testObj.DUE_DATE = result[i].DUE_DATE;
									testObj.DUE_TIME = result[i].DUE_TIME;
									testObj.DUE_TIMESTAMP = result[i].DUE_TIMESTAMP;
									testObj.DUE_HOURS = result[i].DUE_HOURS;
								} else {
									testObj.DUE_DATE = "";
									testObj.DUE_TIME = "";
									testObj.DUE_TIMESTAMP = "";
									testObj.DUE_HOURS = "";
								}
								testObj.NOTE_TO_SELF = result[i].NOTE_TO_SELF;
								testObj.NOTE_TO_ELM = result[i].NOTE_TO_ELM;
								testObj.NOOFQUESTIONS = result[i].NOOFQUESTIONS;
								var incompletecount = 0;
								var completedCount = 0;
								for (var j = 0; j < result.length; j++) {
									var studentJsonObj = {};
									if (result[i].PASSWORD_ID == result[j].PASSWORD_ID) {
										studentJsonObj.STUDENT_ID = result[j].STUDENT_ID;
										studentJsonObj.USERNAME = result[j].USERNAME;
										studentJsonObj.ISCOMPLETE = result[j].ISCOMPLETE;
										studentJsonObj.ROSTER_ID = result[j].ROSTER_ID;
										studentJsonObj.TEST_VERSION = result[j].TEST_VERSION;
										studentJsonObj.ACTIVE_TEST_ID = result[j].ACTIVE_TEST_ID;
										studentJsonObj.COMPANION_ID = result[j].COMPANION_ID;
										studentJsonObj.ASSIGNED_TEST_ID = result[j].ASSIGNED_TEST_ID;
										studentJsonObj.VIEW_REPORT = result[j].VIEW_REPORT;

										if (result[j].ISCOMPLETE) {
											completedCount = completedCount + 1;
										} else {
											incompletecount = incompletecount + 1;
										}
										studentjsonArray.push(studentJsonObj);
									}
								}
								testObj.incompleteCount = incompletecount;
								testObj.studentsCompleted = completedCount;
								testObj.studentDetails = studentjsonArray;
								resultJSONArray.push(testObj);
							}

						}
						resultJSON = resultJSONArray;
						callback(null, resultJSON);
					}
					else {
						logger.info("No tests assigned retreived for the user");
						callback(null, resultJSON);
					}
				} catch (e) {
					logger.error("Error occured while parsing resultset(result) /setting the resultJSON : ", e.stack);
					callback(e);
				}
			}
		});
	};


	//	Get test by username, password
	module.exports.getStudentTest = function (userName, password, con, logger, callback) {
		try {
			var resultJSON = {};
			var resultJSONArray = [];
			var lettersAndSpaceRegex = /^[a-zA-Z\s]*$/;
			if (!lettersAndSpaceRegex.test(userName) || password == null || password == "") {
				logger.info("username has values other than letters and spaces or password is null");
				resultJSON.error = "ivalidCredsFormat";
				callback(null, resultJSON);
			} else {
				logger.info('DAO  Retrieving Tests for student:', userName);
				var resultJsonArray = {};
				var queryString = "SELECT * from ELM_STUDENTS WHERE USERNAME = '" + userName + "';";
				con.query(queryString, function (err, result) {
					if (err) {
						logger.error('Error at getStudentTest :' + err);
						callback(err);
					} else {
						logger.debug('getStudentTest Row Count ' + result.length);
						if (result != null && result.length == 1) {
							var studentId = {};
							studentId = result[0].ID;
							var queryString2 = "SELECT ACTIVE_TEST_ID AS TEST_ID FROM STUDENT_TESTS where STUDENT_ID = " + studentId +
								" and LOCATER_PASSWORD_ID = (SELECT lp.ID FROM LOCATER_PASSWORD lp WHERE lp.PASSWORD='" + password +
								"' AND lp.USER_ID = (SELECT rost.USER_ID FROM ELM_ROSTERS rost WHERE rost.ID = (SELECT ROSTER_ID FROM ROSTER_STUDENT WHERE STUDENT_ID='" + studentId +
								"' limit 1) limit 1) limit 1) limit 1;";
							logger.debug("queryString2: ", queryString2);
							con.query(queryString2, function (err2, result2) {
								if (err2) {
									logger.error('Error at getStudentTest: ' + err2);
									callback(err2);
								} else {
									if (result2 != null && result2.length == 1) {
										var testId = {};
										testId = result2[0].ACTIVE_TEST_ID;
										var queryString3 = "SELECT ACTIVE_TEST_ID AS TEST_ID FROM STUDENT_TESTS WHERE STUDENT_ID = " + studentId +
											" AND LOCATER_PASSWORD_ID = (SELECT lp.ID FROM LOCATER_PASSWORD lp WHERE lp.PASSWORD='" + password +
											"' AND lp.USER_ID = (SELECT rost.USER_ID FROM ELM_ROSTERS rost WHERE rost.ID = (SELECT ROSTER_ID FROM ROSTER_STUDENT WHERE STUDENT_ID='" + studentId +
											"' limit 1) limit 1) limit 1) limit 1;";
										logger.debug("queryString2: ", queryString3);
										con.query(queryString3, function (err3, result3) {
											if (err3) {
												logger.error('Error at getStudentTest :' + err3);
												callback(err3);
											} else {
												if (result3 != null && result3.length == 1) {
													logger.debug("result2: ", result3);
													callback(null, result3);
												} else {
													resultJSON.error = "noTest";
													callback(null, resultJSON);
												}
											}
										});
									} else {
										resultJSON.error = "multipleTests";
										callback(null, resultJSON);
									}
								}
							});
						} else {
							resultJSON.error = "noUsername"
							callback(null, resultJSON)
						}
					}
				});
			}
		}
		catch (e) {
			logger.error("Error occurred in getStudentTest: ", e);
			callback(e);
		}
	};



	//	Assign test to rosters/students
	module.exports.checkTestForStudent = async function (userId, testObject, con, logger, callback) {
		logger.info('Enter rosterDAO, checkTestForStudent by userId: ' + userId);
		var password = testObject.password;
		var testId = testObject.ASSIGNED_TEST_ID;
		var resultObj = {};
		var studentList = [];
		var studentsLength = 0;
		var transactionConn;
		try {
			transactionConn = await con.getConnectionSync();
		} catch (conErr) {
			logger.error("Error occurred in checkTestForStudent while getting a connection: ", conErr.stack);
			return (callback(conErr));
		}
		transactionConn.beginTransaction(function (errTrans) {//start transaction
			if (errTrans) {
				con.release(transactionConn, logger);
				callback("Error in transaction: checkTestForStudent.");
			} else {
				var getPasswordQuery = "SELECT PASSWORD FROM LOCATER_PASSWORD WHERE USER_ID=" + userId + " AND PASSWORD='" + password + "';";
				transactionConn.query(getPasswordQuery, function (err, result1) {
					if (err) {
						transactionConn.rollback(function () {// rollback all  transcations in this service
							logger.info("Error: Transaction rolledback.");
							con.release(transactionConn, logger);
						});
						logger.error('Error in getPasswordQuery :' + err);
						callback(err);
					} else {
						try {
							// If any password retreived, send password existing error msg
							logger.info("GetPasswordQuery sucessfull. Row count is: " + result1.length);
							if (result1 != null && result1.length > 0) {
								resultObj.passwordExitsFlag = true;
								resultObj.password = password;
								logger.info("The password entered is already in use");
								con.release(transactionConn, logger);
								callback(null, resultObj);
							}
							else {
								//If no password retreived , Insert the new password for the userId
								var insertNewPswdQuery = "INSERT INTO LOCATER_PASSWORD(USER_ID,PASSWORD) VALUES(" + userId + ",'" + password + "');";

								transactionConn.query(insertNewPswdQuery, function (err, result2) {
									if (err) {
										logger.error('Error in insertNewPswdQuery :' + err);
										transactionConn.rollback(function () {// rollback all  transcations in this service
											con.release(transactionConn, logger);
											logger.info("Error: Transaction rolledback.");
										});
										callback(err);
									} else {
										try {
											logger.info("Successfully inserted new password: " + result2.affectedRows)
											var passwordId = result2.insertId;
											var stdlength = Object.keys(testObject.rosterStudentDetails).length;

											// Check if student with same testId is present
											for (var i = 0; i < Object.keys(testObject.rosterStudentDetails).length; i++) {
												var studentId = testObject.rosterStudentDetails[i].studentId;
												var rosterId = testObject.rosterStudentDetails[i].rosterId;
												var getTestsForStudentQuery = "SELECT DISTINCT stdtest.STUDENT_ID," +
													"std.USERNAME FROM STUDENT_TESTS stdtest " +
													"INNER JOIN ELM_STUDENTS std ON stdtest.STUDENT_ID=std.ID " +
													"WHERE stdtest.ASSIGNED_TEST_ID=" + testId + " AND stdtest.STUDENT_ID=" + studentId + " AND stdtest.ROSTER_ID=" + rosterId + ";";
												transactionConn.query(getTestsForStudentQuery, function (err, result3) {
													if (err) {
														transactionConn.rollback(function () {// rollback all  transcations in this service
															con.release(transactionConn, logger);
															logger.info("Error: Transaction rolledback.");
														});
														logger.error('Error while retreiving students for the assigned test :' + err);
														callback(err);
													} else {
														try {
															if (result3.length > 0) {
																studentList.push({
																	studentName: result3[0].USERNAME, studentId: result3[0].STUDENT_ID,
																});
															}
															if (0 === --stdlength) {
																// If student with duplicate testId are retreived send Error
																if (studentList.length > 0) {
																	resultObj.errorMsg = "ERROR:One or more of the following students are already assigned the test.";
																	resultObj.studentDetails = studentList;
																	logger.info("One or more students are already assigned same Test");
																	transactionConn.rollback(function () {// rollback all  transcations in this service
																		con.release(transactionConn, logger);
																		logger.info("Error: Transaction rolledback.");
																	});
																	//callback(null, resultObj);

																} else {
																	// Send success
																	resultObj.success = 'Yes';
																	resultObj.passwordId = passwordId;
																	//getStdActiveTestId(userId, testObject, con, logger, callback);
																	logger.info("No students with same TestId");
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
																}

																callback(null, resultObj);
															}
														} catch (e) {
															transactionConn.rollback(function () {// rollback all  transcations in this service
																con.release(transactionConn, logger);
																logger.info("Error: Transaction rolledback.");
															});
															logger.error("Error occurred while parsing resultset(result3): ", e.stack);
															callback(e);
														}
													}
												});
											}
										} catch (e) {
											transactionConn.rollback(function () {// rollback all  transcations in this service
												con.release(transactionConn, logger);
												logger.info("Error: Transaction rolledback.");
											});
											logger.error("Error occurred while parsing resultset(result2)/ while reteiving Tests with same TestId for a student: ", e.stack);
											callback(e);
										}
									}
								});
							}
						} catch (e) {
							transactionConn.rollback(function () {// rollback all  transcations in this service
								con.release(transactionConn, logger);
								logger.info("Error: Transaction rolledback.");
							});
							logger.error("Error occurred while parsing resultset(result1)/getting password for pswdId: ", e.stack);
							callback(e);
						}
					}
				});
			}
		});
	};

	module.exports.assignTest = async function (userId, testObject, con, logger, callback) {
		var resultObj = {};
		var password = testObject.password;
		var transactionConn;
		try {
			transactionConn = await con.getConnectionSync();
		} catch (conErr) {
			logger.error("Error occurred in assignTest while getting a connection: ", conErr.stack);
			return (callback(conErr));
		}
		transactionConn.beginTransaction(function (errTrans) {//start transaction
			if (errTrans) {
				con.release(transactionConn, logger);
				callback("Error in transaction: Assign Test.");
			} else {
				var getPasswordQuery = "SELECT PASSWORD FROM LOCATER_PASSWORD WHERE USER_ID=" + userId + " AND PASSWORD='" + password + "';";
				transactionConn.query(getPasswordQuery, function (err, result1) {
					if (err) {
						transactionConn.rollback(function () {// rollback all  transcations in this service
							con.release(transactionConn, logger);
							logger.info("Error: Transaction rolledback.");
						});
						logger.error('Error in getPasswordQuery :' + err);
						callback(err);
					} else {
						try {
							// If any password retreived, send password existing error msg
							logger.info("GetPasswordQuery sucessfull. Row count is: " + result1.length);
							if (result1 != null && result1.length > 0) {
								resultObj.passwordExitsFlag = true;
								resultObj.password = password;
								logger.info("The password entered is already in use");
								con.release(transactionConn, logger);
								callback(null, resultObj);
							} else {
								// getStudentTestDetails to check for already existing version for stds for same test
								insertPswdForAssignedTest(userId, testObject, transactionConn, logger, callback);
							}
						} catch (e) {
							logger.error("Error occurred while parsing resultset/resultObj: ", e.stack);
							con.release(transactionConn, logger);
							callback(e);
						}
					}
				});
			}
		});

	}


	function insertPswdForAssignedTest(userId, testObject, transactionConn, logger, callback) {
		var resultObj = {};
		var password = testObject.password;
		var insertPswdQuery = "INSERT INTO LOCATER_PASSWORD (USER_ID,PASSWORD) VALUES(" + userId + ",'" + password + "');";
		transactionConn.query(insertPswdQuery, function (err, result) {
			if (err) {
				transactionConn.rollback(function () {// rollback all  transcations in this service
					transactionConn.release();
					logger.info("Error: Transaction rolledback.");
				});
				logger.error('Error in insertPswdQuery :' + err);
				callback(err);
			} else {
				try {
					if (result != null && result.affectedRows > 0) {
						var newPwdId = result.insertId;
						/* assigning version for all the students selected.
						If the TestdId is EVEN then students with even Std IDs are assigned Active test and 
						students with odd std Id's are assigned companion test
						If the TestId is ODD then students with even stdID's are assigned Active Tests and
						students with odd Id's are assigned companion Tests
						*/
						var studentsLength = Object.keys(testObject.rosterStudentDetails).length;
						for (var i = 0; i < studentsLength; i++) {
						//	if (parseInt(testObject.rosterStudentDetails[i].studentId) % 2 == 0) {
								testObject.rosterStudentDetails[i].ACTIVE_TEST_ID = testObject.ACTIVE_TEST_ID;
								testObject.rosterStudentDetails[i].TEST_VERSION = testObject.TEST_VERSION;
							// } else {
							// 	testObject.rosterStudentDetails[i].ACTIVE_TEST_ID = testObject.COMPANION_ID;
							// 	testObject.rosterStudentDetails[i].TEST_VERSION = (testObject.TEST_VERSION == 'A' ? 'B' : 'A');
							// }
						}
						assignTestToStudents(userId, newPwdId, testObject, transactionConn, logger, callback);
					}
					else {
						transactionConn.rollback(function () {// rollback all  transcations in this service
							transactionConn.release();
							logger.info("Error: Transaction rolledback.");
						});
						logger.error('New password not inserted :' + err);
						callback(null, resultObj);
					}
				} catch (e) {
					transactionConn.release();
					logger.error("Error occurred while versioning for the students : ", e.stack);
					callback(e);
				}

			}
		});
	}



	function assignTestToStudents(userId, newPwdId, testObject, transactionConn, logger, callback) {
		// Inserting the students and their assigned tests
		var resultObj = {};
		var studentsLength = 0;
		var testVersion;
		var uniqueStudentIdList = [];
		logger.info('Enter assignTestToStudents with userId: ' + userId + " and elmtest ID: " + testObject.testId);
		// For each student assigned to the Test inserting the studentTest record into STUDENT_TEST
		studentsLength = Object.keys(testObject.rosterStudentDetails).length;
		for (var i = 0; i < studentsLength; i++) {
			try {
				//Last iteration of for loop, we need to commit, but the last student id might already have been aaded,
				// for this case we simply run select 1 query, when insertLast is false and isLast is true.
				var insertLast = false;
				var isLast = false;
				if (i === studentsLength - 1) {
					isLast = true;
					if (!_.contains(uniqueStudentIdList, testObject.rosterStudentDetails[i].studentId)) {
						insertLast = true;
					}
				} else {
					insertLast = false;
					isLast = false;
				}
				// For the same student ID, 2 different student tests cant be added with same password
				if (!_.contains(uniqueStudentIdList, testObject.rosterStudentDetails[i].studentId) || isLast) {
					uniqueStudentIdList.push(testObject.rosterStudentDetails[i].studentId)
					var insertStudentTestsQuery;
					if (!isLast) {
						if (testObject.dueDate == '' || testObject.dueTime == '') {
							insertStudentTestsQuery = "INSERT INTO STUDENT_TESTS(ACTIVE_TEST_ID, STUDENT_ID, TEST_VERSION, ISCOMPLETE, ROSTER_ID, LOCATER_PASSWORD_ID, NOTE_TO_SELF, NOTE_TO_ELM, CREATED_USER, MODIFIED_USER,ASSIGNED_TEST_ID)" +
								"VALUES(" + testObject.rosterStudentDetails[i].ACTIVE_TEST_ID + "," +
								"" + testObject.rosterStudentDetails[i].studentId + ",'" + testObject.rosterStudentDetails[i].TEST_VERSION +
								"', 0, " + testObject.rosterStudentDetails[i].rosterId + ", " +
								"" + newPwdId + "," +
								"'" + testObject.selfNote + "'," +
								"'" + testObject.elmNote + "'," + userId + "," + userId + "," + testObject.ASSIGNED_TEST_ID + ");";
						} else {
							insertStudentTestsQuery = "INSERT INTO STUDENT_TESTS(ACTIVE_TEST_ID,STUDENT_ID,TEST_VERSION,ISCOMPLETE,ROSTER_ID,DUE_DATE,DUE_TIME,LOCATER_PASSWORD_ID,NOTE_TO_SELF,NOTE_TO_ELM,CREATED_USER,MODIFIED_USER,ASSIGNED_TEST_ID)" +
								"VALUES(" + testObject.rosterStudentDetails[i].ACTIVE_TEST_ID + "," +
								"" + testObject.rosterStudentDetails[i].studentId + ",'" + testObject.rosterStudentDetails[i].TEST_VERSION +
								"', 0," + testObject.rosterStudentDetails[i].rosterId + "," +
								"'" + testObject.dueDate + "'," +
								"'" + testObject.dueTime + "'," +
								"" + newPwdId + "," +
								"'" + testObject.selfNote + "'," +
								"'" + testObject.elmNote + "'," + userId + "," + userId + "," + testObject.ASSIGNED_TEST_ID + ");";
						}
					} else {
						//Last iteration of for loop, we need to commit, but the last student id might already have been aaded,
						// for this case we simply run select 1 query.
						if (insertLast) {
							if (testObject.dueDate == '' || testObject.dueTime == '') {
								insertStudentTestsQuery = "INSERT INTO STUDENT_TESTS(ACTIVE_TEST_ID, STUDENT_ID, TEST_VERSION, ISCOMPLETE, ROSTER_ID, LOCATER_PASSWORD_ID, NOTE_TO_SELF, NOTE_TO_ELM, CREATED_USER, MODIFIED_USER,ASSIGNED_TEST_ID)" +
									"VALUES(" + testObject.rosterStudentDetails[i].ACTIVE_TEST_ID + "," +
									"" + testObject.rosterStudentDetails[i].studentId + ",'" + testObject.rosterStudentDetails[i].TEST_VERSION +
									"', 0, " + testObject.rosterStudentDetails[i].rosterId + ", " +
									"" + newPwdId + "," +
									"'" + testObject.selfNote + "'," +
									"'" + testObject.elmNote + "'," + userId + "," + userId + "," + testObject.ASSIGNED_TEST_ID + ");";
							} else {
								insertStudentTestsQuery = "INSERT INTO STUDENT_TESTS(ACTIVE_TEST_ID,STUDENT_ID,TEST_VERSION,ISCOMPLETE,ROSTER_ID,DUE_DATE,DUE_TIME,LOCATER_PASSWORD_ID,NOTE_TO_SELF,NOTE_TO_ELM,CREATED_USER,MODIFIED_USER,ASSIGNED_TEST_ID)" +
									"VALUES(" + testObject.rosterStudentDetails[i].ACTIVE_TEST_ID + "," +
									"" + testObject.rosterStudentDetails[i].studentId + ",'" + testObject.rosterStudentDetails[i].TEST_VERSION +
									"', 0," + testObject.rosterStudentDetails[i].rosterId + "," +
									"'" + testObject.dueDate + "'," +
									"'" + testObject.dueTime + "'," +
									"" + newPwdId + "," +
									"'" + testObject.selfNote + "'," +
									"'" + testObject.elmNote + "'," + userId + "," + userId + "," + testObject.ASSIGNED_TEST_ID + ");";
							}
						} else {
							insertStudentTestsQuery = "select 1";
						}
					}
					transactionConn.query(insertStudentTestsQuery, function (err, result3) {
						if (err) {
							logger.error('Error in insertStudentTestsQuery :' + err);
							transactionConn.rollback(function () {// rollback all  transcations in this service
								transactionConn.release();
								logger.info("Error: Transaction rolledback.");
							});
							callback(err);
						} else {
							if (isLast) {
								logger.info("All the " + uniqueStudentIdList.length + " students inserted into STUDENT_TEST Sucessfully ");
								isLast = false; //This has to be set to false, else multiple commits and multiple callbacks occur.
								resultObj.success = 'Yes';
								sendNotificationMail(userId, newPwdId, testObject.elmNote, transactionConn, logger);
								transactionConn.commit(function (commitErr) {// commit the whole transcation if sucessfull
									if (commitErr) {
										transactionConn.rollback(function () {// rollback all  transcations in this service
											transactionConn.release();
											throw commitErr;
										});
									} else {
										transactionConn.release();
									}
								});
								callback(null, resultObj);
							}
						}
					});
				}
			} catch (e) {
				transactionConn.rollback(function () {// rollback all  transcations in this service
					transactionConn.release();
					logger.info("Error: Transaction rolledback.");
				});
				logger.error("Error occurred while inserting stds query: ", e.stack);
				callback(e);
			}
		}

	};

	function sendNotificationMail(userId, passwordId, elmNote, con, logger) {
		try {
			if (elmNote && elmNote != "") {
				getEmail(userId, con, logger, function (err, email) {
					if (err) {
						logger.error("GetEmail failed in sendNotificationMail" + err);
						return;
					} else {
						var mailContent = '<table style="width: 50%; word-wrap:break-word;table-layout: fixed;border-radius: 5px;border: 1px solid black;" >' +
							'<tr style="background-color:#dae8fc;text-align:center;vertical-align:top">' +
							'<th style="border: 1px solid black;" colspan="4"><span style="font-weight:bold;">ELM Notification - Roster Test Assignment</span></th></tr>' +
							'<tr><td style="font-weight: bold;border: 1px solid black;" colspan="2">ELM Notes</td><td style="border: 1px solid black;word-break:break-all;" colspan="2">' + elmNote + '</td></tr>' +
							'<tr><td style="font-weight: bold;border: 1px solid black;" colspan="2">From</td><td style="border: 1px solid black;" colspan="2">' + email + '</td></tr>' +
							'<tr><td style="font-weight: bold;border: 1px solid black;" colspan="2">Locater Password Id</td><td style="border: 1px solid black;" colspan="2">' + passwordId + '</td></tr>' +
							'</table>';
						var subject = "ELM Notification";
						mail.send(subject, mailContent, logger);

					}
				});
			}
		} catch (e) {
			logger.error("Send Notification Mail failed:" + e);
		}
	}

	// To insert/update/delete students for and assignedTest
	module.exports.saveEditAssignedTest = async function (userId, passwordObj, deleteStdObj, updateStdObj, insertStdObj, con, logger, callback) {
		var resultObj = {};
		var passwordId;
		resultObj.passwordExistsFlag = false;
		var pwdChange = passwordObj.passwordChange;
		var transactionConn;
		// check if changed password is already in use.
		try {
			transactionConn = await con.getConnectionSync();// creating new connection
			await transactionConn.beginTransactionSync();
			//check if the new password  already exists in LOCATER_PASSWORD table
			if (pwdChange == 'true') {
				var getPwdIdQuery = "SELECT PASSWORD FROM LOCATER_PASSWORD WHERE USER_ID=" + userId + " AND PASSWORD='" + passwordObj.newPassword + "';";
				var result1 = await transactionConn.querySync(getPwdIdQuery);//, function (err, result1) {
				if (result1 != null && result1.length > 0) {
					resultObj.passwordExistsFlag = true;
					resultObj.password = passwordObj.newPassword;
					logger.info("The password entered is already in use");
					con.release(transactionConn, logger);
					callback(null, resultObj);
				} else {
					var response = await checkStudentResponse(passwordObj.oldPasswordId, transactionConn, logger);
					if (response == true) {
						resultObj.responseExistsFlag = "true";
						con.release(transactionConn, logger);
						callback(null, resultObj);
					} else {
						// If password does not already exists Insert new password into LOCATER_PASSWORD table
						var newPswd = passwordObj.newPassword;
						var insertPwdQuery = "INSERT INTO LOCATER_PASSWORD(USER_ID,PASSWORD) VALUES(" + userId + ",'" + newPswd + "');";
						var result2 = await transactionConn.querySync(insertPwdQuery);
						if (result2 != null && result2.affectedRows > 0) {
							logger.debug("Successfully inserted new password: Row count is: " + result2.affectedRows);
							resultObj.passwordExitsFlag = false;
							passwordId = parseInt(result2.insertId);
							// delete Old password from LOCATER_PASSWORD table:
							var oldPwd = passwordObj.oldPasswordId;
							var deletePwdQuery = "DELETE FROM LOCATER_PASSWORD WHERE ID=" + parseInt(oldPwd);
							var result3 = await transactionConn.querySync(deletePwdQuery);
						} else {
							throw "No New Password Returned";
						}
					}
				}
			} else {
				logger.info("No password change");
				passwordId = parseInt(passwordObj.oldPasswordId);
			}
			var insertStdObjUpdated;
			//Remove duplicates from Insert student object.
			if(insertStdObj && insertStdObj != null && updateStdObj && updateStdObj != null) {
			insertStdObjUpdated = await removeDuplicateStudents(updateStdObj, insertStdObj);
			} else {
				insertStdObjUpdated = insertStdObj;
			}

			await deleteStudentTestDetails(userId, passwordId, passwordObj, deleteStdObj, transactionConn, logger);

			await updateStdTestDetails(userId, passwordId, passwordObj, updateStdObj, transactionConn, logger);

			await insertStudentTestDetails(userId, passwordId, passwordObj, insertStdObjUpdated, transactionConn, logger);

			await transactionConn.commitSync();

			if (passwordObj.elmNoteChange == 'true') {
				sendNotificationMail(userId, passwordId, passwordObj.elmNote, con, logger);
			}
			con.release(transactionConn, logger);
			callback(null, { "success": "Yes" });

		} catch (e) {
			try {
				await transactionConn.rollbackSync();
				logger.debug("saveEditAssignedTest: Rollbacked");
			} catch (e1) {
				con.release(transactionConn, logger);
				callback(e1);
			}

			con.release(transactionConn, logger);
            try {
			if (e.includes("DELETE REFERENCE ERROR")) {
				logger.info("Delete Referrence Error");
				callback(null, { Error: true, Message: "One or more selected students have already completed the test. Cannot Proceed." });
			} else {
				logger.error("Error occured at saveEditAssignedTest service: ", e.stack);
				callback(e);
			}
		} catch(e2) {
			logger.error("Error occured at saveEditAssignedTest service e2: ", e2.stack);
				callback(e2, { Error: true, Message: "Error assigning test" });
		}
		}
	}

	//Return the updated insert list without duplicates from updateStdObj
	async function removeDuplicateStudents(updateStdObj, insertStdObj) {
		var duplicateStudentIds = [];
		var insertStdObjUpdated = [];
		if (insertStdObj.length > 0) {
			for (var i = 0; i < updateStdObj.length; i++) {
				var stdId = updateStdObj[i].studentId;
				var stdObj = _.where(insertStdObj, { "studentId": stdId });
				if (stdObj && stdObj != null) {
					if (!_.contains(duplicateStudentIds, stdId))
						duplicateStudentIds.push(stdId);
				}
			}
			if (duplicateStudentIds.length > 0) {
				for (var j = 0; j < duplicateStudentIds.length; j++) {
					var studentId = duplicateStudentIds[j];
					insertStdObj = _.without(insertStdObj, _.findWhere(insertStdObj, { "studentId": studentId }));
				}
			}
		}
		return insertStdObj;
	}

	async function checkStudentResponse(passwordId, transactionConn, logger, callback) {
		try {
			var pwdId = parseInt(passwordId);
			var getStdResponseForPwd = "SELECT * FROM STUDENT_RESPONSE WHERE LOCATER_PASSWORD_ID=" + pwdId + ";";
			var result = await transactionConn.querySync(getStdResponseForPwd);
			if (result != null) {
				if (result.length > 0) {
					logger.info("One or more students had already started  test/completed test.");
					return true;
				} else {
					return false;
				}
			}
		} catch (e) {
			logger.error("Error occured at checkStudentResponse method: ", e.stack);
			throw e;
		}
	};

	async function updateStdTestDetails(userId, passwordId, passwordObj, updateStdObj, transactionConn, logger, callback) {
		// Updating all the students in UpdateStd Object
		try {
			var updateStdLength;
			if (updateStdObj != null && updateStdObj.length > 0) {
				updateStdLength = Object.keys(updateStdObj).length;
				var updateStdTestQuery;
				for (var i = 0; i < Object.keys(updateStdObj).length; i++) {
					if (updateStdObj[i].dueDate == '') {
						updateStdTestQuery = "UPDATE STUDENT_TESTS SET " +
							"ISCOMPLETE=" + updateStdObj[i].isComplete + "," +
							"DUE_DATE=" + null + "," +
							"DUE_TIME=" + null + "," +
							"LOCATER_PASSWORD_ID='" + passwordId + "'," +
							"NOTE_TO_SELF='" + updateStdObj[i].selfNote + "'," +
							"NOTE_TO_ELM='" + updateStdObj[i].elmNote + "'," +
							"CREATED_USER=" + updateStdObj[i].createdUser + "," +
							"MODIFIED_USER=" + userId + " WHERE ACTIVE_TEST_ID=" + updateStdObj[i].activeTestId + " AND STUDENT_ID=" + updateStdObj[i].studentId + " " +
							"AND ROSTER_ID=" + updateStdObj[i].rosterId + " AND LOCATER_PASSWORD_ID=" + passwordObj.oldPasswordId + ";";
					} else {
						updateStdTestQuery = "UPDATE STUDENT_TESTS SET " +
							"ISCOMPLETE=" + updateStdObj[i].isComplete + "," +
							"DUE_DATE='" + updateStdObj[i].dueDate + "'," +
							"DUE_TIME='" + updateStdObj[i].dueTime + "'," +
							"LOCATER_PASSWORD_ID='" + passwordId + "'," +
							"NOTE_TO_SELF='" + updateStdObj[i].selfNote + "'," +
							"NOTE_TO_ELM='" + updateStdObj[i].elmNote + "'," +
							"CREATED_USER=" + updateStdObj[i].createdUser + "," +
							"MODIFIED_USER=" + userId + " WHERE ACTIVE_TEST_ID=" + updateStdObj[i].activeTestId + " AND STUDENT_ID=" + updateStdObj[i].studentId + " " +
							"AND ROSTER_ID=" + updateStdObj[i].rosterId + " AND LOCATER_PASSWORD_ID=" + passwordObj.oldPasswordId + ";";
					}
					var result = await transactionConn.querySync(updateStdTestQuery);//, function (err, result) {
				}
			}
		} catch (e) {
			logger.error("Error occured in updateStdTestDetails. ", e.stack);
			throw e;
		}
	}

	async function insertStudentTestDetails(userId, passwordId, passwordObj, insertStdObj, transactionConn, logger) {
		// Inserting the new Students added into the assigned test
		try {
			if (insertStdObj != null && insertStdObj.length > 0) {
				let insertStdLength = Object.keys(insertStdObj).length;
				var insertStdTestQuery = "INSERT INTO STUDENT_TESTS(ACTIVE_TEST_ID,STUDENT_ID,TEST_VERSION,ISCOMPLETE,ROSTER_ID,DUE_DATE," +
					"DUE_TIME,LOCATER_PASSWORD_ID,NOTE_TO_SELF,NOTE_TO_ELM,CREATED_USER,MODIFIED_USER,ASSIGNED_TEST_ID) VALUES ?";
				var insertStdValues = [];
				var uniqueStudentIds = [];
				for (var i = 0; i < Object.keys(insertStdObj).length; i++) {
					if (!_.contains(uniqueStudentIds, insertStdObj[i].studentId)) {
						uniqueStudentIds.push(insertStdObj[i].studentId);
						var stdTesData = [nullIfEmpty(insertStdObj[i].activeTestId),
						nullIfEmpty(insertStdObj[i].studentId),
						nullIfEmpty(insertStdObj[i].testVersion),
							0, nullIfEmpty(insertStdObj[i].rosterId),
						nullIfEmpty(insertStdObj[i].dueDate),
						nullIfEmpty(insertStdObj[i].dueTime),
						nullIfEmpty(passwordId),
						nullIfEmpty(insertStdObj[i].selfNote),
						nullIfEmpty(insertStdObj[i].elmNote),
						nullIfEmpty(userId), nullIfEmpty(userId),
						nullIfEmpty(insertStdObj[i].assignedTestId)];

						insertStdValues.push(stdTesData);
					}
				}
				var rslt = await transactionConn.querySync(insertStdTestQuery, [insertStdValues]);
			}
		} catch (e) {
			logger.error("Error occured in insertStudentTestDetails. ", e.stack);
			throw e;
		}
	}

	async function deleteStudentTestDetails(userId, passwordId, passwordObj, deleteStdObj, transactionConn, logger) {
		try {
			var deleteStdLength;
			if (deleteStdObj != null && deleteStdObj.length > 0) {
				deleteStdLength = Object.keys(deleteStdObj).length;
				var deleteStdQuery = "";
				for (var i = 0; i < Object.keys(deleteStdObj).length; i++) {
					deleteStdQuery += "DELETE FROM STUDENT_TESTS WHERE ROSTER_ID=" + deleteStdObj[i].ROSTER_ID + " AND " +
						"ACTIVE_TEST_ID=" + deleteStdObj[i].ACTIVE_TEST_ID + " AND " +
						"STUDENT_ID=" + deleteStdObj[i].STUDENT_ID + " AND LOCATER_PASSWORD_ID=" + passwordObj.oldPasswordId + ";";
				}
				var dltRslt = await transactionConn.querySync(deleteStdQuery);
			}
		} catch (e) {
			if (e.code.includes("ER_ROW_IS_REFERENCED")) {
				throw "DELETE REFERENCE ERROR";
			}
			else {
				logger.error("Error occured at deleteStudentTestDetails. ", e.stack);
				throw e;
			}
		}
	}



//commenting for PII ph2 
	/* module.exports.getUserString = function (userId, con, logger, callback) {
		logger.info("In getUserString of rosterDAO");
		var getUserStringQuery = "SELECT STRING_VAL FROM ELM_USERSTRING WHERE USER_ID = ?";
		con.query(getUserStringQuery, userId, function (err, result) {
			try {
				if (err) {
					logger.error('Error at getUserStringQuery :' + err);
					callback(err);
				} else {
					if (result != null && result.length > 0) {
						var resultObj = JSON.parse(JSON.stringify(result));
						callback(null, resultObj[0].STRING_VAL);
					} else {
						callback(null, "NOTFOUND");
					}
				}
			} catch (e) {
				logger.error("Error in getUserString method of rosterDAO: ", e);
			}

		});
	}; */

	/* module.exports.getUserHint = function (userId, con, logger, callback) {
		logger.info("In getUserHint of rosterDAO");
		var getUserHintQuery = "SELECT HINT FROM ELM_USERSTRING WHERE USER_ID = ?";
		con.query(getUserHintQuery, userId, function (err, result) {
			if (err) {
				logger.error('Error at getUserHintQuery :' + err);
				callback(err);
			} else {
				try {
					if (result != null && result.length > 0) {
						var resultObj = JSON.parse(JSON.stringify(result));
						callback(null, resultObj[0]);
					} else {
						callback(null, null);
					}
				} catch (e) {
					logger.error("Exception in getUserHint: ", e);
					callback(null, null);
				}
			}
		});
	}; */

	function getEmail(userId, con, logger, callback) {
		logger.info("In getEmail of rosterDAO");
		var getUserHintQuery = "SELECT EMAIL FROM ELM_USER WHERE USERID = ?";
		con.query(getUserHintQuery, userId, function (err, result) {
			if (err) {
				logger.error('Error at getEmail :' + err);
				callback(err);
			} else {
				try {
					if (result != null && result.length > 0) {
						var resultObj = JSON.parse(JSON.stringify(result));
						callback(null, resultObj[0].EMAIL);
					} else {
						callback(null, null);
					}
				} catch (e) {
					logger.error("Exception in getEmail: ", e);
					callback(null, null);
				}
			}
		});
	}

	module.exports.getEmail = getEmail;

//commenting for PII ph2 
	/* module.exports.postUserString = function (userId, stringVal, hint, resetting, con, logger, callback) {
		logger.info("In postUserString of rosterDAO");
		var postUserStringQuery = "";
		if (hint && hint != "") {
			postUserStringQuery = "INSERT INTO ELM_USERSTRING(USER_ID, STRING_VAL, HINT) VALUES (?,?,?) ON DUPLICATE KEY UPDATE USER_ID = ?, STRING_VAL=?, HINT=?;";
		} else {
			postUserStringQuery = "INSERT INTO ELM_USERSTRING(USER_ID, STRING_VAL, HINT) VALUES (?,?,?) ON DUPLICATE KEY UPDATE USER_ID = ?, STRING_VAL=?;";
		}
		try {
			con.query(postUserStringQuery, [userId, stringVal, hint, userId, stringVal, hint], function (err, result) {
				if (err) {
					logger.error('Error at postUserStringQuery :' + err);
					callback(err);
				} else {
					callback(null, null);
				}
			});
		} catch (e) {
			logger.error("Error in getUserString method of rosterDAO: ", e);
		}
	}; */

	module.exports.getAssignedTestByPwdId = function (passwordId, con, logger, callback) {
		logger.info("In getAssignedTestByPwdId of rosterDAO");
		var queryString = "SELECT ID,ACTIVE_TEST_ID,COMPANION_ID,VERSION FROM ELM_TESTS " +
			"WHERE ISACTIVE = 1 AND ACTIVE_TEST_ID IN( " +
			"SELECT ACTIVE_TEST_ID from ELM_TESTS WHERE ID IN(SELECT DISTINCT ASSIGNED_TEST_ID " +
			"FROM STUDENT_TESTS WHERE LOCATER_PASSWORD_ID = ?));";

		con.query(queryString, passwordId, function (err, result) {
			if (err) {
				logger.error('Error at getAssignedTestByPwdId :' + err);
				callback(err);
			} else {
				try {
					if (result != null && result.length >= 0) {
						var resultObj = {};
						resultObj.ID = result[0].ID;
						resultObj.ACTIVE_TEST_ID = result[0].ACTIVE_TEST_ID;
						resultObj.COMPANION_ID = result[0].COMPANION_ID;
						resultObj.VERSION = result[0].VERSION;

						callback(null, resultObj);
					} else {
						callback(null, null);
					}
				} catch (e) {
					logger.error("Exception in getAssignedTestByPwdId: ", e);
					callback(null, null);
				}
			}
		});
	};

	module.exports.getCompletedStudents = function (passwordId, con, logger, callback) {
		logger.info("In getCompletedStudents of rosterDAO");
		var queryString = "SELECT DISTINCT STUDENT_ID,TEST_ID,USERNAME," +
			"LOCATER_PASSWORD_ID AS PASSWORD_ID " +
			"FROM STUDENT_RESPONSE response " +
			"INNER JOIN ELM_STUDENTS stud on response.STUDENT_ID = stud.ID " +
			"WHERE LOCATER_PASSWORD_ID = ?; ";

		con.query(queryString, passwordId, function (err, result) {
			if (err) {
				logger.error('Error at getCompletedStudents :' + err);
				callback(err);
			} else {
				try {
					if (result != null && result.length >= 0) {
						var resultObj = JSON.parse(JSON.stringify(result));
						callback(null, resultObj);
					} else {
						callback(null, null);
					}
				} catch (e) {
					logger.error("Error in getCompletedStudents method of rosterDAO: ", e);
					callback(e);
				}
			}
		});
	};

	function nullIfEmpty(data) {
		if (!data || data == undefined || data == "" || data == 'null')
			return null;
		else
			return data;
	}

	/* Convert Data from DAO to JSON 
	   Groups Username into single roster using RosterId 
	*/
	var convertDaoToJson = function (source) {
		var resultJsonArry = [];
		try {
			if (source != null && source.length > 0) {
				var rosterId = source[0].ROSTER_ID;
				var rosterObj = {};
				for (let i = 0; i < source.length; i++) {
					if (source[i].ROSTER_ID != rosterId || i == 0) {
						if (i != 0) {
							resultJsonArry.push(rosterObj);
							rosterObj = {};
						}
						rosterId = source[i].ROSTER_ID;
						rosterObj.ROSTER_ID = source[i].ROSTER_ID;
						rosterObj.ROSTER_NAME = source[i].ROSTER_NAME;
						rosterObj.ACTIVEFLAG = source[i].ROSTERFLAG;
						rosterObj.STUDENT_NAMES = [];
						if (source[i].STUDENT_ID != null)
							rosterObj.STUDENT_NAMES.push({ STUDENT_ID: source[i].STUDENT_ID, STUDENT_NAME: source[i].USERNAME, ACTIVEFLAG: source[i].STUDENTFLAG, VIEW_REPORT: source[i].VIEW_REPORT });
					}
					else {
						rosterObj.STUDENT_NAMES.push({ STUDENT_ID: source[i].STUDENT_ID, STUDENT_NAME: source[i].USERNAME, ACTIVEFLAG: source[i].STUDENTFLAG, VIEW_REPORT: source[i].VIEW_REPORT });
					}
					if (i == source.length - 1) {
						resultJsonArry.push(rosterObj);
					}
				}
			}
			return resultJsonArry;
		}
		catch (err) {
			throw err;
		}
	};

}()); 