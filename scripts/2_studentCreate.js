var mysql = require('mysql');
var dbconfig = require('/var/www/elm/appconfig/database');

var connection = mysql.createConnection(dbconfig.connection);

var wordlist =
    ['acorn', 'apple', 'bee', 'bird', 'boat', 'book', 'bus', 'candy', 'car', 'cave', 'clock', 'coin', 'comet', 'earth', 'fence', 'fish', 'fox', 'frog', 'horse',
        'key', 'kite', 'lake', 'lamp', 'moose', 'phone', 'road', 'rock', 'sand', 'snow', 'sun', 'tent', 'tower', 'tree', 'tulip', 'wheat', 'wheel'];
var usernameArr = [];
var separator = " ";
var count = 0;
//Get all 3 word usernames.
for (var temp = 0; temp < 34; temp++) {
    for (var temp2 = temp + 1; temp2 < 35; temp2++) {
        for (var temp3 = temp2 + 1; temp3 < 36; temp3++) {
            count++;
            usernameArr[usernameArr.length] = wordlist[temp] + separator + wordlist[temp2] + separator + wordlist[temp3];
        }
    }
}
var randomNumArr = [];
var max = usernameArr.length;
while (randomNumArr.length < max) {
    var randomnumber = Math.floor(Math.random() * max);
    if (randomNumArr.indexOf(randomnumber) > -1) continue;
    randomNumArr[randomNumArr.length] = randomnumber;
}

for (var i = 0; i < max; i++) {
    var queryString = '\
    INSERT INTO ' + dbconfig.database + '.' + dbconfig.students_table + ' (USERNAME) VALUES (' + "'" + usernameArr[randomNumArr[i]] + "'" + ');';
    connection.query(queryString);
}
console.log("Success students created, count: ", max);
connection.end();