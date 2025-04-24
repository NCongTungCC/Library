const BookController = require('../controller/bookController');
const express = require('express');
const authenToken = require('../middleware/authenticateToken');
const router = express.Router();
const upload = require('../middleware/multer');
const multer = require('multer');
router.post("/books", upload.single('poster'), BookController.createBook);

router.delete("/books/:id", authenToken, BookController.deleteBook);

router.put("/books/:id", upload.single('poster'), authenToken, BookController.updateBook);

router.get("/books", authenToken, BookController.getBook);

router.get("/books/:query",  authenToken, BookController.searchBook);

router.get("/books/genere/:genere",  authenToken, BookController.getBookByGenere);

module.exports = router;