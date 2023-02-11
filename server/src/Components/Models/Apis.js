const mongoose=require('mongoose')

const api=new mongoose.Schema({
    AppName:{
        type:String,
        required:true,
        unique:true
    },
    Key:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    }
})
const ApiKey=new mongoose.model("ApiKey",api);
module.exports=ApiKey;