const Borrow = require('../models/borrowingModel');
const Book = require('../models/bookModel')
const Log = require('../models/logModel');
const User = require('../models/userModel');

const BorrowService = require('../service/borrowService');
const BorrowServiceInstance = new BorrowService(Borrow, Book, User);

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
    await this.logServiceInstance.CreateLog({userId : id, bookId, action : 'Mượn sách',});
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
    await this.logServiceInstance.CreateLog({userId : id, bookId, action : 'Trả sách',});
    return res.status(200).json({
        code : 200,
        message : result.message,
    })
}
    confirmReturn = async (req, res) => {
        const userId = req.user.id;
        const { borrowId } = req.params;

        const result = await this.BorrowServiceInstance.ConfirmReturn({borrowId : borrowId, userId : userId});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
        } else return res.status(200).json({
            code : 200,
            message : result.message,
            data : result.data,
        });
    }
}

module.exports = new BrrowController(BorrowServiceInstance, logServiceInstance);