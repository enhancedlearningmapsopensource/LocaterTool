// config/passport.js

var LocalStrategy = require('passport-local').Strategy;

var mysql = require('mysql');
var crypto = require('crypto');
var pbkdf2 = require('pbkdf2');
var dbconfig = require(appRoot + '/../appconfig/database');
var connection = mysql.createConnection(dbconfig.connection);
const Cryptr = require('cryptr');

connection.query('USE ' + dbconfig.database);

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        connection.query("SELECT USERID as id, EMAIL, NAME FROM ELM_USER WHERE USERID = ? ", [id], function (err, rows) {
            done(err, rows[0]);
        });
    });

    passport.use(
        'local-login',
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'hashpass',
            passReqToCallback: true 
        },
            function (req, email, hashpass, done) {
                if(!req.isAuthenticated()) {
                    if(hashpass === 'login2') { //Login from Moderncopy.
                    const cryptr = new Cryptr(cryptrSecret);
                    const decryptedString = cryptr.decrypt(email);
                    var splitArr = decryptedString.split("+**~~**+");
                    email = splitArr[0];
                    hashpass = splitArr[1];
                    }
                connection.query("SELECT usr.USERID as id, usr.EMAIL, usr.PASS as password, pwd.ITERATIONS as iterations, pwd.SALT as salt "
                    + " FROM ELM_USER usr JOIN ELM_PASSWORD pwd ON usr.USERID = pwd.USERID WHERE email = '" + email + "';", function (err, rows) {
                        if (err)
                            return done(err);
                        if (!rows.length) {
                            return done(null, false, req.flash('loginMessage', 'No user found.'));
                        }
                        var salt = rows[0].salt;
                        salt = hashpass + salt;
                        var saltbuffer = new Buffer(salt, 'base64');
                        var iterations = rows[0].iterations;
                        var length = 32;
                        crypto.DEFAULT_ENCODING = 'hex';
                        crypto.pbkdf2(hashpass, saltbuffer, iterations, length, 'sha256', function (err, derivedKey) {
                            if (derivedKey != rows[0].password)
                                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                            var user = { id: rows[0].id, EMAIL: rows[0].EMAIL };
                            return done(null, user);
                        });
                    });
                } else {
                    return done(null, req.user);
                }
            })
    );
};
