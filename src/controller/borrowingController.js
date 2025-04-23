const Borrowing = require('../models/borrowingModel');
const Book = require('../models/bookModel');
const borrowingBook = async (req, res) => {
    const id = req.user.id;
    const { bookId } = req.params;
    const book = await Book.findOne({ _id : bookId })
    if (!book) {
        return res.status(404).json({
            code: 404,
            message: 'Không tìm thấy sách',
        });
    }
    const borrow = await Borrowing.findOne({
        bookId : bookId, 
        userId : id,
        returnDate : null,
    })
    if(borrow) {
        return res.status(400).json({
            code : 404, 
            message : 'Bạn đã mượn sách này rồi',
        })
    }
    if(book.soluong === 0) {
        return res.status(400).json({
            code : 400,
            message : 'Đã hết sách để mượn'
        })
    }
    book.soluong = book.soluong - 1;
    await book.save();
    const newBorrowing = new Borrowing({
        userId : id,
        bookId,
        brrowDate : new Date(),
        returnDate : null,
    })
    await newBorrowing.save();
    return res.status(200).json({
        code : 200,
        message : 'Mượn sách thành công',
        data : newBorrowing,
    })
}
const returnBook = async (req, res) => {
    const id = req.user.id;
    const { bookId } = req.params;

    const borrow = await Borrowing.findOne({
        userId : id,
        bookId,
    })
    if(!borrow) {
        return res.status(404).json({
            code : 404,
            message : 'Không tìm thấy dữ liệu',
        })
    }
    const book = await Book.findOne({_id : bookId});
    book.soluong += 1;
    await book.save();
    await borrow.updateOne({returnDate : new Date()});
    return res.status(200).json({
        code : 200,
        message : 'Trả sách thành công',
    })

}
const BrrowingController = {
    borrowingBook,
    returnBook,
}

module.exports = BrrowingController;