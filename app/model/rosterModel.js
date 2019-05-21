(function () {
    var rosterdao = require('../dao/rosterDAO');

    module.exports.createRoster = function (userId, rosterName, rosterLength, con, logger, callback) {
        logger.info(' createRoster in rosterModel');
        rosterdao.createRoster(userId, rosterName, rosterLength, con, logger, callback);
    }

    module.exports.getRostersByUserId = function (userId, con, logger, callback) {
        logger.info('getRostersByUserId in rosterModel');
        rosterdao.getRostersByUserId(userId, con, logger, callback);
    }

    module.exports.getInActiveRostersByUserId = function (userId, con, logger, callback) {
        logger.info('getInActiveRostersByUserId in rosterModel');
        rosterdao.getInActiveRostersByUserId(userId, con, logger, callback);
    }

    module.exports.deleteRoster = function (userId, rosterId, con, logger, callback) {
        logger.info('deleteRoster in rosterModel');
        rosterdao.deleteRoster(userId, rosterId, con, logger, callback);
    }

    module.exports.deleteStudentFromRoster = function (userId, rosterId, studentId, con, logger, callback) {
        logger.info('deleteStudentFromRoster in rosterModel');
        rosterdao.deleteStudentFromRoster(userId, rosterId, studentId, con, logger, callback);
    }

    module.exports.getUserIdFromEmail = function (email, con, logger, callback) {
        logger.info('getUserIdFromEmail in rosterModel');
        rosterdao.getUserIdFromEmail(email, con, logger, callback);
    }
    module.exports.renameStudent = function (userId, rosterId, studentId, con, logger, callback) {
        logger.info('renameStudent in rosterModel');
        rosterdao.renameStudent(userId, rosterId, studentId, con, logger, callback);
    }
    module.exports.activateRoster = function (userId, rosterName, con, logger, callback) {
        logger.info('activateRoster in rosterModel');
        rosterdao.activateRoster(userId, rosterName, con, logger, callback);
    }
    module.exports.activateStudent = function (userId, studentId, rosterId, con, logger, callback) {
        logger.info('activateStudent in rosterModel');
        rosterdao.activateStudent(userId, studentId, rosterId, con, logger, callback);
    }
    module.exports.addNewStudent = function (userId, rosterId, con, logger, callback) {
        logger.info('addNewStudent in rosterModel');
        rosterdao.addNewStudent(userId, rosterId, con, logger, callback);
    }

    module.exports.checkExistingStudent = function (userId, psuedonym, rosterId, con, logger, callback) {
        logger.info('checkExistingStudent in rosterModel');
        rosterdao.checkExistingStudent(userId, psuedonym, rosterId, con, logger, callback);
    }
    module.exports.getRosterNamesofStudent = function (userId, studentId, con, logger, callback) {
        logger.info('getRosterNamesofStudent in rosterModel');
        rosterdao.getRosterNamesofStudent(userId, studentId, con, logger, callback);
    }
    module.exports.assignTest = function (userId, testObject, con, logger, callback) {
        logger.info('assignTest in rosterModel');
        rosterdao.assignTest(userId, testObject, con, logger, callback);
    }
    //not present in rosterDAO
    module.exports.checkEditedPassword = function (userId, testObject, con, logger, callback) {
        logger.info('checkEditedPassword in rosterModel');
        rosterdao.checkEditedPassword(userId, testObject, con, logger, callback);
    }
    module.exports.saveEditAssignedTest = function (userId, passwordObj, deleteStdObj, updateStdObj, insertStdObj, con, logger, callback) {
        logger.info('saveEditAssignedTest in rosterModel');
        rosterdao.saveEditAssignedTest(userId, passwordObj, deleteStdObj, updateStdObj, insertStdObj, con, logger, callback);
    }
    module.exports.checkTestForStudent = function (userId, testObject, con, logger, callback) {
        logger.info('checkTestForStudent in rosterModel');
        rosterdao.checkTestForStudent(userId, testObject, con, logger, callback);
    }
    module.exports.getAssignedTests = function (userId, con, logger, callback) {
        logger.info('getAssignedTests in rosterModel');
        rosterdao.getAssignedTests(userId, con, logger, callback);
    }

    module.exports.getStudentTest = function (userName, password, con, logger, callback) {
        logger.info('getTest in rosterModel');
        rosterdao.getStudentTest(userName, password, con, logger, callback);
    }

//commenting for PII ph2 
    /* module.exports.getUserString = function (userId, con, logger, callback) {
        logger.info("getUserString in rosterModel");
        rosterdao.getUserString(userId, con, logger, callback);
    }

    module.exports.postUserString = function (userId, stringVal, hint, resetting, con, logger, callback) {
        logger.info("postUserString in rosterModel");
        rosterdao.postUserString(userId, stringVal, hint, resetting, con, logger, callback);
    }

    module.exports.getUserHint = function (userId, con, logger, callback) {
        logger.info("getUserHint in rosterModel");
        rosterdao.getUserHint(userId, con, logger, callback);
    } */

    module.exports.getEmail = function (userId, con, logger, callback) {
        logger.info("getEmail in rosterModel");
        rosterdao.getEmail(userId, con, logger, callback);
    }

    module.exports.getCompletedStudents = function (passwordId, con, logger, callback) {
        logger.info("getCompletedStudents in rosterModel");
        rosterdao.getCompletedStudents(passwordId, con, logger, callback);
    }

    module.exports.getAssignedTestByPwdId = function (passwordId, con, logger, callback) {
        logger.info("getAssignedTestByPwdId in rosterModel");
        rosterdao.getAssignedTestByPwdId(passwordId, con, logger, callback);
    }
    module.exports.getLastDownloadedTime = function(userId, con, logger, callback){
        logger.info("getLastDownloadedTime in rosterModel");
        rosterdao.getLastDownloadedTime(userId, con, logger, callback);
    }
    module.exports.updateLastDownloadedTime = function(userId, con, logger, callback){
        logger.info("updateLastDownloadedTime in rosterModel");
        rosterdao.updateLastDownloadedTime(userId, con, logger, callback);
    }
    module.exports.checkIfRostersExist = function(userId, con, logger, callback){
        logger.info("checkIfRostersExist in rosterModel");
        rosterdao.checkIfRostersExist(userId, con, logger, callback);
    }
}()); 