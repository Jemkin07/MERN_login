const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();

app.use(cors());


mongoose.connect("")
.then(console.log("connected to DB"))
.catch(err=>(console.error(err)));

app.post("/register", (req, res)=>{
    
})