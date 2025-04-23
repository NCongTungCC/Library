const BookController = require('../controller/bookController');
const express = require('express');
const authenToken = require('../middleware/authenticateToken');
const router = express.Router();

router.post("/books", authenToken, BookController.createBook);

router.delete("/books/:id", authenToken, BookController.deleteBook);

router.put("/books/:id", authenToken, BookController.updateBook);

router.get("/books", authenToken, BookController.getBook);

module.exports = router;