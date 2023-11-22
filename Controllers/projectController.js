const projects = require('../Models/projectSchema')

// add project
exports.addProject = async (req, res) => {
    console.log("Inside addProject function");
    const { title, language, github, website, overview, userId } = req.body
    const projectImage = req.file.filename
    // console.log(`${title},${language},${github},${website},${overview},${projectImage},${userId}`);
    try{
        const existingProject = await projects.findOne({github})
        if(existingProject){
            res.status(406).json("Project already exists...")
        }else{
            const newProject = new projects({
                title,language,github,website,overview,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }catch(err){
        res.status(401).json(`Error !!! Transaction failed: ${err}`)
    }
}
// get all user project
exports.getAllUserProject = async (req,res)=>{
    const userId = req.payload
    try{
        const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)
    }catch(err){
        res.status(401).json(`Error Transaction failed: ${err}`)
    }
}

// get home projects
exports.getHomeProjects = async(req,res)=>{
    try{
        const homeProjects = await projects.find().limit(3)
        res.status(200).json(homeProjects)
    }catch(err){
        res.status(401).json(`Error !!! Transaction failed : ${err}`)
    }
}

// get all projects
exports.getAllProjects = async (req,res)=>{
    try{
        const allProjects = await projects.find()
        res.status(200).json(allProjects)
    }catch(err){
        res.status(401).json(`Error !!! Transaction failed : ${err}`)
    }
}

// edit projects
exports.editProject = async (req,res)=>{
    const userId = req.payload
        const { title, language, github, website, overview, projectImage } = req.body
        const uploadedImage = req.file?req.file.filename:projectImage
        const {id} = req.params
    try{
        const updateProject = await projects.findByIdAndUpdate({_id:id},{
            title,language,github,website,overview,projectImage:uploadedImage,userId
        },{new:true})
        await updateProject.save()
        res.status(200).json(updateProject)
    }catch(err){
        res.status(401).json(`Error !!! Transaction failed : ${err}`)
    }
}