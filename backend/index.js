// require('dotenv').config()
// const express = require('express')
import express from "express";   /*Both 1st and 2nd sentences are same */
const app = express() //We can use lot of stuff using app
 // We are making this production ready by writing it on .env

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
app.get('/twitter',(req,res)=>{
    res.send('abhidoom')
})

app.get('/login',(req,res) =>{
    res.send('<h1>Please login</h1>'); /*Directly update nahi hota we have to restart to process the code again */
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Mai hun gian</h2>');
})

// get a list of 5 jokes

app.get('https://localhost//api/jokes',(req,res) => {
    const jokes = [
        {id:1,title:"first joke",content:'this is first joke'},
        {id:2,title:"second joke",content:'this is second joke'},
        {id:3,title:"third joke",content:'this is third joke'},
        {id:4,title:"fourth joke",content:'this is fourth joke'},
        {id:5,title:"fifth joke",content:'this is fifth joke'},
    ];
    res.send(jokes);
})
const port=process.env.PORT || 3000; //We can use this port in .env file  || 3000 is a fallback port if .env file is not present

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
