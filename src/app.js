import express from "express";
const app=express();
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extends:true,limit:"16kb"}));
import userrouter from "./routes/user.route.js";

app.use("/fill_data",userrouter);
export {app};