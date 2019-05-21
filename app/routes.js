
var rosterService = require('./service/rosterService');
var testService = require('./service/testService');
var testTakerService = require('./service/testTakerService');
var messagesService = require('./service/messagesService');
var winston = require('winston');
var CONFIG = require(appRoot + '/../appconfig/default').props;
const Cryptr = require('cryptr');
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.DailyRotateFile)({
      filename: CONFIG.logdir + CONFIG.logFileName,
      json: CONFIG.logJSON,
      datePattern: CONFIG.logDatePattern,
      level: CONFIG.logLevel,
      maxsize: CONFIG.logSize
    })
  ],

  exitOnError: false
});
var con = require('./util/dbpool')(logger); // mysql pool module
var path = require('path');
var fs = require('fs');
module.exports = function (app, passport) {
app.use(function (req, res, next) {
if(req.originalUrl == "/locatertool/login2") {
  //const cryptr = new Cryptr(cryptrSecret);
  //var tempString = req.body.email + '+**~~**+' +req.body.pass;
  //const emailPass = cryptr.encrypt(tempString);
  //res.redirect('/login?email='+emailPass+'&pass='+'login2');
  res.redirect('/login?email='+req.body.email + '&pass='+req.body.pass);
  } else {
    next();
  }
  });

  // app.all('/locatertool/session-flash', function (req, res) {
  //   console.log("--------------------------------------------session-flash");
  //   req.session.sessionFlash = {
  //     type: 'success',
  //     message: 'Flash Message.'
  //   }
  //   res.redirect(301, '/locatertool');
  // });
  app.get('/', function (req, res) {
      res.render('../login');
  });

  app.get('/login', getParams, passport.authenticate('local-login', {
    successRedirect: '/locatertool/roster', 
    failureRedirect: '/', 
    failureFlash: true, 
  }));

  app.get('/locatertool', isLoggedIn, function (req, res) {
    res.render('../index', { sessionFlash: res.locals.sessionFlash });
  });

  app.get('/locatertool/login', function (req, res) {
    //res.header("Content-Type", "application/javascript; charset=utf-8");
    res.render('../login', { message: req.flash('loginMessage') });
  });


  app.post('/locatertool/login', passport.authenticate('local-login', {
    successRedirect: '/locatertool/roster', 
    failureRedirect: '/', 
    failureFlash: true, 
  }));

  app.post('/locatertool/login2', passport.authenticate('local-login', {
    successRedirect: '/locatertool/roster',
    failureRedirect: '/', 
    failureFlash: true, 
  }));
  
  app.get('/locatertool/roster', isLoggedIn, function (req, res) {
    //res.header("Content-Type", "application/javascript; charset=utf-8");
    res.render('../index.ejs', { email: req.user.EMAIL });
  });

  /* code for test builder navigation from login page*/

  app.post('/locatertool/testbuilder', isLoggedIn, function(req, res) {
    res.render('../testbuilder.ejs');
  });

  app.get('/locatertool/tests', isLoggedIn, function (req, res) {
    //res.header("Content-Type", "application/javascript; charset=utf-8");
    //res.render('../testbuilder.ejs');
  });

  /* --------------------------------------------------------------*/
  //Testtaker page doesnt need validation to display

  app.get('/locatertool/testtaker', function (req, res) {
    //res.header("Content-Type", "application/javascript; charset=utf-8");
    res.render('../testtaker.ejs');
  });
  /* --------------------------------------------------------------
                      Roster API
     --------------------------------------------------------------
  */
  app.post('/locatertool/createRoster', isLoggedIn, function (req, res) {
    logger.info(' createRoster In routes');
    var rosterDetails = req.body;
    var jsonParams = { "userId": req.user.id, "rosterName": rosterDetails.rosterName, "rosterLength": rosterDetails.rosterLength };
    rosterService.execute('createRoster', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /createRoster " + err);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  });

  //Ex: /getRostersByUserId
  app.post('/locatertool/getRostersByUserId', isLoggedIn, function (req, res) {
    logger.info('Service getRostersByUserId received');
    logger.debug("getRostersByUserId");
    var jsonParams = { "userId": req.user.id };
    logger.debug("jsonParams: " + JSON.stringify(jsonParams));
    rosterService.execute('getRostersByUserId', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getRostersByUserId " + err);
        res.sendStatus(500);
      }
      else {
        //logger.debug("Result: " + JSON.stringify(result));
        res.send(result);
      }
    });
  });

  //getInActiveRostersByUserId
  app.post('/locatertool/getInActiveRostersByUserId', isLoggedIn, function (req, res) {
    logger.info('Service getInActiveRostersByUserId received');
    logger.debug("getInActiveRostersByUserId");
    var jsonParams = { "userId": req.user.id };
    rosterService.execute('getInActiveRostersByUserId', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getInActiveRostersByUserId " + err);
        res.sendStatus(500);
      }
      else {
        res.send(result);
      }
    });
  });

  app.post('/locatertool/activateRoster', isLoggedIn, function (req, res) {
    logger.info('Service activateRoster received');
    logger.debug("activateRoster");
    var jsonParams = { "userId": req.user.id, "rosterName": req.body.rosterName };
    rosterService.execute('activateRoster', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /activateRoster " + err);
        res.sendStatus(500);
      }
      else {
        //logger.debug("Result: " + result);
        res.send({ Activated: "Yes" });
      }
    });
  });
  //set student Active
  app.post('/locatertool/activateStudent', isLoggedIn, function (req, res) {
    logger.info('Service activateStudent received');
    logger.debug("activateStudent");
    var jsonParams = { "userId": req.user.id, "studentId": req.body.studentId, "rosterId": req.body.rosterId };
    rosterService.execute('activateStudent', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /activateStudent " + err);
        res.sendStatus(500);
      }
      else {
        //logger.debug("Result: " + result);
        res.send({ Activated: "Yes" });
      }
    });
  });


  app.post('/locatertool/deleteRoster', isLoggedIn, function (req, res) {
    logger.info('deleteRoster In routes');
    req.body.userId = req.cookies['userid'];
    var rosterDetails = req.body;
    var jsonParams = { "userId": req.user.id, "rosterId": rosterDetails.rosterId };
    rosterService.execute('deleteRoster', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /deleteRoster " + err);
        res.sendStatus(500);
      }
      else {
        res.send({ Deleted: "Yes" });
      }
    });
  });

  app.post('/locatertool/deleteStudentFromRoster', isLoggedIn, function (req, res) {
    logger.info('deleteStudentFromRoster In routes');
    req.body.userId = req.cookies['userid'];
    var rosterDetails = req.body;
    var jsonParams = { "userId": req.user.id, "rosterId": rosterDetails.rosterId, "studentId": rosterDetails.studentId };
    rosterService.execute('deleteStudentFromRoster', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /deleteStudentFromRoster " + err);
        res.sendStatus(500);
      }
      else {
        res.send({ Deleted: "Yes" });
      }
    });
  });
  // refresh the student in roster
  app.post('/locatertool/renameStudent', isLoggedIn, function (req, res) {
    logger.info('renameStudent In routes');
    req.body.userId = req.cookies['userid'];
    var rosterDetails = req.body;
    var jsonParams = { "userId": req.user.id, "rosterId": rosterDetails.rosterId, "studentId": rosterDetails.studentId };
    rosterService.execute('renameStudent', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /deleteStudentFromRoster " + err);
        res.sendStatus(500);
      }
      else {
        res.send(result);
      }

    });
  });

  // get other Roster Names of the Student if present
  app.post('/locatertool/getRosterNamesofStudent', isLoggedIn, function (req, res) {
    logger.info('getRosterNamesofStudent In routes');
    req.body.userId = req.cookies['userid'];
    var rosterDetails = req.body;
    var jsonParams = { "userId": req.user.id, "studentId": rosterDetails.studentId };
    rosterService.execute('getRosterNamesofStudent', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getRosterNamesofStudent " + err);
        res.sendStatus(500);
      }
      else {
        res.send(result);
      }

    });
  });

  // add new student to the roster
  app.post('/locatertool/addNewStudent', isLoggedIn, function (req, res) {
    logger.info('addNewStudent In routes');
    req.body.userId = req.cookies['userid'];
    var rosterDetails = req.body;
    var jsonParams = { "userId": req.user.id, "rosterId": rosterDetails.rosterId };
    rosterService.execute('addNewStudent', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /addNewStudent " + err);
        res.sendStatus(500);
      }
      else {
        res.send(result);
      }

    });
  });

  // check if existing student in a roster 
  app.post('/locatertool/checkExistingStudent', isLoggedIn, function (req, res) {
    logger.info('checkExistingStudent In routes');
    req.body.userId = req.cookies['userid'];
    var rosterDetails = req.body;
    var jsonParams = { "userId": req.user.id, "psuedonym": rosterDetails.psuedonym, "rosterId": rosterDetails.rosterId };
    rosterService.execute('checkExistingStudent', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /checkExistingStudent " + err);
        res.sendStatus(500);
      }
      else {
        res.send(result);
      }

    });
  });


