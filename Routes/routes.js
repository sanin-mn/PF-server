// import express
const express = require('express')
// import userController.js file
const userController = require('../Controllers/userController')
// import project controller.js
const projectController = require('../Controllers/projectController')

// create router for express app using Router()
const router = new express.Router()

// define different routes for server app
// register
router.post('/user/register',userController.register)
// login
router.post('/user/login',userController.login)
// addProject
router.post('/project/add',projectController.addProject)



// export
module.exports = router
