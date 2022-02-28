const express = require('express')
const { json } = require('express/lib/response')
const mongoose  = require('mongoose')
const model = require('./schema')
const app = express()

app.post('/api',async(req,res)=>{
    const name = "raghu"
    const d = await model.create({
        name:name
    })
    if(d)
    {
        res.send(d)
    }
    else{
        res.send("<h1>dsvjsdvjbwa</h1>")
    }
    res.send(name)
    //res.send("<h1>raghuram</h1>")
})

const con = async()=>{
 const d = await mongoose.connect("mongodb://raghuram:raghuram@cluster0-shard-00-00.ea1ef.mongodb.net:27017,cluster0-shard-00-01.ea1ef.mongodb.net:27017,cluster0-shard-00-02.ea1ef.mongodb.net:27017/cuvette?ssl=true&replicaSet=atlas-nc4cxy-shard-0&authSource=admin&retryWrites=true&w=majority")
    if(d){
        console.log("connected to database")
    }
    else{
        console.log("errror")
    }
}
con()
app.use("/",(req,res)=>{
    res.send("<h1>Hello</h1>")
})
app.listen(4000,()=>console.log("4000"))
