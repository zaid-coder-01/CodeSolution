const mongoose=require('mongoose')

const randomnumber=new mongoose.Schema({
    randomnumber:{
        type:String,
        unique:true
    }
})
const Randomnumber=new mongoose.model("Randomnumber",randomnumber);
module.exports=Randomnumber;