var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    //  responds with'404 Not Found' for every path that is not root, '/'
    console.log('college_explorer app ==> listening on port, 3000!');
});