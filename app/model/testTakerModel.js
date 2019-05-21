(function () {
    var testTakerdao = require('../dao/testTakerDAO');


    module.exports.getStudentTest = function (userName, password, con, logger, callback) {
        logger.info('getTest in testTakerModel');
        testTakerdao.getStudentTest(userName, password, con, logger, callback);
    }
    module.exports.postStudentTest = function (responses, con, logger, callback) {
        logger.info('postTest in testTakerModel');
        testTakerdao.postStudentTest(responses, con, logger, callback);
    }
    module.exports.getTestPreviewById = function (testId, con, logger, callback) {
        logger.info('getTestPreviewById in testTakerModel');
        testTakerdao.getTestPreviewById(testId, con, logger, callback);
    };
    module.exports.getCompanionPreviewById = function (testId, con, logger, callback) {
        logger.info('getCompanionPreviewById in testTakerModel');
        testTakerdao.getCompanionPreviewById(testId, con, logger, callback);
    };
    module.exports.getTestResults = function (testId, passwordId, studentId, userId, con, logger, callback) {
        logger.info('getTestResults in testTakerModel');
        testTakerdao.getTestResults(testId, passwordId, studentId, userId, con, logger, callback);
    };

}()); 