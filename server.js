var express = require('express');
var app = express();

// setup ports
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function(req, res) {

  res.end('Hello Nodejs!');

});

// server listens in on port
app.listen(server_port, server_ip_address, function () {
   console.log( "Listening on " + server_ip_address + ", server_port " + server_port );
});
