const express = require('express');
const UserController = require('../controller/userController.js');
const router = express.Router();
const authenToken = require('../middleware/authenticateToken.js');

router.post("/login", UserController.login);

router.post("/signup", UserController.signUp);

router.put("/changepass", authenToken, UserController.changePass);

module.exports = router;