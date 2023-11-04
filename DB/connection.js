const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString,{

}).then(()=>{
    console.log("mongodb atlas connected successfully with pfserver")
}).catch(err=>{
    console.log("mongodb connection failed :"+err);
})