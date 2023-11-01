import express from "express";
import dotenv from "dotenv";
import connect from "./conn.js";
import router from "./router.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use('/api',router);



connect().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server Generated");
    })
    }).catch((error)=>{
        console.log(error);
    })

