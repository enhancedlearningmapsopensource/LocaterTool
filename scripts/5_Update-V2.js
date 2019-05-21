var mysql = require('mysql');
var dbconfig = require('/var/www/elm/appconfig/database');
try {
    var connection = mysql.createConnection(dbconfig.connection);

    connection.query('USE ' + dbconfig.database + ';');

    connection.query('ALTER TABLE ' + dbconfig.database + '.' + dbconfig.students_table + ' MODIFY username VARCHAR(40);');

    connection.end();
    console.log('Success: Update run!');
} catch (e) {
    console.log("Exception in update-v2: ", e);
}