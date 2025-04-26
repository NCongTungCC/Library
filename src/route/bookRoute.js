const express = require('express');
const authenToken = require('../middleware/authenticateToken');
const router = express.Router();
const upload = require('../middleware/multer');
const multer = require('multer');
// upload.single('poster')

const BookController = require('../controller/bookController');

router.post("/books", authenToken, BookController.createBook);

router.delete("/books/:id", authenToken, BookController.deleteBook);

router.put("/books/:id", authenToken, BookController.updateBook);

router.get("/books", authenToken, BookController.getBook);

router.get("/books/:query",  authenToken, BookController.searchBook);

module.exports = router;