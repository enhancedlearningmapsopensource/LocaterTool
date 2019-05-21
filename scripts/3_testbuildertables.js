var mysql = require('mysql');
var dbconfig = require('/var/www/elm/appconfig/database');
try {
    var connection = mysql.createConnection(dbconfig.connection);

    connection.query('USE ' + dbconfig.database + ';');

    connection.query('DROP TABLE IF EXISTS ' + dbconfig.database + '.' + dbconfig.test_table + ';');

    connection.query('\
 CREATE TABLE`' + dbconfig.database + '`.`' + dbconfig.test_table + '`( \
        `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
        `TEST_TITLE` VARCHAR(100) NOT NULL, \
        `STUDENT_TITLE` VARCHAR(100) DEFAULT NULL, \
        `TEST_PASSAGE` MEDIUMTEXT DEFAULT NULL, \
        `SUBJECT_ID` VARCHAR(100) DEFAULT NULL, \
        `ISACTIVE` bit(1) NOT NULL DEFAULT b\'1\', \
        `ISPUBLIC` bit(1) NOT NULL DEFAULT b\'0\', \
        `SUBJECT_NODE_PREFIX` VARCHAR(20), \
        `TEST_STANDARDS` VARCHAR(100), \
        `TEST_MAP_VIEWS` VARCHAR(100), \
        `REPORTING_NODES` VARCHAR(100) DEFAULT NULL, \
        `VERSION` VARCHAR(20), \
        `COMPANION_ID` INT UNSIGNED DEFAULT NULL, \
        `ACTIVE_TEST_ID` INT UNSIGNED NOT NULL, \
        `CREATED_USER` INT UNSIGNED NOT NULL, \
        `MODIFIED_USER` INT UNSIGNED NOT NULL, \
        `CREATED_DATE` DATETIME DEFAULT CURRENT_TIMESTAMP, \
        `LAST_MODIFIED` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \
        PRIMARY KEY (`ID`), \
        FOREIGN KEY fk_modified_user_tests (`MODIFIED_USER`) REFERENCES ELM_USER(USERID), \
        FOREIGN KEY fk_created_user_tests (`CREATED_USER`) REFERENCES ELM_USER(USERID) \
    )ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;');

    // connection.query('CREATE TRIGGER trigger_tests_SetCreatedAt BEFORE INSERT ON ' + dbconfig.test_table + ' FOR EACH ROW SET NEW.created_date = UTC_TIMESTAMP();');

    connection.query('DROP TABLE IF EXISTS ' + dbconfig.database + '.' + dbconfig.question_table + ';');

    connection.query('\
  CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.question_table + '` ( \
        `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
        `QUESTION` TEXT DEFAULT NULL, \
        `DOK` VARCHAR(20) DEFAULT NULL, \
        `QUESTION_TYPE` VARCHAR(20) NOT NULL,\
        `NOTE` TEXT DEFAULT NULL, \
        `TEST_ID` INT UNSIGNED,\
        `QUESTION_ORDER` INT UNSIGNED,\
        `PART_ORDER` INT UNSIGNED,\
        `PARENT_QUESTION_ID` INT UNSIGNED,\
        `CREATED_USER` INT UNSIGNED NOT NULL,\
        `MODIFIED_USER` INT UNSIGNED NOT NULL,\
        `CREATED_DATE` DATETIME DEFAULT CURRENT_TIMESTAMP,\
        `LAST_MODIFIED` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
        PRIMARY KEY (`ID`), \
        FOREIGN KEY fk_mod_user_ques (`MODIFIED_USER`) REFERENCES ELM_USER(USERID), \
        FOREIGN KEY fk_created_user_ques_table (`CREATED_USER`) REFERENCES ELM_USER(USERID), \
        FOREIGN KEY fk_parent_ques (`PARENT_QUESTION_ID`) REFERENCES ELM_QUESTIONS(ID), \
        FOREIGN KEY fk_test_id_question (`TEST_ID`) REFERENCES ELM_TESTS(ID) \
    )ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;');

    // connection.query('CREATE TRIGGER trigger_questions_SetCreatedAt BEFORE INSERT ON ' + dbconfig.question_table + ' FOR EACH ROW SET NEW.created_date = UTC_TIMESTAMP();');

    connection.query('DROP TABLE IF EXISTS ' + dbconfig.database + '.' + dbconfig.option_table + ';');

    connection.query('\
  CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.option_table + '` ( \
        `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
        `ANSWER` TEXT DEFAULT NULL, \
        `ISVALID` bit(1) NOT NULL DEFAULT b\'0\',\
        `NOTE` TEXT DEFAULT NULL, \
        `NODES` VARCHAR(100) DEFAULT NULL, \
        `REGEX` TEXT DEFAULT NULL,\
        `ANTI_NODES` VARCHAR(100) DEFAULT NULL, \
        `PERCENTAGE` FLOAT(5,2), \
        `QUESTION_ID` INT UNSIGNED,\
        `OPTION_ORDER` INT UNSIGNED,\
        `CREATED_USER` INT UNSIGNED NOT NULL,\
        `MODIFIED_USER` INT UNSIGNED NOT NULL,\
        `CREATED_DATE` DATETIME DEFAULT CURRENT_TIMESTAMP,\
        `LAST_MODIFIED` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
        PRIMARY KEY (`ID`), \
        FOREIGN KEY fk_ques_id_id_opts (`QUESTION_ID`) REFERENCES ELM_QUESTIONS(ID), \
        FOREIGN KEY fk_modified_user_id_opts (`MODIFIED_USER`) REFERENCES ELM_USER(USERID), \
        FOREIGN KEY fk_created_user_id_opts (`CREATED_USER`) REFERENCES ELM_USER(USERID) \
    )ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;');

    // connection.query('CREATE TRIGGER trigger_options_SetCreatedAt BEFORE INSERT ON ' + dbconfig.option_table + ' FOR EACH ROW SET NEW.created_date = UTC_TIMESTAMP();');

    connection.query('DROP TABLE IF EXISTS ' + dbconfig.database + '.' + dbconfig.student_test_table + ';');

    connection.query('\
  CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.student_test_table + '` ( \
        `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
        `ACTIVE_TEST_ID` INT UNSIGNED NOT NULL, \
        `STUDENT_ID` INT UNSIGNED NOT NULL, \
        `ASSIGNED_TEST_ID` INT UNSIGNED NOT NULL, \
        `TEST_VERSION` VARCHAR(10) NOT NULL, \
        `ISCOMPLETE` bit(1) NOT NULL DEFAULT b\'0\',\
        `ROSTER_ID` INT UNSIGNED NOT NULL, \
        `DUE_DATE` DATETIME DEFAULT NULL, \
        `DUE_TIME` TIME,\
        `LOCATER_PASSWORD_ID` INT UNSIGNED NOT NULL,\
        `NOTE_TO_SELF` TEXT DEFAULT NULL, \
        `NOTE_TO_ELM` TEXT DEFAULT NULL, \
        `DATE_FINISHED` DATETIME DEFAULT NULL,\
        `CREATED_USER` INT UNSIGNED NOT NULL,\
        `MODIFIED_USER` INT UNSIGNED NOT NULL,\
        `CREATED_DATE` DATETIME DEFAULT CURRENT_TIMESTAMP,\
        `LAST_MODIFIED` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
        PRIMARY KEY (`ID`), \
        FOREIGN KEY fk_modified_user_id_stud_tests (`MODIFIED_USER`) REFERENCES ELM_USER(USERID), \
        FOREIGN KEY fk_created_user_id_stud_tests (`CREATED_USER`) REFERENCES ELM_USER(USERID), \
        FOREIGN KEY fk_student_id_id_stud_tests (`STUDENT_ID`) REFERENCES ROSTER_STUDENT(`STUDENT_ID`), \
        FOREIGN KEY fk_roster_id_id_stud_tests (`ROSTER_ID`) REFERENCES ELM_ROSTERS(ID) \
    )ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;');

    //connection.query('CREATE TRIGGER trigger_studenttest_SetCreatedAt BEFORE INSERT ON ' + dbconfig.student_test_table + ' FOR EACH ROW SET NEW.created_date = UTC_TIMESTAMP();');

    connection.query('DROP TABLE IF EXISTS ' + dbconfig.database + '.' + dbconfig.locater_password_table + ';');

    connection.query('\
   CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.locater_password_table + '` ( \
    `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT,\
    `USER_ID` INT UNSIGNED NOT NULL,\
    `PASSWORD` VARCHAR(20) NOT NULL, \
    PRIMARY KEY (`ID`), \
    FOREIGN KEY fk_user_id_id_loc_pwd (`USER_ID`) REFERENCES ELM_USER(USERID), \
    UNIQUE INDEX `unique_roster_student_loc_pwd` (`USER_ID`, `PASSWORD`) \
    )ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;');

    connection.query('DROP TABLE IF EXISTS ' + dbconfig.database + '.' + dbconfig.student_response_table + ';');

    connection.query('\
 CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.student_response_table + '` ( \
        `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
        `TEST_ID` INT UNSIGNED NOT NULL, \
        `STUDENT_ID` INT UNSIGNED NOT NULL, \
        `ROSTER_ID` INT UNSIGNED NOT NULL, \
        `STUDENT_TEST_ID` INT UNSIGNED NOT NULL, \
        `LOCATER_PASSWORD_ID` INT UNSIGNED NOT NULL, \
        `QUESTION_ID` INT UNSIGNED NOT NULL, \
        `OPTION_ID` VARCHAR(40) DEFAULT NULL, \
        `OPTION_ORDER` VARCHAR(40) DEFAULT NULL, \
        `NODES` VARCHAR(40) DEFAULT NULL, \
        `ISVALID` bit(1) NOT NULL DEFAULT b\'0\',\
        `PERCENTAGE` FLOAT(5,2) DEFAULT 0.00, \
        `RESPONSE_VALUE` TEXT DEFAULT NULL,\
        `CREATED_DATE` DATETIME DEFAULT CURRENT_TIMESTAMP,\
        `LAST_MODIFIED` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
        PRIMARY KEY (`ID`), \
        FOREIGN KEY fk_test_id_stud_resp (`TEST_ID`) REFERENCES ELM_TESTS(ID), \
        FOREIGN KEY fk_student_id_stud_resp (`STUDENT_ID`) REFERENCES ROSTER_STUDENT(STUDENT_ID), \
        FOREIGN KEY fk_roster_id_stud_resp (`ROSTER_ID`) REFERENCES ELM_ROSTERS(ID), \
        FOREIGN KEY fk_student_test_id_stud_resp (`STUDENT_TEST_ID`) REFERENCES STUDENT_TESTS(ID), \
        FOREIGN KEY fk_locater_pwd_id_stud_resp (`LOCATER_PASSWORD_ID`) REFERENCES LOCATER_PASSWORD(ID), \
        FOREIGN KEY fk_ques_id_stud_resp (`QUESTION_ID`) REFERENCES ELM_QUESTIONS(ID) \
    )ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;');

    //connection.query('CREATE TRIGGER trigger_studentresponse_SetCreatedAt BEFORE INSERT ON ' + dbconfig.student_response_table + ' FOR EACH ROW SET NEW.created_date = UTC_TIMESTAMP();');

    console.log('Success: tables Created!')

    connection.end();
} catch (e) {
    console.log("Exception in DB scripts: ", e);
}