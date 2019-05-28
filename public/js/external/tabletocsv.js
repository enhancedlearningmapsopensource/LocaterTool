// Basic Grammar for HTML tables (Just to be thourough)
// _start -> <table>_top
// _top -> _top_top
// _top -> <thead>_rows
// _top -> <tbody>_rows
// _top -> <tfoot>_rows
// _top -> _rows
// _rows -> _rows_rows
// _rows -> <td>_cells
// _cells -> _cells_cells
// _cells -> <td>_content

/**
 * @typedef {Object} CellDef
 * @property {string} cell - the contents of the table cell
 * @property {number} span - the number of columns spanned by the cell
 */

/**
 * Select all dom elements with the given selector within the given element
 * and return them in a general javascript array object.
 *
 * @param {DOM} el - the element 
 * @param {string} selector - the selector used to choose child DOM objects
 * @return {DOM[]}
 */
function selAll(el, selector) {
    var els = el.querySelectorAll(selector);
    var items = [];
    els.forEach(function (d) {
        items.push(d);
    });
    return items;
}

/**
 * Convert top layer objects to an object for parsing.
 * @param {DOM} el - the containing element (table)
 * @return {CellDef[][]} - the cell definitions of the row
 */
function topStruct(el) {
    return selAll(el, 'tr').map(function (d) {
        var row = rowStruct(d);
        if (row === null) {
            throw Error();
        }
        return row;
    });
}

/**
 * Convert row layer objects to a set of object for parsing.
 * @param {DOM} row - the containing element (tr)
 * @return {CellDef[]} - the cell definitions of the row
 */
function rowStruct(row) {
    return selAll(row, 'td,th').map(function (d) {
        return {cell: d.textContent.replace(/<br>/g, "\n"), span: d.colSpan};
    });
}

/**
 * Converts a DOM table to an object. The table is determined by the given selector.
 * @param {string} selector - the selector for the table.
 * @return - the object definition for the table
 */
function tableStruct(selector) {
    var table = document.querySelector(selector);

    var topSelector = 'tbody,thead,tfoot'.split(",").map(function (d) {
        return selector + ' > ' + d;
    }).join(",");

    var items = selAll(table, topSelector).map(function (d) {
        var topLayer = topStruct(d);
        if (topLayer === null) {
            throw Error();
        }
        return topLayer;
    })


    items = items.concat(selAll(document, selector + ' > tr').map(function (d) {
        var row = rowStruct(d);
        if (row === null) {
            throw Error();
        }
        return row;
    }));

    return items;
}

/**
 * Export the given structure to a csv with the given name
 * 
 * @param {string} filename - the name of the file.
 * @param {Object} rows - the structure to convert to CSV
 *
 * @author Xavier John 
 * @source https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
 */
function exportCSVFile(filename, rows) {
    filename = filename + ".csv";
    var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = (row[j] === null) ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            }
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0) {
                result = '"' + result + '"';
            }
            if (j > 0) {
                finalVal += ',';
            }
            finalVal += result;
        }
        return finalVal + '\n';
    };


    var csvFile = "\uFEFF"; // UTF-8 BOM (byte order mark)
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }
    //logMsg(csvFile);

    var blob = new Blob([csvFile], {type: 'data:text/csv;charset=utf-8;'});
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

/**
 * Flatten out the given two dimensional CellDef structure into something 
 * useable by the export function.
 * @param {CellDef[][]|CellDef[][][]} cells - the cell definition structure
 * @return {string[][]}
 */
function flatten(cells) {
    if (cells.length == 1) {
        return flatten(cells[0]);
    }

    var items = [];
    cells.forEach(function (d) {
        if (d.hasOwnProperty("cell")) {
            items.push(d.cell);
            for (var i = 0; i < (d.span - 1); i++) {
                items.push("");
            }
        } else {
            items.push(flatten(d));
        }
    });
    return items;
}

/**
 * Convert the table with the given selector to a csv file and download it.
 * @param {string} tableSelector - the table selector
 * @return {string[][]} - the cells grouped by row
 * 
 * Example:
 * tableToCsv('#tableid');
 */
function tableToCsv(tableSelector, filename){
	
	var array = tableToArray(tableSelector.replace(/^#/, ""));
	arrayToCsv(array, filename);
	return array;
	
// 	var csv = tableStruct(tableSelector);
// 	console.log(csv);
// 	csv = flatten(csv);
// 	console.log(csv);
// 	exportCSVFile(filename, csv);
// 	return csv;
}

function arrayToCsv(array, filename)
{
	var csv =  array.map(function(row) { //For UTF-8 BOM (byte order mark) add this as the first part of the string "\uFEFF" +
		return row.map(function(cell) {
			return '"' + cell.replace(/"/g, '""') + '"';
		}).join(",");
    }).join("\n") + "\n";
    downloadFile(csv,filename+".csv","text/csv;charset=utf-8;");
}

function downloadFile(file,filename,fileType){
    var blob = new Blob([file], {type:fileType});
	if (navigator.msSaveBlob) { // IE 10+
		navigator.msSaveBlob(blob, filename);
	} else {     
		var link = document.createElement("a");
		if (link.download !== undefined) { // feature detection
			// Browsers that support HTML5 download attribute
			var url = URL.createObjectURL(blob);
			link.setAttribute("href", url);
			link.setAttribute("download", filename );
			link.style.visibility = 'hidden';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}  
	}
}

function tableToArray(tableid)
{
	var table = document.getElementById(tableid);
	var trs = selAll(table, "tr");
	var array = trs.map(function(tr) {
		var tds = selAll(tr, "td,th");
		var row = [];
		tds.forEach(function(td) {
			if(td.style.display  === "none")
				return false;
			row.push(td.textContent.replace(/<br>/g, "\n").replace(/\u00a0+/g, " "));
			for(var i=1; i<td.colSpan; i++)
				row.push("");
		});
		return row;
	});
	return array;
}
