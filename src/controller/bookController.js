const BookService = require('../service/bookService');
const LogService = require('../service/logService');
const Book = require('../models/bookModel');
const User = require('../models/userModel');
const Log = require('../models/logModel');
const bookServiceInstance = new BookService(Book, User);
const logServiceInstance = new LogService(Log);

class BookController {
    constructor(bookServiceInstance, logServiceInstance) {
        this.bookServiceInstance = bookServiceInstance;
        this.logServiceInstance = logServiceInstance;
    }
    getBook = async (req, res) => {
       const result = await bookServiceInstance.getBookService();
       if(result.code !== 200) {
        return res.status(result.code).json({
            code : result.code,
            message : result.message,
        })
       } else
        return res.status(200).json({
            code : 200,
            message : result.message,
            data : result.data,
        })
    }
    createBook = async (req, res) => {
        const {tensach, tacgia, namxuatban, poster, mota, soluong, theloai} = req.body;
        // const poster = req.file ? req.file.path : '';
        const id = req.user?.id;
        const result = await bookServiceInstance.createBookService({id, tensach, tacgia, namxuatban, mota, poster, soluong, theloai});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else {
            await logServiceInstance.CreateLog({userId : id, bookId : result.data._id, hanhdong : 'Tạo sách',});
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
        }
    }
    deleteBook = async (req, res) => {
        const { id } = req.params;
        const result = await bookServiceInstance.deleteBookService({id});
        if(result.code !== 200) {
         return res.status(result.code).json({
             code : result.code,
             message : result.message,
         })
        } else {
         await logServiceInstance.CreateLog({userId : req.user?.id, bookId : id, hanhdong : 'Xóa sách',});
         return res.status(200).json({
             code : 200,
             message : result.message,
         })
    }
}
    updateBook = async (req, res) => {
        const {id} = req.params;
        const userId = req.user?.id;
        const {tensach, tacgia, namxuatban, mota, soluong, poster, theloai} = req.body;
        const result = await bookServiceInstance.updateBookService({id, userId, tensach, tacgia, namxuatban, mota, poster, soluong, theloai});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else { 
            await logServiceInstance.CreateLog({userId : userId, bookId : id, hanhdong : 'Sửa sách',});
            return res.status(200).json({
                code : 200,
                message : result.message,
                data : result.data,
            })
    }
    }
    searchBook = async (req, res) => {
        const {query} = req.params;

        const result = await bookServiceInstance.updateBookService({ query });
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
    }
}

module.exports = new BookController(bookServiceInstance, logServiceInstance);;