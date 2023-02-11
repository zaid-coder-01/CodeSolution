const mongoose=require('mongoose')

const apiCategory=new mongoose.Schema({
    Category:{
        type:String,
        required:true,
    },
    Name:{
        type:String,
        required:true,
        unique:true
    },
    Image:{
        type:String,
        required:true,
        unique:true
    },
    Description:{
        type:String,
        required:true
    }
})
const ApiCategory=new mongoose.model("ApiCategory",apiCategory);
module.exports=ApiCategory;