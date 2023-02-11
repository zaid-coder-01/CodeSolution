const mongoose=require('mongoose')

const randomjokes=new mongoose.Schema({
    randomjoke:{
        type:String,
        unique:true
    }
})
const Randomjokes=new mongoose.model("Randomjokes",randomjokes);
module.exports=Randomjokes;