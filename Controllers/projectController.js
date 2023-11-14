// add project
exports.addProject = async (req,res)=>{
    console.log("Inside addProject function");
    const {title,language,github,website,overview,image,userId} = req
    console.log(`${title},${language},${github},${website},${overview},${image},${userId}`);
    res.status(200).json()
}