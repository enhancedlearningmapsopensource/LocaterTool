(function () {
    var getRosterModel = require('../model/rosterModel');
    //var rosterresponsemodel = require('./model/rosterResponseModel');


    var _createRoster = function (userId, rosterName, rosterLength, con, logger, callback) {
        logger.info('createRoster in rosterService');
        getRosterModel.createRoster(userId, rosterName, rosterLength, con, logger, callback);
    }

    var _getRostersByUserId = function (userId, con, logger, callback) {
        logger.info('getRostersByUserId in rosterService');
        getRosterModel.getRostersByUserId(userId, con, logger, callback);
    }

    var _getInActiveRostersByUserId = function (userId, con, logger, callback) {
        logger.info('getInActiveRostersByUserId in rosterService');
        getRosterModel.getInActiveRostersByUserId(userId, con, logger, callback);
    }

    var _deleteRoster = function (userId, rosterId, con, logger, callback) {
        logger.info('deleteRoster in rosterService');
        getRosterModel.deleteRoster(userId, rosterId, con, logger, callback);
    }

    var _deleteStudentFromRoster = function (userId, rosterId, studentId, con, logger, callback) {
        logger.info('deleteStudentFromRoster in rosterService');
        getRosterModel.deleteStudentFromRoster(userId, rosterId, studentId, con, logger, callback);
    }

    var _getUserIdFromEmail = function (email, con, logger, callback) {
        logger.info('getUserIdFromEmail in rosterService');
        getRosterModel.getUserIdFromEmail(email, con, logger, callback);
    }
    var _renameStudent = function (userId, rosterId, studentId, con, logger, callback) {
        logger.info('renameStudent in rosterService');
        getRosterModel.renameStudent(userId, rosterId, studentId, con, logger, callback);
    }
    var _activateRoster = function (userId, rosterName, con, logger, callback) {
        logger.info('activateRoster in rosterService');
        getRosterModel.activateRoster(userId, rosterName, con, logger, callback);
    }
    var _activateStudent = function (userId, studentId, rosterId, con, logger, callback) {
        logger.info('activateStudent in rosterService');
        getRosterModel.activateStudent(userId, studentId, rosterId, con, logger, callback);
    }
    var _addNewStudent = function (userId, rosterId, con, logger, callback) {
        logger.info('addNewStudent in rosterService');
        getRosterModel.addNewStudent(userId, rosterId, con, logger, callback);
    }

    var _checkExistingStudent = function (userId, psuedonym, rosterId, con, logger, callback) {
        logger.info('checkExistingStudent in rosterService');
        getRosterModel.checkExistingStudent(userId, psuedonym, rosterId, con, logger, callback);
    }
    var _getRosterNamesofStudent = function (userId, studentId, con, logger, callback) {
        logger.info('getRosterNamesofStudent in rosterService');
        getRosterModel.getRosterNamesofStudent(userId, studentId, con, logger, callback);
    }
    var _assignTest = function (userId, testObject, con, logger, callback) {
        logger.info('assignTest in rosterService');
        getRosterModel.assignTest(userId, testObject, con, logger, callback);
    }
    var _checkEditedPassword = function (userId, testObject, con, logger, callback) {
        logger.info('checkEditedPassword in rosterService');
        getRosterModel.checkEditedPassword(userId, testObject, con, logger, callback);
    }
    var _saveEditAssignedTest = function (userId, passwordObj, deleteStdObj, updateStdObj, insertStdObj, con, logger, callback) {
        logger.info('saveEditAssignedTest in rosterService');
        getRosterModel.saveEditAssignedTest(userId, passwordObj, deleteStdObj, updateStdObj, insertStdObj, con, logger, callback);
    }
    var _checkTestForStudent = function (userId, testObject, con, logger, callback) {
        logger.info('checkTestForStudent in rosterService');
        getRosterModel.checkTestForStudent(userId, testObject, con, logger, callback);
    }
    var _getAssignedTests = function (userId, con, logger, callback) {
        logger.info('getAssignedTests in rosterService');
        getRosterModel.getAssignedTests(userId, con, logger, callback);
    }

    var _getStudentTest = function (userName, password, con, logger, callback) {
        logger.info('assignTest in rosterService');
        getRosterModel.getStudentTest(userName, password, con, logger, callback);
    }

    
//commenting for PII ph2 
    /* var _getUserString = function (userId, con, logger, callback) {
        logger.info("_getUserString in rosterService");
        getRosterModel.getUserString(userId, con, logger, callback);
    }
    var _postUserString = function (userId, stringVal, hint, resetting, con, logger, callback) {
        logger.info("_postUserString in rosterService");
        getRosterModel.postUserString(userId, stringVal, hint, resetting, con, logger, callback);
    } 
    var _getUserHint = function (userId, con, logger, callback) {
        logger.info("_getUserHint in rosterService");
        getRosterModel.getUserHint(userId, con, logger, callback);
    }*/
    var _getEmail = function (userId, con, logger, callback) {
        logger.info("_getEmail in rosterService");
        getRosterModel.getEmail(userId, con, logger, callback);
    }
    var _getCompletedStudents = function (passwordId, con, logger, callback) {
        logger.info("_getCompletedStudents in rosterService");
        getRosterModel.getCompletedStudents(passwordId, con, logger, callback);
    }
    var _getAssignedTestByPwdId = function (passwordId, con, logger, callback) {
        logger.info("_getAssignedTestByPwdId in rosterService");
        getRosterModel.getAssignedTestByPwdId(passwordId, con, logger, callback);
    }
    var _getLastDownloadedTime = function (userId, con, logger, callback) {
        logger.info("_getLastDownloadedTime in rosterService");
        getRosterModel.getLastDownloadedTime(userId, con, logger, callback);
    }
    var _updateLastDownloadedTime = function (userId, con, logger, callback) {
        logger.info("_updateLastDownloadedTime in rosterService");
        getRosterModel.updateLastDownloadedTime(userId, con, logger, callback);
    }
    var _checkIfRostersExist = function (userId, con, logger, callback) {
        logger.info("_checkIfRostersExist in rosterService");
        getRosterModel.checkIfRostersExist(userId, con, logger, callback);
    }
    var execute = function (methodName, jsonParams, con, logger, callback) {
        logger.info('Inside  execute method in rosterService');
        try {
            switch (methodName) {
                case "createRoster":
                    _createRoster(jsonParams['userId'], jsonParams['rosterName'], jsonParams['rosterLength'], con, logger, callback)
                    break;
                case "getRostersByUserId":
                    _getRostersByUserId(jsonParams['userId'], con, logger, callback)
                    break;
                case "getInActiveRostersByUserId":
                    _getInActiveRostersByUserId(jsonParams['userId'], con, logger, callback)
                    break;
                case "deleteRoster":
                    _deleteRoster(jsonParams['userId'], jsonParams['rosterId'], con, logger, callback);
                    break;
                case "deleteStudentFromRoster":
                    _deleteStudentFromRoster(jsonParams['userId'], jsonParams['rosterId'], jsonParams['studentId'], con, logger, callback);
                    break;
                case "getUserIdFromEmail":
                    _getUserIdFromEmail(jsonParams['email'], con, logger, callback);
                    break;
                case "renameStudent":
                    _renameStudent(jsonParams['userId'], jsonParams['rosterId'], jsonParams['studentId'], con, logger, callback);
                    break;
                case "activateRoster":
                    _activateRoster(jsonParams['userId'], jsonParams['rosterName'], con, logger, callback);
                    break;
                case "activateStudent":
                    _activateStudent(jsonParams['userId'], jsonParams['studentId'], jsonParams['rosterId'], con, logger, callback);
                    break;
                case "addNewStudent":
                    _addNewStudent(jsonParams['userId'], jsonParams['rosterId'], con, logger, callback);
                    break;
                case "checkExistingStudent":
                    _checkExistingStudent(jsonParams['userId'], jsonParams['psuedonym'], jsonParams['rosterId'], con, logger, callback);
                    break;
                case "getRosterNamesofStudent":
                    _getRosterNamesofStudent(jsonParams['userId'], jsonParams['studentId'], con, logger, callback);
                    break;
                case "saveEditAssignedTest":
                    _saveEditAssignedTest(jsonParams['userId'], jsonParams['passwordObj'], jsonParams['deleteStdObj'], jsonParams['updateStdObj'], jsonParams['insertStdObj'], con, logger, callback);
                    break;
                case "assignTest":
                    _assignTest(jsonParams['userId'], jsonParams['testObject'], con, logger, callback);
                    break;
                case "checkEditedPassword":
                    _checkEditedPassword(jsonParams['userId'], jsonParams['testObject'], con, logger, callback);
                    break;
                case "checkTestForStudent":
                    _checkTestForStudent(jsonParams['userId'], jsonParams['testObject'], con, logger, callback);
                    break;
                case "getAssignedTests":
                    _getAssignedTests(jsonParams['userId'], con, logger, callback);
                    break;
                case "getStudentTest":
                    _getStudentTest(jsonParams['userName'], jsonParams['password'], con, logger, callback);
                    break;
                    //commenting for PII ph2 
                /* case "getUserString":
                    _getUserString(jsonParams['userId'], con, logger, callback);
                    break;
                case "postUserString":
                    _postUserString(jsonParams['userId'], jsonParams['stringVal'], jsonParams['hint'], jsonParams['resetting'], con, logger, callback);
                    break; 
                case "getUserHint":
                    _getUserHint(jsonParams['userId'], con, logger, callback);
                    break;*/
                case "getEmail":
                    _getEmail(jsonParams['userId'], con, logger, callback);
                    break;
                case "getCompletedStudents":
                    _getCompletedStudents(jsonParams['passwordId'], con, logger, callback);
                    break;
                case "getAssignedTestByPwdId":
                    _getAssignedTestByPwdId(jsonParams['passwordId'], con, logger, callback);
                    break;
                case "getLastDownloadedTime":
                    _getLastDownloadedTime(jsonParams['userId'], con, logger, callback);
                    break;                    
                case "updateLastDownloadedTime":
                _updateLastDownloadedTime(jsonParams['userId'], con, logger, callback);
                break; 
                case "checkIfRostersExist":
                _checkIfRostersExist(jsonParams['userId'], con, logger, callback);
                break;                 
                default:
                    logger.info("Roster Service: Method not defined");
            }

        } catch (e) {
            logger.info("Error occurred in Roster Service: ", e.stack);
            //throw new Error(e);
            callback(e);
        }
    };


    module.exports.execute = execute;
}()); 