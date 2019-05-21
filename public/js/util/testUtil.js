"using strict";
var blankstate = '{"title":"","passage":"","questions":[]}';
var teststate = safeJSONparse(blankstate);
var istaking = false;
var alltests = {};
var undostack = [blankstate];
var undostacksize = blankstate.length;
var redostack = [];
var redostacksize = 0;
var highlightedID = "";
var showDeleted = false;
var currentFocusElement = $('');

function safeJSONparse(string) {
	try {
		return JSON.parse(string);
	}
	catch (e) {
		return false;
	}
}

function newquestion(type) {
	teststate.questions.push({ text: "", parts: [] });
	var index = teststate.questions.length - 1;
	if (type === 'mc')
		addmc(index);
	else if (type === 'ms')
		addms(index);
	else if (type === 'cr')
		addcr(index);
	pushstate();
}

function addmc(index) {
	var question = { type: 'mc', text: '', note: '', dok: '', options: [] };
	teststate.questions[index].parts.push(question);
	render(istaking, true);
	pushstate();
}

function addms(index) {
	var question = { type: 'ms', text: '', note: '', dok: '', options: [] };
	teststate.questions[index].parts.push(question);
	render(istaking, true);
	pushstate();
}

function addcr(index) {
	var question = { type: 'cr', text: '', note: '', dok: '', options: [] };
	teststate.questions[index].parts.push(question);
	render(istaking, true);
	pushstate();
}

function showjson() {
	document.getElementById("jsontext").value = JSON.stringify(teststate);
	document.getElementById("jsontext").style.backgroundColor = "#FFF";
}

function checkenter(evnt, elmnt) {
	if (evnt.which !== 13)
		return true;

	evnt.preventDefault();

	var id = elmnt.id;
	if (!id)
		return false;

	var [quest, part, row, column, rowsnum] = id.split("_").map(function (num) { return parseInt(num); });
	var upordown = evnt.shiftKey ? -1 : 1;

	var newid = quest + "_" + part + "_" + (row + upordown) + "_" + column + "_" + rowsnum;
	var nextel = document.getElementById(newid);
	if (nextel) {
		elmnt.blur();
		nextel.focus();
		nextel.select();
		return false;
	}

	var nextrow = evnt.shiftKey ? rowsnum - 1 : 0;
	newid = quest + "_" + part + "_" + nextrow + "_" + (column + upordown) + "_" + rowsnum;
	var nextel = document.getElementById(newid);
	if (nextel) {
		elmnt.blur();
		nextel.focus();
		nextel.select();
		return false;
	}

	return false;
}

