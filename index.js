var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/quizapp");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use("/",require("./routes/api"));

app.use(function(error,req,res,next){
   res.status(442).send({error:error.message}); 
});

app.listen(3000,function(){
    console.log("server started at 3000");
});