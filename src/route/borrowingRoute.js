const express = require('express');
const authenToken = require('../middleware/authenticateToken');
const { borrowBookValidator, returnBookValidator, confirmReturnValidator } = require('../schema/borrowSchema');
const validateResult = require('../middleware/validateRequest');
const BorrowController = require('../controller/borrowingController'); 

const router = express.Router();

router.post("/borrow/:bookId", authenToken, borrowBookValidator, validateResult, BorrowController.borrowingBook);

router.put("/borrow/:bookId", authenToken,returnBookValidator, validateResult, BorrowController.returnBook);

router.put("/confirm/:borrowId", authenToken,confirmReturnValidator, validateResult, BorrowController.confirmReturn);

module.exports = router;