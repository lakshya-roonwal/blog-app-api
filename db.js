const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();
connectionString=process.env.DB_CONNECTION_STRING;

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