const { body, param } = require('express-validator');

exports.borrowBookValidator = [
  param('bookId').isMongoId().withMessage('bookId không hợp lệ'),
];

exports.returnBookValidator = [
  param('bookId').isMongoId().withMessage('bookId không hợp lệ'),
];

exports.confirmReturnValidator = [
  param('borrowId').isMongoId().withMessage('borrowId không hợp lệ'),
];