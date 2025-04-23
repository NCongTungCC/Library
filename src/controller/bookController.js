const Book = require('../models/bookModel');

const getBook = async (req, res) => {

    const books = await Book.find();
    return res.status(200).json({
        code : 200,
        data : books,
    })
}

const createBook = async (req, res) => {
    const {tensach, tacgia, namxuatban, poster, mota, soluong} = req.body;

    const newBook = new Book({
        tensach,
        tacgia,
        namxuatban,
        poster,
        mota,
        soluong,
    })

    await newBook.save();
    return res.status(200).json({
        code : 200,
        message : 'Thêm sách thành công',
    })
}
const deleteBook = async (req, res) => {
    const { id } = req.params;
    const book = Book.findOne({ _id : id });
    if(!book) {
        return res.status(404).json({
            code : 404,
            message : 'Không tìm thấy sách',
        })
    }
    await book.deleteOne();
    return res.status(200).json({
        code : 200,
        message : 'Xóa thành công',
    })
}
const updateBook = async (req, res) => {
    const {id} = req.params;
    const {tensach, tacgia, namxuatban, poster, mota, soluong} = req.body;
    const book = Book.findOne({ _id : id });
    if(!book) {
        return res.status(404).json({
            code : 404,
            message : 'Không tìm thấy sách',
        })
    }
    await book.updateOne({tensach, tacgia, namxuatban, poster, mota, soluong});
    return res.status(200).json({
        code : 200,
        message : 'Cập nhật thành công',
    })
}
const BookController = {
    createBook,
    deleteBook,
    updateBook,
    getBook,
}
module.exports = BookController;