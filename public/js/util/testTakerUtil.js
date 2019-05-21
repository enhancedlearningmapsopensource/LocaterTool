var parseJSON = function (string) {
    try {
        return JSON.parse(string);
    }
    catch (e) {
        console.log("Exception: ", e);
        return false;
    }
}
var blankstate = '{"title":"","questions":[]}';
var teststate = parseJSON(blankstate);
var istaking = true;
var alltests = {};
var undostack = [blankstate];
var undostacksize = blankstate.length;
var redostack = [];
var redostacksize = 0;
var MathJaxReady = false;
var mathjaxscriptloaded = false;
var responsesonly;
var beenwarnedalready = false;

var testTakerUtil = new function () {

    this.safeJSONparse = function (string) {
        try {
            return JSON.parse(string);
        }
        catch (e) {
            console.log("Exception: ", e);
            return false;
        }
    }

    this.showjson = function () {
        document.getElementById("jsontext")["value"] = JSON.stringify(teststate);
        document.getElementById("jsontext").style.backgroundColor = "#FFF";
    }

    this.nodereport = function (object, question, part, option) {
        var prefix = (object.prefix || "").toUpperCase();

        var nodes = object.questions[question].parts[part].options[option].node || "";
        if (nodes)
            nodes = nodes.split(/, */).map(function (id) { return testTakerUtil.getNodeTitle(id, prefix); }).join("<br>");
        var antinodes = object.questions[question].parts[part].options[option].antinode || "";
        if (antinodes)
            antinodes = antinodes.split(/, */).map(function (id) { return testTakerUtil.getNodeTitle(id, prefix); }).join("<br>");
        // 				return (nodes ? "<b>Evidence of understanding</b>:<div style='margin-left:1em;'>" + nodes + "</div>" : "") + (antinodes ? "<b>Evidence of misunderstanding</b>:<div style='margin-left:1em;'>" + antinodes + "</div>" : "");
        return (nodes ? "<div>" + nodes + "</div>" : "") + (antinodes ? "<div>" + antinodes + "</div>" : "");
    }

    this.getNodeTitle = function (nodeid, prefix) {
        if (!nodeid)
            return "";

        var TOP = window.opener ? window.opener.top : top;
        if (TOP.window.opener)
            TOP = TOP.window.opener.top;

        nodeid = nodeid.toUpperCase();
        if (prefix && /^[0-9]+$/.test(nodeid))
            nodeid = nodeid;

        try {
            if (TOP.application) {
                var returnobj = TOP.application.programState.get("datainterface").get("node").findWhere({ textid: nodeid });
                if (returnobj)
                    return returnobj.get("title");
                else
                    return nodeid;
            }
            else if (TOP.frames.interfacewindow) {
                if (TOP.frames.interfacewindow.maps.maps.ELM.object[nodeid])
                    return TOP.frames.interfacewindow.maps.maps.ELM.object[nodeid].title;
                else
                    return nodeid;
            }
            else
                return nodeid;
        }
        catch (err) {
            TOP.window.postMessage(nodeid, location.origin);
            return "<span class='postMessageNodeTitle" + nodeid.replace(/-/, "") + "'>" + nodeid + "</span>";
        }
    }

    addEventListener("message", function (event) {
        if (location.origin !== event.origin) // enforces same domain
        {
            console.log("Error: attempting cross-site window.postMessage().");
            console.log(event.data);
            console.log(JSON.stringify(event.data));
            return false;
        }
        else if (typeof event.data !== "object" || typeof event.data.request !== "string" || typeof event.data.response !== "string") {
            console.log("Error: event.data is not a valid response object.")
            console.log(event.data);
            console.log(JSON.stringify(event.data));
            return false;
        }


        if (/^Error. Unknown/.test(event.data.response)) {
            console.log("Error in window.postMessage response: " + JSON.stringify(event.data));
        }
        // 				else if(event.data.request === "email")
        // 				{
        // 					document.getElementById("emailinput").value = topEmail = event.data.response;
        // 				}
        else if (/^[A-Z]+-[0-9]+$/.test(event.data.request)) {
            var els = document.getElementsByClassName("postMessageNodeTitle" + event.data.request.replace(/-/, ""));
            for (var i = 0; i < els.length; i++) {
                els[i].outerHTML = event.data.response;
            }
        }
        else {
            console.log("Error, unknown window.postMessage response: " + JSON.stringify(event.data));
        }
    }, false);

    this.nbsp = function (string) {
        if (string)
            return string;//.replace(/  +/g, function (spaces) { return spaces.replace(/ /g, "\xa0"); }).replace(/^ /, "\xa0");
        else
            return "";
    };

    this.render = function (taketest, updatejson, keyView) {
        var newstyle = true;
        var htmltest = function (questionset, h) {
            var html = "<div style='margin:1em;white-space:nowrap;'><span style='margin-right:0.25em;vertical-align:top;font-weight:bold;white-space:nowrap;'>" + (h + 1) + ".</span> ";
            // 					if(questionset.parts.length > 1)
            html += "<div style='display:inline-block;width:calc(100% - 25px);white-space:normal;'>" + ((questionset.text === "" || questionset.text == null) ? "" : questionset.text + "</div>");
            questionset.parts.forEach(function (question, i) {
                if (!question.text)
                    return "";
                if (questionset.parts.length > 1)
                    html += "<div>";
                if (question.type === 'mc') {
                    var isright = false;
                    var optionsstring = "";
                    if (responsesonly && newstyle) {
                        optionsstring += "<table style='padding:1em;'><tr><th colspan='2'>Answer</th><th>Node Information</th>";
                        optionsstring += "<th>Student Choice</th>";
                        optionsstring += "<th>Correct Answer</th></tr>";
                    }
                    optionsstring += question.options.map(function (option, j) {
                        var checkedstring = !responsesonly ? "" : (responsesonly.questions[h].parts[i].response === j ? "checked" : "");
                        var disabledstring = responsesonly ? "disabled" : "";
                        var stylestring = (responsesonly && option.valid) ? "font-weight:bold;" : "";
                        var tailstring = !responsesonly ? "" : ((checkedstring && !option.valid) || (!checkedstring && !stylestring)) ? "" : ((!checkedstring && option.valid) ? "<span style='font-weight:bold;color:#A00;margin-left:1em;'>&#x2718;</span>" : "<span style='font-weight:bold;color:#080;margin-left:1em;'>&#x2713;</span>");
                        var iscorrect = !responsesonly ? false : ((checkedstring && !option.valid) || (!checkedstring && !stylestring)) ? false : ((!checkedstring && option.valid) ? false : true);
                        if (iscorrect)
                            isright = true;

                        var strikestring = (checkedstring && !stylestring) ? "text-decoration:line-through;" : "";

                        var nodestring = (option.valid || checkedstring) ? "<div style='margin:0.25em;margin-left:1em;font-weight:normal;color:#000;'>" + testTakerUtil.nodereport(teststate, h, i, j) + "</div>" : "";

                        if (checkedstring)
                            stylestring += iscorrect ? "background-color:#B3FFB3;" : "background-color:#FFB3B3;";
                        if (responsesonly && newstyle) {
                            var optionhtml = "<tr>";
                            optionhtml += "<td style='vertical-align:top;font-weight:bold;border-right:none;'>" + String.fromCharCode(65 + j) + ".</td>";
                            optionhtml += "<td style='vertical-align:top;border-left:none;'>" + testTakerUtil.nbsp(option.text) + "</td>";
                            optionhtml += "<td>" + nodestring + "</td>";
                            optionhtml += "<td style='text-align:center;'>" + (checkedstring ? "<b>&#x2713;</b>" : "") + "</td>";
                            optionhtml += "<td style='text-align:center;'>" + (option.valid ? "<b>&#x2713;</b>" : "") + "</td>";
                            optionhtml += "</tr>";
                        }
                        else {
                            var optionhtml = "<div style='padding:5px;white-space:nowrap;'><input id='option" + i + j + h + "' onfocus='this.blur();' type='radio' " + disabledstring + " " + checkedstring + " name='radio" + h.toString() + i.toString() + "' onclick='var question = teststate.questions[" + h + "].parts[" + i + "]; question.response= " + j + ";'>";
                            optionhtml += "<label style='" + stylestring + "' for='option" + i + j + h + "'>";
                            optionhtml += "<div style='display:inline-block;vertical-align:middle;text-decoration:inherit;white-space:normal;" + strikestring + "'>" + testTakerUtil.nbsp(option.text).replace(/<DISABLED\/?(p|h[1-6]|div|pre|blockquote)(>| [^>]*>)/ig, " ").replace(/<br>/ig, " ") + "</div></label></div>";
                        }
                        return optionhtml;
                    }).join('');
                    if (responsesonly && newstyle) {
                        optionsstring += "</table>";
                        //if (window.parent && window.parent["itemreport"])
                        if (!keyView) {
                            var onclickfunction = "testTakerUtil.getQuestionReport(" + responsesonly.questions[h].parts[i].questionId + "," + responsesonly.testId + "," + responsesonly.locaterPasswordId + ",\"mc\",\"testview\");";
                            optionsstring += "<a href='#' onclick=" + onclickfunction + " >Item Summary Report</a>";
                        }
                    }
                    html += !responsesonly ? "" : (isright ? "<div style='display:inline-block;vertical-align:top;color:#080;font-weight:bold;'>&#x2713;&nbsp;</div>" : "<div style='display:inline-block;vertical-align:top;color:#A00;font-weight:bold;'>&#x2718;&nbsp;</div>");
                    html += "<span><div id='highlight" + h + "_" + i + "' style='display:inline-block;width:calc(100% - 25px);white-space:normal;'>" + testTakerUtil.nbsp(question.text) + "</div><br>";
                    html += "<div style='margin-top:1em;'>";
                    html += optionsstring;
                    html += "</span></div>";
                }
                else if (question.type === 'ms') {
                    var anywrong = false;
                    var optionsstring = "";
                    if (responsesonly && newstyle) {
                        optionsstring += "<table style='padding:1em;'><tr><th colspan='2'>Answer</th><th>Node Information</th>";
                        optionsstring += "<th>Student Choice</th>";
                        optionsstring += "<th>Correct Answer</th></tr>";
                    }
                    optionsstring += question.options.map(function (option, j) {
                        var response = !responsesonly ? null : responsesonly.questions[h].parts[i].options[j].response;
                        var checkedstring = !responsesonly ? "" : (response ? "checked" : "");
                        var disabledstring = responsesonly ? "disabled" : "";
                        var stylestring = (responsesonly && option.valid) ? "font-weight:bold;" : "";
                        var tailstring = !responsesonly ? "" : (!responsesonly) ? "" : ((checkedstring && !stylestring) || (!checkedstring && stylestring) ? "<span style='font-weight:bold;color:#A00;margin-left:1em;'>&#x2718;</span>" : (response ? "<span style='font-weight:bold;color:#080;margin-left:1em;'>&#x2713;</span>" : ""));
                        var strikestring = !responsesonly ? "" : (checkedstring && !stylestring) ? "text-decoration:line-through;" : "";

                        var iswrong = !responsesonly ? false : (!responsesonly) ? false : ((checkedstring && !stylestring) || (!checkedstring && stylestring) ? true : false);
                        if (iswrong)
                            anywrong = true;

                        if (checkedstring || stylestring)
                            stylestring += !iswrong ? "background-color:#B3FFB3;" : "background-color:#FFB3B3;";

                        var nodestring = (option.valid || checkedstring) ? "<div style='margin:0.25em;margin-left:1em;font-weight:normal;color:#000;'>" + testTakerUtil.nodereport(teststate, h, i, j) + "</div>" : "";

                        if (responsesonly && newstyle) {
                            var optionhtml = "<tr>";
                            optionhtml += "<td style='vertical-align:top;font-weight:bold;border-right:none;'>" + String.fromCharCode(65 + j) + ".</td>";
                            optionhtml += "<td style='vertical-align:top;border-left:none;'>" + testTakerUtil.nbsp(option.text) + "</td>";
                            optionhtml += "<td>" + nodestring + "</td>";
                            optionhtml += "<td style='text-align:center;'>" + (checkedstring ? "<b>&#x2713;</b>" : "") + "</td>";
                            optionhtml += "<td style='text-align:center;'>" + (option.valid ? "<b>&#x2713;</b>" : "") + "</td>";
                            optionhtml += "</tr>";
                        }
                        else {
                            var optionhtml = "<div style='padding:5px;white-space:nowrap;'><input id='option" + i + j + h + "' onfocus='testTakerUtil.blur();' type='checkbox' " + disabledstring + " " + checkedstring + " onclick='var question = teststate.questions[" + h + "].parts[" + i + "]; var option = question.options[" + j + "]; option.response = this.checked;'><label style='" + stylestring + "' for='option" + i + j + h + "'>";
                            optionhtml += "<div style='display:inline-block;vertical-align:middle;text-decoration:inherit;white-space:normal;" + strikestring + "'>" + testTakerUtil.nbsp(option.text).replace(/<DISABLED\/?(p|h[1-6]|div|pre|blockquote)(>| [^>]*>)/ig, " ").replace(/<br>/ig, " ") + "</div></label></div>";
                        }
                        option.response = false; // ???
                        return optionhtml;
                    }).join('');
                    if (responsesonly && newstyle) {
                        optionsstring += "</table>";
                        // if (window.parent && window.parent["itemreport"])
                        if (!keyView) {
                            var onclickfunction = "testTakerUtil.getQuestionReport(" + responsesonly.questions[h].parts[i].questionId + "," + responsesonly.testId + "," + responsesonly.locaterPasswordId + ",\"ms\",\"testview\");";
                            optionsstring += "<a href='#' onclick=" + onclickfunction + ">Item Summary Report</a>";
                        }
                    }
                    html += !responsesonly ? "" : (!anywrong ? "<div style='display:inline-block;vertical-align:top;color:#080;font-weight:bold;'>&#x2713;&nbsp;</div>" : "<div style='display:inline-block;vertical-align:top;color:#A00;font-weight:bold;'>&#x2718;&nbsp;</div>");
                    html += "<span><div id='highlight" + h + "_" + i + "' style='display:inline-block;width:calc(100% - 25px);white-space:normal;'>" + testTakerUtil.nbsp(question.text) + "</div><br>";
                    html += "<div style='margin-top:1em;'>";
                    html += optionsstring;
                    html += "</span></div>";
                }
                else if (question.type === 'cr') {
                    var disabledstring = responsesonly ? "disabled" : "";
                    var studentresponse = !responsesonly ? "" : (responsesonly.questions[h].parts[i].response || "");
                    var validanswers = [], colorstring = "#FFF", tailstring = "&nbsp;&nbsp;&nbsp;&nbsp;";
                    if (question.options) {
                        validanswers = question.options.filter(function (option) {
                            return option.valid;
                        }).map(function (option) {
                            return { text: option.text.replace(/<\/?(p|h[1-6]|div|pre|blockquote)(>| [^>]*>)/ig, " ").replace(/<br>/ig, " "), regex: option.regex };
                        });
                    }
                    var strikethroughstring = validanswers.some(function (validanswer) {
                        var regexregex = /^\/(.*)\/([a-z]*)$/;
                        var regexmatch = (validanswer.regex || "NOTAREGEX").match(regexregex);
                        if (regexmatch) {
                            var regex = new RegExp(regexmatch[1], regexmatch[2]);
                            console.log(regex);
                            return regex.test(studentresponse);
                        }
                        else
                            return (studentresponse.toLowerCase() === validanswer.text.toLowerCase());
                    }) ? "" : "text-decoration: line-through";
                    var answerstring = !responsesonly ? "" : "<span style='font-weight:bold;color:#000;'>&nbsp;&nbsp;&nbsp;&nbsp;Acceptable responses:</span> <span>" + validanswers.map(function (ans) { return ans.text; }).join(validanswers.length > 2 ? ", " : " or ").replace(/, ([^,]+)$/, ", or $1") + "</span>";
                    if (responsesonly && !keyView) {
                        var onclickfunction = "testTakerUtil.getQuestionReport(" + responsesonly.questions[h].parts[i].questionId + "," + responsesonly.testId + "," + responsesonly.locaterPasswordId + ",\"cr\",\"testview\");";
                        answerstring += "<br><a href='#' onclick=" + onclickfunction + ">Item Summary Report</a>";
                    }
                    if (strikethroughstring) {
                        colorstring = "#FCC";
                        // 								tailstring += (strikethroughstring) ? "<span style='font-weight:bold;color:#A00'>&#x2718;</span>" : "<span style='font-weight:bold;color:#080'>&#x2713;</span>";
                    }
                    // else if (responsesonly && false) {
                    //     tailstring += "<span style='font-weight:bold;color:#080'>&#x2713;</span>";
                    // }
                    if (!responsesonly) {
                        colorstring = tailstring = strikethroughstring = "";
                    }
                    html += !responsesonly ? "" : (!strikethroughstring ? "<div style='display:inline-block;vertical-align:top;color:#080;font-weight:bold;'>&#x2713;&nbsp;</div>" : "<div style='display:inline-block;vertical-align:top;color:#A00;font-weight:bold;'>&#x2718;&nbsp;</div>");
                    html += "<span id='highlight" + h + "_" + i + "'><div style='display:inline-block;width:calc(100% - 25px);white-space:normal;'>" + testTakerUtil.nbsp(question.text) + "</div><br>";


                    html += "<div style='margin-left:1em;margin-top:1em;margin-bottom:1em;margin-top:2em;'>";
                    html += "<input type='text' " + disabledstring + " value='" + studentresponse + "' size='4' style='background-color:" + colorstring + "' placeholder='answer' onkeypress='var char=event.charCode; if((char < 48 || char > 57) && char !== 45 && char !== 0) { event.preventDefault(); return false; }' oninput='var question = teststate.questions[" + h + "].parts[" + i + "]; var option = question.response = this.value;'>";
                    html += " " + (question.label || "");
                    html += answerstring; // + tailstring;
                    html += "</span>";
                    // 							if(questionset.parts.length === 1)
                    html += "</div>";
                }
                if (questionset.parts.length > 1)
                    html += "</div>";
                html += "<br>";
                if (questionset.parts.length > 1 && i < questionset.parts.length - 1)
                    html += "<br>";
            });
            if (questionset.parts.length === 1 || !questionset.text)
                html += "</div>";

            html += "</div>";
            return html;
        };
        var skippedalready = false;
        var fullhtml = "";
        if (teststate.passage)
            fullhtml += taketest ? ("<div id='testpassage' class='testpassage' style='font-size:1em;'><div>" + teststate.passage + "</div></div>") : "";
        fullhtml += taketest ? ("<div id='testquestions' class='testquestions' style='font-size:1em;min-width:40%;'><h2 style='margin-top:0;margin-bottom:1em;'>" + (teststate.studenttitle || teststate.title) + "</h2><hr><br>") : "";
        if (teststate.questions) fullhtml += teststate.questions.map(htmltest).join("<br><hr><br>");
        fullhtml += "</div>";
        var testform = document.getElementById("testform");

        fullhtml = fullhtml.replace(/font-size *: *[0-9]+pt *;/g, function (match) {
            var pts = parseInt(match.match(/font-size *: *([0-9]+)pt *;/)[1]);
            var ems = pts / 12;
            return "font-size: " + ems + "em;"
        });

        testform.innerHTML = fullhtml;
        // 				console.log(fullhtml);

        testTakerUtil.smartquotes(testform);
        // document.getElementById("title")["value"] = teststate.title;

        document.getElementById("pageheader").style.display = "none";
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.overflow = "";

        if (/`.+`/.test(fullhtml)) {

            if (!mathjaxscriptloaded) {
                var mathjaxscripttag = document.createElement('script');
                mathjaxscripttag.setAttribute('src', '/assets/js/external/mathjax/MathJax.js?config=AM_HTMLorMML-full&delayStartupUntil=configured');
                document.head.appendChild(mathjaxscripttag);
                mathjaxscriptloaded = true;
            }

            var isconfigured = false;
            var interval = setInterval(function () {
                if (!isconfigured && !testTakerUtil.mathjaxconfig())
                    return false;

                if (/`.+`/.test(testform.innerHTML)) {
                    //MathJax.Hub.Typeset(testform);
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, testform]);
                    clearInterval(interval);
                }
            }, 100);
        }
        testform.style.display = "";
        document.getElementById("submitbuttondiv").style.display = "";
        document.getElementById("testsubmitbutton").style.display = responsesonly ? "none" : "";
        if (top.location.href === location.href && this.getqueryvariable("ispreviewing") === "true")
            document.getElementById("printbutton").style.display = "";

        this.positionbuttons();
    };
    this.getqueryvariable = function (variablename, locationtext) {
        if (!locationtext)
            locationtext = location.href;
        var regex = new RegExp('[?&]' + variablename + '=([^&#]*)', 'i');
        var result = locationtext.match(regex);
        if (result === null)
            return "";
        else
            return decodeURIComponent(result[1]);
    };

    this.postTest = function () {
        var testisfinished = true;
        responsesonly = JSON.parse(JSON.stringify(teststate));
        delete responsesonly.title;
        delete responsesonly.passage;
        delete responsesonly.studenttitle;
        responsesonly.questions.forEach(function (question, i) {
            delete question.text;
            question.parts.forEach(function (part, j) {
                delete part.text;
                var beenanswered = false;
                if (part.type === "cr") {
                    delete part.options;
                    if (part.response)
                        beenanswered = true;
                }
                else if (part.type === "mc") {
                    delete part.options;
                    if (typeof part.response === "number")
                        beenanswered = true;
                }
                else if (part.type === "ms") {
                    part.options.forEach(function (option) {
                        delete option.node;
                        delete option.antinode;
                        delete option.note;
                        delete option.text;
                        if (option.response === true)
                            beenanswered = true;
                    });
                }
                var questiondiv = document.getElementById("highlight" + i + "_" + j);
                if (questiondiv)
                    questiondiv.style.backgroundColor = beenanswered ? "" : "#FFFF00";
                if (!beenanswered)
                    testisfinished = false;
            });
        });

        if (!testisfinished) {
            alert("Some questions have been left unanswered.");
            if (!confirm("To submit your test unfinished, click 'OK'.")) {
                alert("Unanswered questions have been highlighted yellow.");
                return false;
            }
        }
        testTakerModel.postStudentTest(responsesonly, function (result) {
            if (result.err) {
                alert(result.err);
            } else {
                document.getElementById("testform").innerHTML = "<h3>Your test has been submitted.</h3>";
                document.getElementById("testform").style.display = "";
                document.getElementById("pseudonymdiv").style.display = "none";
                document.getElementById("submitbuttondiv").style.display = "none";
            }
        });
    };

    this.zoomtext = function (factor) {
        var testpassage = document.getElementById("testpassage");
        var testquestions = document.getElementById("testquestions");
        var fontsize = parseFloat(testquestions.style.fontSize.replace(/em^/, ""));
        fontsize *= factor;

        if (fontsize === 0)
            fontsize = 1;
        if (fontsize > 0.9999 && fontsize < 1.0001)
            fontsize = 1;

        if (fontsize > 2)
            document.getElementById("zoominbutton")["disabled"] = true;
        else
            document.getElementById("zoominbutton")["disabled"] = false;

        if (fontsize < 0.5)
            document.getElementById("zoomoutbutton")["disabled"] = true;
        else
            document.getElementById("zoomoutbutton")["disabled"] = false;

        document.getElementById("zoomoriginalbutton")["disabled"] = (fontsize === 1);
        testquestions.style.fontSize = fontsize + "em";
        if (testpassage)
            testpassage.style.fontSize = fontsize + "em";
        // I don't think the following code does anything, at least on iOS Safari.
        document.body.style.zoom = '1.0';
        document.body.style.webkitTransform = 'scale(1)';
        document.body.style.msTransform = 'scale(1)';
        document.body.style.transform = 'scale(1)';
    };

    var stoppositioning = false;
    this.positionbuttons = function () {
        if (stoppositioning)
            return false;

        var testpassage = document.getElementById("testpassage");

        if (!testpassage) {
            document.getElementById("leftbutton").style.display = "none";
            document.getElementById("rightbutton").style.display = "none";
            stoppositioning = true;
            return false;
        }

        var xcoord = testpassage.offsetWidth;
        document.getElementById("leftbutton").style.left = (xcoord - 30) + "px";
        document.getElementById("rightbutton").style.left = (xcoord + 20) + "px";

        var minWidth = parseInt(document.getElementById("testquestions").style.minWidth.replace(/%$/, ""));
        document.getElementById("leftbutton")["disabled"] = (minWidth >= 70);
        document.getElementById("rightbutton")["disabled"] = (minWidth <= 30);
    };

    this.movepartition = function (direction) {
        var qdiv = document.getElementById("testquestions");
        var minWidth = parseInt(qdiv.style.minWidth.replace(/%$/, ""));
        qdiv.style.minWidth = (minWidth + direction * 5) + "%";
        this.positionbuttons();
    };

    // author Arthur
    // http://stackoverflow.com/a/42780478
    document.addEventListener('touchmove', function (event) {
        event = event.originalEvent || event;
        if (event.scale > 1) {
            event.preventDefault();
        }
    }, false);

    // author Evrim Persembe
    // http://stackoverflow.com/a/39778831
    document.body.addEventListener('touchstart', function (e) {
        var t2 = e.timeStamp;
        var t1 = e.currentTarget.dataset.lastTouch || t2;
        var dt = t2 - t1;
        var fingers = e.touches.length;
        e.currentTarget.dataset.lastTouch = t2;

        if (!dt || dt > 200 || fingers > 1)
            return; // not double-tap

        e.preventDefault();
        e.target.click();
    });
    this.getQuestionReport = function (questionId, testId, passwordId, questionType, viewtype) {
        $('#view-report').empty();
        $('#viewer-report').css("display", "none");
        if (viewtype == 'testview') {
            $('#studentreport').empty();
            $('#studentreport').css("display", "none");

        } else if (viewtype == 'studentview') {
            $('#testreport').empty();
            $('#testreport').css("display", "none");
        }
        testTakerModel.getQuestionReport(questionId, testId, passwordId, questionType, function (questionObjJson) {
            $('#view-report').append(can.view('/assets/views/itemviewer-report.ejs', { quesObj: questionObjJson }));
            testTakerUtil.unEscapeInnerHTML();
            $('#view-report').css("display", "block");
        });
    };
    window.addEventListener('resize', this.positionbuttons);

    // smartquotes.js
    // Copyright 2013-17 Kelly Martin
    // http://smartquotesjs.com/
    // https://github.com/kellym/smartquotesjs
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            define(factory);
        } else if (typeof exports === 'object') {
            module.exports = factory();
        } else {
            root.smartquotes = factory();
        }
    }(this, function () {

        // The smartquotes function should just delegate to the other functions
        function smartquotes(context) {
            if (typeof document !== 'undefined' && typeof context === 'undefined') {
                var run = function () { smartquotes.element(document.body); };
                // if called without arguments, run on the entire body after the document has loaded
                if (document.readyState !== 'loading') {
                    // we're already ready
                    run();
                } else if (document.addEventListener) {
                    document.addEventListener("DOMContentLoaded", run, false);
                } else {
                    var readyStateCheckInterval = setInterval(function () {
                        if (document.readyState !== 'loading') {
                            clearInterval(readyStateCheckInterval);
                            run();
                        }
                    }, 10);
                }
            } else if (typeof context === 'string') {
                return smartquotes.string(context);
            } else {
                return smartquotes.element(context);
            }
        }

        smartquotes.string = function (str, retainLength) {
            return str
                .replace(/'''/g, '\u2034' + (retainLength ? '\u2063\u2063' : ''))						// triple prime
                .replace(/(\W|^)"(\w)/g, '$1\u201c$2')																			 // beginning "
                .replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, '$1\u201d$2')					// ending "
                .replace(/([^0-9])"/g, '$1\u201d')																						// remaining " at end of word
                .replace(/''/g, '\u2033' + (retainLength ? '\u2063' : ''))									 // double prime as two single quotes
                .replace(/(\W|^)'(\S)/g, '$1\u2018$2')																			 // beginning '
                .replace(/([a-z])'([a-z])/ig, '$1\u2019$2')																	// conjunction's possession
                .replace(/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/ig, '\u2019$2$3')		 // abbrev. years like '93
                .replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/ig, '$1\u2019$3')								 // ending '
                .replace(/(\B|^)\u2018(?=([^\u2018\u2019]*\u2019\b)*([^\u2018\u2019]*\B\W[\u2018\u2019]\b|[^\u2018\u2019]*$))/ig, '$1\u2019') // backwards apostrophe
                .replace(/"/g, '\u2033')																										 // double prime
                .replace(/'/g, '\u2032');																										// prime
        };

        smartquotes.element = function (root) {
            var TEXT_NODE = typeof Element !== 'undefined' && Element.TEXT_NODE || 3;

            handleElement(root);

            function handleElement(el) {
                if (['CODE', 'PRE', 'SCRIPT', 'STYLE'].indexOf(el.nodeName.toUpperCase()) !== -1) {
                    return;
                }

                var i, node, nodeInfo;
                var childNodes = el.childNodes;
                var textNodes = [];
                var text = '';

                // compile all text first so we handle working around child nodes
                for (i = 0; i < childNodes.length; i++) {
                    node = childNodes[i];

                    if (node.nodeType === TEXT_NODE || node.nodeName === '#text') {
                        textNodes.push([node, text.length]);
                        text += node.nodeValue || node.value;
                    } else if (node.childNodes && node.childNodes.length) {
                        text += handleElement(node);
                    }

                }
                text = smartquotes.string(text, true);
                for (i in textNodes) {
                    nodeInfo = textNodes[i];
                    if (nodeInfo[0].nodeValue) {
                        nodeInfo[0].nodeValue = substring(text, nodeInfo[0].nodeValue, nodeInfo[1]);
                    } else if (nodeInfo[0].value) {
                        nodeInfo[0].value = substring(text, nodeInfo[0].value, nodeInfo[1]);
                    }
                }
                return text;
            }

            function substring(text, value, position) {
                return text.substr(position, value.length).replace('\u2063', '');
            }

            return root;
        };

        return smartquotes;
    }));



    var selectedPS = {};
    var wordsPS = "acorn,apple,bee,bird,boat,book,bus,candy,car,cave,clock,coin,comet,earth,fence,fish,fox,frog,horse,key,kite,lake,lamp,moose,phone,road,rock,sand,snow,sun,tent,tower,tree,tulip,wheat,wheel".split(",");
    var wordhashPS = {};
    wordsPS.forEach(function (word) { wordhashPS[word] = true });

    this.selectword = function (word, element) {
        var length = Object.keys(selectedPS).length;
        if (selectedPS[word]) {
            delete selectedPS[word];
        }
        else if (length < 4) {
            selectedPS[word] = true;
        }
        var inputel = document.getElementById("pseudonyminput");
        inputel.style.backgroundColor = "";
        this.highlight();
        this.makepseudonym();
    };

    this.highlight = function () {
        var tds = document.getElementsByClassName("wordtd");
        for (var i = 0; i < tds.length; i++) {
            tds[i]["style"].backgroundColor = selectedPS[wordsPS[i]] ? "#FFFF77" : "";
            tds[i]["style"].cursor = !selectedPS[wordsPS[i]] && Object.keys(selectedPS).length === 4 ? "default" : "";
            tds[i]["style"].opacity = !selectedPS[wordsPS[i]] && Object.keys(selectedPS).length === 4 ? "0.2" : "";
        }
    };

    this.makepseudonym = function () {
        document.getElementById("pseudonyminput")["value"] = Object.keys(selectedPS).sort().join(" ");
    };

    this.parsestring = function (string) {
        selectedPS = {};
        var inputel = document.getElementById("pseudonyminput");
        if (!string)
            string = inputel["value"];
        var lower = string.toLowerCase();
        var wordsPS = lower.split(/[\s,]+/);
        var invalid = (wordsPS.lengthDISABLED !== 4 && wordsPS.length !== 3);
        wordsPS.forEach(function (word) {
            if (wordhashPS[word] && Object.keys(selectedPS).length < 3)
                selectedPS[word] = true;
            else
                invalid = true;
        });
        // 				inputel.style.backgroundColor = invalid && inputel.value ? "#FF8888" : "";
        this.highlight();
        return !invalid;
    };

    this.printtest = function (actuallyprint) {
        var oldiframe = document.getElementById("printiframe");
        if (oldiframe)
            oldiframe.remove();

        var html = "<!doctype html><html><head><style>p{margin-top:0;margin-bottom:0;}*{font-family:Trebuchet,Helvetica,Arial,sans-serif;}table{margin:0.5em;border-collapse:collapse;}table,th,td{border:1px solid black;padding:5px;vertical-align:middle;}th{background:rgb(247,247,247);}</style></head>";
        html += "<body" + (actuallyprint ? " onload='window.print();'" : "") + ">";
        html += "<div style='margin:1em;'>" + (document.getElementById("testpassage") || { innerHTML: "" }).innerHTML + "</div>";
        html += "<div style='margin:1em;'>" + (document.getElementById("testquestions") || { innerHTML: "" }).innerHTML + "</div>";
        html += "</body></html>"
        var iframe = document.createElement('iframe');
        iframe.setAttribute("name", "printiframe");
        iframe.setAttribute("id", "printiframe");
        iframe.style.display = "none";
        iframe.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(html);
        document.body.appendChild(iframe);
    };

    this.moveContainerUp = function () {
        console.log("Move container up: ");
        if (typeof parent["moveToTop"] === 'function')
            parent["moveToTop"](parent.document.getElementById("testviewer"), true);
    };

    this.mathjaxconfig = function () {
        try {
            MathJax.Hub.Config({ skipStartupTypeset: true, messageStyle: 'none' });
            MathJax.Hub.Configured();
            return true;
        } catch (e) {
            return false;
        }
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
                }, 100);
            } else {
                callback();
            }

        } catch (error) {
            return false;
        }
    };

    this.unEscapeInnerHTML = function () {
        $("div[id^=unEscape]").each(function () {
            var unEscapedHTML = $(this).text();
            $(this).html(unEscapedHTML);
            if (/`.+`/.test($(this).html())) {
                var obj = this;
                if (!MathJaxReady) {
                    testTakerUtil.loadMathJax(function () { MathJax.Hub.Queue(["Typeset", MathJax.Hub, $(obj)[0]]); });
                } else {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, $(obj).attr('id')]);
                    //MathJax.Hub.Typeset();
                }
            }
        });
    };

    //this.highlight();
}();