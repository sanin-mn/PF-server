// to load env file
require('dotenv').config()

// import express
const express = require('express')
// import cors
const cors = require('cors')

// to create express server
const pfServer = express()

// use cors
pfServer.use(cors())

// parse json data using server
pfServer.use(express.json())

// customise port for server app
const PORT = 4000 || process.env.PORT

// to run server 
pfServer.listen(PORT,()=>{
    console.log(`project fair server started at port : ${PORT}`);
})

// resolve request to localhost : 4000
pfServer.get('/',(req,res)=>{
    res.send(`<p> Project fair server started !!! <p/>`)
})
