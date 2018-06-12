var mongoose = require("mongoose");


var quizSchema = new mongoose.Schema({
   question:{
       type:String,
       require:true
   },
    ans1:{
        type:String
    },
    ans2:{
        type:String
    },
    ans3:{
        type:String
    },
    ans4:{
        type:String
    },
    right:{
        type:String
    }
});
var quizModel = mongoose.model("quiz",quizSchema);
module.exports = quizModel;