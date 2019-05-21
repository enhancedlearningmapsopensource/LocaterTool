var testController = can.Control({
  'init': function () {
    testModel.getAllSubjects(function (json) {
      json.forEach(subject => {
        $('#subject').append(new Option(subject.NAME, subject.SUBJECT_ID));
        $('.reportnodesubject').append(new Option(subject.NAME, subject.SUBJECT_ID));
        $('.optionsubject').append(new Option(subject.NAME, subject.SUBJECT_ID));
      });
    });

    $('#createTest').append(can.view('/assets/views/createTest.ejs', {}));
    testModel.getTestsByUserId(function (json) {
      var result = JSON.stringify({
        savedTests: json,
        isChecked: false
      });
      $('#savedTests').append(can.view('/assets/views/savedTests.ejs', {
        savedTests: json
      }));
    });
    //Allow config script to be appended from loadScript.js
    setTimeout(function () {
      mathjaxconfig();
    }, 0);
  },
  '#showDeletedTests click': function (el, ev) {
    showDeleted = document.getElementById('showDeletedTests').checked;
    $('#savedTests').empty();
    if (showDeleted) {
      testModel.getAllTestsByUserId(function (json) {
        var result = JSON.stringify({
          savedTests: json,
          isChecked: showDeleted
        });
        $('#savedTests').append(can.view('/assets/views/savedTests.ejs', {
          savedTests: json
        }));
        document.getElementById("showDeletedTests").checked = true;
      });
    } else {
      testModel.getTestsByUserId(function (json) {
        var result = JSON.stringify({
          savedTests: json,
          isChecked: false
        });
        $('#savedTests').append(can.view('/assets/views/savedTests.ejs', {
          savedTests: json
        }));
        document.getElementById("showDeletedTests").checked = false;
      });
    }
  },
  '#fileuploadbutton click': function (el, ev) {
    testModel.getAllUploadedFiles(function (json) {
      $('#FileUploadDiv').empty();
      //document.getElementById("fileuploaddiv").style.display="";
      $('#FileUploadDiv').append(can.view('/assets/views/fileUploads.ejs', {
        uploadedFiles: json
      }));
    });
  },
  '#uploadtestbutton click': function (el, ev) {
    if (!teststate.title) {
      alert("Error: You have not supplied a Test Title.");
      return false;
    }

    if (!teststate.subject) {
      alert("Error: You have not selected a Test Subject.");
      return false;
    }

    if (teststate.ACTIVE_TEST_ID && teststate.ACTIVE_TEST_ID != null) {
      var promptresponse = "";
      while (promptresponse !== "OVERRIDE" && promptresponse !== "NEW" && promptresponse !== null)
        promptresponse = prompt("Do you want to override the previously saved test '" + teststate.title + "'?\n\nEnter 'OVERRIDE' to override or 'NEW' to create a new test.", "NEW");
      if (promptresponse === null)
        return false;
      else if (promptresponse === "OVERRIDE") {
        if (!teststate.ispublic)
          teststate.isOverriden = true;
        else {
          if (confirm("You are trying to edit a Public Test. Click Ok to Proceed."))
            teststate.isOverriden = true;
          else
            return;
        }
      } else {
        teststate.isOverriden = false;
        teststate.ACTIVE_TEST_ID = null;
      }
    }

    testModel.createNewTest(teststate, function (json) {
      //console.log(json);
      teststate.ID = json.newId;
      teststate.ACTIVE_TEST_ID = json.ACTIVE_TEST_ID;
      alert("Test Saved");
      $('#savedTests').empty();
      if (showDeleted) {
        testModel.getAllTestsByUserId(function (json) {
          var result = JSON.stringify({ savedTests: json, isChecked: showDeleted });
          $('#savedTests').append(can.view('/assets/views/savedTests.ejs', { savedTests: json }));
          document.getElementById("showDeletedTests").checked = true;
        });
      } else {
        testModel.getTestsByUserId(function (json) {
          var result = JSON.stringify({ savedTests: json, isChecked: false });
          $('#savedTests').append(can.view('/assets/views/savedTests.ejs', { savedTests: json }));
        });
      }
    }, function (rslt, exe) {
      alert("Save Test Failed with Errors : " + rslt.responseText);
    });
  },
  '#cleartestbutton click': function (el, ev) {
    var oldTestId = teststate.ACTIVE_TEST_ID;
    if (oldTestId) {
      var oldrow = document.getElementById("testRowID_" + oldTestId);
      if (oldrow) oldrow.style.backgroundColor = "";
    }
    teststate = JSON.parse(blankstate);
    render(istaking, true);
    pushstate();
  },
  '#uploadFileBtn click': function (el, ev) {
    var fileupload = document.getElementById("fileupload");
    var file = fileupload.files[0];
    if (!file) {
      alert("Error: no file specified.");
      return false;
    }
    testModel.uploadFile(file, function (result) {
      testModel.getAllUploadedFiles(function (json) {
        $('#FileUploadDiv').empty();
        $('#FileUploadDiv').append(can.view('/assets/views/fileUploads.ejs', {
          uploadedFiles: json
        }));
        alert("File Uploaded");
      }, function (rslt, exe) {
        alert("Upload Failed with errors : " + rslt.responseText);
      });
    });
  },
  '#subject change': function (el, ev) {
    var subject = $('#subject').find('option:selected').text();
    if (subject != "") {
      teststate.subject = $('#subject').val();
      teststate.prefix = getPrefixFromSubject(subject);
      $('#prefix').val(teststate.prefix);
      pushstate();
    } else {

    }
  },
  '#editorFileUploadBtn click': function (el, ev) {
    testModel.getAllUploadedFiles(function (json) {
      $('#FileUploadDiv').empty();
      //document.getElementById("fileuploaddiv").style.display="";
      $('#FileUploadDiv').append(can.view('/assets/views/fileUploads.ejs', {
        uploadedFiles: json
      }));
    });
  },
  '#popupOKButton click': function (el, ev) {
    $('#errorPopUp').fadeOut('slow');
    currentFocusElement.trigger("focus");
    setTimeout(function () {
      $('#errorPopUp').remove();
    }, 500);
  },
  '#popupOKButton keydown': function (el, ev) {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      $('#popupOKButton').trigger("click");
    }
  },
  /**********************************
   *  Add/ Modify Test Functions    *
   **********************************/


  /**********************************
   *        Helper Functions        *
   **********************************/


});