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
        try {
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
                status: { $ne: 'Đã trả' }
            });
            if (borrow) {
                return {
                    code: 404, 
                    message: 'Bạn đã mượn sách này rồi',
                };
            }

            if (book.availableBook === 0) {
                return {
                    code: 400,
                    message: 'Đã hết sách để mượn'
                };
            }
        
            book.availableBook = book.availableBook - 1;
            book.borrowBook = book.borrowBook + 1;
            await book.save();

            const newBorrowing = new this.Borrow({
                userId: userId,
                bookId: bookId,
                borrowDate: new Date(),
            });
            const savedBorrow = await newBorrowing.save();
            return {
                code: 200,
                message: 'Mượn sách thành công',
            };
        } catch (error) {
          
        }
    }
    async ReturnbookService({userId,bookId}) {
        try {
            const borrow = await this.Borrow.findOne({
                userId, 
                bookId,
                status: { $ne: 'Đã trả' }
            });

            if(!borrow) {
                return {
                    code : 404,
                    message : 'Bạn không mượn sách này',
                }
            }
            if (borrow.status === 'Chờ xác nhận') {
                return {
                    code: 400,
                    message: 'Sách này đang chờ xác nhận trả.',
                };
            }
            await borrow.updateOne({returnDate : new Date(), status : 'Chờ xác nhận'});
            return {
                code : 200,
                message : 'Chờ xác nhận của ADMIN',
            }
        } catch (error) {
        
        }
    }
    async ConfirmReturn({borrowId, userId}) {
        try {
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
            if(borrow.status !== 'Chờ xác nhận') {
                return {
                    code : 400,
                    message : 'Sách này chưa được yêu cầu trả',
                }
            }
            const user = await this.User.findOne({ _id : userId});
            if(user.role !== 'Admin') {
                return {
                    code : 400,
                    message : 'Chỉ ADMIN mới có quyền xác nhận',
                }
            }
            const book = await this.Book.findOne({ _id : borrow.bookId});
            if (!book) {
                return {
                    code: 404,
                    message: 'Không tìm thấy thông tin sách'
                };
            }
            book.availableBook += 1;
            book.borrowBook -= 1;
            await book.save();
           
            await borrow.updateOne({status : 'Đã trả'});
            return {
                code : 200,
                message : 'Trả sách thành công',
                data : borrow,
            }
        } catch (error) {
            
        }
    }
}

module.exports = BorrowService;