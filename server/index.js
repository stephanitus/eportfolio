var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('/etc/letsencrypt/live/stephanschmidt.dev/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/stephanschmidt.dev/fullchain.pem', 'utf8');
var path = require('path');
var morgan = require('morgan');
var credentials = {key: privateKey, cert: certificate};
var express = require('express');


var app = express();

app.use(morgan('tiny'));
app.use(express.static(__dirname+"/../build"));
app.use(express.static(__dirname+"/../public"));

/**
  *  Routes
**/

//app.get('/', (req, res) => {
//  res.send("hello world!");
//});



var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80,"0.0.0.0",() => {
  console.log('HTTP Server running on port 80');
});
httpsServer.listen(443,"0.0.0.0",() => {
  console.log('HTTPS Server running on port 443');
});
