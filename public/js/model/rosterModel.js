var rosterModel = can.Model({

    createRoster: function (userId, rosterName, rosterLength, success) {

        $.ajax({
            url: '/locatertool/createRoster',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterName: rosterName,
                rosterLength: rosterLength
            },
            success: success
        });

    },

    getRostersByUserId: function (userId, success) {
        $.ajax({
            url: '/locatertool/getRostersByUserId',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId
            },
            success: success
        });
    },

    deleteStudentFromRoster: function (userId, rosterId, studentId, success) {
        $.ajax({
            url: '/locatertool/deleteStudentFromRoster',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterId: rosterId,
                studentId: studentId
            },
            success: success
        });
    },
    deleteRoster: function (userId, rosterId, success) {
        $.ajax({
            url: '/locatertool/deleteRoster',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterId: rosterId
            },
            success: success
        });
    },
    renameStudent: function (userId, rosterId, studentId, success) {
        $.ajax({
            url: '/locatertool/renameStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterId: rosterId,
                studentId: studentId
            },
            success: success
        });
    },

    getRosterNamesofStudent: function (userId, studentId, success) {
        $.ajax({
            url: '/locatertool/getRosterNamesofStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                studentId: studentId
            },
            success: success
        });
    },

    getInActiveRostersByUserId: function (userId, success) {

        $.ajax({
            url: '/locatertool/getInActiveRostersByUserId',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId
            },
            success: success
        });

    },
    activateRoster: function (userId, rosterName, success) {
        $.ajax({
            url: '/locatertool/activateRoster',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterName: rosterName
            },
            success: success
        });
    },
    activateStudent: function (userId, studentId, rosterId, success) {
        $.ajax({
            url: '/locatertool/activateStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                studentId: studentId,
                rosterId: rosterId
            },
            success: success
        });
    },
    addNewStudent: function (userId, rosterId, success) {
        $.ajax({
            url: '/locatertool/addNewStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                rosterId: rosterId
            },
            success: success
        });
    },

    checkExistingStudent: function (userId, psuedonym, rosterId, success) {
        $.ajax({
            url: '/locatertool/checkExistingStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                psuedonym: psuedonym,
                rosterId: rosterId
            },
            success: success
        });
    },

    assignTest: function (userId, assignTestJson, success) {
        $.ajax({
            url: '/locatertool/assignTest',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                jsonObj: assignTestJson
            },
            success: success
        });
    },
    checkEditedPassword: function (assignTestJson, success) {
        $.ajax({
            url: '/locatertool/checkEditedPassword',
            dataType: 'json',
            type: "POST",
            data: {
                jsonObj: assignTestJson
            },
            success: success
        });
    },
    saveEditAssignedTest: function (passwordObj, deleteStdList, updateStdList, insertStdList, success) {
        $.ajax({
            url: '/locatertool/saveEditAssignedTest',
            dataType: 'json',
            type: "POST",
            data: {
                passwordObj: passwordObj,
                deleteStdObj: deleteStdList,
                updateStdObj: updateStdList,
                insertStdObj: insertStdList
            },
            success: success
        });
    },

    checkTestForStudent: function (userId, assignTestJson, success) {
        $.ajax({
            url: '/locatertool/checkTestForStudent',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
                jsonObj: assignTestJson
            },
            success: success
        });
    },


    getAssignedTests: function (userId, success) {
        $.ajax({
            url: '/locatertool/getAssignedTests',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId,
            },
            success: success
        });

    },

    getAllTests: function (userId, success) {
        $.ajax({
            url: '/locatertool/getAllTests',
            dataType: 'json',
            type: "POST",
            data: {
                userId: userId
            },
            success: success
        });
    },
    deleteAssignedTest: function (passwordId, success) {
        $.ajax({
            url: '/locatertool/deleteAssignedTest',
            dataType: 'json',
            type: "POST",
            data: {
                passwordId: passwordId
            },
            success: success
        });
    },
    getTestReportDetails: function (testId, password, success) {
        $.ajax({
            url: '/locatertool/getTestReportDetails',
            dataType: 'json',
            type: "POST",
            data: {
                testId: testId,
                password: password
            },
            success: success
        });
    },
    getQuestionReport: function (questionId, testId, passwordId, questionType, success) {
        $.ajax({
            url: '/locatertool/getQuestionReport',
            dataType: 'json',
            type: "POST",
            data: {
                questionId: questionId,
                testId: testId,
                passwordId: passwordId,
                questionType: questionType
            },
            success: success
        });
    },
    getStudentReport: function (studentId, success) {
        $.ajax({
            url: '/locatertool/getStudentReport',
            dataType: 'json',
            type: "POST",
            data: {
                studentId: studentId
            },
            success: success
        });
    },

//commenting for PII ph2 
/*     getSensitiveString: function (userId, success) {
        $.ajax({
            url: '/locatertool/getUserString',
            dataType: 'json',
            type: "GET",
            data: {
                userId: userId
            },
            success: success
        });
    },

    showHint: function (success) {
        $.ajax({
            url: '/locatertool/getUserHint',
            dataType: 'json',
            type: "GET",
            success: success
        });
    }, */

    getCompletedStudents: function (passwordId, success) {
        $.ajax({
            url: '/locatertool/getCompletedStudents',
            dataType: 'json',
            type: "POST",
            data: {
                passwordId: passwordId
            },
            success: success
        });
    },
    getAssignedTestByPwdId: function (passwordId, success) {
        $.ajax({
            url: '/locatertool/getAssignedTestByPwdId',
            dataType: 'json',
            type: "POST",
            data: {
                passwordId: passwordId
            },
            success: success
        });
    },

    validateNodes: function(nodes,subPrefix, success, error){
        $.ajax({
            url: '/locatertool/validateNodes',
            dataType: 'json',
            type: "POST",
            data: {
                nodes: nodes,
                subPrefix: subPrefix
            },
            success: success,
            error: error
        });
    },

    getLastDownloadedTime: function(userId,success){
        $.ajax({
            url: '/locatertool/getLastDownloadedTime',
            dataType: 'json',
            type: "GET",
            data:{
                userId: userId
            },
            success: success
        });
    },
 
    //Author: Vidya
	//Issue: PII change 
	//Update Downloaded timestamp in database
	// Update last downloaded timestamp in database once user clicks "Export ALL"
    updateLastDownloadedTime: function(userId, callback){
        $.ajax({
            url: '/locatertool/updateLastDownloadedTime',
            dataType: 'json',
            type: "PUT",
            data: {
                userId: userId
            },
            success: callback
        });
    },

    //Author: Vidya
	//Issue: PII change 
	//check if a user has any rosters
    checkIfRostersExist: function(callback){
        $.ajax({
            url: '/locatertool/checkIfRostersExist',
            dataType: 'json',
            type: "GET",
            success: callback            
        });
    },

}, {});