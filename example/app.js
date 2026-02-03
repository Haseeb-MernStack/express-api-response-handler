import express from "express";
import { successResponse, errorResponse } from "../src/index.js";

const app = express();

app.get("/success", (req,res)=>{
    successResponse(res, "Data fetched", {name:"Haseeb"});
});

app.get("/error", (req,res)=>{
    errorResponse(res,"Unauthorized access", [],401);
});

app.listen(3000, ()=> console.log("Example server running"));