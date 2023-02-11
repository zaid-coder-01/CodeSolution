const mongoose=require('mongoose');

const con=mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})