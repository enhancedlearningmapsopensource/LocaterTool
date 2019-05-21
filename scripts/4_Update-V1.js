var mysql = require('mysql');
var dbconfig = require('/var/www/elm/appconfig/database');
try {
    var connection = mysql.createConnection(dbconfig.connection);

    connection.query('USE ' + dbconfig.database + ';');

    //connection.query('ALTER TABLE ' + dbconfig.database + '.' + dbconfig.test_table + ' ADD FOREIGN KEY fk_companion_id (`COMPANION_ID`) REFERENCES ELM_TESTS(ACTIVE_TEST_ID)');
    connection.query('\
    CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.user_string_table + '` ( \
     `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT,\
     `USER_ID` INT UNSIGNED NOT NULL,\
     `STRING_VAL` MEDIUMTEXT DEFAULT NULL, \
     `HINT` TEXT DEFAULT NULL,\
     PRIMARY KEY (`ID`), \
     FOREIGN KEY fk_user_id_id_user_str (`USER_ID`) REFERENCES ELM_USER(USERID), \
     UNIQUE INDEX `unique_user_id_user_str` (`USER_ID`) \
     )ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;');
   // connection.query('SET GLOBAL group_concat_max_len =1000000;');
    connection.end();
    console.log('Success: tables updated!');
} catch (e) {
    console.log("Exception in update-v1: ", e);
}