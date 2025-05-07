const { body, param } = require('express-validator');

exports.createBookValidator = [
    body('name')
        .notEmpty().withMessage('Tên sách không được để trống')
        .isLength({ min: 2, max: 100 }).withMessage('Tên sách phải từ 2 đến 100 ký tự'),
    
    body('author')
        .notEmpty().withMessage('Tác giả không được để trống')
        .isLength({ min: 2, max: 50 }).withMessage('Tên tác giả phải từ 2 đến 50 ký tự'),
    
    body('description')
        .optional()
        .isLength({ max: 500 }).withMessage('Mô tả không được quá 500 ký tự'),
    
    body('soluong')
        .notEmpty().withMessage('Số lượng không được để trống')
        .isInt({ min: 0 }).withMessage('Số lượng phải là số nguyên không âm'),
    
    body('category')
        .notEmpty().withMessage('Thể loại không được để trống'),
    
    body('image')
        .optional()
        .isURL().withMessage('URL hình ảnh không hợp lệ')
];

exports.updateBookValidator = [
    param('id')
        .isMongoId().withMessage('ID sách không hợp lệ'),
    
    body('name')
        .optional()
        .isLength({ min: 2, max: 100 }).withMessage('Tên sách phải từ 2 đến 100 ký tự'),
    
    body('author')
        .optional()
        .isLength({ min: 2, max: 50 }).withMessage('Tên tác giả phải từ 2 đến 50 ký tự'),
    
    body('description')
        .optional()
        .isLength({ max: 500 }).withMessage('Mô tả không được quá 500 ký tự'),
    
    body('soluong')
        .optional()
        .isInt({ min: 0 }).withMessage('Số lượng phải là số nguyên không âm'),
    
    body('category')
        .optional()
        .notEmpty().withMessage('Thể loại không được để trống'),
    
    body('image')
        .optional()
        .isURL().withMessage('URL hình ảnh không hợp lệ')
];

exports.getBookValidator = [
    param('id')
        .isMongoId().withMessage('ID sách không hợp lệ')
];

exports.deleteBookValidator = [
    param('id')
        .isMongoId().withMessage('ID sách không hợp lệ')
];

exports.searchBookValidator = [
    body('keyword')
        .optional()
        .isLength({ min: 1 }).withMessage('Từ khóa tìm kiếm không được để trống'),
    
    body('category')
        .optional()
        .isString().withMessage('Thể loại phải là chuỗi'),
    
    body('page')
        .optional()
        .isInt({ min: 1 }).withMessage('Trang phải là số nguyên dương'),
    
    body('limit')
        .optional()
        .isInt({ min: 1, max: 100 }).withMessage('Số lượng item mỗi trang phải từ 1 đến 100')
]; 