const {body, param} = require('express-validator');

createCategoryValidator = [
    body('category')
        .notEmpty().withMessage('Không được để trống')
        .isLength({ min: 2, max: 100 }).withMessage('Phải từ 2 đến 100 ký tự')
        .trim().escape(),
        body('description')
        .notEmpty().withMessage('Không được để trống')
        .isLength({ max: 100 }).withMessage('Tối đa 100 ký tự')
        .trim().escape(),
]

updateCategoryValidator = [
    param('id').isMongoId().withMessage('borrowId không hợp lệ'),
    body('category')
        .notEmpty().withMessage('Không được để trống')
        .isLength({ min: 2, max: 100 }).withMessage('Phải từ 2 đến 100 ký tự')
        .trim().escape(),
        body('description')
        .notEmpty().withMessage('Không được để trống')
        .isLength({ max: 100 }).withMessage('Tối đa 100 ký tự')
        .trim().escape(),
]

deleteCategoryValidator = [
    param('id').isMongoId().withMessage('borrowId không hợp lệ'),
  ];

const categoryValidator = {
    createCategoryValidator,
    updateCategoryValidator,
    deleteCategoryValidator
}

module.exports = categoryValidator;