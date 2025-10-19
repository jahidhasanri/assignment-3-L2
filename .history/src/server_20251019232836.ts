import express from "express"
import cors from "cors";
import mongoose from "mongoose";
import routes from "./Routes";
import config from "./config";



const app = express();
app.use(cors());
app.use(express.json())
app.use(routes)
app.get('/',(req,res)=>{
    res.send("Library Management")
})


app.listen(config.PORT,()=>{
    console.log("server is running");
})

const server =async() =>{
    console.log(config);
try{
await mongoose.connect(config.DATABASE_URL!)
console.log("connected to database 5000");
}catch(error){
console.log(`server error ${server}`);
};



}
server();