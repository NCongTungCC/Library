const User = require('../models/userModel');
const generateToken = require('../middleware/generateToken');

const UserService = require('../service/userService');
const UserServiceInstance = new UserService(User, generateToken);

class UserController {
    constructor(UserServiceInstance) {
        this.UserServiceInstance = UserServiceInstance;
     } 
    login = async (req, res) => {
    const { username, password } = req.body;
    const result = await UserServiceInstance.loginService({ username, password });

    if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
        })
    } else return res.status(200).json({
        code : 200,
        accessToken : result.accessToken,
        refreshToken : result.refreshToken,
    })
}
    signUp = async (req, res) => {
    const { username, password, birthday, gender } = req.body;
    const result = await UserServiceInstance.signupService({ username, password, birthday, gender });
    if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
        })
    } else return res.status(200).json({
        code : 200,
        message : result.message,
    })
}
    changePass = async (req, res) => {
    const id = req.user?.id;
    const {oldPassword, newPassword} = req.body;
    const result = await UserServiceInstance.changepassService({ id, oldPassword, newPassword });
    if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
        })
    } else return res.status(200).json({
        code : 200,
        message : result.message,
    })
}
}

module.exports = new UserController(UserServiceInstance);