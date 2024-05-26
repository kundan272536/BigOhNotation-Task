import dotenv from "dotenv";
import connectDb from "./database/connection.js";
import { app } from "./app.js";
const port=4000;

connectDb().then(()=>{
    app.listen(`${port}`,()=>{
     console.log(`Server is runnig at port http://localhost:${port}`);
    })
 }).catch((err)=>{
    console.log("MongoDb Connection Failed!!!:",err);
 })