//commenting for PII ph2 
  // Get user string
/*   app.get('/locatertool/getUserString', isLoggedIn, function (req, res) {
    logger.info('getUserString In routes');
    var jsonParams = { "userId": req.user.id };
    rosterService.execute('getUserString', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getUserString " + err);
        result = "ERROR";
        res.status(500).send(result);
      }
      else {
        if (result != null) {
          res.send(result);
        }
        else {
          result = "ERROR";
          res.status(200).send(result);
        }
      }

    });
  }); */

/*   app.get('/locatertool/getUserHint', isLoggedIn, function (req, res) {
    logger.info('getUserHint In routes');
    var jsonParams = { "userId": req.user.id };
    rosterService.execute('getUserHint', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getUserHint " + err);
        result = "ERROR";
        res.status(500).send(JSON.parse(JSON.stringify(result)));
      }
      else {
        res.status(200).send(JSON.parse(JSON.stringify(result)));
      }
    });
  }); */

  // Get user string
/*   app.post('/locatertool/postUserString', isLoggedIn, function (req, res) {
    logger.info('postUserString In routes');
    var jsonParams = { "userId": req.user.id, "stringVal": req.body.stringVal, "hint": req.body.hint, "resetting": req.body.resetting };
    rosterService.execute('postUserString', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /postUserString " + err);
        res.sendStatus(500);
      }
      else {
        //if (result != null)
        res.send({ result });
      }

    });
  }); */

  //Get Completed Students By Password Id
  app.post('/locatertool/getCompletedStudents', isLoggedIn, function (req, res) {
    logger.info('getCompletedStudents In routes');
    var jsonParams = { "passwordId": req.body.passwordId };
    rosterService.execute('getCompletedStudents', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getCompletedStudents " + err);
        result = "ERROR";
        res.status(500).send(result);
      }
      else {
        res.status(200).send(result);
      }
    });
  });

  //Get Assigned Test Data By Password Id - Used in Edit Assigned Test
  app.post('/locatertool/getAssignedTestByPwdId', isLoggedIn, function (req, res) {
    logger.info('getAssignedTestByPwdId In routes');
    var jsonParams = { "passwordId": req.body.passwordId };
    rosterService.execute('getAssignedTestByPwdId', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getAssignedTestByPwdId " + err);
        result = "ERROR";
        res.status(500).send(result);
      }
      else {
        res.status(200).send(result);
      }
    });
  });


  /* --------------------------------------------------------------
                      Tests API
     --------------------------------------------------------------
  */

  app.post('/locatertool/assignTest', isLoggedIn, function (req, res) {
    logger.info('Service assignTest received');
    logger.debug("assignTest");
    var jsonParams = { "userId": req.user.id, "testObject": req.body.jsonObj };
    rosterService.execute('assignTest', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /assignTest " + err);
        res.sendStatus(500);
      }
      else {
        //logger.debug("Result: " + JSON.stringify(result));
        res.send(result);
      }
    });
  });


  app.post('/locatertool/checkEditedPassword', isLoggedIn, function (req, res) {
    logger.info('Service checkEditedPassword received');
    logger.debug("checkEditedPassword");
    var jsonParams = { "userId": req.user.id, "testObject": req.body.jsonObj };
    rosterService.execute('checkEditedPassword', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /checkEditedPassword " + err);
        res.sendStatus(500);
      }
      else {
        //logger.debug("Result: " + JSON.stringify(result));
        res.send(result);
      }
    });
  });

  app.post('/locatertool/saveEditAssignedTest', isLoggedIn, function (req, res) {
    logger.info('Service saveEditAssignedTest received');
    logger.debug("saveEditAssignedTest");
    var jsonParams = { "userId": req.user.id, "passwordObj": req.body.passwordObj, "deleteStdObj": req.body.deleteStdObj, "updateStdObj": req.body.updateStdObj, "insertStdObj": req.body.insertStdObj };
    rosterService.execute('saveEditAssignedTest', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /saveEditAssignedTest " + err);
        res.sendStatus(500);
      }
      else {
        //logger.debug("Result: " + JSON.stringify(result));
        res.send(result);
      }
    });
  });

  app.post('/locatertool/checkTestForStudent', isLoggedIn, function (req, res) {
    logger.info('Service checkTestForStudent received');
    logger.debug("checkTestForStudent");
    var jsonParams = { "userId": req.user.id, "testObject": req.body.jsonObj };
    rosterService.execute('checkTestForStudent', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /checkTestForStudent " + err);
        res.sendStatus(500);
      }
      else {
        res.send(result);
      }
    });
  });

  //Ex: /getTestsByUserId
  app.post('/locatertool/getAllTests', isLoggedIn, function (req, res) {
    logger.info('Service getAllTests received');
    logger.debug("getAllTests");
    var jsonParams = { "userId": req.user.id };
    testService.execute('getAllTests', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getAllTests " + err);
        res.sendStatus(500);
      }
      else {
        res.send(result);
      }
    });
  });

  //Ex: /getTestsByUserId
  app.post('/locatertool/getTestsByUserId', isLoggedIn, function (req, res) {
    logger.info('Service getAllTests received');
    var jsonParams = { "userId": req.user.id };
    testService.execute('getTestsByUserId', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getTestsByUserId " + err);
        res.sendStatus(500);
      }
      else {
        res.send(result);
      }
    });
  });

  app.post('/locatertool/deleteAssignedTest', isLoggedIn, function (req, res) {
    logger.info('Service deleteAssignedTest received');
    logger.debug("deleteAssignedTest");
    var jsonParams = { "userId": req.user.id, "passwordId": req.body.passwordId };
    testService.execute('deleteAssignedTest', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /deleteAssignedTest " + err);
        res.sendStatus(500);
      }
      else {
        //console.log(JSON.stringify(result));
        res.send(result);
      }
    });

  });
  app.post('/locatertool/getTestReportDetails', isLoggedIn, function (req, res) {
    logger.info('Service getTestReportDetails received');
    logger.debug("getTestReportDetails");
    var jsonParams = { "userId": req.user.id, "testId": req.body.testId, "password": req.body.password };
    testService.execute('getTestReportDetails', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getTestReportDetails " + err);
        res.sendStatus(500);
      }
      else {
        //console.log(JSON.stringify(result));
        res.send(result);
      }
    });

  });

  app.post('/locatertool/getQuestionReport', isLoggedIn, function (req, res) {
    logger.info('Service getQuestionReport received');
    logger.debug("getQuestionReport");
    var jsonParams = { "userId": req.user.id, "questionId": req.body.questionId, "testId": req.body.testId, "passwordId": req.body.passwordId, "questionType": req.body.questionType };
    testService.execute('getQuestionReport', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getQuestionReport " + err);
        res.sendStatus(500);
      }
      else {
        //console.log(JSON.stringify(result));
        res.send(result);
      }
    });

  });


  app.post('/locatertool/getStudentReport', isLoggedIn, function (req, res) {
    logger.info('Service getStudentReport received');
    logger.debug("getStudentReport");
    var jsonParams = { "userId": req.user.id, "studentId": req.body.studentId };
    testService.execute('getStudentReport', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getStudentReport " + err);
        res.sendStatus(500);
      }
      else {
        //console.log(JSON.stringify(result));
        res.send(result);
      }
    });

  });



  //Ex: /getAllTestsByUserId
  app.post('/locatertool/getAllTestsByUserId', isLoggedIn, function (req, res) {
    logger.info('Service getAllTestsByUserId received');
    var jsonParams = { "userId": req.user.id, "withRevision": req.body.withRevision };
    testService.execute('getAllTestsByUserId', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getAllTestsByUserId " + err);
        res.sendStatus(500);
      }
      else {
        res.send(result);
      }
    });
  });

  //Ex: /getTestData
  app.post('/locatertool/getTestData', isLoggedIn, function (req, res) {
    logger.info('Service getTestData received');
    var jsonParams = { "userId": req.user.id, "testId": req.body.testId };
    testService.execute('getTestData', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getTestData " + err);
        res.sendStatus(500);
      }
      else {
        logger.debug('Routes - getTestData: response sent');
        res.send(result);
      }
    });
  });

  //Ex: /createNewTest
  app.post('/locatertool/createNewTest', isLoggedIn, function (req, res) {
    logger.info('Service createNewTest received');
    var jsonParams = { "userId": req.user.id, "testData": req.body.testData };
    testService.execute('createNewTest', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /createNewTest " + err);
        if (err == "USERERROR") {
          res.status(400);
          res.send(result);
        } else
          res.sendStatus(500);
      }
      else {
        logger.debug('Routes - createNewTest: response sent');
        res.send(result);
      }
    });
  });

  //Ex: /getAllSubjects
  app.get('/locatertool/getAllSubjects', isLoggedIn, function (req, res) {
    logger.info('Service getAllSubjects received');

    testService.execute('getAllSubjects', null, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getAllSubjects " + err);
        res.sendStatus(500);
      }
      else {
        logger.debug('Routes - getAllSubjects: response sent');
        res.send(result);
      }
    });
  });

  //Ex: /deleteTest
  app.post('/locatertool/deleteTest', isLoggedIn, function (req, res) {
    logger.info('Service deleteTest received');
    var jsonParams = { "userId": req.user.id, "testId": req.body.testId };
    testService.execute('deleteTest', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /deleteTest " + err);
        res.sendStatus(500);
      }
      else {
        logger.debug('Routes - deleteTest: response sent');
        res.send(result);
      }
    });
  });

  app.post('/locatertool/uploadFile', isLoggedIn, function (req, res) {
    try {
      if (!req.files)
        return res.status(400).send('No files were uploaded.');

      let uploadedFile = req.files.uploadedFile;

      var tempPath = CONFIG.datatempfolder + req.files.uploadedFile.name;
      // Use the mv() method to place the file somewhere on your server
      uploadedFile.mv(tempPath, function (err) {
        if (err) {
          logger.error("Error Occurred while moving file to Temp Folder" + err);
          return res.status(500).send(err);
        }
        else {
          var actualPath = CONFIG.datafolder + req.files.uploadedFile.name;
          var i = 1;
          while (fs.existsSync(actualPath)) {
            actualPath = CONFIG.datafolder + path.basename(req.files.uploadedFile.name,
              path.extname(req.files.uploadedFile.name)) + "_" + i + path.extname(actualPath);
            i++;
          }

          fs.copyFile(tempPath, actualPath, (errCopy) => {
            if (errCopy) {
              logger.error("Error Occurred while moving file from Temp to Actual Folder" + errCopy);
              fs.unlinkSync(tempPath);
              return res.status(500).send(errCopy);
            }
            fs.unlinkSync(tempPath);
            res.send('File uploaded!');
          });
        }

      });
    } catch (e) {
      logger.error("Error Occurred while uploading files" + e);
      return res.status(500).send(e);
    }
  });

  app.post('/locatertool/deleteFile', isLoggedIn, function (req, res) {
    try {
      if (!req.body.fileName) {
        return res.sendStatus(404);
      }
      var filePath = CONFIG.datafolder + req.body.fileName;
      if (fs.existsSync(filePath)) {
        fs.unlink(filePath, function (err) {
          if (err) {
            logger.error("Error Occurred while deleting files" + err);
            return res.status(500).send(err);
          }
          res.send("File deleted");
        });
      }
      else
        return res.sendStatus(404);
    } catch (e) {
      logger.error("Error Occurred while deleting files" + e);
      return res.status(500).send(e);
    }
  });

  app.get('/locatertool/getAllUploadedFiles', isLoggedIn, function (req, res) {
    var jsonParams = { "dirPath": CONFIG.datafolder, "rootDirPath": CONFIG.filestore, "tempDirPath": CONFIG.datatempfolder, 'relativePath': CONFIG.relativepath };
    testService.execute('getAllUploadedFiles', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getAllUploadedFiles " + err);
        res.sendStatus(500);
      }
      else {
        logger.debug('Routes - getAllUploadedFiles: response sent');
        res.send(result);
      }
    });
  });

  //Ex: /validateNodes
  app.post('/locatertool/validateNodes', isLoggedIn, function (req, res) {
    logger.info('Service validateNodes received');
    var jsonParams = { "nodes": req.body.nodes, "subPrefix":req.body.subPrefix };
    testService.execute('validateNodes', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /validateNodes " + err);
        res.sendStatus(500);
      }
      else {
        logger.debug('Routes - validateNodes: response sent');
        res.send(result);
      }
    });
  });

  /* --------------------------------------------------------------
                      TestTaker API
     --------------------------------------------------------------
  */
  app.post('/locatertool/testTaker/getStudentTest', function (req, res) {
    logger.info(' getStudentTest In routes');
    var studentDetails = req.body;
    var jsonParams = { "userName": studentDetails.userName, "password": studentDetails.password };
    testTakerService.execute('getStudentTest', jsonParams, con, logger, function (err, result, isComplete) {
      if (err) {
        logger.error("Error /getStudentTest " + err);
        res.send({ err: err });
      } else if (isComplete) {
        res.send({ isComplete: true });
      } else {
        res.send({ testJson: result });
      }
    });
  });

  app.post('/locatertool/testTaker/postStudentTest', function (req, res) {
    logger.info(' postStudentTest In routes');
    var responsesonly = req.body.responsesonly;
    var jsonParams = { "responsesonly": responsesonly };
    logger.debug("testState: ", responsesonly);
    testTakerService.execute('postStudentTest', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /postStudentTest " + err);
        res.send({ err: err });
      } else {
        res.send({ message: result });
      }
    });
  });

  app.post('/locatertool/testTaker/getTestPreviewById', isLoggedIn, function (req, res) {
    logger.info(' getTestPreviewById In routes');
    var testId = req.body.testId;
    var jsonParams = { "testId": testId };
    testTakerService.execute('getTestPreviewById', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getTestPreviewById " + err);
        res.send({ err: err });
      } else {
        res.send({ testJson: result });
      }
    });
  });

  app.post('/locatertool/testTaker/getCompanionPreviewById', isLoggedIn, function (req, res) {
    logger.info(' getCompanionPreviewById In routes');
    var testId = req.body.testId;
    var jsonParams = { "testId": testId };
    testTakerService.execute('getCompanionPreviewById', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getCompanionPreviewById " + err);
        res.send({ err: err });
      } else {
        res.send({ testJson: result });
      }
    });
  });

  app.post('/locatertool/testTaker/getTestResults', isLoggedIn, function (req, res) {
    logger.info(' getTestResults In routes');
    var testId = req.body.testId;
    var passwordId = req.body.passwordId;
    var studentId = req.body.studentId;
    var userId = req.user.id;
    var jsonParams = { "testId": testId, "passwordId": passwordId, "studentId": studentId, "userId": userId };
    testTakerService.execute('getTestResults', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getTestResults " + err);
        res.send({ err: err });
      } else {
        res.send({ testJson: result });
      }
    });
  });

  app.post('/locatertool/getAssignedTests', isLoggedIn, function (req, res) {
    logger.info('Service getAssignedTests received');
    logger.debug("getAssignedTests");
    var jsonParams = { "userId": req.user.id };
    rosterService.execute('getAssignedTests', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getAssignedTests " + err);
        res.sendStatus(500);
      }
      else {
        res.send(result);
      }
    });
  });

  app.get('/locatertool/getLastDownloadedTime', isLoggedIn, function (req, res) {
    logger.info('Service getLastDownloadedTime received');
    logger.debug("getLastDownloadedTime");
    req.body.userId = req.cookies['userid'];
    var jsonParams = { "userId": req.user.id };
    rosterService.execute('getLastDownloadedTime', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getLastDownloadedTime " + err);
        res.sendStatus(500);
      }
      else {
        logger.debug('Routes - getLastDownloadedTime: response sent');
        res.send(result);
      }
    });
  });
  
  //Author: Vidya
	//Issue: PII change 
	//Update Downloaded timestamp in database
	// Update last downloaded timestamp in database once user clicks "Export ALL"
  app.put('/locatertool/updateLastDownloadedTime', isLoggedIn, function (req, res) {
    logger.info('Service updateLastDownloadedTime received');
    logger.debug("updateLastDownloadedTime");
    req.body.userId = req.cookies['userid'];
    var jsonParams = { "userId": req.user.id };
    rosterService.execute('updateLastDownloadedTime', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /updateLastDownloadedTime " + err);
        res.sendStatus(500);
      }
      else {
        logger.debug('Routes - updateLastDownloadedTime: response= '+JSON.stringify(result));
        res.send(result);
      }
    });
  });

  //Author: Vidya
  //Issue: PII change   
	//check if a user has any rosters
  app.get('/locatertool/checkIfRostersExist', isLoggedIn, function (req, res) {
    logger.info('Service checkIfRostersExist received');
    logger.debug("checkIfRostersExist");
    req.body.userId = req.cookies['userid'];
    var jsonParams = { "userId": req.user.id };
    rosterService.execute('checkIfRostersExist', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /checkIfRostersExist " + err);
        res.sendStatus(500);
      }
      else {
        logger.debug('Routes - checkIfRostersExist: response sent');
        res.send(result);
      }
    });
  });


  // *** Used for checkin if the app is up, so dont change this. ***
  app.get('/locatertool/healthCheck', async function (req,res){
    var testCon = await con.getConnectionSync(); // Working connection

    testCon.query("Select 1;", function(err,rslt){
      if(err){
        logger.error("checkStatus Error:" +err);
        con.release(testCon,logger);
        res.status(500).send(err);
      }else{
        logger.debug("Load Test Success:");
        con.release(testCon,logger);
        res.sendStatus(200);
      }
  });
  });

  // API to test Load
  app.get('/locatertool/loadTest', async function (req,res){
    
    // var testCon = con.getConnection(); // Error Causing connection 

    var testCon = await con.getConnectionSync(); // Working connection

    testCon.query("Select 1;", function(err,rslt){
      if(err){
        console.log("Load Test Error:" +err);
        con.release(testCon,logger);
        res.status(500).send(err);
      }else{
        console.log("Load Test Success:");
        con.release(testCon,logger);
        res.sendStatus(200);
      }
  });
  
// testCon.query("Select 1;", function(err,rslt){
    //   if(err){
    //     console.log("Load Test Error:" +err);
    //     con.release(testCon,logger);
    //     res.status(500).send(err);
    //   }else{
    //     console.log("Load Test Success:");
    //     con.release(testCon,logger);
    //     res.sendStatus(200);
    //   }
    // });
/*Add in locater.js for load testing Create Roster and Assign tests
//Create Roster load test.
var rostName = "";
        for(var i=0;i<5000;i++) {
             rostName = "roster" + i;
        rosterModel.createRoster(229,rostName, 1, function(){
            console.log("created roster");
        });
    }
    //Assign test, change roster id, student id accordingly.
    for(var i=0;i<5000;i++) {
var test = '{"testTitle":"T2","testId":"65","dueDate":"","dueTime":"","password":"ppp'+i+'","selfNote":"","elmNote":"","TEST_VERSION":"B","COMPANION_ID":3,"ACTIVE_TEST_ID":2,"ASSIGNED_TEST_ID":65,"rosterStudentDetails":[{"rosterName":"rrr","rosterId":"15089","studentId":"438"}]}';
console.log("test: ", test);
rosterModel.assignTest(229, JSON.parse(test), function() {
    console.log("Assigning test");
});
    }
    */
  });

  app.get('/locatertool/getEmail', isLoggedIn, function (req, res) {
    logger.info('Service getEmail received');
    var jsonParams = { "userId": req.user.id };
    rosterService.execute('getEmail', jsonParams, con, logger, function (err, result) {
      if (err) {
        logger.error("Error /getEmail " + err);
        res.sendStatus(500);
      }
      else {
        res.send(result);
      }
    });
  });

  app.get('/locatertool/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  app.use(errorHandler);
}

