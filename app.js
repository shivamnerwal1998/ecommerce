const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();


app.get("/", (req,res)=>{
  res.send("hello from node");
});

const port = process.env.PORT || 8000

app.listen(port, ()=>{
  console.log(`server is running on port ${port} `); 
})