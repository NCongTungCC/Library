const Borrow = require('../models/borrowingModel');
const Book = require('../models/bookModel')
const Log = require('../models/logModel');

const BorrowService = require('../service/borrowService');
const BorrowServiceInstance = new BorrowService(Borrow, Book);

const LogService = require('../service/logService');
const logServiceInstance = new LogService(Log);

class BrrowController {
    constructor(BorrowServiceInstance, logServiceInstance) { 
        this.BorrowServiceInstance = BorrowServiceInstance;
        this.logServiceInstance = logServiceInstance;
     }
    borrowingBook = async (req, res) => {
    const id = req.user.id;
    const { bookId } = req.params;
    const result = await this.BorrowServiceInstance.BrrowbookService({userId : id, bookId : bookId});
    if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
        })
    } else 
    await this.logServiceInstance.CreateLog({userId : id, bookId, hanhdong : 'Mượn sách',});
    return res.status(200).json({
        code : 200,
        message : result.message,
    })

}
    returnBook = async (req, res) => {
    const id = req.user.id;
    const { bookId } = req.params;

    const result = await this.BorrowServiceInstance.ReturnbookService({userId : id, bookId : bookId});
    if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
        })
    } else 
    await this.logServiceInstance.CreateLog({userId : id, bookId, hanhdong : 'Trả sách',});
    return res.status(200).json({
        code : 200,
        message : result.message,
    })

}
}

module.exports = new BrrowController(BorrowServiceInstance, logServiceInstance);