var rosterController = can.Control({
  defaults: {
    userId: '',
    studentId: '',
    rosterId: '',
    studentName: '',
  },
},
  {
    'init': function () {
      locater.getEmail();  
      $('#createRoster').append(can.view('/assets/views/createRoster.ejs', {}));
      $('#restoreRosters').append(can.view('/assets/views/restoreRosters.ejs', {}));
      $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));

      //Change by: Vidya for: PII changes
      //If user has atleast 1 roster in db and have atleast once performed "EXPORT ALL',
      // then show 'upload data file' popup to them. 
      //If they chose to skip, they'll be shown realname mappings from localstorage object
      rosterModel.checkIfRostersExist(function (data) {
        if (data.count) {
          //the timestamp from local will be compared with lastDownloaded time form DB
          //if DB timestamp is smaller, then the warningMsg div will be shown
          rosterModel.getLastDownloadedTime(userId, function (result) {
            if (result && result.downloadTime) {
              var localStorageData = localStorage.getItem("sensitive" + locater.localPostfix());
              if (localStorageData && localStorageData!="null") {
                var lastUpdated = JSON.parse(localStorageData).timestamp;
                if (new Date(result.downloadTime) < new Date(lastUpdated)) {
                  $("#warningMsg").show();
                }
              }
            }
          });
        }
      });
      //PII ph2 changes
      //rosterModel.getSensitiveString(this.options.userId, this.proxy('setsensitiveString'));
      rosterModel.getRostersByUserId(this.options.userId, this.proxy('setMyRosterView'));
      //console.log("email=="+sessionStorage.getItem("userEmail"));
      //console.log("sensitive" + locater.localPostfix()+" == "+localStorage.getItem("sensitive" + locater.localPostfix()));
    },

    
    'setMyRosterView': function (json) {
      allRostersData = JSON.parse(JSON.stringify(json));
      locater.setsensitivetostorage(false);
      rosterModel.getAllTests(this.options.userId, this.proxy('getlocaterTestsView'));

      //the timestamp from local will be compared with lastDownloaded time form DB
      //if DB timestamp is smaller, then the warningMsg div will be shown
      rosterModel.getLastDownloadedTime(userId, function(result) {
        if (result && result.downloadTime) {
          var localStorageData = localStorage.getItem("sensitive" + locater.localPostfix());
          if (localStorageData && localStorageData!='null') {
            var lastUpdated = JSON.parse(localStorageData).timestamp;
            if (new Date(result.downloadTime) < new Date(lastUpdated)) {
              $("#warningMsg").show();
            }
          }
        }
      });
      $('#viewRosters').empty();
      $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: json }));

    },
     

    
    'getlocaterTestsView': function (testsjson) {
      savedtestData = JSON.parse(JSON.stringify(testsjson));
      rosterModel.getAssignedTests(this.options.userId, this.proxy('getAssignedTestView'));
      var html = can.view.render('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData });
      $('#assignRosterToTest').empty();
      $('#assignRosterToTest').append(html);
    },

    'getAssignedTestView': function (assignedTestjson) {
      assignedTestData = JSON.parse(JSON.stringify(assignedTestjson));
      var html = can.view.render('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData });
      $('#assignedtests').empty();
      $('#assignedtests').append(html);
    },

    //author: Vidya Nakade
    //referred in locater.js in functions addStudent, refreshRostersBeforePrint and hashpassphrase.
    //IF the functionality of this function is being changed, corresponding updates need to be done to above functions as well.
    '#refreshdiv click': function () {
      rosterModel.getRostersByUserId(this.options.userId, this.proxy('setMyRosterView'));
    },

    '#restoreremoved click': function (el, ev) {
      rosterModel.getInActiveRostersByUserId(this.options.userId, this.proxy('setRestoreRosterView'));
    },

    'setRestoreRosterView': function (json) {
      $('#restoreInnerDiv').remove();
      $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: json }));

    },

    '.del-roster-yes-btn click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      var rosterId = $('.dialog-overlay').prop('id');
      this.options.rosterId = rosterId;
      var userId = this.options.userId;
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn();
      rosterModel.deleteRoster(this.options.userId, rosterId, (function (data) {
        var tempUserId = userId;
        var tempRosterId = rosterId;
        return function () {
          $('#rostertableID_' + tempRosterId).remove();
          $('#rostername_' + rosterId).remove();
          if ($('#removedInnerDiv').length) {
            rosterModel.getInActiveRostersByUserId(tempUserId, function (result) {
              $('#removedInnerDiv').remove();
              $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: result }));
            });
            rosterModel.getAssignedTests(tempUserId, function (data) {
              if (data != null && data.length > 0) {
                assignedTestData = JSON.parse(JSON.stringify(data));
                $('#locaterInnerdiv').remove();
                $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                $('#assignedtestsInner').remove();
                $('#assignRosterToTestInner').remove();
                $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

              }
            });
          }
          else {
            rosterModel.getRostersByUserId(userId, function (data) {
              $('#innerViewRostersdiv').remove();
              $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: data }));
              allRostersData = JSON.parse(JSON.stringify(data));
            });
            rosterModel.getAssignedTests(tempUserId, function (data) {
              if (data != null && data.length > 0) {
                assignedTestData = JSON.parse(JSON.stringify(data));
                $('#locaterInnerdiv').remove();
                $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                $('#assignedtestsInner').remove();
                $('#assignRosterToTestInner').remove();
                $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));
                
              }
            });
          }
        };
      })());
    },
    '.rmv-std-yes-btn click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      var rosterId = $('.dialog-overlay').prop('id');
      var studentId = $('.dialog').prop('id');
      this.options.rosterId = rosterId;
      this.options.studentId = studentId;
      var userId = this.options.userId;
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn();
      rosterModel.deleteStudentFromRoster(this.options.userId, rosterId, studentId, (function (data) {
        var tempUserId = userId;
        var tempStudentId = studentId;
        var tempRosterId = rosterId;
        return function () {
          var tableBodyPtr = $('#rostertableID_' + tempRosterId).find('table tbody');
          var rowPtr = tableBodyPtr.find('#studentID_' + tempStudentId);
          rowPtr.remove();
          if ($('#removedInnerDiv').length) {
            rosterModel.getInActiveRostersByUserId(tempUserId, function (result) {
              $('#removedInnerDiv').remove();
              $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: result }));
            });
            rosterModel.getAssignedTests(tempUserId, function (data) {
              if (data != null && data.length > 0) {
                assignedTestData = JSON.parse(JSON.stringify(data));
                $('#locaterInnerdiv').remove();
                $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                $('#assignedtestsInner').remove();
                $('#assignRosterToTestInner').remove();
                $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

              }
            });
          }
          else {
            rosterModel.getRostersByUserId(userId, function (data) {
              $('#innerViewRostersdiv').remove();
              $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: data }));
              allRostersData = data;
            });
            rosterModel.getAssignedTests(tempUserId, function (data) {
              if (data != null && data.length > 0) {
                assignedTestData = JSON.parse(JSON.stringify(data));
                $('#locaterInnerdiv').remove();
                $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
                $('#assignedtestsInner').remove();
                $('#assignRosterToTestInner').remove();
                $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
                $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

              }
            });
          }
        };
      })());
    },

    '.activate-std-yes-btn click': function (el, ev) {
      var rosterId = $('.dialog-overlay').prop('id');
      var studentName = $('.dialog').prop('id');
      this.options.rosterId = rosterId;
      this.options.studentId = studentId;
      var userId = this.options.userId;
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn(200, function () { });
      rosterModel.activateStudent(this.options.userId, studentId, rosterId, (function (data) {
        var tempStudentId = studentId;
        var tempUserId = userId;
        return function () {
          var removeRosterRowPtr = $('#removedStudentFromRoster').find('tbody');
          removeRosterRowPtr.find('rm-student-' + tempStudentId).remove();
          rosterModel.getRostersByUserId(tempUserId, function (resultActiveRosters) {
            allRostersData = resultActiveRosters;
            $('#innerViewRostersdiv').remove();
            $('#viewRosters').append(can.view('/assets/views/viewRosters.ejs', { viewRosters: resultActiveRosters }));
          });
          rosterModel.getInActiveRostersByUserId(tempUserId, function (resultInActiveRosters) {
            $('#removedInnerDiv').remove();
            $('#removedRostersNStudents').append(can.view('/assets/views/removedRosters.ejs', { removedRosters: resultInActiveRosters }));
          });
          rosterModel.getAssignedTests(tempUserId, function (data) {
            assignedTestData = JSON.parse(JSON.stringify(data));
            if (data != null && data.length > 0) {
              $('#locaterInnerdiv').remove();
              $('#locaterTool').append(can.view('/assets/views/locater.ejs', {}));
              $('#assignedtestsInner').remove();
              $('#assignRosterToTestInner').remove();
              $('#assignRosterToTest').append(can.view('/assets/views/assignLocaterView.ejs', { savedTests: savedtestData, rosters: allRostersData }));
              $('#assignedtests').append(can.view('/assets/views/assignedTestsView.ejs', { assignedTests: assignedTestData, rosters: allRostersData }));

            }
          });
        };
      })());
    },

    '#btn-add-existing click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      var footerId = $('.ftaddexisting').prop('id');
      var ftId = footerId.split("_");
      var rosterId = $('.dialog').prop('id');
      var psuedonym = $('.dialog').find('input').val();
      this.options.rosterId = rosterId;

      rosterModel.checkExistingStudent(this.options.userId, psuedonym, rosterId, function (result) {
        if (!result.addStudentFlag) {
          locater.showAlertMsg(result.errorMsg, "error-OK-btn");
        } else {
          if (Object.keys(result.rosterNames).length > 0) {
            var len = Object.keys(result.rosterNames).length;
            var rosternames = "";
            for (var i = 0; i < len; i++) {
              rosternames = rosternames + ((i == 0) ? "&nbsp;" : ",&nbsp;") + "<b>" + result.rosterNames[i].ROSTER_NAME + "</b>";
            }
            if (locater.showAlertMsg("The student <b>" + psuedonym + "</b> is also enrolled in the following classes:<br/>" + rosternames, "add-OK-btn")) {
              locater.addStudent(result.studentId, result.studentName, rosterId, result.reportVal, ftId[1]);
            }
          }
          else {
            locater.addStudent(result.studentId, result.studentName, rosterId, result.reportVal, ftId[1]);
            $('.dialog-overlay').parents().fadeOut(500, function () {
              $('.dialog-overlay').remove();
            });
            $('.dialog-overlay').parents().fadeIn(200, function () { });
          }
        }
      });
    },

    '#testselect change': function (el, ev) {
      var testOption = $('#testselect option:selected').val();
      if (testOption !== '-1') {
        $('#formdisplay').css("display", "block");
      } else {
        $('#formdisplay').css("display", "none");
      }
    },

    '#btn-add-existing keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('#btn-add-existing').trigger("click");
      }
      else if (ev.keyCode === 37) {
        $('#btn-add-existing').blur();
        $('#confirm-cancel-btn').trigger("focus");
      }
    },

    '#confirm-cancel-btn keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('#confirm-cancel-btn').trigger("click");
      }
      else if (ev.keyCode === 39) {
        $('#confirm-cancel-btn').blur();
        $('#btn-add-existing').trigger("focus");

      }
    },
  //Import realname file button events
    '#import-ok keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('#import-ok').trigger("click");
      }
      else if (ev.keyCode === 39) {
        $('#import-ok').blur();
        $('#import-cancel').trigger("focus");
      }
    },

    '#import-cancel keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('#import-cancel').trigger("click");
      }
      else if (ev.keyCode === 39) {
        $('#import-cancel').blur();
        $('#import-ok').trigger("focus");
      }
    },

    '.btn-import-confirm click': function(el,ev){
      locater.browseFileConfirmBox(true);
    },

     /*Author- Anantha Sravya, Deepala
    *Importfile: This functionality is used to upload a .lck file with 
    *Realname-Username mapping for all the rostered students in user account.
    */
    '.btn-import click': function(el, ev){
      var userId='';
      $('body').css('overflow', 'scroll');
      var fileElem = document.getElementById('browsefile');
      if (fileElem.files[0] == undefined && fileElem.files[0] == null) {
        locater.showAlertMsg("Please select a valid roster file to import.", 'error-OK-btn');
      }else{
          var file = fileElem.files[0];
          var reader = new FileReader();
          reader.readAsBinaryString(file);
          reader.onload = function(e){
            if(e.target.result){
              var fileJson=JSON.parse(e.target.result);
              if(fileJson && Object.keys(fileJson).length>0){
                for(var i=0;i<Object.keys(fileJson).length;i++){
                      var underscored = Object.keys(fileJson)[i].split(" ").join("_") ;
                      if($(".realname_"+underscored) && $(".realname_"+underscored).length>0){
                          $(".realname_"+underscored).val(Object.values(fileJson)[i]);
                          var elemId=$(".realname_"+underscored).attr('id');
                          locater.setsensitive('realname',Object.keys(fileJson)[i],document.getElementById(elemId),false);
                      }
                      }
                    }
                  }
              };
              $('.dialog-overlay').parents().fadeOut(500, function () {
                  $('.dialog-overlay').remove();
                });
              $('.dialog-overlay').parents().fadeIn(200, function () { });
        };
    },
   
    // End of code for File import events

    '#psuedo-id keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('#btn-add-existing').trigger("click");
      }
      else if (ev.keyCode === 9) {
        $('#btn-add-existing').trigger("focus");
      }
    },

    '#alert-ok-btn keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('#alert-ok-btn').trigger("click");
      }
    },

    '#confirm-OK keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('.del-roster-yes-btn').trigger("click");
      } else if (ev.keyCode == 37) {
        $('#confirm-OK').blur();
        $('.cancel-btn').trigger("focus");
      }
    },

    '.cancel-btn keydown': function (el, ev) {
      if (ev.keyCode === 13) {
        $('.cancel-btn').trigger("click");
      }
      else if (ev.keyCode === 39) {
        $('.cancel-btn').blur();
        $('#confirm-OK').trigger("focus");
      }
    },

    '.cancel-btn, .import-cancel-btn, .fa-close click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn(200, function () { });
    },

    '.error-OK-btn click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn(200, function () { });
    },

    '.error-rename-OK-btn click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn(200, function () { });
    },

    '.add-OK-btn click': function (el, ev) {
      $('body').css('overflow', 'scroll');
      $('.dialog-overlay').parents().fadeOut(500, function () {
        $('.dialog-overlay').remove();
      });
      $('.dialog-overlay').parents().fadeIn(200, function () { });
      return true;
    },



    //------contains events for Testbuilder and locater tool

    '#assignTest click': function (el, ev) {
      var flag = 1;
      var rosterChkArray = [];
      var rosterDetailsArray = [];
      $('input:checkbox[name=rosternames]').each(function () {
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
      var testOption = $('#testselect option:selected').val();
      if (testOption === '-1') {
        flag = 0;
        locater.alertMsg("Please select a test.", "error-OK-btn");
        return false;
      }
      else if ($('#locatertestpassword').val() == "") {
        flag = 0;
        locater.alertMsg("Please enter a password for the selected locater tool.", "error-OK-btn");
        return false;
      }
      else if ($('#datepicker').val() != "" || $('#timeselect option:selected').val() != -1) {
        if ($('#timeselect option:selected').val() == -1) {
          flag = 0;
          locater.alertMsg("The due date you entered is not valid. To set no due date, clear both the date and time fields", "error-OK-btn");
          return false;
        }
        else if ($('#datepicker').val() == "") {
          flag = 0;
          locater.alertMsg("The due date you entered is not valid. To set no due date, clear both the date and time fields", "error-OK-btn");
          return false;
        }
        else if(rosterChkArray == null || rosterChkArray.length == 0) {
            flag = 0;
            locater.alertMsg("Please select at least one student.", "error-OK-btn");
            return false;
          }
      }
      else if (rosterChkArray == null || rosterChkArray.length == 0) {
        flag = 0;
        locater.alertMsg("Please select at least one student.", "error-OK-btn");
        return false;
      }
      if (flag == 1) {
        var assignTestJson = {};
        assignTestJson.testTitle = $('#testselect option:selected').text().trim();
        assignTestJson.testId = $('#testselect option:selected').val().trim();
        // check for null for duedate 
        var dateString = $('#datepicker').val().trim();
        if (dateString != "") {
          var date = new Date(dateString);
          assignTestJson.dueDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
        }
        else {
          assignTestJson.dueDate = '';
        }
        // check for null for duetime 
        var dueTime = $('#timeselect option:selected').val();
        if (dueTime != -1) {
          assignTestJson.dueTime = $('#timeselect option:selected').val().trim();
        }
        else {
          assignTestJson.dueTime = '';
        }

        assignTestJson.password = $('#locatertestpassword').val();
        assignTestJson.selfNote = $('#testcomment').val();
        assignTestJson.elmNote = $('#testmessage').val();
        var testData = JSON.parse(JSON.stringify(savedtestData));
        for (var i = 0; i < Object.keys(testData).length; i++) {
          if (parseInt(testData[i].ID) == parseInt(assignTestJson.testId.trim())) {
            assignTestJson.TEST_VERSION = testData[i].TEST_VERSION;
            assignTestJson.COMPANION_ID = testData[i].COMPANION_ID;
            assignTestJson.ACTIVE_TEST_ID = testData[i].ACTIVE_TEST_ID;
            assignTestJson.ASSIGNED_TEST_ID = parseInt(assignTestJson.testId.trim());
          }
        }
        assignTestJson.rosterStudentDetails = rosterDetailsArray;
        var tempId = this.options.userId;
        setTimeout(function() {
          rosterModel.assignTest(tempId, assignTestJson, function (jsonResponse) {
            if (jsonResponse != null) {
              if (jsonResponse.passwordExitsFlag != null && jsonResponse.passwordExitsFlag == true) {
                locater.alertMsg("ERROR: The password entered is already in use. <br> <b> '" + jsonResponse.password + "' <b>", "error-OK-btn");
                return false;
              } else {
                  $('#clearAssignTestForm').trigger("click");
                  rosterModel.getAssignedTests(tempId, function (data) {
                  if (data != null && data.length > 0) {
                      assignedTestData = JSON.parse(JSON.stringify(data));
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
    }
    },

    '#clearAssignTestForm click': function (el, ev) {
      $('#testselect').val("-1");
      $('#timeselect').val("-1");
      $('#locatertestpassword').val("");
      $('#testcomment').val("");
      $('#testmessage').val("");
      $('#datepicker').val("");
      $('input[name=rosternames]:checked').each(function () {
        $(this).prop('checked', false);
        var inputId = $(this).attr("id");
        var rosterId = inputId.slice("rostercheckbox_".length, inputId.length);
        locater.uncheckRoster(rosterId);
      });
    },
      //PII ph2 changes
    /* 'setsensitiveString': function (response) {
      var setsensitiveStringVal = "";
      //console.log("aeskey: ", aeskey);
      if (response != null)
        setsensitiveStringVal = response.result;
        //commenting for PII ph2
      if (localStorage.getItem('rosterjwk' + locater.localPostfix()) != null) {
        // aeskey = JSON.parse(localStorage.getItem('rosterjwk' + locater.localPostfix()));
      }
      if (setsensitiveStringVal != "") {
        //commenting for PII ph2
        //locater.decrypttext(setsensitiveStringVal, null, false, false);
      }
    }, */

    '#showhint click': function () {
      rosterModel.showHint(function (hintjson) {
        if (hintjson && hintjson.HINT) {
          $('input#hintinput').val(hintjson.HINT);
        } else {
          $('p#nohint').show();
        }
      });
    }

  });
