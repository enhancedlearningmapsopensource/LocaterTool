(function () {
    var getTestModel = require('../model/testModel');

    var _getTestsByUserId = function (userId, withRevision, con, logger, callback) {
        logger.info('getTestsByUserId in testService');
        getTestModel.getTestsByUserId(userId, withRevision, con, logger, callback);
    };
    var _getAllTests = function (userId, con, logger, callback) {
        logger.info('getAllTests in testService');
        getTestModel.getAllTests(userId, con, logger, callback);
    }
    var _deleteAssignedTest = function (userId, passwordId, con, logger, callback) {
        logger.info('deleteAssignedTest in testService');
        getTestModel.deleteAssignedTest(userId, passwordId, con, logger, callback);
    };
    var _getTestReportDetails = function (userId, testId, password, con, logger, callback) {
        logger.info('getTestReportDetails in testService');
        getTestModel.getTestReportDetails(userId, testId, password, con, logger, callback);
    };

    var _getQuestionReport = function (userId, questionId, testId, passwordId, questionType, con, logger, callback) {
        logger.info('getQuestionReport in testService');
        getTestModel.getQuestionReport(userId, questionId, testId, passwordId, questionType, con, logger, callback);
    };
    var _getStudentReport = function (userId, studentId, con, logger, callback) {
        logger.info('getStudentReport in testService');
        getTestModel.getStudentReport(userId, studentId, con, logger, callback);
    };
    var _getAllTestsByUserId = function (userId, withRevision, con, logger, callback) {
        logger.info('getAllTestsByUserId in testService');
        getTestModel.getAllTestsByUserId(userId, withRevision, con, logger, callback);
    };

    var _createNewTest = function (userId, testData, con, logger, callback) {
        logger.info('createNewTest in testService');

        getTestModel.validateTestData(userId, testData, con, logger, function (errMsgs) {
            if (errMsgs == "" || errMsgs == null) {
                getTestModel.createNewTest(userId, testData, con, logger, callback);
            } else {
                callback("USERERROR", errMsgs);
            }
        })

    };

    var _getAllSubjects = function (con, logger, callback) {
        logger.info('getAllSubjects in testService');
        getTestModel.getAllSubjects(con, logger, callback);
    };

    var _deleteTest = function (userId, testId, con, logger, callback) {
        logger.info('deleteTest in testService');
        getTestModel.deleteTest(userId, testId, con, logger, callback);
    };

    var _getTestData = function (userId, testId, con, logger, callback) {
        logger.info('getTestData in testService');
        getTestModel.getTestData(userId, testId, con, logger, callback);
    };

    var _getAllUploadedFiles = function (dirPath, rootDirPath, tempDirPath, relativePath, con, logger, callback) {
        logger.info('getAllUploadedFiles in testService');
        getTestModel.getAllUploadedFiles(dirPath, rootDirPath, tempDirPath, relativePath, con, logger, callback);
    };

    var _validateNodes = function (nodes, subPrefix, con, logger, callback) {
        logger.info('validateNodes in testService');
        getTestModel.validateNodes(nodes, subPrefix, con, logger, callback);
    };

    var execute = function (methodName, jsonParams, con, logger, callback) {
        logger.info('Inside  execute method in testService');
        try {
            switch (methodName) {
                case "getTestsByUserId":
                    _getTestsByUserId(jsonParams['userId'], jsonParams['withRevision'], con, logger, callback);
                    break;
                case "getAllTests":
                    _getAllTests(jsonParams['userId'], con, logger, callback);
                    break;
                case "deleteAssignedTest":
                    _deleteAssignedTest(jsonParams['userId'], jsonParams['passwordId'], con, logger, callback);
                    break;
                case "getAllTestsByUserId":
                    _getAllTestsByUserId(jsonParams['userId'], jsonParams['withRevision'], con, logger, callback);
                    break;
                case "createNewTest":
                    _createNewTest(jsonParams['userId'], jsonParams['testData'], con, logger, callback);
                    break;
                case "getTestReportDetails":
                    _getTestReportDetails(jsonParams['userId'], jsonParams['testId'], jsonParams['password'], con, logger, callback);
                    break;
                case "getQuestionReport":
                    _getQuestionReport(jsonParams['userId'], jsonParams['questionId'], jsonParams['testId'], jsonParams['passwordId'], jsonParams['questionType'], con, logger, callback);
                    break;
                case "getStudentReport":
                    _getStudentReport(jsonParams['userId'], jsonParams['studentId'], con, logger, callback);
                    break;
                case "getAllSubjects":
                    _getAllSubjects(con, logger, callback);
                    break;
                case "deleteTest":
                    _deleteTest(jsonParams['userId'], jsonParams['testId'], con, logger, callback);
                    break;
                case "getTestData":
                    _getTestData(jsonParams['userId'], jsonParams['testId'], con, logger, callback);
                    break;
                case "getAllUploadedFiles":
                    _getAllUploadedFiles(jsonParams['dirPath'], jsonParams['rootDirPath'], jsonParams['tempDirPath'], jsonParams['relativePath'], con, logger, callback);
                    break;
                case "validateNodes":
                    _validateNodes(jsonParams['nodes'],jsonParams['subPrefix'], con, logger, callback);
                    break;
                default:
                    logger.info("Test Service: Method not defined");
            }

        } catch (e) {
            logger.info("Error occurred in Test Service: ", e.stack);
            //throw new Error(e);
            callback(e);
        }
    };

    module.exports.execute = execute;
}()); 