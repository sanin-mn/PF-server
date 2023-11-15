// add project
exports.addProject = (req, res) => {
    console.log("Inside addProject function");
    const { title, language, github, website, overview, userId } = req.body
    const projectImage = req.file.filename
    console.log(`${title},${language},${github},${website},${overview},${projectImage},${userId}`);
    res.status(200).json("Add project request recieved...")
}