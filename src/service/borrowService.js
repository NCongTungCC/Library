class BorrowService {
    constructor(Borrow, Book) {
        this.Borrow = Borrow;
        this.Book = Book;
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
            brrowDate: new Date(),
            returnDate: null,
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
        const book = await this.Book.findOne({_id : bookId });

        book.soluong += 1;
        await book.save();
        await borrow.updateOne({returnDate : new Date()});
        return {
            code : 200,
            message : 'Trả sách thành công',
        }
    }
}

module.exports = BorrowService;