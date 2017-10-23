const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.write('<h1>Demo Application</h1>');
    res.write('The simplest possible NodeJS express application');
    res.end();
});

var port = process.env.PORT || 3000;

console.log('Listening on port ' + port);

app.listen(port);