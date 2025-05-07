const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { 
    createBookValidator, 
    updateBookValidator, 
    getBookValidator, 
    deleteBookValidator,
    searchBookValidator 
} = require('../validators/bookValidator');
const validateResult = require('../middlewares/validateResult');
const { isAdmin } = require('../middlewares/authMiddleware');

// Tạo sách mới (chỉ admin)
router.post('/', isAdmin, createBookValidator, validateResult, bookController.createBook);

// Cập nhật sách (chỉ admin)
router.put('/:id', isAdmin, updateBookValidator, validateResult, bookController.updateBook);

// Xóa sách (chỉ admin)
router.delete('/:id', isAdmin, deleteBookValidator, validateResult, bookController.deleteBook);

// Lấy thông tin một cuốn sách
router.get('/:id', getBookValidator, validateResult, bookController.getBook);

// Tìm kiếm sách
router.post('/search', searchBookValidator, validateResult, bookController.searchBooks);

// Lấy danh sách sách (có phân trang)
router.get('/', bookController.getAllBooks);

module.exports = router; 