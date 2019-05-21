var testTakerController = can.Control({
    defaults: {
        userId: '',
        studentId: '',
        rosterId: '',
        studentName: ''
    },
},
    {
        'init': function () {
            $('body').append(can.view('/assets/views/testTakerView.ejs'));
            var me = this;
            var testPreviewId = testTakerUtil.getqueryvariable("testpreview");
            var studentId = testTakerUtil.getqueryvariable("studentId");
            var passwordId = testTakerUtil.getqueryvariable("passwordId");
            var testType = testTakerUtil.getqueryvariable("test");
            if (testType && testType === 'localstorage') {//Use Test Data Stored in Local
                var jsonstring = localStorage.getItem("testbuilderdata");
                if (!jsonstring) {
                    alert("Error: no test buidler data found in local storage.");
                    return false;
                }
                document.getElementById("pageheader").style.display = "none";
                document.getElementById("pseudonymdiv").style.display = "none";
                teststate = testTakerUtil.safeJSONparse(jsonstring);
                testTakerUtil.render(true, true);
                document.getElementById("testsubmitbutton").style.display = "none";
                document.getElementById("viewresult").style.display = "";
                document.title = "TEST PREVIEW";
            } else if (studentId && passwordId) {
                //Result view
                testTakerModel.getTestResults(testPreviewId, passwordId, studentId, this.proxy('setReport'));
            } else {
                if (testPreviewId) {
                    testTakerModel.getTestPreviewById(testPreviewId, this.proxy('setViewState'));
                } else {
                    var companionPreviewId = testTakerUtil.getqueryvariable("companionpreview");
                    if (companionPreviewId) {
                        testTakerModel.getCompanionPreviewById(companionPreviewId, this.proxy('setViewState'));
                    }
                }
            }
            me.on(document, '#pseudonyminput', 'keypress', function (ev, el) {
                if (ev.which == 13) {
                    me.setStudentLogin();
                }
            });
            me.on(document, '#testpassword', 'keypress', function (ev, el) {
                if (ev.which == 13) {
                    me.setStudentLogin();
                }
            });
        },
        '#pseudonymsubmitbutton click': function () {
            this.setStudentLogin();
        },
        '.wordtd click': function (el, ev) {
            var word = el.prop('id');
            testTakerUtil.selectword(word, el);
        },

        setStudentLogin: function () {
            var userName = $("#pseudonyminput").val();
            var password = $("#testpassword").val();
            testTakerModel.getTest(userName, password, this.proxy('setTestState'));
        },

        'setTestState': function (result) {
            if (result.err) {
                if ($('#errorPopUp').length < 1) {
                    $('body #pseudonymdiv').append(can.view('/assets/views/errormessage.ejs', { err: result.err }));
                }
                uiCommon.showAlertBox('errorPopUp');
            } else if (result.isComplete) {
                document.getElementById("testform").innerHTML = "<h3>Your test has been submitted.</h3>";
                document.getElementById("testform").style.display = "";
                document.getElementById("pseudonymdiv").style.display = "none";
                document.getElementById("submitbuttondiv").style.display = "none";
            } else {
                document.getElementById("pageheader").style.display = "none";
                document.getElementById("pseudonymdiv").style.display = "none";
                teststate = testTakerUtil.safeJSONparse(JSON.stringify(result.testJson));
                testTakerUtil.render(true, true);
            }
        },
        'setReport': function (result) {
            if (result.err) {
                if ($('#errorPopUp').length < 1) {
                    $('body #pseudonymdiv').append(can.view('/assets/views/errormessage.ejs', { err: result.err }));
                }
                uiCommon.showAlertBox('errorPopUp');
            } else {
                document.getElementById("pageheader").style.display = "none";
                document.getElementById("pseudonymdiv").style.display = "none";
                teststate = testTakerUtil.safeJSONparse(JSON.stringify(result.testJson));
                responsesonly = testTakerUtil.safeJSONparse(JSON.stringify(result.testJson));
                testTakerUtil.render(true, true);
            }
        },
        'setViewState': function (result) {
            if (result.err) {
                if ($('#errorPopUp').length < 1) {
                    $('body #pseudonymdiv').append(can.view('/assets/views/errormessage.ejs', { err: result.err }));
                }
                uiCommon.showAlertBox('errorPopUp');
            } else {
                document.getElementById("pageheader").style.display = "none";
                document.getElementById("pseudonymdiv").style.display = "none";
                teststate = testTakerUtil.safeJSONparse(JSON.stringify(result.testJson));
                testTakerUtil.render(true, true);
                document.getElementById("testsubmitbutton").style.display = "none";
                document.getElementById("viewresult").style.display = "";
                document.title = "TEST PREVIEW";
            }
        },
        '#popupOKButton click': function () {
            $('#errorPopUp').fadeOut('slow');
            setTimeout(function () {
                $('#errorPopUp').remove();
            }, 500);
        },
        '#testsubmitbutton click': function () {
            testTakerUtil.postTest();
        },
        '#viewresult click': function () {
            responsesonly = testTakerUtil.safeJSONparse(JSON.stringify(teststate));
            testTakerUtil.render(true, true, true);
        },
        '#zoomoutbutton click': function () {
            testTakerUtil.zoomtext(9 / 10);
        },
        '#zoomoriginalbutton click': function () {
            testTakerUtil.zoomtext(0);
        },
        '#zoominbutton click': function () {
            testTakerUtil.zoomtext(10 / 9);
        },
        '#leftbutton click': function () {
            testTakerUtil.movepartition(1);
        },
        '#rightbutton click': function () {
            testTakerUtil.movepartition(-1);
        }

    });