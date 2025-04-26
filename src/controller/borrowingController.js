const Borrow = require('../models/borrowingModel');
const Book = require('../models/bookModel')
const BorrowService = require('../service/borrowService');
const BorrowServiceInstance = new BorrowService(Borrow, Book);

class BrrowController {
    constructor(BorrowServiceInstance) { 
        this.BorrowServiceInstance = BorrowServiceInstance;
     }
    borrowingBook = async (req, res) => {
    const id = req.user.id;
    const { bookId } = req.params;
    const result = await BorrowServiceInstance.BrrowbookService({userId : id, bookId : bookId});
    if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
        })
    } else return res.status(200).json({
        code : 200,
        message : result.message,
    })

}
    returnBook = async (req, res) => {
    const id = req.user.id;
    const { bookId } = req.params;

    const result = await BorrowServiceInstance.ReturnbookService({userId : id, bookId : bookId});
    if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
        })
    } else return res.status(200).json({
        code : 200,
        message : result.message,
    })

}
}

module.exports = new BrrowController(BorrowServiceInstance);