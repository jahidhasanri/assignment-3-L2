import express from "express"
import cors from "cors";
import mongoose from "mongoose";
// import config from "./config";


import config from "./config";
import routes from "./Modeules/Routes";
const app = express();
app.use(cors());
app.use(express.json())
app.use("/api",routes)
app.get('/',(req,res)=>{
    res.send("Library management")
})


app.listen(config.PORT,()=>{
    console.log("server is running");
})

const server =async() =>{
    console.log(config);
try{
await mongoose.connect(config.DATABASE_URL!)
console.log("connected to database =3000");
}catch(error){
console.log(`server error ${server}`);
};



}
server();