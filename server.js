var express = require("express");
var path= require('path');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());


//require('./server/config/mongoose.js');
//WE NEED TO REQUIRE MONGOOSE BEFORE THE ROUTES!
//require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));

var server = app.listen(8888, function(){
	console.log("Connected to 8888");
})


