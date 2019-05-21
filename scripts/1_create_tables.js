var mysql = require('mysql');
var dbconfig = require('/var/www/elm/appconfig/database');

var connection = mysql.createConnection(dbconfig.connection);
//connection.query('CREATE DATABASE ' + dbconfig.database);

connection.query('USE ' + dbconfig.database + ';');
connection.query('DROP TABLE IF EXISTS ' + dbconfig.database + '.' + dbconfig.rosters_table + ';');
connection.query('\
 CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.rosters_table + '` ( \
    `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `USER_ID` INT UNSIGNED NOT NULL, \
    `ROSTER_NAME` VARCHAR(20) NOT NULL, \
    `CREATED_USER` INT UNSIGNED NOT NULL,\
    `MODIFIED_USER` INT UNSIGNED NOT NULL,\
    `CREATED_DATE` DATETIME DEFAULT CURRENT_TIMESTAMP,\
    `LAST_MODIFIED` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
    `ACTIVEFLAG` bit(1) NOT NULL DEFAULT b\'1\',\
    FOREIGN KEY fk_created_user_id (`CREATED_USER`) REFERENCES ELM_USER(USERID), \
    FOREIGN KEY fk_modified_user_id (`MODIFIED_USER`) REFERENCES ELM_USER(USERID), \
    PRIMARY KEY (`ID`), \
    FOREIGN KEY fk_user_id_roster (`USER_ID`) REFERENCES ELM_USER(USERID) \
)ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;');

//connection.query('CREATE TRIGGER trigger_rosters_SetCreatedAt BEFORE INSERT ON ' + dbconfig.database + '.' + dbconfig.rosters_table + ' FOR EACH ROW SET NEW.created_date = UTC_TIMESTAMP();');

connection.query('DROP TABLE IF EXISTS ' + dbconfig.database + '.' + dbconfig.students_table + ';');
connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.students_table + '` ( \
    `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `USERNAME` VARCHAR(20) NOT NULL, \
        PRIMARY KEY (`ID`), \
    UNIQUE INDEX `username_UNIQUE` (`USERNAME` ASC) \
)ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;');

connection.query('DROP TABLE IF EXISTS ' + dbconfig.database + '.' + dbconfig.roster_student_table + ';');
connection.query('\
 CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.roster_student_table + '` ( \
    `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `STUDENT_ID` INT UNSIGNED NOT NULL, \
    `ROSTER_ID` INT UNSIGNED NOT NULL, \
    `CREATED_USER` INT UNSIGNED NOT NULL,\
    `MODIFIED_USER` INT UNSIGNED NOT NULL,\
    `CREATED_DATE` DATETIME DEFAULT CURRENT_TIMESTAMP,\
    `LAST_MODIFIED` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
    `ACTIVEFLAG` bit(1) NOT NULL DEFAULT b\'1\',\
    FOREIGN KEY fk_created_user_id_ros_stud (`CREATED_USER`) REFERENCES ELM_USER(USERID), \
    FOREIGN KEY fk_mod_user_id_ros_stud (`MODIFIED_USER`) REFERENCES ELM_USER(USERID), \
        PRIMARY KEY (`ID`), \
        FOREIGN KEY fk_stud_id_id_ros_stud (`STUDENT_ID`) REFERENCES ELM_STUDENTS(ID), \
        FOREIGN KEY fk_roster_id_id_ros_stud (`ROSTER_ID`) REFERENCES ELM_ROSTERS(ID), \
    UNIQUE INDEX `unique_roster_student` (`ROSTER_ID`, `STUDENT_ID`) \
)ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;');

//connection.query('CREATE TRIGGER trigger_rosterstudent_SetCreatedAt BEFORE INSERT ON ' + dbconfig.database + '.' + dbconfig.roster_student_table + ' FOR EACH ROW SET NEW.created_date = UTC_TIMESTAMP();');

// connection.query('\
// CREATE TABLE `ELM_PASSWORD` (\
//   `USERID` int(6) NOT NULL DEFAULT \'0\',\
//   `SALT` text,\
//   `ITERATIONS` int(9) DEFAULT NULL,\
//   PRIMARY KEY (`USERID`)\
// )');


console.log('Success: tables Created!')

connection.end();
