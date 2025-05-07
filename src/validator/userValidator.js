const {body, param} = require('express-validator');

exports.loginValidator = [
    body('username')
        .notEmpty().withMessage('Không được để trống'),

    body('password')
        .notEmpty().withMessage('Không được để trống')
]
exports.signupValidator = [
    body('username')
        .notEmpty().withMessage('Không được để trống')
        .isLength({ min: 4}).withMessage('Tài khoản phải từ 4 ký tự trở lên')
        .trim().escape(),

    body('password')
        .notEmpty().withMessage('Không được để trống')
        .isLength({ min: 4}).withMessage('Mật khẩu phải từ 4 ký tự trở lên')
        .trim().escape(),   
]
exports.changePassValidator = [
    param('id').isMongoId().withMessage('borrowId không hợp lệ'),
    body('username')
        .notEmpty().withMessage('Không được để trống')
        .isLength({ min: 4}).withMessage('Tài khoản phải từ 4 ký tự trở lên')
        .trim().escape(),

    body('password')
        .notEmpty().withMessage('Không được để trống')
        .isLength({ min: 4}).withMessage('Mật khẩu phải từ 4 ký tự trở lên')
        .trim().escape(),   
]