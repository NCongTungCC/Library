const express = require('express');
const UserController = require('../controller/userController.js');
const refreshTokenHandler = require('../middleware/refreshToken.js');
const authenToken = require('../middleware/authenticateToken.js');

const router = express.Router();

router.post("/login", UserController.login);

router.post("/signup", UserController.signUp);

router.put("/changepass", authenToken, UserController.changePass);

router.post("/refresh", refreshTokenHandler);

module.exports = router;