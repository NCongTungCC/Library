const express = require('express');
const authenToken = require('../middleware/authenticateToken');

const BorrowController = require('../controller/borrowingController'); 

const router = express.Router();

router.post("/borrow/:bookId", authenToken, BorrowController.borrowingBook);

router.put("/borrow/:bookId", authenToken, BorrowController.returnBook);

router.put("/confirm/:borrowId", authenToken, BorrowController.confirmReturn);

module.exports = router;