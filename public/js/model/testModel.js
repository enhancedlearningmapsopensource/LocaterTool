var testModel = can.Model({

    getTestsByUserId: function (success, error) {
        $.ajax({
            url: '/locatertool/getTestsByUserId',
            dataType: 'json',
            type: "POST",
            data: {
                withRevision: true
            },
            success: success
        });
    },
    getAllTestsByUserId: function (success, error) {
        $.ajax({
            url: '/locatertool/getAllTestsByUserId',
            dataType: 'json',
            type: "POST",
            data: {
                withRevision: true
            },
            success: success
        });
    },
    createNewTest: function (data, success, error) {
        $.ajax({
            url: '/locatertool/createNewTest',
            dataType: 'json',
            type: "POST",
            data: {
                testData: data
            },
            success: success,
            error: error
        });
    },
    getAllSubjects: function (success, error) {
        $.ajax({
            url: '/locatertool/getAllSubjects',
            dataType: 'json',
            type: "GET",
            success: success,
            error: error
        });
    },
    getTestData: function(testId, success, error){
        $.ajax({
            url: '/locatertool/getTestData',
            dataType: 'json',
            type: "POST",
            data: {
                testId: testId
            },
            success: success,
            error: error
        });
    },
    deleteTest: function (testId, success, error) {
        $.ajax({
            url: '/locatertool/deleteTest',
            dataType: 'json',
            type: "POST",
            data: {
                testId: testId
            },
            success: success,
            error: error
        });
    },
    uploadFile: function (file, success, error) {
        var formData = new FormData();    
        formData.append( 'uploadedFile', file );
        $.ajax({
            type: 'POST',
            url: '/locatertool/uploadFile',
            data: formData,
            success: success,
            error: error,
            processData: false,
            contentType: false
        });
    },
    deleteFile: function (fileName, success, error) {
        $.ajax({
            type: 'POST',
            url: '/locatertool/deleteFile',
            data: {
                fileName: fileName
            },
            success: success,
            error: error
        });
    },
    getAllUploadedFiles: function (success, error) {
        $.ajax({
            url: '/locatertool/getAllUploadedFiles',
            dataType: 'json',
            type: "GET",
            success: success,
            error: error
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
}, {});