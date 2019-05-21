(function () {
    var testdao = require('../dao/testDAO');

    module.exports.getTestsByUserId = function (userId, withRevision, con, logger, callback) {
        logger.info('getTestsByUserId in testModel');
        testdao.getTestsByUserId(userId, withRevision, con, logger, callback);
    };
    module.exports.getAllTests = function (userId, con, logger, callback) {
        logger.info('getAllTests in testModel');
        testdao.getAllTests(userId, con, logger, callback);
    }
    module.exports.deleteAssignedTest = function (userId, passwordId, con, logger, callback) {
        logger.info('deleteAssignedTest in testModel');
        testdao.deleteAssignedTest(userId, passwordId, con, logger, callback);
    };
    module.exports.getTestReportDetails = function (userId, testId, password, con, logger, callback) {
        logger.info('getTestReportDetails in testModel');
        testdao.getTestReportDetails(userId, testId, password, con, logger, callback);
    };
    module.exports.getStudentReport = function (userId, studentId, con, logger, callback) {
        logger.info('getStudentReport in testModel');
        testdao.getStudentReport(userId, studentId, con, logger, callback);
    };
    module.exports.getQuestionReport = function (userId, questionId, testId, passwordId, questionType, con, logger, callback) {
        logger.info('getQuestionReport in testModel');
        testdao.getQuestionReport(userId, questionId, testId, passwordId, questionType, con, logger, callback);
    };

    module.exports.getAllTestsByUserId = function (userId, withRevision, con, logger, callback) {
        logger.info('getAllTestsByUserId in testModel');
        testdao.getAllTestsByUserId(userId, withRevision, con, logger, callback);
    };

    module.exports.createNewTest = function (userId, testdata, con, logger, callback) {
        logger.info('createNewTest in testModel');
        testdao.createNewTest(userId, testdata, con, logger, callback);
    };

    module.exports.getAllSubjects = function (con, logger, callback) {
        logger.info('getAllSubjects in testModel');
        testdao.getAllSubjects(con, logger, callback);
    };

    module.exports.deleteTest = function (userId, testId, con, logger, callback) {
        logger.info('deleteTest in testModel');
        testdao.deleteTest(userId, testId, con, logger, callback);
    };

    module.exports.getTestData = function (userId, testId, con, logger, callback) {
        logger.info('getTestData in testModel');
        testdao.getTestData(userId, testId, con, logger, callback);
    };

    module.exports.validateTestData = function (userId, testdata, con, logger, callback) {
        logger.info('validateTestData in testModel');
        testdao.validateTestData(userId, testdata, con, logger, callback);
    };

    module.exports.getAllUploadedFiles = function (dirPath, rootDirPath, tempDirPath, relativePath, con, logger, callback) {
        logger.info('getAllUploadedFiles in testModel');
        testdao.getAllUploadedFiles(dirPath, rootDirPath, tempDirPath, relativePath, con, logger, callback);
    };

    module.exports.validateNodes = function (nodes, subPrefix, con, logger, callback) {
        logger.info('validateNodes in testModel');
        testdao.validateNodes(nodes, subPrefix, con, logger, callback);
    };

}()); 