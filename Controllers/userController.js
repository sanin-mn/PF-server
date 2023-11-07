// import user model
const users = require('../Models/userSchema')

// register
exports.register = async (req,res)=>{
    console.log('Inside register function');
    const {username,email,password} = req.body
    console.log(`username: ${username},email: ${email},password: ${password}`);
    // check already existing user
    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(401).json("user already exist")
    }else{
        // register user
        const newUser = new users({
            username,email,password,image:"",github:"",linkedin:""
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    console.log(existingUser);
}