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

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - name
 *         - author
 *         - soluong
 *         - category
 *       properties:
 *         name:
 *           type: string
 *           description: Tên sách
 *         author:
 *           type: string
 *           description: Tác giả
 *         description:
 *           type: string
 *           description: Mô tả sách
 *         soluong:
 *           type: integer
 *           description: Số lượng sách
 *         category:
 *           type: string
 *           description: Thể loại sách
 *         image:
 *           type: string
 *           description: URL hình ảnh sách
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Tạo sách mới
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Tạo sách thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       401:
 *         description: Không có quyền truy cập
 */
router.post('/', isAdmin, createBookValidator, validateResult, bookController.createBook);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Cập nhật thông tin sách
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của sách
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       401:
 *         description: Không có quyền truy cập
 *       404:
 *         description: Không tìm thấy sách
 */
router.put('/:id', isAdmin, updateBookValidator, validateResult, bookController.updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Xóa sách
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của sách
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       401:
 *         description: Không có quyền truy cập
 *       404:
 *         description: Không tìm thấy sách
 */
router.delete('/:id', isAdmin, deleteBookValidator, validateResult, bookController.deleteBook);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Lấy thông tin một cuốn sách
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của sách
 *     responses:
 *       200:
 *         description: Thông tin sách
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Không tìm thấy sách
 */
router.get('/:id', getBookValidator, validateResult, bookController.getBook);

/**
 * @swagger
 * /api/books/search:
 *   post:
 *     summary: Tìm kiếm sách
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               keyword:
 *                 type: string
 *                 description: Từ khóa tìm kiếm
 *               category:
 *                 type: string
 *                 description: Thể loại sách
 *               page:
 *                 type: integer
 *                 description: Số trang
 *               limit:
 *                 type: integer
 *                 description: Số lượng item mỗi trang
 *     responses:
 *       200:
 *         description: Danh sách sách tìm được
 *       400:
 *         description: Dữ liệu không hợp lệ
 */
router.post('/search', searchBookValidator, validateResult, bookController.searchBooks);

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Lấy danh sách sách
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Số trang
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Số lượng item mỗi trang
 *     responses:
 *       200:
 *         description: Danh sách sách
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 books:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Book'
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 *                 limit:
 *                   type: integer
 */
router.get('/', bookController.getAllBooks);

module.exports = router; 