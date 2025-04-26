const Book = require('../models/bookModel');
const User = require('../models/userModel');
class BookService {
    constructor(Book, User) {
        this.Book = Book;
        this.User = User;
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
    async createBookService({id, tensach, tacgia, namxuatban, mota, poster, soluong, theloai}) {
        const user = await this.User.findOne({_id : id});
        const nameUser = user.username;
        const newBook = new this.Book({
            tensach,
            tacgia,
            namxuatban,
            poster,
            mota,
            soluong,
            theloai,
            nguoitao : nameUser,
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
    async updateBookService({id, userId, tensach, tacgia, namxuatban, mota, poster, soluong, theloai}) {
        const book = await this.Book.findOne({ _id : id });
            if(!book) {
                return {
                    code : 404,
                    message : 'Không tìm thấy sách',
                }
            }
        const user = await this.User.findOne({_id : userId});
        const username = user.username;
            await book.updateOne({tensach, tacgia, namxuatban, poster, mota, soluong, theloai, nguoicapnhat : username});
            return{
                code : 200,
                message : 'Cập nhật thành công',
            }
    }
    async searchBookService({query}) {
         const book = await this.Book.find({tensach : { $regex: query , $options: 'i' }})
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
