// import express
const express = require('express')
// import userController.js file
const userController = require('../Controllers/userController')
// import project controller.js
const projectController = require('../Controllers/projectController')
const multerConfig = require('../Middlewares/multerMiddleware')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

// create router for express app using Router()
const router = new express.Router()

// define different routes for server app
// register
router.post('/user/register',userController.register)
// login
router.post('/user/login',userController.login)
// addProject
router.post('/projects/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)
// getUserProject
router.get('/user/all-projects',jwtMiddleware,projectController.getAllUserProject)
// get Home Projects
router.get('/home/projects',projectController.getHomeProjects)
// get All Projects
router.get('/projects/all',jwtMiddleware,projectController.getAllProjects)






// export
module.exports = router
