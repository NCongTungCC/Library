const User = require('../models/userModel');
const generateToken = require('../middleware/generateToken');
const bcrypt = require('bcrypt');
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
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch) {
            return {
                code:404,
                message : "Sai mật khẩu",
            }};
        const token = this.generateToken(user);
        return {
            code : 200,
            accessToken : token.accessToken,
            refreshToken : token.refreshToken,
        }};
    async signupService( { username, password, birthday, gender } ) {
        const user = await this.User.findOne({ username });
        if(user) {
            return {
            code:400,
            message : "Đã có tài khoản.",
        } 
    }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new this.User({
            username : username,
            password : hashedPassword,
            birthday : birthday,
            gender : gender,
            role : 'Người dùng',
        })
        await newUser.save();
        return {
            code:200,
            message : 'Tạo tài khoản thành công'
        }}
    async changepassService({ id, oldPassword, newPassword }) {
        const user = await this.User.findOne({ _id : id });
        if(!user) {
            return {
            code:404,
            message : "Tài khoản không tồn tại",
        }}
        const isMatchPassword = await bcrypt.compare(oldPassword, user.password);
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        if(isMatchPassword) {
            await user.updateOne({ password: hashedPassword });
            return {
            code:200,
            message: 'Cập nhật thông tin thành công',
        }} 
        return {
            code :400,
            message : 'Sai mật khẩu cũ',
        }
}
}
module.exports = UserService;