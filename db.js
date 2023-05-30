const mongoose=require('mongoose')
connectionString="mongodb+srv://erenpool7214:2OPqdFCZ2vzdJvtm@blogdb.re9qluw.mongodb.net/lakshya-blog";
const connectToMongo=async()=>{
    try{
        await mongoose.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true},)
        console.log('connected to db')
    }
    catch(error)
    {
        console.log(error)
    }


}
module.exports=connectToMongo;