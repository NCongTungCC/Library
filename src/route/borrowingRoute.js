const express = require('express');
const authenToken = require('../middleware/authenticateToken');
const BorrowingController = require('../controller/borrowingController');
const router = express.Router();

router.post("/borrow/:bookId", authenToken, BorrowingController.borrowingBook);

router.put("/borrow/:bookId", authenToken, BorrowingController.returnBook);

module.exports = router;