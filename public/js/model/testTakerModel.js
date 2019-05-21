var testTakerModel = can.Model({
    getTest: function (userName, password, success) {

        $.ajax({
            url: '/locatertool/testTaker/getStudentTest',
            dataType: 'json',
            type: "POST",
            data: {
                userName: userName,
                password: password
            },
            success: success
        });

    },
    postStudentTest: function (responsesonly, success) {
        $.ajax({
            url: '/locatertool/testTaker/postStudentTest',
            dataType: 'json',
            type: "POST",
            data: {
                responsesonly: responsesonly
            },
            success: success
        });

    },
    getTestPreviewById: function (testId, success) {
        $.ajax({
            url: '/locatertool/testTaker/getTestPreviewById',
            dataType: 'json',
            type: "POST",
            data: {
                testId: testId
            },
            success: success
        });
    },
    getCompanionPreviewById: function (testId, success) {
        $.ajax({
            url: '/locatertool/testTaker/getCompanionPreviewById',
            dataType: 'json',
            type: "POST",
            data: {
                testId: testId
            },
            success: success
        });
    },
    getTestResults: function (testId, passwordId, studentId, success) {
        $.ajax({
            url: '/locatertool/testTaker/getTestResults',
            dataType: 'json',
            type: "POST",
            data: {
                testId: testId,
                passwordId: passwordId,
                studentId: studentId
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
}, {});