function render(taketest, updatejson) {
	var tnodesobj = {};
	var autotargets = {};
	var targets = {};
	(teststate.targetnodes || "").split(/[\s,]+/).filter(function (id) { return /^([A-Z]+-)?[0-9]+$/i.test(id); }).forEach(function (id) {
		targets[id] = true;
	});

	var htmledit = function (questionset, h) {
		var html = "<div style='margin: 1em;'><b>" + (h + 1) + ".</b> ";
		if (questionset.parts.length > 1) {
			html += "<input onblur='pushstate();' type='text' placeholder='reading passage' value='" + emptyIfUndefined(questionset.text).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].text = this.value; showjson();'> ";
			html += "<button onclick='htmledit(teststate.questions[" + h + "], \"text\");'>&#9997;</button> ";
			html += "<button onclick='var questions = teststate.questions; var swapvar = questions[" + h + "]; questions[" + h + "] = questions[" + (h + 1) + "]; questions[" + (h + 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((h === (teststate.questions.length - 1)) ? "disabled" : "") + ">&#9660;</button>";
			html += "<button onclick='var questions = teststate.questions; var swapvar = questions[" + h + "]; questions[" + h + "] = questions[" + (h - 1) + "]; questions[" + (h - 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((h === 0) ? "disabled" : "") + ">&#9650;</button> ";
			html += "<button onclick='teststate.questions.splice(" + h + ",1); render(istaking, true); pushstate();'>x</button>";
			html += "</div>";
		}
		questionset.parts.forEach(function (question, i) {
			var label = questionset.parts.length > 1 ? h + "_" + i : h.toString() + "_";
			tnodesobj[label] = { targets: {}, distractors: {} };
			if (questionset.parts.length > 1)
				html += "<br><div style='margin: 1em;'><b> Part " + (i + 1) + "</b>. ";
			if (question.type === 'mc') {
				html += "<input onblur='pushstate();' type='text'size='30' placeholder='question' value='" + emptyIfUndefined(question.text).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].text = this.value; showjson();'> ";
				html += "<input onblur='pushstate();' type='text'size='4' placeholder='dok' value='" + emptyIfUndefined(question.dok).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].dok = this.value; showjson();'> ";
				html += "<input onblur='pushstate();' type='text' placeholder='note' value='" + emptyIfUndefined(question.note).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].note = this.value; showjson();'> ";
				if (questionset.parts.length > 1) {
					html += "<button onclick='htmledit(teststate.questions[" + h + "].parts[" + i + "], \"text\");'>&#9997;</button> ";
					html += "<button onclick='var parts = teststate.questions[" + h + "].parts; var swapvar = parts[" + i + "]; parts[" + i + "] = parts[" + (i + 1) + "]; parts[" + (i + 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((i === (questionset.parts.length - 1)) ? "disabled" : "") + ">&#9660;</button>";
					html += "<button onclick='var parts = teststate.questions[" + h + "].parts; var swapvar = parts[" + i + "]; parts[" + i + "] = parts[" + (i - 1) + "]; parts[" + (i - 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((i === 0) ? "disabled" : "") + ">&#9650;</button> ";
					html += "<button onclick='teststate.questions[" + h + "].parts.splice(" + i + ", 1); render(istaking, true); pushstate();'>x</button>";
					html += "</div>";
				}
				else {
					html += "<button onclick='htmledit(teststate.questions[" + h + "].parts[" + i + "], \"text\");'>&#9997;</button> ";
					html += "<button onclick='var questions = teststate.questions; var swapvar = questions[" + h + "]; questions[" + h + "] = questions[" + (h + 1) + "]; questions[" + (h + 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((h === (teststate.questions.length - 1)) ? "disabled" : "") + ">&#9660;</button>";
					html += "<button onclick='var questions = teststate.questions; var swapvar = questions[" + h + "]; questions[" + h + "] = questions[" + (h - 1) + "]; questions[" + (h - 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((h === 0) ? "disabled" : "") + ">&#9650;</button> ";
					html += "<button onclick='teststate.questions.splice(" + h + ",1); render(istaking, true); pushstate();'>x</button>";
					html += "</div>";
				}
				html += "<div style='margin: 1em;'>";
				html += question.options.map(function (option, j) {
					var optionhtml = "&nbsp;&nbsp;<b>" + String.fromCharCode(65 + j) + ".</b> ";
					var checkedstring = option.valid ? "checked" : "";
					optionhtml += "<input type='radio' name='radio" + h.toString() + i.toString() + "' " + checkedstring + " onclick='var question = teststate.questions[" + h + "].parts[" + i + "]; question.options.forEach(function(opt,indx) { opt.valid = (indx === " + j + "); }); showjson(); pushstate();'> ";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "0" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onblur='pushstate();' type='text' placeholder='answer' value='" + emptyIfUndefined(option.text).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].text = this.value; showjson();'> ";
					optionhtml += "<select class='optionsubject'>"+$('#subject').html()+"</select>";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "1" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onchange='validateTestNodes(this,this.value,function(rslt){if(rslt){teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].node = rslt;showjson();}else{teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].node=null;showjson();}pushstate();})' type='text' size='7' placeholder='nodes' value='" + emptyIfUndefined(option.node).replace(/'/g, "&#x27;") + "' '> ";
					optionhtml += "<select class='optionsubject'>"+$('#subject').html()+"</select>";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "2" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onchange='validateTestNodes(this,this.value,function(rslt){if(rslt){teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].antinode = rslt;showjson();}else{teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].antinode=null;showjson();}pushstate();})' type='text' size='7' placeholder='anti-nodes' value='" + emptyIfUndefined(option.antinode).replace(/'/g, "&#x27;") + "' '> ";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "3" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onblur='pushstate();' type='text' placeholder='note' value='" + emptyIfUndefined(option.note).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].note = this.value; showjson();'> ";
					optionhtml += "<button onclick='htmledit(teststate.questions[" + h + "].parts[" + i + "].options[" + j + "], \"text\");'>&#9997;</button> ";
					optionhtml += "<button onclick='var options = teststate.questions[" + h + "].parts[" + i + "].options; var swapvar = options[" + j + "]; options[" + j + "] = options[" + (j + 1) + "]; options[" + (j + 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((j === (question.options.length - 1)) ? "disabled" : "") + ">&#9660;</button>";
					optionhtml += "<button onclick='var options = teststate.questions[" + h + "].parts[" + i + "].options; var swapvar = options[" + j + "]; options[" + j + "] = options[" + (j - 1) + "]; options[" + (j - 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((j === 0) ? "disabled" : "") + ">&#9650;</button> ";
					optionhtml += "<button onclick='addsubjectNode(\"mc\");'>Add Subject/Nodes</button>";
					optionhtml += "<button onclick='teststate.questions[" + h + "].parts[" + i + "].options.splice(" + j + ",1); render(istaking, true); pushstate();'>x</button>";
					optionhtml += "<br>";

					var nodes = (option.node || "").split(/[\s,]+/).concat((option.antinode || "").split(/[\s,]+/)).filter(function (id) { return /^([A-Z]+-)?[0-9]+$/i.test(id); });
					var obj = tnodesobj[label][option.valid ? "targets" : "distractors"];
					nodes.forEach(function (id) {
						obj[id] = true;
						if (option.valid && !targets[id])
							autotargets[id] = true;
					});

					return optionhtml;
				}).join('');
				html += "<div style='margin: 1em;'><button onclick='var options = teststate.questions[" + h + "].parts[" + i + "].options; options.push({text:\"\",node:\"\",antinode:\"\",note:\"\",valid:(options.length === 0)}); render(istaking, true); pushstate();'>add option</button> <button onclick='document.getElementById(\"formulaeditordiv\").style.display = \"\";'>formula editor</button></div>";
			}
			else if (question.type === 'ms') {
				html += "<input onblur='pushstate();' type='text'size='30' placeholder='question' value='" + emptyIfUndefined(question.text).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].text = this.value; showjson();'> ";
				html += "<input onblur='pushstate();' type='text'size='4' placeholder='dok' value='" + emptyIfUndefined(question.dok).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].dok = this.value; showjson();'> ";
				html += "<input onblur='pushstate();' type='text' placeholder='note' value='" + emptyIfUndefined(question.note).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].note = this.value; showjson();'> "
				if (questionset.parts.length > 1) {
					html += "<button onclick='htmledit(teststate.questions[" + h + "].parts[" + i + "], \"text\");'>&#9997;</button> ";
					html += "<button onclick='var parts = teststate.questions[" + h + "].parts; var swapvar = parts[" + i + "]; parts[" + i + "] = parts[" + (i + 1) + "]; parts[" + (i + 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((i === (questionset.parts.length - 1)) ? "disabled" : "") + ">&#9660;</button>";
					html += "<button onclick='var parts = teststate.questions[" + h + "].parts; var swapvar = parts[" + i + "]; parts[" + i + "] = parts[" + (i - 1) + "]; parts[" + (i - 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((i === 0) ? "disabled" : "") + ">&#9650;</button> ";
					html += "<button onclick='teststate.questions[" + h + "].parts.splice(" + i + ", 1); render(istaking, true); pushstate();'>x</button>";
					html += "</div>";
				}
				else {
					html += "<button onclick='htmledit(teststate.questions[" + h + "].parts[" + i + "], \"text\");'>&#9997;</button> ";
					html += "<button onclick='var questions = teststate.questions; var swapvar = questions[" + h + "]; questions[" + h + "] = questions[" + (h + 1) + "]; questions[" + (h + 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((h === (teststate.questions.length - 1)) ? "disabled" : "") + ">&#9660;</button>";
					html += "<button onclick='var questions = teststate.questions; var swapvar = questions[" + h + "]; questions[" + h + "] = questions[" + (h - 1) + "]; questions[" + (h - 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((h === 0) ? "disabled" : "") + ">&#9650;</button> ";
					html += "<button onclick='teststate.questions.splice(" + h + ",1); render(istaking, true); pushstate();'>x</button>";
					html += "</div>";
				}
				html += "<div style='margin: 1em;'>";
				html += question.options.map(function (option, j) {
					var optionhtml = "&nbsp;&nbsp;<b>" + String.fromCharCode(65 + j) + ".</b> ";
					var checkedstring = option.valid ? "checked" : "";
					optionhtml += "<input type='checkbox' " + checkedstring + " onclick='var question = teststate.questions[" + h + "].parts[" + i + "]; var option = question.options[" + j + "]; option.valid = this.checked; showjson(); pushstate();'> ";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "0" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onblur='pushstate();' type='text' placeholder='answer' value='" + emptyIfUndefined(option.text).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].text = this.value; showjson();'> ";
					optionhtml += "<select class='optionsubject'>"+$('#subject').html()+"</select>";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "1" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onchange='validateTestNodes(this,this.value,function(rslt){if(rslt){teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].node = rslt;showjson();}else{teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].node=null;showjson();}pushstate();})' type='text' size='7' placeholder='nodes' value='" + emptyIfUndefined(option.node).replace(/'/g, "&#x27;") + "'> ";
					optionhtml += "<select class='optionsubject'>"+$('#subject').html()+"</select>";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "2" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onchange='validateTestNodes(this,this.value,function(rslt){if(rslt){teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].antinode = rslt;showjson();}else{teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].antinode=null;showjson();}pushstate();})' type='text' size='7' placeholder='anti-nodes' value='" + emptyIfUndefined(option.antinode).replace(/'/g, "&#x27;") + "'> ";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "3" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onblur='pushstate();' type='text' placeholder='note' value='" + emptyIfUndefined(option.note).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].note = this.value; showjson();'> ";
					optionhtml += "<button onclick='htmledit(teststate.questions[" + h + "].parts[" + i + "].options[" + j + "], \"text\");'>&#9997;</button> ";
					optionhtml += "<button onclick='var options = teststate.questions[" + h + "].parts[" + i + "].options; var swapvar = options[" + j + "]; options[" + j + "] = options[" + (j + 1) + "]; options[" + (j + 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((j === (question.options.length - 1)) ? "disabled" : "") + ">&#9660;</button>";
					optionhtml += "<button onclick='var options = teststate.questions[" + h + "].parts[" + i + "].options; var swapvar = options[" + j + "]; options[" + j + "] = options[" + (j - 1) + "]; options[" + (j - 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((j === 0) ? "disabled" : "") + ">&#9650;</button> ";
					optionhtml += "<button onclick='addsubjectNode(\"ms\");'>Add Subject/Nodes</button>";
					optionhtml += "<button onclick='teststate.questions[" + h + "].parts[" + i + "].options.splice(" + j + ",1); render(istaking, true); pushstate();'>x</button>";
					optionhtml += "<br>";

					var nodes = (option.node || "").split(/[\s,]+/).concat((option.antinode || "").split(/[\s,]+/)).filter(function (id) { return /^([A-Z]+-)?[0-9]+$/i.test(id); });
					var obj = tnodesobj[label][option.valid ? "targets" : "distractors"];
					nodes.forEach(function (id) {
						obj[id] = true;
						if (option.valid && !targets[id])
							autotargets[id] = true;
					});

					return optionhtml;
				}).join('');
				html += "<div style='margin: 1em;'><button onclick='teststate.questions[" + h + "].parts[" + i + "].options.push({text:\"\",node:\"\",antinode:\"\",note:\"\",valid:false}); render(istaking, true); pushstate();'>add option</button> <button onclick='document.getElementById(\"formulaeditordiv\").style.display = \"\";'>formula editor</button></div>";
			}
			else if (question.type === 'cr') {
				html += "<input onblur='pushstate();' type='text'size='30' placeholder='question' value='" + emptyIfUndefined(question.text).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].text = this.value; showjson();'> ";
				html += "<input onblur='pushstate();' type='text'size='8' placeholder='label' value='" + emptyIfUndefined(question.label).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].label = this.value; showjson();'> ";
				html += "<input onblur='pushstate();' type='text'size='4' placeholder='dok' value='" + emptyIfUndefined(question.dok).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].dok = this.value; showjson();'> ";
				html += "<input onblur='pushstate();' type='text' placeholder='note' value='" + emptyIfUndefined(question.note).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].note = this.value; showjson();'> "
				if (questionset.parts.length > 1) {
					html += "<button onclick='htmledit(teststate.questions[" + h + "].parts[" + i + "], \"text\");'>&#9997;</button> ";
					html += "<button onclick='var parts = teststate.questions[" + h + "].parts; var swapvar = parts[" + i + "]; parts[" + i + "] = parts[" + (i + 1) + "]; parts[" + (i + 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((i === (questionset.parts.length - 1)) ? "disabled" : "") + ">&#9660;</button>";
					html += "<button onclick='var parts = teststate.questions[" + h + "].parts; var swapvar = parts[" + i + "]; parts[" + i + "] = parts[" + (i - 1) + "]; parts[" + (i - 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((i === 0) ? "disabled" : "") + ">&#9650;</button> ";
					html += "<button onclick='teststate.questions[" + h + "].parts.splice(" + i + ", 1); render(istaking, true); pushstate();'>x</button>";
					html += "</div>";
				}
				else {
					html += "<button onclick='htmledit(teststate.questions[" + h + "].parts[" + i + "], \"text\");'>&#9997;</button> ";
					html += "<button onclick='var questions = teststate.questions; var swapvar = questions[" + h + "]; questions[" + h + "] = questions[" + (h + 1) + "]; questions[" + (h + 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((h === (teststate.questions.length - 1)) ? "disabled" : "") + ">&#9660;</button>";
					html += "<button onclick='var questions = teststate.questions; var swapvar = questions[" + h + "]; questions[" + h + "] = questions[" + (h - 1) + "]; questions[" + (h - 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((h === 0) ? "disabled" : "") + ">&#9650;</button> ";
					html += "<button onclick='teststate.questions.splice(" + h + ",1); render(istaking, true); pushstate();'>x</button>";
					html += "</div>";
				}
				html += "<div style='margin: 1em;'>";
				html += question.options.map(function (option, j) {
					var optionhtml = "&nbsp;&nbsp;<b>&#8226;</b> ";
					var checkedstring = option.valid ? "checked" : "";
					optionhtml += "<input type='checkbox' " + checkedstring + " onclick='var question = teststate.questions[" + h + "].parts[" + i + "]; var option = question.options[" + j + "]; option.valid = this.checked; showjson(); pushstate();'> ";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "0" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onblur='pushstate();' type='text' size='10' placeholder='answer' value='" + emptyIfUndefined(option.text).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].text = this.value; showjson();'> ";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "1" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onblur='pushstate();' type='text' size='15' placeholder='regex (optional)' value='" + emptyIfUndefined(option.regex).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].regex = this.value; showjson();'> ";
					optionhtml += "<select class='optionsubject'>"+$('#subject').html()+"</select>";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "2" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onchange='validateTestNodes(this,this.value,function(rslt){if(rslt){teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].node = rslt;showjson();}else{teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].node=null;showjson();}pushstate();})' type='text' size='7' placeholder='nodes' value='" + emptyIfUndefined(option.node).replace(/'/g, "&#x27;") + "'> ";
					optionhtml += "<select class='optionsubject'>"+$('#subject').html()+"</select>";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "3" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onchange='validateTestNodes(this,this.value,function(rslt){if(rslt){teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].antinode = rslt;showjson();}else{teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].antinode=null;showjson();}pushstate();})' type='text' size='7' placeholder='anti-nodes' value='" + emptyIfUndefined(option.antinode).replace(/'/g, "&#x27;") + "'> ";
					optionhtml += "<input id='" + (h + "_" + i + "_" + j + "_" + "4" + "_" + question.options.length) + "' onkeypress='return checkenter(event, this);' onblur='pushstate();' type='text' placeholder='note' value='" + emptyIfUndefined(option.note).replace(/'/g, "&#x27;") + "' oninput='teststate.questions[" + h + "].parts[" + i + "].options[" + j + "].note = this.value; showjson();'> ";
					optionhtml += "<button onclick='htmledit(teststate.questions[" + h + "].parts[" + i + "].options[" + j + "], \"text\");'>&#9997;</button> ";
					optionhtml += "<button onclick='var options = teststate.questions[" + h + "].parts[" + i + "].options; var swapvar = options[" + j + "]; options[" + j + "] = options[" + (j + 1) + "]; options[" + (j + 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((j === (question.options.length - 1)) ? "disabled" : "") + ">&#9660;</button>";
					optionhtml += "<button onclick='var options = teststate.questions[" + h + "].parts[" + i + "].options; var swapvar = options[" + j + "]; options[" + j + "] = options[" + (j - 1) + "]; options[" + (j - 1) + "] = swapvar; render(istaking, true); pushstate();' " + ((j === 0) ? "disabled" : "") + ">&#9650;</button> ";
					optionhtml += "<button onclick='addsubjectNode(\"cr\");'>Add Subject/Nodes</button>";
					optionhtml += "<button onclick='teststate.questions[" + h + "].parts[" + i + "].options.splice(" + j + ",1); render(istaking, true); pushstate();'>x</button>";
					optionhtml += "<br>";

					var nodes = (option.node || "").split(/[\s,]+/).concat((option.antinode || "").split(/[\s,]+/)).filter(function (id) { return /^([A-Z]+-)?[0-9]+$/i.test(id); });
					var obj = tnodesobj[label][option.valid ? "targets" : "distractors"];
					nodes.forEach(function (id) {
						obj[id] = true;
						if (option.valid && !targets[id])
							autotargets[id] = true;
					});

					return optionhtml;
				}).join('');
				html += "<div style='margin: 1em;'><button onclick='teststate.questions[" + h + "].parts[" + i + "].options.push({text:\"\",regex:\"\",node:\"\",antinode:\"\",note:\"\",valid:false}); render(istaking, true); pushstate();'>add option</button> <button onclick='document.getElementById(\"formulaeditordiv\").style.display = \"\";'>formula editor</button></div>";
			}
			if (questionset.parts.length > 1)
				html += "</div>";
		});
		html += "<div style='margin:1em;'>";
		html += "<button onclick='addmc(" + h + ");'>add multiple choice part</button> ";
		html += "<button onclick='addms(" + h + ");'>add multiple select part</button> ";
		html += "<button onclick='addcr(" + h + ");'>add constructed response part</button>";
		html += "</div>";
		if (questionset.parts.length > 1)
			html += "</div>";
		html += "</div><br><hr style='margin:1em;'><br>";
		return html;
	};

	var htmltest = function (questionset, h) {
		var html = "<div style='margin: 1em;'><b style='margin-right:0.25em;vertical-align:top;'>" + (h + 1) + ".</b> ";
		if (questionset.parts.length > 1)
			html += "<div style='display:inline-block;width:calc(100% - 5em);'>" + ((questionset.text === "") ? "" : "<br><br>" + questionset.text + "</div>");
		questionset.parts.forEach(function (question, i) {
			if (questionset.parts.length > 1)
				html += "<div>";
			if (question.type === 'mc') {
				html += "<div style='display:inline-block;width:calc(100% - 5em);'>" + question.text + "</div><br>";
				html += "<div style='margin: 1em;'>";
				html += question.options.map(function (option, j) {
					var optionhtml = "&nbsp;&nbsp;&nbsp;";
					optionhtml += "<br><label><input type='radio' name='radio" + h.toString() + i.toString() + "'> ";
					optionhtml += "<div style='display:inline-block;width:calc(100% - 5em);vertical-align:middle;'>" + option.text.replace(/<DISABLED\/?(p|h[1-6]|div|pre|blockquote)(>| [^>]*>)/ig, " ").replace(/<br>/ig, " ") + "</div></label><br>";
					return optionhtml;
				}).join('');
				html += "</div>";
			}
			else if (question.type === 'ms') {
				html += "<div style='display:inline-block;width:calc(100% - 5em);'>" + question.text + "</div><br>";
				html += "<div style='margin: 1em;'>";
				html += question.options.map(function (option, j) {
					var optionhtml = "&nbsp;&nbsp;&nbsp;";
					optionhtml += "<br><label><input type='checkbox'> ";
					optionhtml += "<div style='display:inline-block;width:calc(100% - 5em);vertical-align:middle;'>" + option.text.replace(/<DISABLED\/?(p|h[1-6]|div|pre|blockquote)(>| [^>]*>)/ig, " ").replace(/<br>/ig, " ") + "</div></label><br>";
					return optionhtml;
				}).join('');
				html += "</div>";
			}
			else if (question.type === 'cr') {
				html += "<div style='display:inline-block;width:calc(100% - 5em);'>" + question.text + "</div><br>";
				html += "<div style='margin: 1em;'>";
				html += "<input type='text' value='' placeholder='answer'>";
				html += " " + (question.label || "");
				html += "</div>";
			}
			if (questionset.parts.length > 1)
				html += "</div>";
		});
		if (questionset.parts.length > 1)
			html += "</div>"
		html += "</div><br><hr>"
		return html;
	};

	var fullhtml = taketest ? ("<h2>" + (teststate.studenttitle || teststate.title) + "</h2><br><hr>") : "";
	if (teststate.passage)
		fullhtml += taketest ? ("<br><br><div style='margin-left:1em;'>" + teststate.passage + "</div><br><br><hr>") : "";
	fullhtml += teststate.questions.map(taketest ? htmltest : htmledit).join("");
	var testform = document.getElementById("testform");
	testform.innerHTML = fullhtml;
	document.getElementById("title").value = teststate.title;
	document.getElementById("studenttitle").value = teststate.studenttitle || "";
	document.getElementById("passage").value = teststate.passage || "";
	document.getElementById("companionid").value = teststate.companionid || "";
	document.getElementById("thistestid").innerHTML = teststate.ACTIVE_TEST_ID || "Save the test to generate its ID.";
	document.getElementById("testversion").value = teststate.testversion || "";
	document.getElementById("repnodes").value = teststate.targetnodes || "";
	var sub = document.getElementById("subject");
	sub.value = teststate.subject || "";
	var pre = document.getElementById("prefix");
	pre.value = teststate.prefix || "";
	var pub = document.getElementById("ispublic");
	pub.checked = teststate.ispublic || false;
	document.getElementById("standards").value = teststate.standards || "";
	document.getElementById("mapviews").value = teststate.mapviews || "";

	if (istaking) {
		document.getElementById("testtitleform").style.display = "none";
		document.getElementById("testpassageform").style.display = "none";
		document.getElementById("jsondiv").style.display = "none";
		document.getElementById("editbuttons").style.display = "none";
		document.getElementById("previewtestbutton").style.display = "none";
		document.getElementById("edittestbutton").style.display = "";
		document.getElementById("undobutton1").style.display = "none";
		document.getElementById("undobutton2").style.display = "none";
		document.getElementById("redobutton1").style.display = "none";
		document.getElementById("redobutton2").style.display = "none";
		document.getElementById("uploadtestbutton").style.display = "none";
		document.getElementById("cleartestbutton").style.display = "none";
		document.getElementById("fileuploadbutton").style.display = "none";
	}
	else {
		document.getElementById("testtitleform").style.display = "";
		document.getElementById("testpassageform").style.display = "";
		document.getElementById("jsondiv").style.display = "";
		document.getElementById("previewtestbutton").style.display = "";
		document.getElementById("edittestbutton").style.display = "none";
		document.getElementById("editbuttons").style.display = "";
		document.getElementById("undobutton1").style.display = "";
		document.getElementById("undobutton2").style.display = "";
		document.getElementById("redobutton1").style.display = "";
		document.getElementById("redobutton2").style.display = "";
		document.getElementById("uploadtestbutton").style.display = "";
		document.getElementById("cleartestbutton").style.display = "";
		document.getElementById("fileuploadbutton").style.display = "";
	}

	if (istaking)
		MathJax.Hub.Typeset(testform);

	if (updatejson !== false)
		showjson();
}

function addsubjectNode(questionType){
	if(questionType == 'mc'){
		console.log("type is: "+questionType);

	}else if(questionType == 'ms'){
		console.log("type is: "+questionType);
	}else{
		console.log("type is: "+questionType);
	}
}

function pushstate(causedbyredo) {
	var newstate = JSON.stringify(teststate);
	if (undostack.length > 0 && newstate === undostack[undostack.length - 1])
		return 0;

	var undostacklimit = 32 * 1024 * 1024 - newstate.length; // store up to 64 mb of UTF-16 strings (1 char = 2 bytes)
	while (undostacksize > undostacklimit && undostack.length)
		undostacksize -= undostack.shift().length;
	undostacksize += newstate.length;
	undostack.push(newstate);

	document.getElementById("previewtestbutton").disabled = false;
	document.getElementById("undobutton1").disabled = false;
	document.getElementById("undobutton2").disabled = false;
	if (!causedbyredo) {
		redostack = [];
		redostacksize = 0;
	}
	document.getElementById("redobutton1").disabled = (redostack.length === 0);
	document.getElementById("redobutton2").disabled = (redostack.length === 0);

	localStorage.setItem("testbuilderdata", newstate);
}

function popstate() {
	var oldrowel = document.getElementById("row" + teststate.hash);
	if (oldrowel)
		oldrowel.style.backgroundColor = "";

	var undonestate = undostack.pop();

	var redostacklimit = 32 * 1024 * 1024 - undonestate.length; // store up to 64 mb of UTF-16 strings (1 char = 2 bytes)
	while (redostacksize > redostacklimit && redostack.length)
		redostacksize -= redostack.shift().length;
	redostacksize += undonestate.length;
	redostack.push(undonestate);

	undostacksize -= undonestate.length; // flush current state
	var newstate = undostack[undostack.length - 1];
	teststate = safeJSONparse(newstate);
	render(istaking, true);
	document.getElementById("previewtestbutton").disabled = (undostack.length === 1);
	document.getElementById("undobutton1").disabled = (undostack.length === 1);
	document.getElementById("undobutton2").disabled = (undostack.length === 1);
	document.getElementById("redobutton1").disabled = false;
	document.getElementById("redobutton2").disabled = false;

	var rowel = document.getElementById("row" + teststate.hash);
	if (rowel)
		rowel.style.backgroundColor = "#83FFF3";

	localStorage.setItem("testbuilderdata", newstate);
}

function redo() {
	var oldrowel = document.getElementById("row" + teststate.hash);
	if (oldrowel)
		oldrowel.style.backgroundColor = "";

	var lastundone = redostack.pop();
	redostacksize -= lastundone.length; // flush current state
	teststate = safeJSONparse(lastundone);
	render(istaking, true);
	pushstate(true);
	var rowel = document.getElementById("row" + teststate.hash);
	if (rowel)
		rowel.style.backgroundColor = "#83FFF3";
}

var lasttinymceobject, lasttinymcefield;
function htmledit(object, field) {
	document.getElementById("tinymceta").value = object[field] || "";
	document.getElementById("htmleditordiv").style.display = "";
	lasttinymceobject = object;
	lasttinymcefield = field;

	if (typeof tinyMCE !== "undefined") {
		if (tinyMCE.activeEditor != null) {
			tinyMCE.activeEditor.setContent(object[field] || "");
			return 0;
		}
	}

	var scripttag = document.createElement("script");
	scripttag.setAttribute("src", "/assets/js/external/tinymce/tinymce.min.js");
	document.body.appendChild(scripttag);
	var tinyinterval = setInterval(function () {
		var iframeel = document.getElementById("tinymceta_ifr");
		if (iframeel) {
			iframeel.style.height = "100%";
			clearInterval(tinyinterval);
		}
		else if (typeof tinyMCE !== "undefined" && tinyMCE.init) {
			tinyMCE.init({
				selector: '#tinymceta',
				branding: false,
				plugins: [
					'advlist autolink lists link image charmap print preview hr anchor pagebreak',
					'searchreplace wordcount visualblocks visualchars code fullscreen',
					'insertdatetime media nonbreaking save table contextmenu directionality',
					'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
				],
				toolbar1: 'undo redo | insert | styleselect | fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify',
				toolbar2: 'bullist numlist outdent indent | print preview media link image | forecolor backcolor emoticons | codesample',
				fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
				// init_instance_callback: function () {
				// 	window.setTimeout(function () {
				// 		$("#tinymcediv").show();
				// 	}, 5000);
				// }
			});
		}
	}, 100);
}

function mathjaxconfig() {
	MathJax.Hub.Config({
		skipStartupTypeset: true,
		messageStyle: 'none'
	});
	MathJax.Hub.Configured();
}

var mjpreviewtimer;
function mathjaxpreview(inputel) {
	clearTimeout(mjpreviewtimer);

	if (/`|<br>`/i.test(inputel.value))
		inputel.value = inputel.value.replace(/`/g, "").replace(/<br>/gi, "\n").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

	mjpreviewtimer = setTimeout(function () {
		var string = ("`" + inputel.value.replace(/^(\n\r?)+/, "").replace(/(\n\r?)+$/, "").split(/\n\r?/).join("`<br>`") + "`").replace(/``/g, "");
		var previewel = document.getElementById("mathjaxpreviewdiv");
		var stringel = document.getElementById("input_MathJax");
		previewel.innerHTML = string;
		stringel.innerHTML = string.replace(/<br>/g, "NEWLINE____").replace(/</g, "&amp;lt;").replace(/>/g, "&amp;gt;").replace(/NEWLINE____/g, "&lt;br&gt;");
		MathJax.Hub.Typeset(previewel);
	}, 500);
}

function displaytest(url) {
	document.getElementById("puttesthere").innerHTML = "<iframe id='tesetresultsiframe' src='" + url + "' width='100%' height='100%' frameborder='0'></iframe>";
	document.getElementById("testviewer").style.display = "";
}

function pushtomoderncopy() {
	if (!confirm("Are you sure?"))
		return false;

	fetchurl("pushtomoderncopy.sh", alert);
}

function convertlabel(index) {
	var letterize = function (int) {
		if (typeof int === "string")
			int = parseInt(int);
		return String.fromCharCode(65 + int);
	};
	return (1 + parseInt(index.split("_")[0])) + (index.split("_").length === 1 ? "" : letterize(index.split("_")[1]).toLowerCase())
}

(function () {
	if (top.location.href !== location.href)
		document.getElementById("newtablink").style.display = "";
})();

/* New Functions */

function deleteTest(testId) {
	testModel.deleteTest(testId, function (json) {
		alert("Test Deleted");
		teststate = JSON.parse(blankstate);
		render(istaking, true);
		pushstate();
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
		alert("Test Deletion Failed:" + exe);
	});
}

function deleteFile(filename) {
	if (confirm('Are you sure?')) {
		testModel.deleteFile(filename, function (json) {
			if (json) {
				testModel.getAllUploadedFiles(function (json) {
					$('#FileUploadDiv').empty();
					//document.getElementById("fileuploaddiv").style.display="";
					$('#FileUploadDiv').append(can.view('/assets/views/fileUploads.ejs', {
						uploadedFiles: json
					}));
				});
				alert("File deleted successfully");
			}
			else
				alert("File deletion failed");
		}, function (rslt, exe) {
			alert("File Deletion Failed:" + exe);
		});
	}
}

function loadTest(ID, rowID) {
	var oldrowel = document.getElementById(highlightedID);
	if (oldrowel)
		oldrowel.style.backgroundColor = "";

	var rowel = document.getElementById(rowID);
	highlightedID = rowID;
	if (rowel)
		rowel.style.backgroundColor = "#83FFF3";

	testModel.getTestData(ID, function (json) {
		teststate = json;
		render(istaking, true);
		pushstate();
	});
	$('#repnodes').css("display","block");
	$('#addtoreportnodelist').css("display","block");
	$('#addsubjectnode').css("display","none");
	$('#deletesubjectnode').css("display","none");
	var subjects=$('#reportingnodes').children();
	for(var i=1;i<subjects.length;i++){
		$(subjects[i]).remove();
	}
	
}
function emptyIfUndefined(data) {
	if (data == undefined || data == null)
		return "";
	else
		return data;
}
function getPrefixFromSubject(subject) {
	 switch (subject.toLowerCase()) {
		case 'science':
			return 'SCI';
		case 'math':
			return 'M';
		case 'ela':
			return 'ELA';
		case 'figure sense':
		     return 'F';
		default:
			return '';
	} 
}

function copyData(id) {
	try {
		var copyText = document.getElementById("input_" + id);
		copyText.select();
		document.execCommand("Copy");

		var tooltip = document.getElementById("toolTip_" + id);
		tooltip.innerHTML = "Copied";
	} catch (e) {
		console.log(e);
	}
}

function updateToolTip(id) {
	try {
		var tooltip = document.getElementById("toolTip_" + id);
		tooltip.innerHTML = "Click to Copy";
	}
	catch (e) {
		console.log(e);
	}
}

function validateTestNodes(el, value, callback) {
	if (value && value != "") {
		var subSelected = $(el).parent().find('.reportnodesubject').children('option:selected').text();
		var subPrefix = getPrefixFromSubject(subSelected);
		var subjectVal = $(el).val();
		if (!subjectVal && (subjectVal == "" || subjectVal == null)) { //If Subject is not selected
			//alert("Please select Subject before entering Nodes.");
			currentFocusElement = $(document.activeElement);
			if ($('#errorPopUp').length < 1) {
				$('body').append(can.view('/assets/views/errormessage.ejs', { err: "Please select Subject before entering Nodes.", red: true }));
			}
			uiCommon.showAlertBox('errorPopUp');
			$(el).val('');
			callback(null);
		} else {
			var nodes = value;
			if (nodes) {
				nodes = nodes.split(',');
				var idArray = nodes;
				idArray = idArray.map(id => subPrefix + "-"+ id.trim());
				nodes = nodes.map(x => x.trim());
				if (typeof hub !== 'undefined') {
					var foundNodes = [];
					var notFoundNodes = [];
					nodes.forEach(node => {
						var hubNode = hub.get("node").findWhere({ textid: node }, hub); //application.site.searchNode(node);
						if (hubNode !== undefined) {
							foundNodes.push(node + ":" + hub.stripHtml(hubNode.get("title")));
						} else {
							notFoundNodes.push(node);
						}
					});

					if (notFoundNodes.length > 0) {
						currentFocusElement = $(document.activeElement);
						if ($('#errorPopUp').length < 1) {
							var rsltString = "Nodes not found: " + notFoundNodes.toString() + ". Check nodes again.";
							$('body').append(can.view('/assets/views/errormessage.ejs', { err: rsltString, red: true }));
						}
						uiCommon.showAlertBox('errorPopUp');
						$(el).val('');
						callback(null);
					} else {
						currentFocusElement = $(document.activeElement);
						if ($('#errorPopUp').length < 1) {
							$('body').append(can.view('/assets/views/errormessage.ejs', { err: foundNodes.join('\n') }));
						}
						uiCommon.showAlertBox('errorPopUp');
						callback(value);
					}
				} else {
					testModel.validateNodes(idArray, subPrefix, function (result) {
						var rsltString = "";
						if (idArray.length == result.length) {//If Enetered Nodes not Found
							result.forEach(node => {
								rsltString += node.TEXTID + ": " + node.TITLE + "\n";
							});
							rsltString = rsltString.replace(/&#\d+;/g, asciiCodeToChar);
							currentFocusElement = $(document.activeElement);
							if ($('#errorPopUp').length < 1) {
								$('body').append(can.view('/assets/views/errormessage.ejs', { err: rsltString }));
							}
							uiCommon.showAlertBox('errorPopUp');
							// if (confirm("Proceed with these Nodes? \n" + rsltString)) {
							callback(value);
							// } else {
							// 	$(el).val('');
							//callback(null);
							// }
						} else {
							var notFoundNodes = [];
							idArray.forEach(id => {//Show Not found Nodes
								var found = false;
								result.forEach(resultNode => {
									if (resultNode.TEXTID.split('-')[1] == id || resultNode.TEXTID.split('&#45;')[1] == id) {
										found = true;
									}
								});
								if (!found)
									notFoundNodes.push(id);
							});
							if (notFoundNodes.length > 0) {
								currentFocusElement = $(document.activeElement);
								if ($('#errorPopUp').length < 1) {
									rsltString = "Nodes not found: " + notFoundNodes.toString() + ". Check nodes again.";
									$('body').append(can.view('/assets/views/errormessage.ejs', { err: rsltString, red: true }));
								}
								uiCommon.showAlertBox('errorPopUp');
								$(el).val('');
								// if (confirm("Nodes not found: " + notFoundNodes.toString() + ". Do you still want to proceed?")) {
								callback(null);
								// } else {
								// 	$(el).val('');
								//callback(null);
								// }
							}
						}
					});
				}
			} else {
				callback(null);
				//alert("Enter Nodes");
			}
		}

	}
	// Added this else for the case where users remove the value from a node and need the change saved.
	//The if checks for only some value (if available) and povides callbacks based on conditions.
	//this block handles the values changed to null or empty and helps persist them.
	else{		
		callback(null);
	}
}

//Converts &#32; or &#45; or similar ascii chars to String.formCharCode(32) or 45 resp.
function asciiCodeToChar(match, offset, actualString) {
	var asciicode = actualString.substring(offset+2, offset+match.length-1);
	var converted = String.fromCharCode(asciicode);
	return converted;
}

function validateStandards(standards) {
	if (typeof hub !== 'undefined') {//Validate if hub exists
		if (standards && standards != "") {
			var standardArr = standards.split(" ");
			var set = true;
			var results = [];
			var notFound = [];
			standardArr.forEach(standard => {
				//var result = (standard%2)==0 ? standard : undefined;  DEV Testing
				var result = hub.get("standard").find(function (d) { return hub.wrap(d).textID() === standard.trim(); });
				if (result == undefined) {
					notFound.push(standard);
				} else {
					results.push(result);
				}
			});
			if (notFound.length > 0) {
				if (confirm("Standards '" + notFound.join() + "' not found. Do you want to proceed?")) {
					teststate.standards = standards;
					showjson();
					pushstate();
					return;
				} else {
					teststate.standards = '';
					pushstate();
					$("#standards").val('');
					return;
				}
			} else {
				teststate.standards = standards;
				showjson();
				pushstate();
				return;
			}
		}
	}
}