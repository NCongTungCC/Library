const User = require('../models/userModel');
const generateToken = require('../middleware/generateToken');

class UserService {
    constructor(User, generateToken) { 
        this.User = User;
        this.generateToken = generateToken;
     } 

    async loginService( { username, password } ) {
        const user = await this.User.findOne({ username });
        if(!user) {
            return {
            code:404,
            message : "Tài khoản không tồn tại",
        }};
        if(user.password !== password) {
            return {
                code:404,
                message : "Sai mật khẩu",
            }};
        const token = this.generateToken(user);
        return {
            code : 200,
            token : token,
        }};
    async signupService( { username, password, birthday, gender } ) {
        const user = await this.User.findOne({ username });
        if(user) {
            return {
            code:400,
            message : "Đã có tài khoản.",
        }
    }
        const newUser = new this.User({
            username : username,
            password : password,
            birthday : birthday,
            gender : gender,
            role : 'Người dùng',
        })
        await newUser.save();
        return {
            code:200,
            message : 'Tạo tài khoản thành công'
        }}
    async changepassService({ id, password, newPassword }) {
        const user = await this.User.findOne({ _id : id });
        if(!user) {
            return {
            code:404,
            message : "Tài khoản không tồn tại",
        }}
        if(user.password === password ) {
            await user.updateOne({ password: newPassword });
            return {
            code:200,
            message: 'Cập nhật thông tin thành công',
        }}
}
}
module.exports = UserService;