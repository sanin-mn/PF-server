// import user model
const users = require('../Models/userSchema')

// register
exports.register = async (req,res)=>{
    console.log('Inside register function');
    const {username,email,password} = req.body
    console.log(`username: ${username},email: ${email},password: ${password}`);
    try{
            // check already existing user
    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(406).json("user already exist dude")
    }else{
        // register user
        const newUser = new users({
            username,email,password,image:"",github:"",linkedin:""
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    }catch(err){
        res.status(401).json(`Transaction failed : ${err}`)
    }

}

// login
exports.login = async (req,res)=>{
    console.log("Inside login function");
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            res.status(200).json({
                existingUser
            })
        }else{
            res.status(404).json("Incorrect email / password")
        }

    }catch(err){
        res.status(401).json(`Error!!! Transaction failed : ${err}` )
    }
}