class BookService {
    constructor(Book) {
        this.Book = Book;
    }

    async getBookService() {
        const book = await this.Book.find();
        if(!book) {
            return {
                code : 404,
                message : 'Không tìm thấy sách',
            }
        }
        return {
            code : 200,
            message : 'Lấy thành công',
            data : book,
        }
    }
    async createBookService({tensach, tacgia, namxuatban, mota, poster, soluong, theloai}) {
        const newBook = new this.Book({
            tensach,
            tacgia,
            namxuatban,
            poster,
            mota,
            soluong,
            theloai
        })
        await newBook.save();
        return {
            code : 200,
            message : 'Thêm sách thành công',
            data : newBook,
        }
        }
    async deleteBookService({id}) {
        const book = await this.Book.findOne({_id : id});
        if(!book) {
            return {
                code : 404,
                message : 'Không tìm thấy sách',
            }
        }
        await book.deleteOne();
        return {
            code : 200,
            message : 'Xóa thành công',
        }
    }
    async updateBookService({id, tensach, tacgia, namxuatban, mota, poster, soluong, theloai}) {
        const book = this.Book.findOne({ _id : id });
            if(!book) {
                return {
                    code : 404,
                    message : 'Không tìm thấy sách',
                }
            }
            await book.updateOne({tensach, tacgia, namxuatban, poster, mota, soluong, theloai});
            return{
                code : 200,
                message : 'Cập nhật thành công',
            }
    }
    async searchBookService({query}) {
         const book = await Book.find({tensach : { $regex: query , $options: 'i' }})
            if(!book) {
                return {
                    code : 404,
                    message : 'Không tìm thấy sách',
                }
            }
            return {
                code : 200, 
                message : "Tìm kiếm thành công",
                data : book,
            }
    }
}
module.exports = BookService;
