'use strict'
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
global.appRoot = path.resolve(__dirname);
var CONFIG = require(appRoot + '/../appconfig/default').props;
var winston = require('winston');
var app = express();
var mysql = require('mysql');
var dbconfig = require(appRoot + '/../appconfig/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);
var passport = require('passport');
var flash = require('connect-flash');
var fileUpload = require('express-fileupload');
var sessionStore = new session.MemoryStore;
app.use(flash());
app.use(fileUpload());
require('./config/passport')(passport);
const Cryptr = require('cryptr');
global.cryptrSecret = 'secretToHashPasswordWithCrypterChangeFrequently';
app.use(cookieParser());

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 1000000
  })
);
app.use(bodyParser.json());

app.use(CONFIG.assetsFolder, [
 
  express.static(__dirname + '/public/')
]);
app.use(CONFIG.dataRoot, [
 
  express.static(CONFIG.filestore)
]);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(session({
  store: sessionStore,
  saveUninitialized: true,
  resave: true,
  secret: 'elmsecretsessionpsprtsessnsecrt'
}));
//session secret
app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, CONFIG.viewsFolder));


require('./app/routes.js')(app, passport);

// Set server port
app.listen(CONFIG.servicesport);
console.log('server is running');