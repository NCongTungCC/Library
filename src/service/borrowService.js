const Borrow = require('../models/borrowingModel');
const Book = require('../models/bookModel');
const User = require('../models/userModel');

class BorrowService {
    constructor(Borrow, Book, User) { 
        this.Borrow = Borrow;
        this.Book = Book;
        this.User = User;
     }
    
    async BrrowbookService({ userId, bookId }) {
        const book = await this.Book.findOne({ _id: bookId });
        if (!book) {
            return {
                code: 404,
                message: 'Không tìm thấy sách',
            };
        }

        const borrow = await this.Borrow.findOne({
            bookId: bookId, 
            userId: userId,
            returnDate: null, 
        });
        if (borrow) {
            return {
                code: 404, 
                message: 'Bạn đã mượn sách này rồi',
            };
        }

        if (book.soluong === 0) {
            return {
                code: 400,
                message: 'Đã hết sách để mượn'
            };
        }
    
        book.soluong -= 1;
        await book.save();
    
        const newBorrowing = new this.Borrow({
            userId: userId,
            bookId: bookId,
            borrowDate: new Date(),
        });
        await newBorrowing.save();
    
        return {
            code: 200,
            message: 'Mượn sách thành công',
            data: newBorrowing,
        };
    }
    
    async ReturnbookService({userId,bookId}) {
        const borrow = await this.Borrow.findOne({userId, bookId});

        if(!borrow) {
            return {
                code : 404,
                message : 'Bạn không mượn sách này',
            }
        }
        if (borrow.status === 'Đã Trả') {
            return {
                code: 400,
                message: 'Sách này đã được trả rồi.',
            };
        }
        await borrow.updateOne({returnDate : new Date(), status : 'Chờ xác nhận'});
        return {
            code : 200,
            message : 'Chờ xác nhận của ADMIN',
        }
    }
    async ConfirmReturn({borrowId, userId}) {
        const borrow = await this.Borrow.findOne({ _id : borrowId});
        if(!borrow) {
            return {
                code : 404,
                message : 'Không tìm thấy thông tin'
            }
        }
        if(borrow.status === 'Đã trả') {
            return {
                code : 400,
                message : 'Sách này đã được trả rồi',
            }
        }
        const user = await this.User.findOne({ _id : userId});
        if(user.isAdmin === false) {
            return {
                code : 400,
                message : 'Chỉ ADMIN mới có quyền xác nhận',
            }
        }
        const book = await this.Book.findOne({_id : borrow.bookId});
        book.soluong += 1;
        await book.save();
        await borrow.updateOne({status : 'Đã trả'});
        return {
            code : 200,
            message : 'Trả sách thành công',
        }
    }
}

module.exports = BorrowService;