'use strict';

global.APP_DIR     = __dirname;

var express        = require('express');
var bodyParser     = require('body-parser');

var app            = express(); app.disable('x-powered-by');
var server         = require('http').createServer(app);

server.listen('8100', '127.0.0.1', function () {
    console.log('Express server listening on %d, in %s mode', '8100');
});

app.use(express.static(process.cwd()));
app.use(bodyParser.urlencoded({limit: '3mb', extended: false }));
app.use(bodyParser.json({ limit: '3mb' }));

app.use('/api/list',    require('./api/list'));
app.get('/*',           serveWebsite);

function serveWebsite(req, res) {
    res.sendFile(process.cwd() + '/client/index.html');
};

var exports = module.exports = app;

