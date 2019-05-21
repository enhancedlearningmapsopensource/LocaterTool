var mysql = require('mysql');
var dbconfig = require('/var/www/elm/appconfig/database');
try {
    var connection = mysql.createConnection(dbconfig.connection);

    connection.query('USE ' + dbconfig.database + ';');

    connection.query('ALTER TABLE ' + dbconfig.database + '.' + dbconfig.user_string_table + ' ADD DOWNLOAD_TIME TIMESTAMP NULL DEFAULT NULL;');

    connection.end();
    console.log('Success: Update run!');
} catch (e) {
    console.log("Exception in update-v3: ", e);
}