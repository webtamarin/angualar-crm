var mysql = require('mysql');
var express = require('express');
var app = express();
var http = require("http");

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'angular_crm'
});


/*
 * Login
 */
app.get('/get_all_users', function (req, res) {
    connection.connect();
    connection.query('SELECT * FROM users', function (err, rows, fields) {
        if (!err)
            res.send(rows);
        else
            console.log('Error while performing Query.');
    });
    connection.end();
});

/*
 * Login
 */
app.get('/login', function (req, res) {
    connection.connect();
    //http://localhost:8000/login?username=manoj.rana91986@gmail.com&password=123456
    connection.query('SELECT * FROM users', function (err, rows, fields) {
        if (!err)
            res.send(rows);
        else
            console.log('Error while performing Query.');
    });
    connection.end();
});

app.listen(8000);