var express = require("express");
var router = express.Router();
var quizQues = require("../model/quiz");

router.get("/",function(req,res){
   res.render("home.ejs"); 
});

router.get("/quiz",function(req,res,next){
    quizQues.find({}).then(function(ques){
        res.send(ques);
    }).catch(next);
});

router.post("/quiz",function(req,res,next){
    console.log(req.body);
    quizQues.create(req.body).then(function(ques){
        res.send(ques);
    }).catch(next);
});


module.exports = router;