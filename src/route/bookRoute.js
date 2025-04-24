const express = require('express');
const authenToken = require('../middleware/authenticateToken');
const router = express.Router();
const upload = require('../middleware/multer');
const multer = require('multer');

const BookService = require('../service/bookService');
const Book = require('../models/bookModel');
const BookController = require('../controller/bookController');

const BookServiceInstance = new BookService(Book);
const BookControllerInstance = new BookController(BookServiceInstance);

router.post("/books", upload.single('poster'), BookControllerInstance.createBook);

router.delete("/books/:id", authenToken, BookControllerInstance.deleteBook);

router.put("/books/:id", upload.single('poster'), authenToken, BookControllerInstance.updateBook);

router.get("/books", authenToken, BookControllerInstance.getBook);

router.get("/books/:query",  authenToken, BookControllerInstance.searchBook);

module.exports = router;