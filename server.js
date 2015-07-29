var express, app, https, fs, querystring;

express = require('express');
request = require('request');
fs = require('fs');
querystring = require('querystring');

app = express();
app.use(express.static('./static'));

//get the access token from access_token.txt
var access_token = fs.readFileSync('./access_token.txt', 'utf8');
console.log("Access token: " + access_token);

app.listen(8080);

//return the admin page, which is the Homeowner UI
app.get('/', function (req, res) {
    var uid = req.params.uid,
        path = req.params[0] ? req.params[0] : 'candy.html';
    res.sendfile(path, {root: './static/html'});
});

app.get('/giveCandy/', function (req, res) {
    console.log("trying to give candy out!");
    console.log("Access token: " + access_token);

    request({
        uri: 'https://api.spark.io' + '/v1/devices/' + 'Candy' + '/' + 'giveCandy',
        method: 'POST',
        form: {
            args: '1',
            access_token: access_token.trim()
        },
        json: true
    }, function() {
        res.json("working");
    });
});