class UserController {
    constructor(UserService) { 
        this.UserService = UserService;
    }
    login = async (req, res) => {
    const { username, password } = req.body;
    const result = await this.UserService.loginService({ username, password });

    if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
        })
    } else return res.status(200).json({
        code : 200,
        token : result.token,
    })
}
    signUp = async (req, res) => {
    const { username, password } = req.body;
    const result = await this.UserService.signupService({ username, password });
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
    const {password, newPassword} = req.body;
    const result = await this.UserService.changepassService({ id, password, newPassword });
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

module.exports = UserController;