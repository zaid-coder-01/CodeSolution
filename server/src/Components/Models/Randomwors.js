const mongoose=require('mongoose')

const randomword=new mongoose.Schema({
    randomword:{
        type:String,
        required:true,
        unique:true
    }
})
const RandomWord=new mongoose.model("RandomWord",randomword);
module.exports=RandomWord;