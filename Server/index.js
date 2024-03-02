const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const User = require("./models/FormData")

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://gggonext05:12345@cluster0.w0iep9u.mongodb.net/")
.then(console.log("connected to DB"))
.catch(err=>(console.error(err)));

app.post("/register", (req, res)=>{
    const {email, password} = req.body;
    User.findOne({email:email})
    .then(user=>{
        if(user){
            res.json("already registered")
        }
        else{
            User.create(req.body)
            .then(log_reg=> res.json(log_reg))
            .catch(err=>res.json(err))
        }
    })  
})

app.post("/login",async (req, res)=>{
    const {email, password}= req.body
    User.findOne({email:email})
    .then( async user=>{
        if(user){
            const isMatch = await user.comparePassword(password);

             if (!isMatch) {
                res.json("invalid password")
            }
            else{
                res.json("Success")
            }
        }
        else{
            res.json("user not registered")
        }
    })
})

app.listen(4000, ()=>{
    console.log("server running on 4000 port")
})