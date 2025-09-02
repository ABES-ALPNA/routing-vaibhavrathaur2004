const express = require('express')
const app = express() 
const User = require('./data.js');



app.get("/",(req,res) =>{
    res.send("---hello express ! ")
})

app.post("/post",(req,res) => {
    res.send("hello , How are you ? 😒")
})
app.post("/about",(req,res) => {
    console.log(User[0]);
    
    // res.send("hello , This is about page 😒");
    res.send(User[0]);
})



app.listen(3000,()=>{
    console.log("server started at 3000 ❤")
})