process.on('uncaughtException', function(err) {
  logger.error("** Error uncaughtException, FIX IT! **: ",err);
  process.exitCode = 1;
  throw err;
});

function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}

// route middleware to get UserID.
function getEmail(req, res, next) {
  logger.debug('Checking userId');
  //For DEV:
  if (CONFIG.devEnv) {
    var fileName = "sess_" + "session_id";
    var filePath = path.join('./tmp/' + fileName);
  } else {
    //MODERN SESSION ID Cookie will be set as soon as user logs in to the modern website. Currently we will hardcode for local use.
    var fileName = 'sess_' + req.cookies['MODERN_SESSION_ID'];
    var filePath = path.join('/tmp/' + fileName);
  }
  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
      var searchEmail = "ELM_EMAIL"; // Change this value if it changes in Text file and PHP authentication is changed.
      var searchPass = "ELM_PASS";
      var email = "";
      var hashpass = "";
      var dataArray = data.split(";");
      for (var i = 0; i < dataArray.length; i++) {
        var splitArr = dataArray[i].split(":");
        if ((dataArray[i]).indexOf(searchEmail) !== -1) {
          // This is string value and is enclosed in double quotes.
          email = splitArr[2].substring(1, splitArr[2].length - 1);
        } else if ((dataArray[i]).indexOf(searchPass) !== -1) {
          hashpass = splitArr[2].substring(1, splitArr[2].length - 1);
        }
      }
      //This will be user by passport.
      req.body.email = email;
      req.body.hashpass = hashpass;
      return next();
      //Cookie saving mechanism, not necessary for functionality. 
      //We can get userid by req.user.id after passport authentiction.
      // var jsonParams = { "email": email };
      // rosterService.execute('getUserIdFromEmail', jsonParams, con, logger, function (err, result) {
      //   if (err) {
      //     logger.error("Error /getUserIdFromEmail " + err);
      //     res.redirect('/');
      //   }
      //   else {
      //     var test = JSON.parse(JSON.stringify(result));
      //     logger.debug("USERID: ", test[0].USERID);
      //     res.cookie('userid', test[0].USERID);
      //     return next();
      //   }
      // });
    } else {
      logger.error("Error in getEmail method");
      return next("Unable to login");
    }
  });
}

function getParams(req, res, next) {
  req.body.email = req.query.email;
  req.body.hashpass = req.query.pass;
  return next();
}

function readCreds(req, res, next) {
  logger.debug('Checking userId');
  //For DEV:
  if (CONFIG.devEnv) {
    var fileName = "sess_" + "undefined";
    var filePath = path.join('./tmp/' + fileName);
  } else {
    //MODERN SESSION ID Cookie will be set as soon as user logs in to the modern website. Currently we will hardcode for local use.
    var fileName = 'sess_' + req.cookies['MODERN_SESSION_ID'];
    var filePath = path.join('./tmp/' + fileName);
  }
  logger.debug('filePath: ' + filePath);
  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
      var dataArray = data.split("\n");
      req.body.email = dataArray[0];
      req.body.hashpass = dataArray[1];
      //This will be user by passport.
      return next();
    } else {
      logger.error("Error in readCreds method");
      return next();
    }
  });
}

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500);
  res.render('error', { error: err });
}

