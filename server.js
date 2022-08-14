const express = require('express');
const { moduleID } = require('./middlewares/logId');

const app = express()

const users = [
    {id:1,name:"Mike",tasks:['Study','Cook']},
    {id:2,name:"John",tasks:["Meet Friends"]},
    {id:3,name:"Sara",tasks:["finish tasks"]},

];



app.get("/",(req,res)=>{
    res.send("Welcome ! ")
})
app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/user/:id',moduleID,(req,res)=>{
    // console.log(req.params.id)
    const getUser = users.find((user)=>user.id == req.params.id)
    // console.log(getUser)
    res.send(getUser)
})
app.get('/user/:id/tasks',moduleID,(req,res)=>{
    // console.log(req.params.id)
    let getUser = users.find((user)=>user.id == req.params.id)
    // console.log(getUser)
    res.send(getUser.tasks)
})

app.listen('8000',function(){
    console.log("connected ")
})

