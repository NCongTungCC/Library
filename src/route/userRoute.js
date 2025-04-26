const express = require('express');
const UserController = require('../controller/userController.js');

const authenToken = require('../middleware/authenticateToken.js');

const router = express.Router();

router.post("/login", UserController.login);

router.post("/signup", UserController.signUp);

router.put("/changepass", authenToken, UserController.changePass);

module.exports = router;