var sensitivedata = { email: {}, realname: {}, timestamp: 0 };
var aeskey;
var resetpassphrasewarning = false;
var isresettingpassphrase = false;
var usinglocalkey = false;
var userId;
var MathJaxReady = false;
var mathjaxscriptloaded = false;
var allRostersData;
var savedtestData;
var editAssigned;
var assignedTestData;

var locater = new function () {
    this.createNewRoster = function () {
    var rosterLength = $('#newrosterlength').val();
        var rosterName = $('#newrostername').val();
        $('#newrosterlength').val("");
        $('#newrostername').val("");
        if (rosterName == "") {
            alert("ERROR: please specify a roster name.");
        }
        else if (!rosterLength) {
            alert("ERROR: please specify a class size.");
        }
        else {
            rosterModel.createRoster(userId, rosterName, rosterLength, function (resultJson) {
                if (resultJson.success == 'false') {
                    locater.alertMsg("The roster with name already exists for the user.", "error-OK-btn");
                } else {
                    rosterModel.getRostersByUserId(userId, function (data) {
                        $('#innerViewRostersdiv').remove();
                        $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: data }));
                        allRostersData = data;
                        $('#locaterInnerdiv').remove();
                        $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                        $('#assignedtestsInner').remove();
                        $('#assignRosterToTestInner').remove();
                        if (! isEmpty(savedtestData)) {
                            $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                        }
                        if (!isEmpty(assignedTestData)) {
                            $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));    
                        }
                    });
                }
            });
        }
     };


    this.deleteStudentFromRoster = function (rosterId, studentId, studentName) {
        if(!studentName){
            studentName= $("#table_row"+rosterId+"_"+studentId+" i").text().trim();
        }        
        if(sensitivedata.realname[studentName]){
            $("#warningMsg").show();
        }
        showConfirmBox("Are you sure you want to remove the student <b>" + studentName + "</b> ?", 'rmv-std-yes-btn', rosterId, studentId);
    };


    function showConfirmBox(msg, btnName, input1, input2) { /*change*/
        var $content = "<div class='dialog-overlay' id='" + input1 + "'>" +
            "<div class='dialog' id='" + input2 + "'>" +
            "<i class='fa fa-close'></i>" +
            "<div class='dialog-msg'>" +
            " <p class='padding7'> " + msg + " </p> " +
            "</div>" +
            "<footer>" +
            "<div class='controls'>" +
            " <button id='confirm-OK' class='button " + btnName + " active' tabIndex='1' autofocus >OK</button>&nbsp;&nbsp;" +
            " <button class='button cancel-btn' tabIndex='2'>Cancel</button> " +
            "</div></footer>" +
            "</div>" +
            "</div>";
        $('body').prepend($content);
        $('#confirm-OK').trigger("focus");
        $('body').css('overflow', 'hidden');
    }

    this.deleteRoster = function (rosterId, rosterName) {
        showConfirmBox("Are you sure you want to remove <b>" + rosterName + "</b> ?", 'del-roster-yes-btn', rosterId, "0");

    }

    function showConfirmBoxWithInput(msg, btnName, input1, input2, tableId, stdLength) { /*change*/
        var $content = "<div class='dialog-overlay' id='" + input1 + "'>" +
            "<div class='dialog' id='" + input2 + "'>" +
            "<i class='fa fa-close'></i>" +
            "<div class='dialog-msg'>" +
            " <p> " + msg + " </p>" +
            "<input type='text' id='psuedo-id' style='width: 210px; height: 15px; padding: 2px; border-style: solid;" +
            "border-color: rgb(56, 135, 201);border-width:1px;'></input>" +
            "</div>" +
            "<footer id='ft_" + stdLength + "' class='ftaddexisting'>" +
            "<div class='controls'>" +
            " <button id='btn-add-existing' class='button " + btnName + " active'  tabIndex='1' autofocus>OK</button>" +
            " <button id='confirm-cancel-btn' class='cancel-btn'  tabIndex='2'>Cancel</button> " +
            "</div>" +
            "</footer>" +
            "</div>" +
            "</div>";
        $('body').prepend($content);
        $('#psuedo-id').trigger("focus");
        $('body').css('overflow', 'hidden');
    }

    this.showAlertMsg = function (msg, btnName) {
        var $content = "<div class='dialog-overlay'>" +
            "<div class='dialog' style='overflow:auto;'>" +
            "<i class='fa fa-close'></i>" +
            "<div class='dialog-msg' style='overflow:auto;word-wrap:break-word;'>" +
            " <p> " + msg + " </p>" +
            "</div>" +
            "<footer>" +
            "<div class='controls' style='text-alight:right;'>" +
            " <button id='alert-ok-btn' class='button " + btnName + " active' style='text-align:center;'>OK</button> " +
            "</div>" +
            "</footer>" +
            "</div>" +
            "</div>";
        $('.dialog-overlay').replaceWith($content);
        $('#alert-ok-btn').focus();
        return true;
    }

    this.alertMsg = function (msg, btnName) {
        $content = "<div class='dialog-overlay'>" +
            "<div id='dialogID' class='dialog' style='overflow:auto;'>" +
            "<i class='fa fa-close'></i>" +
            "<div class='dialog-msg'>" +
            " <p style='text-align:center'> " + msg + " </p><br>" +
            "</div>" +
            "<footer>" +
            "<div class='controls' style='text-alight:right;'>" +
            " <button id='alert-ok-btn' class='button " + btnName + " active' style='text-align:center;'>OK</button> " +
            "</div>" +
            "</footer>" +
            "</div>" +
            "</div>";
        $('body').prepend($content);
        $('#alert-ok-btn').focus();
        $('body').css('overflow', 'hidden');
    }

    this.addExistingStudent = function (rosterId, tableId, stdLength) {
        showConfirmBoxWithInput("Enter a student psuedonym.", "add-existing-std-btn", "addexisting", rosterId, tableId, stdLength);
    }





    this.sortNames = function (rosterId) {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("studenttable" + rosterId);
        switching = true;
        while (switching) {
            switching = false;
            rows = table.getElementsByTagName("TR");
            //row.length-3 to avoid last two Rows which are Add New Student and Add Existing studemt.
            for (i = 1; i < (rows.length - 3); i++) {
                shouldSwitch = false;
                //TD[2] will be column 2, which is realname.
                x = rows[i].getElementsByTagName("input")[1].value;
                y = rows[i + 1].getElementsByTagName("input")[1].value;
                if (x.toLowerCase() > y.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }
    this.sortUsers = function (rosterId) {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("studenttable" + rosterId);
        switching = true;
        while (switching) {
            switching = false;
            rows = table.getElementsByTagName("TR");
            //row.length-3 to avoid last two Rows which are Add New Student and Add Existing studemt.
            for (i = 1; i < (rows.length - 3); i++) {
                shouldSwitch = false;
                //TD[2] will be column 3, which is psuedonym.
                x = rows[i].getElementsByTagName("TD")[2];
                y = rows[i + 1].getElementsByTagName("TD")[2];
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }

    this.renameStudent = function (rosterId, studentId, studentName) {
        rosterModel.renameStudent(userId, rosterId, studentId, function (data) {
            // var userId = " axd ";
            if(!studentName){
                studentName= $("#table_row"+rosterId+"_"+studentId+" i").text().trim();
            }
            if (data != null) {
                if (!data.renameStudentFlag) {
                    if (data.rosterdetails != null && Object.keys(data.rosterdetails).length > 0) {
                        var numberOfRosters = Object.keys(data.rosterdetails).length;
                        var rosternames = "";
                        for (var i = 0; i < numberOfRosters; i++) {
                            rosternames = rosternames + userId + " <b> " + data.rosterdetails[i].ROSTER_NAME + "</b><br/>";
                        }
                        var msg = "ERROR: student  <b>" + studentName + "</b> is enrolled in multiple classes." + 
                        "<br/>To change the student's username:"+
                        "<br/>1. Delete the student username from one roster "+
                        "<br/>2. Refresh the remaining username"+
                        "<br/>3. Add the student to the previous roster with the new username";
                        var btnName = "error-rename-OK-btn";
                        locater.alertMsg(msg, btnName);
                        $('.dialog').css("width", "400px");
                    } else {
                        var msg = data.errorMsg;
                        var btnName = "error-rename-OK-btn";
                        locater.alertMsg(msg, btnName);
                    }
                } else {
                    var username_id = "realname_"+data.STUDENT_NAME.split(" ").join("_");
                    var tableBodyPtr = $('#rostertableID_' + rosterId).find('table tbody');
                    var rowPtr = tableBodyPtr.find('#studentID_' + studentId);
                    var realnameval = (sensitivedata.realname[studentName]) ? sensitivedata.realname[studentName] : "";
                    var $htmlRow = "<tr id='studentID_" + data.STUDENT_ID + "'>" +
                        " <td>" +
                        "<input id='studentcheck_" + rosterId + "_" + data.STUDENT_ID + "' " +
                        "onchange='if(this.checked) locater.checkstudent(" + rosterId + "," + data.STUDENT_ID + "); else locater.uncheckstudent(" + rosterId + "," + data.STUDENT_ID + ");'" +
                        "type='checkbox' name='studentnames_" + rosterId + "'>" +
                        " </td>" +
                        " <td>" +
                        " <input id='realname' class='"+username_id +"' onkeydown='if(event.keyCode === 13) movedown(this);' oninput='this.style.backgroundColor = aeskey ? '#FFC' : '#FDD''" +
                        " value='"+ realnameval  +"' type='text' />" +
                        "</td >" +
                        "<td id='table_row" + rosterId+"_"+ data.STUDENT_ID + "' style='text-transform:capitalize;white-space:no-wrap; '>" +
                        "<i style='font-style:normal;'>" +
                        data.STUDENT_NAME +
                        " </i>" +
                        "<span style='float:right;font-weight:bold; '>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        " <a onclick='locater.renameStudent(" + rosterId + "," + data.STUDENT_ID + ");' style='text-decoration:none;cursor: pointer;'" +
                        "title='rename student'>↺</a>&nbsp;&nbsp;&nbsp;" +
                        "<a style='text-decoration:none;cursor: pointer;' title='remove student' onclick='locater.deleteStudentFromRoster(" + rosterId + "," + data.STUDENT_ID + ");'>×</a>" +
                        "</span >" +
                        "</td >" +
                        "<td id='report_student_" + data.STUDENT_ID + "' style='text-align:center;'>" +
                        "<a href='#' style='display:none;' onclick='locater.getStudentReport(" + data.STUDENT_ID + ");'>View</a>" +
                        "</td>" +
                        "</tr>";
                    rowPtr.replaceWith($htmlRow);                    
                    //fixing issue reported for PII UAT
                    //updating sensitive data, if the username is updated for a student
                    //whose realname is already mapped.
                    if (realnameval) {
                        var elemId = $("." + username_id).attr('id');
                        $("#warningMsg").show();
                        //remove the older mapping from sensitive data
                        delete sensitivedata["realname"][studentName];
                        //add reamname mapping with new student name to localstorage
                        sensitivedata["realname"][data.STUDENT_NAME] = realnameval;
                    }
                }
            };
        });


    }

    this.addNewStudent = function (rosterId, stdLength) {
        if (stdLength >= 99) {
            alert("Selected Roster already has 99 students, cant add more.");
            return;
        }
        rosterModel.addNewStudent(userId, rosterId, function (data) {
            var studentId = data.STUDENT_ID;
            var studentName = data.STUDENT_NAME;
            var reportVal = 0;
            locater.addStudent(studentId, studentName, rosterId, reportVal, stdLength);
        });
    }

    this.addStudent = function (studentId, studentName, rosterId, reportVal, stdLength) {
        var rname;
        var stdname=studentName.toLowerCase();
        if(sensitivedata){
            rname=locater.getsensitive("realname",stdname,sensitivedata);
        }
        if(rname){
            $("#warningMsg").show();
        }
        var underscored = stdname.split(" ").join("_") ;
        var tableBodyPtr = $('#rostertableID_' + rosterId).find('table tbody');
        tableBodyPtr.find('tr:last').remove();
        tableBodyPtr.find('tr:last').remove();
        var $htmlRow = "<tr id='studentID_" + studentId + "'>" +
            " <td>" +
            "<input id='studentcheck_" + rosterId + "_" + studentId + "' " +
            "onchange='if(this.checked) locater.checkstudent(" + rosterId + "," + studentId + "," + stdLength + "); else locater.uncheckstudent(" + rosterId + "," + studentId + ");'" +
            "type='checkbox' name='studentnames_" + rosterId + "'>" +
            " </td>" +
            " <td>" +
            " <input id='realname"+rosterId+"_"+studentId+"' class='realname_"+underscored+"' onkeydown='if(event.keyCode === 13) movedown(this);' "+
            " value='"+rname+"' type='text'/>"+
            "</td >" +
            "<td id='table_row" + studentId + "' style='text-transform:capitalize;white-space:no-wrap; '>" +
            "<i style='font-style:normal;'>" + studentName +
            " </i>" +
            "<span style='float:right;font-weight:bold; '>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            " <a onclick='locater.renameStudent(" + rosterId + "," + studentId + ");' style='text-decoration:none;cursor: pointer;'" +
            "title='rename student'>↺</a>&nbsp;&nbsp;&nbsp;" +
            "<a style='text-decoration:none;cursor: pointer;' title='remove student' onclick='locater.deleteStudentFromRoster(" + rosterId + "," + studentId + ");'>×</a>" +
            "</span >" +
            "</td >" +
            "<td id='report_student_" + studentId + "' style='text-align:center;'>" +
            "<a id='report_view_" + studentId + "' href='#' onclick='locater.getStudentReport(" + studentId + ");'>View</a>" +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td style='text-align:center;'>" +
            "<a id='addNewStd' style='font-weight:bold;text-decoration:none;cursor:pointer;' onclick='locater.addNewStudent(" + rosterId + "," + (parseInt(stdLength) + 1) + ");'>+</a>" +
            " </td >" +
            " <td>" +
            "<a id ='addNewStd' style = 'font-weight:bold;text-decoration:none;cursor:pointer' onclick = 'locater.addNewStudent(" + rosterId + "," + (parseInt(stdLength) + 1) + ");'> Add New Student</a >" +
            "</td >" +
            "</tr >" +
            "<tr>" +
            "<td style='text-align: center;'>" +
            "<a id='addExistingStd' style='font-weight:bold;text-decoration:none;cursor:pointer;' onclick='locater.addExistingStudent(" + rosterId + ",studenttable" + rosterId + "," + (parseInt(stdLength) + 1) + ");'>+</a>" +
            "</td >" +
            " <td >" +
            "<a id='addExistingStd' style='font-weight: bold;text-decoration: none; cursor: pointer; ' onclick='locater.addExistingStudent(" + rosterId + ",studenttable" + rosterId + "," + (parseInt(stdLength) + 1) + ");'> Add Existing Student</a > " +
            "</td >" +
            "</tr >";
        tableBodyPtr.append($htmlRow);
        if (reportVal == 0) {
            $('#report_view_' + studentId).css('display', 'none');
        }
    }

    this.activateRoster = function (rosterName) {
        rosterModel.activateRoster(userId, rosterName, (function (data) {
            var removeRosterRowPtr = $('#removedRosterTable').find('tbody');
            removeRosterRowPtr.find('rm-roster-' + rosterName).remove();
            return function () {
                rosterModel.getRostersByUserId(userId, function (result1) {
                    allRostersData = result1;
                    $('#innerViewRostersdiv').remove();
                    $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: result1 }));
                });
                rosterModel.getInActiveRostersByUserId(userId, function (result2) {
                    $('#removedInnerDiv').remove();
                    $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: result2 }));
                });
                rosterModel.getAssignedTests(userId, function (data) {
                    if (data != null && data.length > 0) {
                        assignedTestData = data;
                        $('#locaterInnerdiv').remove();
                        $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                        $('#assignedtestsInner').remove();
                        $('#assignRosterToTestInner').remove();
                        $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                        $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

                    }
                });
            }
        })());
    }

    function removeRosterRow(userId, rosterName) {
        var removeRosterRowPtr = $('#removedRosterTable').find('tbody');
        var rosterRowName = removeRosterRowPtr.find('rm-roster-' + rosterName);
        rosterRowName.remove();
        rosterModel.getInActiveRostersByUserId(userId, function (result2) {
            $('#removedInnerDiv').remove();
            $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: result2 }));

        });
        rosterModel.getRostersByUserId(userId, function (result1) {
            allRostersData = result1;
            $('#innerViewRostersdiv').remove();
            $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: result1 }));
        });
        rosterModel.getAssignedTests(userId, function (data) {
            if (data != null && data.length > 0) {
                assignedTestData = data;
                $('#locaterInnerdiv').remove();
                $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                $('#assignedtestsInner').remove();
                $('#assignRosterToTestInner').remove();
                $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));
            }
        });

    }

    this.activateStudent = function (studentName, studentId, rosterId, rosterName, rosterFlag) {
        if (!rosterFlag) {
            showConfirmBox("Before you can restore the user <b>" + studentName + "</b>, you must restore the roster <b>" + rosterName + " </b> ", 'activate-std-yes-btn', rosterId, studentId);
        }
        else {
            rosterModel.activateStudent(userId, studentId, rosterId, function (data) {
                var removeRosterRowPtr = $('#removedStudentFromRoster').find('tbody');
                removeRosterRowPtr.find('rm-student-' + studentId).remove();
                rosterModel.getRostersByUserId(userId, function (result1) {
                    allRostersData = result1;
                    $('#innerViewRostersdiv').remove();
                    $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: result1 }));
                });
                rosterModel.getInActiveRostersByUserId(userId, function (result2) {
                    $('#removedInnerDiv').remove();
                    $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: result2 }));

                });
                rosterModel.getAssignedTests(userId, function (data) {
                    if (data != null && data.length > 0) {
                        assignedTestData = data;
                        $('#locaterInnerdiv').remove();
                        $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                        $('#assignedtestsInner').remove();
                        $('#assignRosterToTestInner').remove();
                        $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                        $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

                    }
                });
            });
        }

    }

    this.setDefaultStudent = function (selectId) {
        $('#studentlist_' + selectId).prop('selectedIndex', '0');;
    }

    this.checkOnRoster = function (rosterId) {
        // check the corresponding rosters in viewRoster.ejs and locater.ejs
        $('#rostercheckbox_' + rosterId).removeProp("indeterminate");
        $('#rostertablecheck_' + rosterId).removeProp("indeterminate");
        $('#rostercheckbox_' + rosterId).prop("checked", true);
        $('#rostertablecheck_' + rosterId).prop("checked", true);
        $('input:checkbox[name=studentnames_' + rosterId + ']').each(function () {
            // check each student inside the roster on check on roster
            var studentattrId = $(this).prop("id");
            $('#' + studentattrId).prop("checked", true);
        });

    }


    this.uncheckRoster = function (rosterId) {
        // uncheck each student inside the roster on check on roster
        $('input[name=studentnames_' + rosterId + ']').each(function () {
            var studentattrId = $(this).prop("id");
            $('#' + studentattrId).prop('checked', false);
        });
        //uncheck the clicked rosters 
        $('#rostercheckbox_' + rosterId).removeProp("indeterminate");
        $('#rostertablecheck_' + rosterId).removeProp("indeterminate");
        $('#rostertablecheck_' + rosterId).prop('checked', false);
        $('#rostercheckbox_' + rosterId).prop('checked', false);

    }


    this.checkstudent = function (rosterId, studentId, stdLength) {
        $('#rostertablecheck_' + rosterId).prop("indeterminate", "true");
        $('#rostercheckbox_' + rosterId).prop("indeterminate", "true");
        $('#studentcheck_' + rosterId + '_' + studentId).prop("checked", true);
        var checkedCount = 0;
        $('input:checkbox[name=studentnames_' + rosterId + ']:checked').each(function () {
            if (this.checked) {
                checkedCount = checkedCount + 1;
            }
        });
        if (checkedCount == parseInt(stdLength)) {
            $('#rostercheckbox_' + rosterId).removeProp("indeterminate");
            $('#rostertablecheck_' + rosterId).removeProp("indeterminate");
            $('#rostercheckbox_' + rosterId).prop("checked", "checked");
            $('#rostertablecheck_' + rosterId).prop("checked", "checked");
        }

    };

    this.uncheckstudent = function (rosterId, studentId) {
        var checkedCount = 0; // used to  track the number of checked students in other roster
        $('#studentcheck_' + rosterId + '_' + studentId).prop('checked', false);
        $('input:checkbox[name=studentnames_' + rosterId + ']:checked').each(function () {
            if (this.checked) {
                checkedCount = checkedCount + 1;
            }
        });
        if (checkedCount == 0) {
            $('#rostercheckbox_' + rosterId).removeProp("indeterminate");
            $('#rostertablecheck_' + rosterId).removeProp("indeterminate");
            $('#rostercheckbox_' + rosterId).prop('checked', false);
            $('#rostertablecheck_' + rosterId).prop('checked', false);
        } else {
            $('#rostercheckbox_' + rosterId).prop("indeterminate", "true");
            $('#rostertablecheck_' + rosterId).prop("indeterminate", "true");
        }
    }

    this.uncheckAll = function () {
        $('input[type=checkbox]').each(function () {
            if (this.checked) {
                this.checked = false;
            }
        });
    }


    this.editTestDetails = function (jsonString, rostersString) {
        $('#assignRosterToTest').css("display", "none");
        var jsonObj = JSON.parse(jsonString);
        var rosterObj = JSON.parse(rostersString);

        if (editAssigned == null) {
            // first time edit click for the session
            editAssigned = JSON.parse(jsonString);
            var html = can.view.render('/assets/views/editAssignedTest.ejs', { editAssigned: editAssigned, rosterObj: rosterObj });
        } else {
            // if already edit is opened for another assigned test close it and open edit for latest clicked test
            locater.replaceOld(JSON.stringify(editAssigned), JSON.stringify(rosterObj));
            editAssigned = JSON.parse(jsonString);
            var html = can.view.render('/assets/views/editAssignedTest.ejs', { editAssigned: editAssigned, rosterObj: rosterObj });
        }
        var testrow = $('#assignedRow_' + jsonObj.ID + '_' + jsonObj.PASSWORD_ID);
        testrow.replaceWith(html);
        if (!jsonObj.DUE_DATE || jsonObj.DUE_DATE == "") {
            $('#editdatepicker').val("");
            $('#edittimeselect').val("-1");
        } else {
            var timestamp = new Date(jsonObj.DUE_TIMESTAMP);
            var duedate = jsonObj.DUE_DATE;
            var dueTime = jsonObj.DUE_HOURS;
            var duetimeArr = dueTime.split(" ");
            var tempTime;
            if (duetimeArr[1] == 'PM') {
                if (parseInt(duetimeArr[0]) == 12) {
                    tempTime = duetimeArr[0];
                } else {
                    var timeArr = duetimeArr[0].split(":");
                    tempTime = parseInt(timeArr[0]) + parseInt(12) + ":00:00";
                }
                $('#edittimeselect').val(tempTime);
            } else {
                $('#edittimeselect').val(duetimeArr[0]);
            }
            var tempDate = duedate + " " + timestamp.getFullYear().toString();
            $('#editdatepicker').val(tempDate);

        }
        for (var i = 0; i < jsonObj.studentDetails.length; i++) {
            var rosterId = jsonObj.studentDetails[i].ROSTER_ID;
            var studentId = jsonObj.studentDetails[i].STUDENT_ID;
            $('#rostertablecheck_' + rosterId).prop("indeterminate", "true");
            $('#rostercheckbox_' + rosterId).prop("indeterminate", "true");
            $('#studentcheck_' + rosterId + '_' + studentId).prop('checked', true);;

        }
        for (var i = 0; i < jsonObj.studentDetails.length; i++) {
            var rosterId = jsonObj.studentDetails[i].ROSTER_ID;
            var checkedCount = 0;
            $('input:checkbox[name=studentnames_' + rosterId + ']:checked').each(function () {
                if (this.checked) {
                    checkedCount = checkedCount + 1;
                }
            });
            for (var j = 0; j < Object.keys(rosterObj).length; j++) {
                if (rosterObj[j].ROSTER_ID == rosterId) {
                    var stdLen = Object.keys(rosterObj[j].STUDENT_NAMES).length;
                    if (stdLen == checkedCount) {
                        $('#rostercheckbox_' + rosterId).removeProp("indeterminate");
                        $('#rostertablecheck_' + rosterId).removeProp("indeterminate");
                        $('#rostercheckbox_' + rosterId).prop("checked", "checked");
                        $('#rostertablecheck_' + rosterId).prop("checked", "checked");
                    }
                }

            }

        }
        newtestrow = $('#newassignedRow_' + jsonObj.ID + '_' + jsonObj.PASSWORD_ID);
        newtestrow.css("backgroundColor", "#E3F7FF");
    }



    this.replaceOld = function (jsonString, rosterString) {
        var jsonObj = JSON.parse(jsonString);
        var rosterObj = JSON.parse(rosterString);
        var html = can.view.render('/assets/views/restoreAssignedTest.ejs', { restoreAssigned: jsonObj, rosterObject: rosterObj });
        var testrowOriginal = $('#newassignedRow_' + jsonObj.ID + '_' + jsonObj.PASSWORD_ID);
        testrowOriginal.replaceWith(html);
        testrowOriginal.css("backgroundColor", "white");
        $('#assignRosterToTest').css("display", "block");
        locater.uncheckAll();
    }

    this.deleteAssignedTest = function (jsonObj) {
        var json = JSON.parse(jsonObj);
        var tempId = 0;
        rosterModel.deleteAssignedTest(json.PASSWORD_ID, function (result) {
            if (result != null) {
                if (result.deleteFlag != null && result.deleteFlag == 'false') {
                    locater.alertMsg("ERROR: Cannot remove the test.One or more selected students have already completed the test.", "error-OK-btn");
                } else {
                    rosterModel.getAssignedTests(tempId, function (data) {
                        if (data != null) {
                            assignedTestData = data;
                            $('#locaterInnerdiv').remove();
                            $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                            $('#assignedtestsInner').remove();
                            $('#assignRosterToTestInner').remove();
                            $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                            $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));
                        }
                    });
                }
            }
        });
        $('#assignRosterToTest').css("display", "block");
        locater.uncheckAll();
    }

    this.saveAssignedTest = function (jsonObj) {
        var json = JSON.parse(jsonObj);
        var passwordChange = false;
        var flag = 1;
        var rosterChkArray = [];
        var rosterDetailsArray = [];
        var tempId = 0;
        // get all the student & roster details from the checked rosters/students tables
        $('input:checkbox[name=editrosternames]').each(function () {
            if (this.checked || this.indeterminate == true) {
                rosterChkArray.push($(this).parent().text().trim());
                var rosterName = $(this).parent().text().trim();
                var inputId = $(this).attr("id");
                var rosterId = inputId.slice("rostercheckbox_".length, inputId.length);
                $('input:checkbox[name=studentnames_' + rosterId + ']:checked').each(function () {
                    if (this.checked) {
                        var stdId = $(this).attr("id");
                        var stdIdSplit = stdId.split("_");
                        rosterDetailsArray.push({ rosterName: rosterName, rosterId: rosterId, studentId: stdIdSplit[2] });
                    }
                });
            }
        });
        // validate for empty password,test,date/time,students.If anyone of this is empty set flag to 0 and show alert message
        if ($('#edittestpassword').val() == "") {
            flag = 0;
            locater.alertMsg("Please enter a password for the selected locater tool.", "error-OK-btn");
            return;
        }
        else if ($('#editdatepicker').val() != "" || $('#edittimeselect option:selected').val() != -1) {
            if ($('#edittimeselect option:selected').val() == -1) {
                flag = 0;
                locater.alertMsg("The due date you entered is not valid. To set no due date, clear both the date and time fields", "error-OK-btn");
                return;
            }
            else if ($('#editdatepicker').val() == "") {
                flag = 0;
                locater.alertMsg("The due date you entered is not valid. To set no due date, clear both the date and time fields", "error-OK-btn");
                return;
            }
        }
        else if (rosterDetailsArray.length == 0) {
            flag = 0;
            locater.alertMsg("Please select at least one student.", "error-OK-btn");
            return;
        }

        // If flag is 1 then all the feilds are validated successfully for null/empty. Build final JSON
        if (flag == 1) {

            var editassignTestJson = {};
            editassignTestJson.testTitle = json.TEST_TITLE;
            editassignTestJson.testId = json.ID;

            // check for empty duedate feild .If not empty Format the Date Object 
            var dateString = $('#editdatepicker').val().trim();
            if (dateString != "") {
                var date = new Date(dateString);
                editassignTestJson.dueDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
            }
            else {
                editassignTestJson.dueDate = "";
            }
            // check for empty duetime. If not empty set the DUETIME 
            var dueTime = $('#edittimeselect option:selected').val();
            if (dueTime != -1) {
                editassignTestJson.dueTime = $('#edittimeselect option:selected').val().trim();
            }
            else {
                editassignTestJson.dueTime = "";
            }
            // set New Password flag .If password is changed we check DB if password already exists
            var newPwd = $('#edittestpassword').val().trim();
            var passwordObj = {};
            if (newPwd != json.PASSWORD) {
                passwordObj.passwordChange = true;
                passwordObj.newPassword = newPwd;
                passwordObj.oldPassword = json.PASSWORD;
                passwordObj.oldPasswordId = json.PASSWORD_ID;
            } else {
                passwordObj.passwordChange = false;
                passwordObj.oldPassword = json.PASSWORD;
                passwordObj.oldPasswordId = json.PASSWORD_ID;
            }
            editassignTestJson.oldPassword = json.PASSWORD;
            editassignTestJson.oldPasswordId = json.PASSWORD_ID;
            editassignTestJson.password = $('#edittestpassword').val().trim();
            editassignTestJson.selfNote = $('#edittestcomment').val().trim();
            editassignTestJson.elmNote = $('#edittestmessage').val().trim();
            editassignTestJson.rosterStudentDetails = rosterDetailsArray;

            passwordObj.elmNoteChange = false;
            passwordObj.elmNote = null;
            if (editassignTestJson.elmNote && editassignTestJson.elmNote != "" &&
                editassignTestJson.elmNote != json.NOTE_TO_ELM) {
                passwordObj.elmNoteChange = true;
                passwordObj.elmNote = editassignTestJson.elmNote;
            }

            // getting version A and version B test IDs
            var activeTestId;
            var companionId;
            var testVersion;

            rosterModel.getAssignedTestByPwdId(json.PASSWORD_ID, function (testAssignResult) {
                testVersion = testAssignResult.VERSION;
                companionId = testAssignResult.COMPANION_ID;
                activeTestId = testAssignResult.ACTIVE_TEST_ID;
                editassignTestJson.ASSIGNED_TEST_ID = json.studentDetails[0].ASSIGNED_TEST_ID;

                // separating the student records to be deleted and student records to be updated
                var deleteStudentsList = {};
                var deleteStdArray = [];
                var updateStdList = {};
                var updateStdArray = [];


                for (var i = 0; i < Object.keys(json.studentDetails).length; i++) { // students list before editing
                    var studentUpdateFlag = 0;
                    for (var j = 0; j < Object.keys(editassignTestJson.rosterStudentDetails).length; j++) {//students list after editing(new List)
                        if ((json.studentDetails[i].STUDENT_ID == editassignTestJson.rosterStudentDetails[j].studentId) && (json.studentDetails[i].ROSTER_ID == editassignTestJson.rosterStudentDetails[j].rosterId)) {
                            studentUpdateFlag = 1;
                            var updateStdObj = {};
                            updateStdObj.isComplete = ((json.studentDetails[i].ISCOMPLETE == true) ? 1 : 0);
                            updateStdObj.activeTestId = json.studentDetails[i].ACTIVE_TEST_ID;
                            updateStdObj.testVersion = json.studentDetails[i].TEST_VERSION;
                            updateStdObj.companionId = json.studentDetails[i].COMPANION_ID;
                            updateStdObj.rosterId = json.studentDetails[i].ROSTER_ID;
                            updateStdObj.studentId = json.studentDetails[i].STUDENT_ID;
                            updateStdObj.createdUser = json.CREATED_USER;
                            updateStdObj.dueDate = editassignTestJson.dueDate;
                            updateStdObj.dueTime = editassignTestJson.dueTime;
                            updateStdObj.selfNote = editassignTestJson.selfNote;
                            updateStdObj.elmNote = editassignTestJson.elmNote;
                            updateStdArray.push(updateStdObj);
                        }
                    }
                    if (studentUpdateFlag == 0) {
                        var stdObj = {};
                        stdObj.STUDENT_ID = json.studentDetails[i].STUDENT_ID;
                        stdObj.ROSTER_ID = json.studentDetails[i].ROSTER_ID;
                        stdObj.ACTIVE_TEST_ID = json.studentDetails[i].ACTIVE_TEST_ID;
                        stdObj.LOCATER_PASSWORD_ID = json.PASSWORD_ID;
                        deleteStdArray.push(stdObj);
                    }

                }
                deleteStudentsList = deleteStdArray;
                updateStdList = updateStdArray;
                var newStdFlag = 0;
                var count = 1;
                var insertStdList = {};
                var insertStdArray = [];

                //setting the new students object list and their test versions
                for (var k = 0; k < Object.keys(editassignTestJson.rosterStudentDetails).length; k++) {// studentList after editing(new List)
                    var newStdFlag = 1;
                    for (var l = 0; l < Object.keys(json.studentDetails).length; l++) {// studentList before editing(old list)
                        if ((editassignTestJson.rosterStudentDetails[k].studentId == json.studentDetails[l].STUDENT_ID) && (editassignTestJson.rosterStudentDetails[k].rosterId == json.studentDetails[l].ROSTER_ID)) {
                            newStdFlag = 0;
                        }
                    }
                    if (newStdFlag) {
                        var insertStdObj = {};
                        insertStdObj.isComplete = 0;
                       // if (parseInt(editassignTestJson.rosterStudentDetails[k].studentId) % 2 == 0) {
                            insertStdObj.activeTestId = activeTestId;
                            insertStdObj.testVersion = testVersion;
                            insertStdObj.companionId = companionId;
                        // } else {
                        //     insertStdObj.activeTestId = companionId;
                        //     insertStdObj.testVersion = (testVersion == 'A' ? 'B' : 'A');
                        //     insertStdObj.companionId = activeTestId;
                        // }
                        insertStdObj.rosterId = editassignTestJson.rosterStudentDetails[k].rosterId;
                        insertStdObj.studentId = editassignTestJson.rosterStudentDetails[k].studentId;
                        insertStdObj.dueDate = editassignTestJson.dueDate;
                        insertStdObj.dueTime = editassignTestJson.dueTime;
                        insertStdObj.selfNote = editassignTestJson.selfNote;
                        insertStdObj.elmNote = editassignTestJson.elmNote;
                        insertStdObj.assignedTestId = json.ID;
                        insertStdArray.push(insertStdObj);
                        count = count + 1;

                    }
                }
                insertStdList = insertStdArray;
                setTimeout(function() {
                // insert all the edited test details into DB
                rosterModel.saveEditAssignedTest(passwordObj, deleteStudentsList, updateStdList, insertStdList, function (json) {
                    if (json != null) {
                        if (json.Error == true) {
                            locater.alertMsg(json.Message, "error-OK-btn");
                            return;
                        }
                        if (json.passwordExistsFlag != null && json.passwordExistsFlag == true) {
                            locater.alertMsg("ERROR: The password entered is already in use. <br> <b> '" + passwordObj.newPassword + "' <b>", "error-OK-btn");
                        } else if (json.deleteFlag != null && json.deleteFlag == 'false') {
                            locater.alertMsg("ERROR: Cannot remove the students.One or more selected students have already started/completed the test.", "error-OK-btn");
                        } else if (json.responseExistsFlag != null && json.responseExistsFlag == 'true') {
                            locater.alertMsg("Cannot change the password.One or more students had already started the test. ", "error-OK-btn");
                        } else {
                            locater.uncheckAll();
                            rosterModel.getAssignedTests(tempId, function (data) {
                                if (data != null && data.length > 0) {
                                    assignedTestData = data;
                                    $('#locaterInnerdiv').remove();
                                    $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                                    $('#assignedtestsInner').remove();
                                    $('#assignRosterToTestInner').remove();
                                    $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                                    $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

                                }
                            });
                        }
                    }
                });
            }, 0);
            });
        }
        $('#assignRosterToTest').css("display", "block");
    }


    /*
        View Test Report
    */
    this.viewTestReport = function (testObject) {
        var jsonTestObj = JSON.parse(testObject);
        var testId = jsonTestObj.ID;
        var passwordID = jsonTestObj.PASSWORD_ID;
        $('#studentreport').empty();
        $('#studentreport').css("display", "none");
        $('#testreport').empty();
        $('#testreport').css("display", "none");
        rosterModel.getTestReportDetails(testId, passwordID, function (reportObjJson) {
            var studentObject = getStudTestFromReportJSON(reportObjJson);
            $('#testreport').append(can.view('/assets/views/testreportview.ejs', { reportObj: reportObjJson, testObject: jsonTestObj, studentObj: studentObject }));
            $('#testreport').css("display", "block");
        });

    };

    function getStudTestFromReportJSON(reportObjJson) {
        var studentDetails = [];
        if (reportObjJson) {
            var studA = getTestFromReportJSON(reportObjJson.studentTestADetails, reportObjJson.PASSWORD_ID);
            var studB = getTestFromReportJSON(reportObjJson.studentTestBDetails, reportObjJson.PASSWORD_ID);
            studentDetails = studA.concat(studB);
        }
        return studentDetails;
    }

    function getTestFromReportJSON(studentTestDetails, passwordID) {
        var testDetails = [];
        if (studentTestDetails) {
            studentTestDetails.forEach(element => {
                var testDetail = {};
                testDetail.TEST_ID = element.TEST_ID;
                testDetail.PASSWORD_ID = passwordID;
                testDetail.STUDENT_ID = element.STUDENT_ID;
                testDetails.push(testDetail);
            });
        }
        return testDetails;
    }

    this.getQuestionReport = function (questionId, testId, passwordId, questionType, viewtype) {
        $('#itemreport').empty();
        $('#itemreport').css("display", "none");
        if (viewtype == 'testview') {
            $('#studentreport').empty();
            $('#studentreport').css("display", "none");

        } else if (viewtype == 'studentview') {
            $('#testreport').empty();
            $('#testreport').css("display", "none");
        }
        rosterModel.getQuestionReport(questionId, testId, passwordId, questionType, function (questionObjJson) {
            $('#itemreport').append(can.view('/assets/views/questionViewer.ejs', { quesObj: questionObjJson }));
            locater.unEscapeInnerHTML();
            $('#itemreport').css("display", "block");
        });
    };

    this.getStudentReport = function (studentId) {
        $('#studentreport').empty();
        $('#studentreport').css("display", "none");
        $('#testreport').empty();
        $('#testreport').css("display", "none");
        rosterModel.getStudentReport(studentId, function (stdTestJson) {
            $('#studentreport').append(can.view('/assets/views/studentReportView.ejs', { stdreportObj: stdTestJson }));
            $('#studentreport').css("display", "block");
        });
    }

    /* Defect fix for getting Node title for comma separated values*/

    this.getNodeTitle=function(nodes,subPrefix){
        var nodeArray=[];
        var title=""; 
        nodeArray=nodes.split(",");
        rosterModel.validateNodes(nodeArray,subPrefix,function(result){
            if(result!=null && result.length>0){
                for(i=0;i<result.length;i++){
                  title=title + result[i].TEXTID +" "+ result[i].TITLE+'\n'
                }
            }
            title=title.replace(/&#\d+;/g, asciiCodeToChar);  
            alert(title); 
        })
        
    }


    /* Export Roster Data to CSV
       -- Temporarily uses Student Id instead of Real Name
     */
    this.exportToCSV = function (rowId) {
        var jsonData = allRostersData;
        var exportData = [];
        exportData.push([jsonData[rowId].ROSTER_NAME, ""]);
        exportData.push(["Real Name", "Username"]);
        for (var j = 0; j < jsonData[rowId].STUDENT_NAMES.length; j++) {
            var stdName = jsonData[rowId].STUDENT_NAMES[j].STUDENT_NAME;
            var std = locater.getsensitive("realname", stdName, sensitivedata);
            exportData.push([std, jsonData[rowId].STUDENT_NAMES[j].STUDENT_NAME]);
        }
        arrayToCsv(exportData, jsonData[rowId].ROSTER_NAME);
    };

    this.exportQuestionToCSV = function (questionObjString) {
        var questionObj = JSON.parse(unescape(questionObjString));
        var optLen = Object.keys(questionObj.optionDetails).length;
        var exportData = [];
        exportData.push([questionObj.QUESTION_ORDER + questionObj.PART_ORDER + ". " + questionObj.QUESTION.toString()]);
        exportData.push([" "]);
        exportData.push(["Option", "Node(s)", "%answered"]);

        for (var i = 0; i < Object.keys(questionObj.optionDetails).length; i++) {
            var optionArr = [];
            var node = ((questionObj.optionDetails[i].NODES) ? questionObj.optionDetails[i].NODES : "");
            var percent = questionObj.optionDetails[i].PERCENT;
            if (percent == '0.0%') {
                percent = '0%';
            } else if (percent == '100.0%') {
                percent = '100%';
            }

            if (questionObj.optionDetails[i].ISVALID == true) {
                optionArr.push(questionObj.optionDetails[i].OPTION_ORDER + ". " + questionObj.optionDetails[i].OPTION_TITLE + "X");
            } else {
                optionArr.push(questionObj.optionDetails[i].OPTION_ORDER + ". " + questionObj.optionDetails[i].OPTION_TITLE);
            }
            optionArr.push(node);
            optionArr.push(percent.toString());
            exportData.push(optionArr);
            if (i == (optLen - 1) && questionObj.QUESTION_TYPE == 'cr') {
                var otherpercent = questionObj.OTHER_PERCENT;
                if (otherpercent == '0.0%') {
                    otherpercent = '0%';
                } else if (otherpercent == '100.0%') {
                    otherpercent = '100%';
                }
                exportData.push(["Other", " ", otherpercent.toString()]);
            }

        }
        arrayToCsv(exportData, "Item Report_" + questionObj.QUESTION_ORDER);

    };

    this.exportStudentTestToCSV = function (studentTestObjStr) {
        var studentTestObj = JSON.parse(unescape(studentTestObjStr));
        var exportData = [];

        for (var i = 0; i < Object.keys(studentTestObj.studentTestDetails).length; i++) {
            var stdreportHeading = [];
            stdreportHeading.push("Locater Tool Name");
            stdreportHeading.push("Due Date");
            stdreportHeading.push("Date Finished");
            stdreportHeading.push("Outcome");
            var quesLength = Object.keys(studentTestObj.studentTestDetails[i].questionDetails).length;
            for (var j = 0; j < quesLength; j++) {
                stdreportHeading.push(studentTestObj.studentTestDetails[i].questionDetails[j].QUESTION_ORDER.toString() + studentTestObj.studentTestDetails[i].questionDetails[j].PART_ORDER.toString());
            }
            exportData.push(stdreportHeading);

            var stdTestArr = [];
            var outcome = studentTestObj.studentTestDetails[i].OUTCOME + " of " + studentTestObj.studentTestDetails[i].NOOFQUEST;
            var testDetails = studentTestObj.studentTestDetails[i].TEST_TITLE + "(" + studentTestObj.studentTestDetails[i].STUDENT_TITLE + " (" + studentTestObj.studentTestDetails[i].TEST_VERSION + "))";
            stdTestArr.push(testDetails);
            if (studentTestObj.studentTestDetails[i].DUE_DATE == null || studentTestObj.studentTestDetails[i].DUE_DATE == '') {
                stdTestArr.push(" ");
            } else {
                stdTestArr.push(studentTestObj.studentTestDetails[i].DUE_DATE + "   " + studentTestObj.studentTestDetails[i].DUE_TIME);
            }
            stdTestArr.push(studentTestObj.studentTestDetails[i].DATE_FINISHED.toString());
            stdTestArr.push(outcome);

            for (var k = 0; k < quesLength; k++) {
                if (studentTestObj.studentTestDetails[i].questionDetails[k].RESPONSE_VALID == true) {
                    stdTestArr.push("X");
                } else {
                    stdTestArr.push(studentTestObj.studentTestDetails[i].questionDetails[k].RESPONSE.toString());
                }
            }
            exportData.push(stdTestArr);
            exportData.push(["  ", "  "]);
        }

        arrayToCsv(exportData, "Student Report_" + studentTestObj.studentTestDetails[0].STUDENT_NAME);

    };

    this.exportTestReportToCSV = function (reportviewObjString, testObjString) {
        var testReportObj = JSON.parse(unescape(reportviewObjString));
        var testObj = JSON.parse(unescape(testObjString));
        var exportData = [];
        var questionNumbers = [];
        var outcome;
        var dateStr;
        var percentA = [];
        var incorrectresponseA = [];
        var nodesA = [];
        var percentB = [];
        var incorrectresponseB = [];
        var nodesB = [];
        if (testReportObj.studentTestADetails != null && testReportObj.studentTestADetails.length > 0) {
            var questionLength = testReportObj.studentTestADetails[0].questionDetails.length;
            questionNumbers.push("Student");
            questionNumbers.push("Date Finished");
            questionNumbers.push("Outcome");
            for (var i = 0; i < questionLength; i++) {
                questionNumbers.push(testReportObj.studentTestADetails[0].questionDetails[i].QUESTION_ORDER.toString() + testReportObj.studentTestADetails[0].questionDetails[i].PART_ORDER.toString());
            }
            var testDetails = testReportObj.studentTestADetails[0].TEST_TITLE + "(" + testReportObj.studentTestADetails[0].STUDENT_TITLE + " (" + testReportObj.studentTestADetails[0].TEST_VERSION + "))";
            exportData.push([testDetails]);
            exportData.push(questionNumbers);
            for (var i = 0; i < Object.keys(testReportObj.studentTestADetails).length; i++) {
                var studentDetailsA = [];
                if (testReportObj.studentTestADetails[i].DATE_FINISHED == null || testReportObj.studentTestADetails[i].DATE_FINISHED == '') {
                    dateStr = " ";
                } else {
                    dateStr = testReportObj.studentTestADetails[i].DATE_FINISHED;
                }
                outcome = testReportObj.studentTestADetails[i].OUTCOME + " of " + testReportObj.studentTestADetails[i].NOOFQUEST;
                var stdname = testReportObj.studentTestADetails[i].STUDENT_NAME;
                var std = locater.getsensitive("realname", stdname, sensitivedata);
                var studentNameToPush = (std == "" ? stdname : std);
                studentDetailsA.push(studentNameToPush);
                studentDetailsA.push(dateStr);
                studentDetailsA.push(outcome.toString());

                for (var k = 0; k < questionLength; k++) {
                    var resp = testReportObj.studentTestADetails[i].questionDetails[k].RESPONSE;
                    if (resp == null || resp == '') {
                        resp = '  ';
                    }
                    if (testReportObj.studentTestADetails[i].questionDetails[k].ISVALID == true) {
                        studentDetailsA.push("X");
                    } else {
                        studentDetailsA.push(resp.toString());
                    }
                }
                exportData.push(studentDetailsA);
            }
            percentA.push("% correct");
            percentA.push("");
            percentA.push("");
            incorrectresponseA.push("Most common incorrect response(s)");
            incorrectresponseA.push("");
            incorrectresponseA.push("");
            nodesA.push("Node(s) for common incorrect");
            nodesA.push("");
            nodesA.push("");
            for (var k = 0; k < questionLength; k++) {
                var nodeflag = 'notset';
                var respFlag = 'notset';
                var percent = testReportObj.studentTestADetails[0].questionDetails[k].PERCENT;
                if (percent == '0.0%') {
                    percent = '0%';
                } else if (percent == '100.0%') {
                    percent = '100%';
                };
                percentA.push(percent.toString());

                for (var m = 0; m < Object.keys(testReportObj.studentTestADetails[0].incorrectAResponse).length; m++) {
                    if (testReportObj.studentTestADetails[0].questionDetails[k].QUESTION_ID == testReportObj.studentTestADetails[0].incorrectAResponse[m].QUESTION_ID) {
                        respFlag = 'set';
                        nodeflag = "set";
                        var incorrectresp = testReportObj.studentTestADetails[0].incorrectAResponse[m].INCORRECT_RESPONSE;
                        if (incorrectresponseA) {
                            incorrectresponseA.push(incorrectresp);
                        } else {
                            incorrectresponseA.push(' ');
                        }
                        // setting common incorrect nodes
                        var nodelength = Object.keys(testReportObj.studentTestADetails[0].incorrectAResponse[m].commonNodes).length;
                        var node = "";
                        if (nodelength > 0) {
                            for (n = 0; n < nodelength; n++) {//common incorrect nodes loop
                                // Defect fix- for viewing both nodes and antinodes for common incorrect.
                                if(testReportObj.studentTestADetails[0].incorrectAResponse[m].commonNodes[n].nodes){
                                    node = node + " " + testReportObj.studentTestADetails[0].incorrectAResponse[m].commonNodes[n].response + ":" + testReportObj.studentTestADetails[0].incorrectAResponse[m].commonNodes[n].nodes;
                                } 
                                if(testReportObj.studentTestADetails[0].incorrectAResponse[m].commonNodes[n].antinodes){
                                    node = node + " " + testReportObj.studentTestADetails[0].incorrectAResponse[m].commonNodes[n].response + ":" + testReportObj.studentTestADetails[0].incorrectAResponse[m].commonNodes[n].antinodes;
                                }    
                            }
                            nodesA.push(node);
                        } else {
                            node = "";
                            nodesA.push(' ');
                        }
                    }
                }
                if (respFlag == 'notset') {
                    incorrectresponseA.push(" ");
                }
                if (nodeflag == 'notset') {
                    nodesA.push(" ");
                }
            }
            exportData.push(percentA);
            exportData.push(incorrectresponseA);
            exportData.push(nodesA);
            exportData.push([" ", " "]);
        }
        if (testReportObj.studentTestBDetails != null && testReportObj.studentTestBDetails.length > 0) {
            var questionNumbersB = [];
            var testDetailsB = testReportObj.studentTestBDetails[0].TEST_TITLE + "(" + testReportObj.studentTestBDetails[0].STUDENT_TITLE + " (" + testReportObj.studentTestBDetails[0].TEST_VERSION + "))";
            exportData.push([testDetailsB]);
            questionNumbersB.push("Student");
            questionNumbersB.push("Date Finished");
            questionNumbersB.push("Outcome");
            var quesLength = Object.keys(testReportObj.studentTestBDetails[0].questionDetails).length;
            for (var i = 0; i < quesLength; i++) {
                questionNumbersB.push(testReportObj.studentTestBDetails[0].questionDetails[i].QUESTION_ORDER.toString() + testReportObj.studentTestBDetails[0].questionDetails[i].PART_ORDER.toString());
            }
            exportData.push(questionNumbersB);

            for (var i = 0; i < Object.keys(testReportObj.studentTestBDetails).length; i++) {
                var studentDetailsB = [];

                if (testReportObj.studentTestBDetails[i].DATE_FINISHED == null || testReportObj.studentTestBDetails[i].DATE_FINISHED == '') {
                    dateStr = " ";
                } else {
                    dateStr = testReportObj.studentTestBDetails[i].DATE_FINISHED;
                }
                outcome = testReportObj.studentTestBDetails[i].OUTCOME + " of " + testReportObj.studentTestBDetails[i].NOOFQUEST;
                var stdname = testReportObj.studentTestBDetails[i].STUDENT_NAME;
                var std = locater.getsensitive("realname", stdname, sensitivedata);
                var studentNameToPush = (std == "" ? stdname : std);
                studentDetailsB.push(studentNameToPush);
                studentDetailsB.push(dateStr);
                studentDetailsB.push(outcome.toString());

                for (var k = 0; k < quesLength; k++) {
                    var responseB = testReportObj.studentTestBDetails[i].questionDetails[k].RESPONSE;
                    if (responseB == null || responseB == '') {
                        responseB = '  ';
                    }
                    if (testReportObj.studentTestBDetails[i].questionDetails[k].ISVALID == true) {
                        studentDetailsB.push("X");
                    } else {
                        studentDetailsB.push(responseB);
                    }
                }
                exportData.push(studentDetailsB);

            }

            percentB.push("% correct");
            percentB.push(" ");
            percentB.push(" ");
            incorrectresponseB.push("Most common incorrect response(s)");
            incorrectresponseB.push(" ");
            incorrectresponseB.push(" ");
            nodesB.push("Node(s) for common incorrect");
            nodesB.push(" ");
            nodesB.push(" ");
            for (var l = 0; l < quesLength; l++) {
                var nodeflagb = 'notset';
                var respFlagb = 'notset';
                var percent = testReportObj.studentTestBDetails[0].questionDetails[l].PERCENT;
                if (percent == '0.0%') {
                    percent = '0%';
                } else if (percent == '100.0%') {
                    percent = '100%';
                };
                percentB.push(percent.toString());
                // common incorrect response loop
                for (var m = 0; m < Object.keys(testReportObj.studentTestBDetails[0].incorrectBResponse).length; m++) {
                    if (testReportObj.studentTestBDetails[0].questionDetails[l].QUESTION_ID == testReportObj.studentTestBDetails[0].incorrectBResponse[m].QUESTION_ID) {
                        nodeflagb = 'set';
                        respFlagb = 'set';
                        var incorrectresp = testReportObj.studentTestBDetails[0].incorrectBResponse[m].INCORRECT_RESPONSE;
                        if (incorrectresponseB) {
                            incorrectresponseB.push(incorrectresp);
                        } else {
                            incorrectresponseB.push(' ');
                        }
                        // setting common incorrect nodes
                        var nodelength = Object.keys(testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes).length;
                        var node = "";
                        if (nodelength > 0) {
                            for (n = 0; n < nodelength; n++) {//common incorrect nodes loop
                                 // Defect fix- for viewing both nodes and antinodes for common incorrect.
                                if(testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes[n].nodes){
                                    node = node + " " + testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes[n].response + ":" + testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes[n].nodes;
                                } 
                                if(testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes[n].antinodes){
                                    node = node + " " + testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes[n].response + ":" + testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes[n].antinodes;
                                }
                               // node = node + " " + testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes[n].response + ":" + testReportObj.studentTestBDetails[0].incorrectBResponse[m].commonNodes[n].nodes;
                            }
                            nodesB.push(node);
                        } else {
                            node = "";
                            nodesB.push(' ');
                        }
                    }
                }
                if (respFlagb == 'notset') {
                    incorrectresponseB.push(" ");
                }
                if (nodeflagb == 'notset') {
                    nodesB.push(" ");
                }
            }
            exportData.push(percentB);
            exportData.push(incorrectresponseB);
            exportData.push(nodesB);
        }

        exportData.push([" ", " "]);
        var testStdLength = Object.keys(testObj.studentDetails).length;
        if (testStdLength != parseInt(testObj.studentsCompleted)) {
            exportData.push(["Incomplete"]);
            for (var j = 0; j < Object.keys(testObj.studentDetails).length; j++) {
                if (testObj.studentDetails[j].ISCOMPLETE == false) {
                    var stdname = testObj.studentDetails[j].USERNAME;
                    var std = locater.getsensitive("realname", stdname, sensitivedata);
                    var studentNameToPush = (std == "" ? stdname : std);
                    exportData.push([studentNameToPush]);
                }
            }
        }
        arrayToCsv(exportData, "Test Report_" + testReportObj.TEST_TITLE);
    }


    // /* Prints a DIV */
    this.printDiv = function (sourceDivId, printDivId, title) {
        var sourceHTML, tempPrintHTML;
        var appPrintHTML;

        if (sourceDivId == "testresultviewiframe") {
            sourceHTML = $('#' + sourceDivId).contents().find('body');
            tempPrintHTML = sourceHTML.find('#testform');
            appPrintHTML = tempPrintHTML.html();
        } else if (sourceDivId == "testpreviewiframe") {
            sourceHTML = $('#' + sourceDivId).contents().find('body');
            tempPrintHTML = sourceHTML.find('#testform');
            appPrintHTML = tempPrintHTML.html();
        } else if (sourceDivId == "classrosterdiv") {
           $('#viewRosters').empty();
        $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: allRostersData }));
        sourceHTML = document.getElementById(sourceDivId).innerHTML;
        tempPrintHTML = sourceHTML.replace(/id=(["'])([^"']+)\1/g, 'id="PRINT$2"');
        appPrintHTML = tempPrintHTML;
        }
        else {
            sourceHTML = document.getElementById(sourceDivId).innerHTML;
            tempPrintHTML = sourceHTML.replace(/id=(["'])([^"']+)\1/g, 'id="PRINT$2"');
            appPrintHTML = tempPrintHTML;
        }
        setTimeout(function(){
        if (typeof application !== 'undefined') {
            application.site.print(title, appPrintHTML);
        } else {
            document.getElementById(printDivId).innerHTML = appPrintHTML;
            window.print();
        }
    },0);
    };
    
    //This methid is triggerred before print - To set print div for Ctrl+P action
    //window.onbeforeprint = function () {
    //     if (($('#studentreport').css('display') == 'block')) {
    //         if (($('#itemreport').css('display') == 'block')) {
    //             locater.printDiv('putitemreport', "printDiv", false);
    //         } else if ($('#report').css('display') == 'block') {
    //             locater.printDiv('testresultviewiframe', "printDiv", false);
    //         }
    //         else {
    //             locater.printDiv('putstdreport', "printDiv", false);
    //         }

    //     } else if (($('#testviewer').css('display') == 'block')) {
    //         if (($('#itemreport').css('display') == 'block')) {
    //             locater.printDiv('putitemreport', "printDiv", false);
    //         } else if ($('#report').css('display') == 'block') {
    //             locater.printDiv('testresultviewiframe', "printDiv", false);
    //         } else {
    //             locater.printDiv('puttestreport', "printDiv", false);
    //         }
    //     }
    //     else if ($('#testpreviewer').css('display') == 'block') {
    //         locater.printDiv('testpreviewiframe', "printDiv", false);
    //     }
    //     else {
    //         locater.printDiv('classrosterdiv', 'printDiv', false);
    //     }
    //};

    //This meth0d is triggerred after print - To set print div back to empty
    window.onafterprint = function () {
        var tempPrintEl = document.getElementById('printDiv');
        if (tempPrintEl)
            tempPrintEl.innerHTML = '';
    };

    /* End of Print Methods */

    /*Author- Anantha Sravya, Deepala
    *Importfile: This functionality is used to check the last downloaded time 
    *of export file and alert the users with warnings if the timestamp doesnt match with localstorage.
    *If they are equal/local storage timestamp is less that downloaded time alert the user to export first */
    
    this.importFile = function(){
        rosterModel.getLastDownloadedTime(userId,function(result) {
            if(result !=undefined && result && result.downloadTime){
                    if(!sensitivedata){
                        locater.browseFileConfirmBox(false);
                    }else if(sensitivedata){
                        if(parseInt(sensitivedata.timestamp) > parseInt(Date.parse(result.downloadTime))){
                            var $alertContent="<font color='red'>Your roster file has changed and needs to be updated.</font> <br><br>"+
                                "Click '<b>Load Roster File</b>' to view and edit existing student real names.<br> Click '<b>Skip</b>' if you don't"+
                                " have a roster file,or don't want to view or edit student real names.";
                            showConfirmBox($alertContent, 'btn-import-confirm', 'import-dialogue-div1', 'import-div2');
                            $('#import-dialogue-div1').find('.cancel-btn').text("Cancel");
                            $('#import-dialogue-div1').find('.btn-import-confirm').text("Load Roster File");
                            $('.btn-import-confirm').css("width","130px");
                            $('.dialog').css("width","300px");
                        }else if(parseInt(sensitivedata.timestamp) <= parseInt(Date.parse(result.downloadTime))){
                            locater.browseFileConfirmBox(false);
                        }
                    }
            }else{
                locater.alertMsg("Click 'EXPORT ALL' to download the roster file for the first time and then try again.",'error-OK-btn');
            }
        });
    };

    this.browseFileConfirmBox = function(replace){
       var $content = "<div class='dialog-overlay'>" +
            "<div id='dialogID' class='dialog' style='overflow:auto;'>" +
            "<i class='fa fa-close'></i>" +
            "<div class='dialog-msg' style='height:40px;'>" +
            " <input id='browsefile' type='file' name='realnamefile' accept='.lck' style='width: 210px; height: 24px; padding: 2px;' tabIndex='1' autofocus><br>" +
            "</div>" +
            "<footer>" +
            "<div class='controls' style='text-alight:right;'>" +
            " <button id='import-ok' class='button btn-import active' style='text-align:center;' tabIndex='2'>Import</button>&nbsp;&nbsp; " +
            " <button id='import-cancel' class='import-cancel-btn'  tabIndex='3'>Cancel</button> "+
            "</div>" +
            "</footer>" +
            "</div>" +
            "</div>";
            if(replace){
                $('.dialog-overlay').replaceWith($content);
            }else{
                $('body').prepend($content);
            }
        $('#browsefile').focus();
        $('body').css('overflow', 'hidden'); 
    }

    this.addpikaday = function (idVal) {
        var field = $("#" + idVal)[0];
        var picker = new Pikaday({
            field: field,
            onSelect: function (date) {
                var datestring = picker.toString();
                field.value = datestring;
            }
        });
        picker.show();
        document.getElementById(idVal).addEventListener('change', function () {
            if (field.value != null || field.value != '') {
                picker.destroy();
            }
        });
    };

    this.localPostfix = function () {
        //author: Vidya Nakade
        //calling this method to get the email of logged in user.
        //Accessing the email form document.getElementById was causing issue 
        //as javascript is asynchronous, email was not always getting populated before it was accessed.
        if(!sessionStorage.getItem("userEmail"))
            locater.getEmail();        
        var email = sessionStorage.getItem("userEmail");
        var splat = location.href.split("/");
        var instance = (!splat || splat.length < 5) ? "" : splat[splat.length - 3].replace(/_.*/, "");
        return "_" + email + "_" + instance;
    };

    this.stringToHex = function (string) {
        return string.split("").map(function (char) {
            return ("000" + (char.charCodeAt(0).toString(16))).slice(-4);
        }).join("");
    };

    this.bytesToHex = function (arrayBuffer) {
        var byteArray = new Uint8Array(arrayBuffer);
        var hexString = "";
        for (var i = 0; i < byteArray.byteLength; i++)
            hexString += ("0" + byteArray[i].toString(16)).slice(-2);
        return hexString;
    };

    this.hexToBytes = function (hexString) {
        if (typeof hexString !== 'string')
            return new Uint8Array();
        hexString = hexString.toLowerCase();
        if (!/^[0-9a-f]+$/.test(hexString))
            return new Uint8Array();

        if (hexString.length % 2 !== 0) {
            throw Error("Must have an even number of hex digits to convert to bytes");
        }
        var numBytes = hexString.length / 2;
        var byteArray = new Uint8Array(numBytes);
        for (var i = 0; i < numBytes; i++) {
            byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
        }
        return byteArray;
    }

    //commenting for PII ph2 
/*     this.hashpassphrase = function (uhexedpassphrase, callback, hidealerts, sendifnotfound, justLoggedIn) {
        //author: Vidya Nakade
        //reported by: Holly
        //Issue: the realName encrypted data was getting overriden when 
        //a user entered data first and logged in after that.
        //clearing localstorage if the request is for login.
        if(justLoggedIn)
        {
            localStorage.clear();
        }
        var email = document.getElementById("emailinput")['value'];
        var rosterjwk = localStorage.getItem("rosterjwk" + locater.localPostfix());
        if (rosterjwk) {
            var parsedjwk = JSON.parse(rosterjwk);
            var cryptoPromise = crypto.subtle.importKey(
                "jwk", parsedjwk, { name: "AES-GCM" }, true, ["encrypt", "decrypt"]
            )
                .then(function (keyObject) {
                    aeskey = keyObject;
                    callback(hidealerts, sendifnotfound, justLoggedIn);
                });
            //Get sensitivedata from localStorage and assign to variable.
            sensitivedata = JSON.parse(localStorage.getItem("sensitive" + locater.localPostfix()));
            return cryptoPromise;
        }

        var passphrase = this.stringToHex(uhexedpassphrase);
        var salt = this.stringToHex(email + "some different salt \uD83D\uDF14"); // Using a different salt than the one used in the login page--the login page's PBKDF2 output gets sent to the server, and we don't want to (even temporarily) know the key used to encrypt student-identifiable information.
        var iterations = 1024 * 1024;

        var start = performance.now();
        var passBytes = (new TextEncoder("utf-8")).encode(passphrase);
        var cryptoPromise = crypto.subtle.importKey(
            "raw", passBytes, { name: "PBKDF2" }, false, ["deriveKey"]
        )
            .then(function (baseKey) {
                return crypto.subtle.deriveKey({
                    name: "PBKDF2",
                    salt: (new TextEncoder("utf-8")).encode(salt),
                    iterations: iterations,
                    hash: { name: "SHA-1" }
                }, baseKey, { name: "AES-GCM", length: 128 }, true, ["encrypt", "decrypt"]);
            })
            .then(function (keyObject) {
                aeskey = keyObject;
                callback(hidealerts, sendifnotfound,justLoggedIn);
                return crypto.subtle.exportKey("jwk", keyObject);
            })
            .then(function (jwk) {
                var email = document.getElementById("emailinput").value;
                localStorage.setItem("rosterjwk" + locater.localPostfix(), JSON.stringify(jwk));
            })
            .catch(function (e) {
                if (!hidealerts)
                    alert("Could not hash passphrase with the details provided.");
            });
        //author: Vidya Nakade
        //Refresh added to avoid getting stale data shown on UI
        $("#refreshdiv").trigger("click");
        return cryptoPromise;
    }; 

    this.ajaxgetsensitive = function (hidealerts, sendifnotfound,justLoggedIn) {
        if (!aeskey)
            return alert("Please enter a passphrase.");
        
        var ajaxrequest = new XMLHttpRequest();
        ajaxrequest.open("GET", "/locatertool/getUserString", true);

        ajaxrequest.onreadystatechange = function () {
            if (ajaxrequest.readyState == 4 && ajaxrequest.status == 200) {
                if (!/NOTFOUND/.test(ajaxrequest.responseText) && !/ERROR/.test(ajaxrequest.responseText)) {
                    var stringResp = ajaxrequest.responseText.replace(/^\s+|\s+$/, "");
                    //string = JSON.parse(string);
                    var splitArray = stringResp.split("\t");
                    var ciphertext = splitArray[0];
                    var resetwarning = splitArray[1];
                    locater.decrypttext(ciphertext, locater.ajaxsetsensitive, hidealerts, resetwarning, justLoggedIn);
                }
                else if (!/NOTFOUND/.test(ajaxrequest.responseText)) {
                    if (!hidealerts)
                        alert(ajaxrequest.responseText);
                    locater.getsensitivefromstorage(justLoggedIn);
                }
                else {
                    document.getElementById("notencryptedwarning").style.display = "";
                    locater.getsensitivefromstorage(justLoggedIn);
                    if (sendifnotfound && !justLoggedIn) {
                        locater.ajaxsetsensitive();
                    }
                    else
                        aeskey = null;
                }
            }
        }
        ajaxrequest.send();
    };*/

    
    this.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    this.getEmail = function () {
        $.ajax({
            url: '/locatertool/getEmail',
            type: "GET",
            dataType: 'text',
            success: function (email) {
                if (locater.validateEmail(email)) {
                    //storing email in localStorage to make it accessible
                    sessionStorage.setItem("userEmail",email);
                    document.getElementById("emailinput")['value'] = email;                    
                } else {
                    //Q:what needs to be done for non valid email
                    //commenting for PII ph2
                    //document.getElementById("emailinput")['value'] = "";
                    //document.getElementById("encryptingmessage").style.disabled = "false";
                }
            },
            error: function (jqXHR) {
                console.log("Error in get email: : " + jqXHR.responseText);
            }
        });
    };

    this.getsensitive = function (field, pseudonym, sensitivedata) {
        if (sensitivedata != null && sensitivedata[field][pseudonym])
            return sensitivedata[field][pseudonym];
        return "";
    };

   //commenting for PII ph2
/* this.encrypttext = function (plaintext, callback1, callback2) {
        var iv = new Uint8Array(16);
        crypto.getRandomValues(iv);
        var plainbytes = (new TextEncoder("utf-8")).encode(plaintext);
        if (!aeskey)
            return false;

        return crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, aeskey, plainbytes)
            .then(function (cipherbuffer) {
                var cipherbytes = new Uint8Array(cipherbuffer);
                var ciphercombined = new Uint8Array(16 + cipherbytes.length);

                for (var i = 0; i < 16; i++)
                    ciphercombined[i] = iv[i];
                for (var i = 0; i < cipherbytes.length; i++)
                    ciphercombined[i + 16] = cipherbytes[i];
                callback1(locater.bytesToHex(ciphercombined), callback2);
            })
            .catch(function (e) {
                alert("Error:\n\n" + e);
                console.log("Error in encrypttext: ", e);
            });
    };
     this.ajaxsetsensitive = function (encryptedtext, callback) {
        if (!encryptedtext) {
            var plaintext = JSON.stringify(sensitivedata);            
            locater.encrypttext(plaintext, locater.ajaxsetsensitive, callback);
            return 0;
        }
        var datastring = encryptedtext;
        var hint = document.getElementById('hintinput')['value'];
        // var resetting = isresettingpassphrase ? "true" : "false";
        $.ajax({
            url: '/locatertool/postUserString',
            type: "POST",
            dataType: 'text',
            data: { stringVal: datastring, hint: hint, resetting: isresettingpassphrase },
            success: function () {
                document.getElementById("submitpassphrase").style.display = "none";
                document.getElementById("resetpassphrase").style.display = "none";
                document.getElementById("changepassphrase").style.display = "";
                document.getElementById("encryptingmessage").style.display = "";
                document.getElementById("passphraseinput")['value'] = "";
                document.getElementById("passphrasediv").style.display = "none";
            },
            error: function (jqXHR) {
                console.log("Error: : " + jqXHR.responseText);
            }
        });
    }

    this.getsensitivefromstorage = function (justLoggedIn) {
        var email = document.getElementById("emailinput")['value'];
        var storedsensitive = localStorage.getItem("sensitive" + locater.localPostfix());
        if (storedsensitive) {
            var localdata = JSON.parse(storedsensitive);
            var updateserver = false;
            if (typeof sensitivedata.timestamp === "number" && typeof localdata.timestamp === "number") {
                if (sensitivedata.timestamp === localdata.timestamp) {
                    return 0;
                }
                else if (sensitivedata.timestamp > localdata.timestamp) {
                    locater.setsensitivetostorage();
                    return 0;
                }
                else
                    updateserver = true;
            }
            sensitivedata = localdata;
            if (updateserver && !justLoggedIn) {                
                //removing for PII ph2 changes
                //locater.ajaxsetsensitive();
            }
        }
        else if (sensitivedata) {
            locater.setsensitivetostorage();
        }
    };
 */
    
    //author: Vidya Nakade
    //Issue: LocaterTool PII changes
    //Function to handle downloading the data
    this.downloadRosters = function () {
        $("#warningMsg").hide();
        //export only if there is some real name data si present, else just show
        //message to encourage users to add the mappings data first.
        if (sensitivedata && sensitivedata.realname && !isEmpty(sensitivedata.realname)) {
            var dateNow = new Date();
            //changing logic to exclude localstorage data which is not
            //present on UI anymore
            var realnames = sensitivedata.realname;
            var realnamestoexport = {};   
            for (key in realnames) {
                var username_id = key.split(" ").join("_");
                var elemId = $(".realname_" + username_id).attr('id');
                if (document.getElementById(elemId)) {
                    realnamestoexport[key] = realnames[key];
                }
            }            
            var filename = (dateNow.getMonth() + 1) + "-" + dateNow.getDate() + "-" + dateNow.getFullYear() + "_"
                + dateNow.getHours() + "." + dateNow.getMinutes() + "_RealNameMapings";
            rosterModel.updateLastDownloadedTime(userId, 
                downloadFile(JSON.stringify(realnamestoexport), filename + ".lck", "application/json;charset=utf-8;"));
        }else{
            locater.alertMsg("There is no realname-username mappings data to export. Create some realname-username mappings and then hit 'EXPORT ALL'",'error-OK-btn');
        }
    }    

    //author: Vidya Nakade
    //Issue: LocaterTool PII changes
    //Function to handle Showing Download div in all refresh scenarios
    this.showWarningDiv = function () {
        //the timestamp from local will be compared with lastDownloaded time form DB
        //if DB timestamp is smaller, then the warningMsg div will be shown
        rosterModel.getLastDownloadedTime(userId, function (result) {
            if (localStorage.getItem("sensitive" + locater.localPostfix())) {
                var lastUpdated = JSON.parse(localStorage.getItem("sensitive" + locater.localPostfix())).timestamp;
                if (result && result.downloadTime) {
                    if (new Date(result.downloadTime) < new Date(lastUpdated)) {
                        $("#warningMsg").show();
                    }
                } else if (lastUpdated) {                    
                    $("#warningMsg").show();
                }
            }
        });
    }

    //author: Vidya Nakade
    //Issue: LocaterTool PII changes
    //Function to ensure empty realName data is not being exported
    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    this.setsensitive = function (field, pseudonym, element,flag) {
        var donotsend = false;
        var value = element.value;
        if (!sensitivedata) {
            sensitivedata = { email: {}, realname: {}, timestamp: 0 };
        }
        //if this method is called after import File, then no need 
        //to show warning message to EXPORT the file.
        if(flag){
            $("#warningMsg").show();
            //the timestamp needs to changed only when this method is called on change 
            //from the UI. the 'flag' is false when this method is called from import method
            sensitivedata.timestamp = Date.now();    
        }
        var padbuffer = new Uint32Array(1);
        window.crypto.getRandomValues(padbuffer);
        //PII ph2
        //sensitivedata.randompad = (new Array(padbuffer[0] % 2048)).join("X");

        element.style.backgroundColor = "";
        // if (!aeskey && value !== "" && false) {
        //     alert("To edit the real name and email fields, you must enter a passphrase.");
        //     element.value = "";
        //     element.style.backgroundColor = "";
        //     value = "";
        //     donotsend = true;
        //     // 					render();
        // }
        if (!aeskey && value === "") {
            element.style.backgroundColor = "";
            delete sensitivedata[field][pseudonym];
            return 0;
        }
        if (value === sensitivedata[field][pseudonym] || (value === "" && sensitivedata[field][pseudonym] === undefined)) {
            element.style.backgroundColor = "";
            return false;
        }
        else if (value === "" && sensitivedata[field][pseudonym] !== undefined){
            delete sensitivedata[field][pseudonym];
        }
        else if (value !== "")
            sensitivedata[field][pseudonym] = value;
        var underscored = pseudonym.split(" ").join("_");
        var inputstoupdate = document.getElementsByClassName(field + "_" + underscored);
        for (var i = 0; i < inputstoupdate.length; i++)
            inputstoupdate[i]['value'] = value;
        if (!donotsend && aeskey) {
            //removing for PII ph2
            //locater.ajaxsetsensitive(null, function () { element.style.backgroundColor = ""; });
        }
        //getassignedtests(false);
        locater.setsensitivetostorage(true);
    };

    this.setsensitivetostorage = function (fromSetSensitive) {
        if (sensitivedata && fromSetSensitive) {
            localStorage.setItem("sensitive" + locater.localPostfix(), JSON.stringify(sensitivedata));
        }
        if (!fromSetSensitive) {
            var test = JSON.parse(localStorage.getItem("sensitive" + locater.localPostfix()));
            test = test && test!="null" ? test.realname :"";
            for (var pseudonym in test) {
                var underscored = pseudonym.split(" ").join("_");
                var inputstoupdate = document.getElementsByClassName("realname_" + underscored);
                for (var i = 0; i < inputstoupdate.length; i++)
                    inputstoupdate[i]['value'] = test[pseudonym];
            }
        }
    };


//commenting for PII ph2
/*     this.decrypttext = function (ciphertext, callback, hidealerts, resetwarning,justLoggedIn) {
        var ciphercombined = locater.hexToBytes(ciphertext);
        var cipherbytes = new Uint8Array(ciphercombined.length - 16);
        var iv = new Uint8Array(16);

        for (var i = 0; i < 16; i++)
            iv[i] = ciphercombined[i];
        for (var i = 0; i < cipherbytes.length; i++)
            cipherbytes[i] = ciphercombined[i + 16];

        var decryptedOK = false;
        return crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, aeskey, cipherbytes)
            .then(function (plainbytes) {
                var plaintext = new TextDecoder("utf-8").decode(plainbytes);
                sensitivedata = JSON.parse(plaintext);
                locater.getsensitivefromstorage(justLoggedIn);
                document.getElementById("submitpassphrase").style.display = "none";
                document.getElementById("resetpassphrase").style.display = "none";
                document.getElementById("changepassphrase").style.display = "";
                document.getElementById("encryptingmessage").style.display = "";
                document.getElementById("passphraseinput")['value'] = "";
                document.getElementById("passphrasediv").style.display = "none";
                decryptedOK = true;
                callback();
                if (resetwarning) {
                    document.getElementById("passphrasediv").style.display = "";
                    resetpassphrasewarning = true;
                    document.getElementById("resetpassphrasewarning").style.display = "";
                    document.getElementById("notencryptedwarning").style.display = "none";
                    document.getElementById("badpassphrase").style.display = "none";
                    document.getElementById("encryptingmessage").style.display = "none";
                }
                return plaintext;
            })
            .catch(function (e) {
                aeskey = null;
                document.getElementById("resetpassphrase").style.display = "";
                document.getElementById("badpassphrase").style.display = "";
                document.getElementById("notencryptedwarning").style.display = "";
                document.getElementById("passphrasediv").style.display = "";
                console.log(e);
                // if (usinglocalkey && !decryptedOK) {
                localStorage.removeItem("rosterjwk" + locater.localPostfix());
                // 							setTimeout(function() {
                // 								var passphrase = document.getElementById("passphraseinput").value;
                // 								var email = document.getElementById("emailinput").value;
                // 								if(/[\S]+@[\S]+\.[\S]+/.test(email) && passphrase !== "")
                // 									hashpassphrase(passphrase, ajaxgetsensitive, true);
                // 							}, 500);
                // }
                locater.getsensitivefromstorage(justLoggedIn);
                if (!hidealerts)
                    alert("Error: most likely your passphrase is incorrect.");
            });
    }; */

    this.showFormAandBLinks = function (testId) {
        $('#previewlink').css('display', 'block');
        //Set testID as ID for the two links
        $('#previewlink .pseudolink').attr('id', testId);
    };
    this.displaytestA = function (id) {
        var url = "/locatertool/testtaker?testpreview=" + id;
        document.getElementById("putpreviewhere").innerHTML = "<iframe id='testpreviewiframe' src='" + url + "' width='100%' height='100%' frameborder='0'></iframe>";
        document.getElementById("testpreviewer").style.display = "";
    };
    this.displaytestB = function (id) {
        var url = "/locatertool/testtaker?companionpreview=" + id;
        document.getElementById("putpreviewhere").innerHTML = "<iframe id='testpreviewiframe' src='" + url + "' width='100%' height='100%' frameborder='0'></iframe>";
        document.getElementById("testpreviewer").style.display = "";
    };
    this.displayTest = function (testId, passwordId, studentId) {
        $('#report').empty();
        rosterModel.getCompletedStudents(passwordId, function (comStudJson) {
            $('#report').append(can.view('/assets/views/testpreview.ejs', { completedStudJSON: comStudJson, studentId: studentId }));
            var url = "/locatertool/testtaker?testpreview=" + testId + "&passwordId=" + passwordId + "&" + "studentId=" + studentId;
            $('#putresulthere').html("<iframe id='testresultviewiframe' src='" + url + "' width='100%' height='100%' frameborder='1'></iframe>");
            $('#testresultviewer').css('display', "");
            $('#report').css("display", "block");
        });

    };
    interact('.windowh3').draggable({
        // enable inertial throwing
        inertia: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
        },
        onstart: function (event) {
        }
    });

    interact('#itemviewer,#testviewer,#studentreportviewer').resizable({
        //preserveAspectRatio: false,
        edges: { left: true, right: true, bottom: true, top: true },
        restrictEdges: {
            outer: 'parent',
            endOnly: true,
        },
        restrictSize: {
            min: { width: 100, height: 50 },
        },
        inertia: true,
    }).on('resizemove', function (event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);

    });

    function enableiframes(enabled) {
        var iframes = document.getElementsByTagName("iframe");
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].style.pointerEvents = (enabled ? "" : "none");
        }
    }
    var lastz = 10;
    function moveToTop(element, updateprint) {
        lastz++;
        element.style.zIndex = lastz;
    }

    function dragMoveListener(event) {
        var target = event.target.parentNode,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    window.dragMoveListener = dragMoveListener;

    this.getStudentName = function (userName) {
        try {
            var studentName = null;
            if (sensitivedata != null) {
                studentName = locater.getsensitive('realname', userName, sensitivedata);
            }
            if (!studentName) {
                studentName = userName;
            }
            return studentName;
        } catch (e) {
            return userName;
        }
    }

    this.loadStudentTestResults = function () {
        var studentDetails = JSON.parse($('#testResultStudentSelect').val());
        locater.displayTest(studentDetails.TEST_ID, studentDetails.PASSWORD_ID, studentDetails.STUDENT_ID);
    }

    this.loadMathJax = function (callback) {
        try {
            if (!MathJaxReady) {
                var mathJaxIntrvl = setInterval(function () {
                    try {
                        if (!mathjaxscriptloaded) {
                            var mathjaxscripttag = document.createElement('script');
                            mathjaxscripttag.setAttribute('src', '/assets/js/external/mathjax/MathJax.js?config=AM_HTMLorMML-full&delayStartupUntil=configured');
                            document.head.appendChild(mathjaxscripttag);
                            mathjaxscriptloaded = true;
                        }

                        MathJax.Hub.Config({ skipStartupTypeset: true, messageStyle: 'none' });
                        MathJax.Hub.Configured();
                        MathJaxReady = true;
                        clearInterval(mathJaxIntrvl);
                        callback();
                    } catch (e) {
                        return false;
                    }
                }, 100)
            } else {
                callback();
            }

        } catch (error) {
            return false;
        }
    };
    this.unEscapeInnerHTML = function () {
        $("div[id^=unEscape]").each(function () {
            var unEscapedHTML = $(this).text()
            $(this).html(unEscapedHTML);
            if (/`.+`/.test($(this).html())) {
                var obj = this;
                if (!MathJaxReady) {
                    locater.loadMathJax(function () { MathJax.Hub.Queue(["Typeset", MathJax.Hub, $(obj)[0]]); })
                } else {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, $(this).attr('id')]);
                    //MathJax.Hub.Typeset();
                }
            }
        });
    };
}();
