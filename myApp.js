var express = require('express');
var app = express();

app.route('/name').get((req,res)=>{
    res.json({ name : `${req.query.first} ${req.query.last}`});
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public',express.static(__dirname + '/public'));



































 module.exports = app;
