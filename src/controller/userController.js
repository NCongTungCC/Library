const generateToken = require('../middleware/generateToken.js');
const User = require('../models/userModel.js');
const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if(!user) {
        return res.status(404).json({
        code:404,
        message : "Tài khoản không tồn tại",
    })}
    if(user.password === password) {
        const token = generateToken(user);
        console.log(token);
        return res.status(200).json({
            code:200,
            token: token,
        })
    } else return res.status(400).json({
        code:400,
        messega : 'Sai mật khẩu',
    })
}
const signUp = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username});
    if(user) {
        return res.status(400).json({
            code : 400,
            message : 'Tài khoản đã tồn tại',
        })
    }
    const newUser = new User({
        username : username,
        password : password,
        isAdmin : false,
    })
    await newUser.save();
    return res.status(200).json({
        code:200,
        messeage : 'Tạo tài khoản thành công'
    })
}
const changePass = async (req, res) => {
    const id = req.user?.id;
    const {password, newPassword} = req.body;
    
    const user = await User.findOne({ _id : id});
    if(user.password === password) {
    await user.updateOne({ password: newPassword });
    return res.status(200).json({
        code:200,
        message: 'Cập nhật thông tin thành công',
    })
}
}
const UserController = {
    login,
    signUp,
    changePass,
}
module.exports = UserController;