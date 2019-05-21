(function () {
    var gettestTakerModel = require('../model/testTakerModel');

    var _getStudentTest = function (userName, password, con, logger, callback) {
        logger.info('getStudentTest in testTakerService');
        gettestTakerModel.getStudentTest(userName, password, con, logger, callback);
    }
    var _postStudentTest = function (responses, con, logger, callback) {
        logger.info('postStudentTest in testTakerService');
        gettestTakerModel.postStudentTest(responses, con, logger, callback);
    }
    var _getTestPreviewById = function (testId, con, logger, callback) {
        logger.info('_getTestPreviewById in testTakerService');
        gettestTakerModel.getTestPreviewById(testId, con, logger, callback);
    }
    var _getCompanionPreviewById = function (testId, con, logger, callback) {
        logger.info('_getCompanionPreviewById in testTakerService');
        gettestTakerModel.getCompanionPreviewById(testId, con, logger, callback);
    }
    var _getTestResults = function (testId, passwordId, studentId, userId, con, logger, callback) {
        logger.info('_getTestResults in testTakerService');
        gettestTakerModel.getTestResults(testId, passwordId, studentId, userId, con, logger, callback);
    }
    var execute = function (methodName, jsonParams, con, logger, callback) {
        logger.info('Inside  execute method in testTakerService');
        try {
            switch (methodName) {
                case "getStudentTest":
                    _getStudentTest(jsonParams['userName'], jsonParams['password'], con, logger, callback);
                    break;
                case "postStudentTest":
                    _postStudentTest(jsonParams['responsesonly'], con, logger, callback);
                    break;
                case "getTestPreviewById":
                    _getTestPreviewById(jsonParams['testId'], con, logger, callback);
                    break;
                case "getCompanionPreviewById":
                    _getCompanionPreviewById(jsonParams['testId'], con, logger, callback);
                    break;
                case "getTestResults":
                    _getTestResults(jsonParams['testId'], jsonParams['passwordId'], jsonParams['studentId'], jsonParams['userId'], con, logger, callback);
                    break;
                default:
                    logger.info("TestTaker Service: Method not defined");
            }

        } catch (e) {
            logger.info("Error occurred in TestTaker Service: ", e.stack);
            //throw new Error(e);
            callback(e);
        }
    };


    module.exports.execute = execute;
}()); 