const { body, param } = require('express-validator');

createBookValidator = [
  body('namebook')
    .notEmpty().withMessage('Tên sách không được để trống')
    .isLength({ min: 2, max: 100 }).withMessage('Tên sách phải từ 2 đến 100 ký tự')
    .trim().escape(),
  
  body('author')
    .notEmpty().withMessage('Tác giả không được để trống')
    .isLength({ min: 2, max: 50 }).withMessage('Tên tác giả phải từ 2 đến 50 ký tự')
    .trim().escape(),
  
  body('year')
    .notEmpty().withMessage('Năm không được để trống')
    .isInt({ min: 1800, max: new Date().getFullYear() }).withMessage('Năm phải từ 1800 đến hiện tại'),
  
  body('description')
    .optional()
    .isLength({ max: 500 }).withMessage('Mô tả không được quá 500 ký tự')
    .trim().escape(),
  
  body('totalBook')
    .notEmpty().withMessage('Số lượng không được để trống')
    .isInt({ min: 0 }).withMessage('Không để số âm'),
  
  body('category')
    .notEmpty().withMessage('Thể loại không được để trống'),
  
  body('poster')
    .optional()
    .isURL().withMessage('URL hình ảnh không hợp lệ')
];

updateBookValidator = [
    param('id')
        .isMongoId().withMessage('ID sách không hợp lệ'),
    
    body('namebook')
        .optional()
        .isLength({ min: 2, max: 100 }).withMessage('Tên sách phải từ 2 đến 100 ký tự')
        .trim().escape(),
    
    body('author')
        .optional()
        .isLength({ min: 2, max: 50 }).withMessage('Tên tác giả phải từ 2 đến 50 ký tự')
        .trim().escape(),
    
    body('year')
    .notEmpty().withMessage('Năm không được để trống')
    .isInt({ min: 1800, max: new Date().getFullYear() }).withMessage('Năm phải từ 1800 đến hiện tại'),

    body('description')
        .optional()
        .isLength({ max: 500 }).withMessage('Mô tả không được quá 500 ký tự')
        .trim().escape(),
    
    body('totalBook')
        .optional()
        .isInt({ min: 0 }).withMessage('Số lượng phải là số nguyên không âm'),
    
    body('category')
        .optional(),
    
    body('poster')
        .optional()
        .isURL().withMessage('URL hình ảnh không hợp lệ')
];

deleteBookValidator = [
  param('id')
    .isMongoId().withMessage('ID sách không hợp lệ')
];

const bookValidator = {
    createBookValidator,
    updateBookValidator,
    deleteBookValidator
}

module.exports = bookValidator;