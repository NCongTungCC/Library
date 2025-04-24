const express = require('express');
const authenToken = require('../middleware/authenticateToken');
const Book = require('../models/bookModel');
const Borrow = require('../models/borrowingModel');
const BorrowService = require('../service/borrowService');
const BorrowController = require('../controller/borrowingController'); 

const BorrowServiceInstance = new BorrowService(Borrow, Book);
const BorrowControllerInstance = new BorrowController(BorrowServiceInstance);

const router = express.Router();

router.post("/borrow/:bookId", authenToken, BorrowControllerInstance.borrowingBook);

router.put("/borrow/:bookId", authenToken, BorrowControllerInstance.returnBook);

module.exports = router;