const express = require('express');
const UserController = require('../controller/userController.js');
const UserService = require('../service/userService.js');
const User = require('../models/userModel.js');
const authenToken = require('../middleware/authenticateToken.js');
const generateToken = require('../middleware/generateToken');

const userServiceInstance = new UserService(User, generateToken);
const userControllerInstance = new UserController(userServiceInstance);

const router = express.Router();

router.post("/login", userControllerInstance.login);

router.post("/signup", userControllerInstance.signUp);

router.put("/changepass", authenToken, userControllerInstance.changePass);

module.exports = router;