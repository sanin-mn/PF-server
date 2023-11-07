const mongoose = require('mongoose')
const validator = require('validator')

const userShema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'username is required']
    },
    email:{
        type:String,
        required:[true, 'email is required'],
        unique:true,
        // npm i validator installed for use this
        validate:{
            validator:(value)=>{
                if(!validator.isEmail(value)){
                    throw new Error('invalid email')
                }
            }
        }
    },
    password:{
        type:String,
        required:[true, 'password is required']
    },
    image:{
        type:String
    },
    github:{
        type:String
    },
    linkedin:{
        type:String
    }
})

const users = mongoose.model('users',userShema)

module.exports = users