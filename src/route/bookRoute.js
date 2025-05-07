const express = require('express');
const authenToken = require('../middleware/authenticateToken');
const router = express.Router();
const upload = require('../middleware/multer');
const multer = require('multer');
const { createBookValidator, updateBookValidator, deleteBookValidator } = require('../schema/bookSchema');
const validateResult = require('../middleware/validateRequest');
// upload.single('poster')

const BookController = require('../controller/bookController');

router.post("/books", authenToken, createBookValidator, validateResult, BookController.createBook);

router.delete("/books/:id", authenToken, deleteBookValidator, validateResult, BookController.deleteBook);

router.put("/books/:id", authenToken, updateBookValidator, validateResult, BookController.updateBook);

router.get("/books", authenToken, BookController.getBook);

router.get("/books/:query",  authenToken, BookController.searchBook);

module.exports = router;