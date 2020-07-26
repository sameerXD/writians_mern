const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//express
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{
  console.log("Server for writians estabilished at PORT :" + PORT);
})

//set rotes

app.use("/posts",require("./routes/postRoutes"));

//mongoose

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true},(err)=>{
  if(err){
    console.log(err);
  }else(console.log("connected to mongoose"))
})
