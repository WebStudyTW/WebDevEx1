var express = require('express');

var IdCompute = require('./lib/IdCompute');

var idCompute = new IdCompute();

var app = express();

var v = '1.0';

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    next();
});

app.get('/api/' + v + '/ID/:id', function (req, res) {
    idCompute.run(req.params.id, function (result) {
        res.send(result);
    });
});

var port = Number(process.env.PORT || 5000);
app.listen(port);
