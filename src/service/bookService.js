const Book = require('../models/bookModel');
const User = require('../models/userModel');
const Category = require('../models/categoryModel');

class BookService {
    constructor(Book, User, Category) {
        this.Book = Book;
        this.User = User;
        this.Category = Category;
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
    async createBookService({id, namebook, author, year, description, poster, totalBook, category}) {
        const user = await this.User.findOne({ _id : id});
        const nameUser = user.username;
        const book = await this.Book.findOne({namebook});
        if(book) {
            return {
                code : 400,
                message : 'Đã có sách',
            }
        }
        const newCategory = Array.isArray(category) ? category : category.split(', ');

        const categoryDocs = await Promise.all(
            newCategory.map(async (item) => {
                const categoryDoc = await this.Category.findOne({ category: item });
                if (!categoryDoc) {
                    throw new Error(`Không tìm thấy thể loại: ${item}`);
                }
                return categoryDoc._id;
            })
        );
        if(totalBook < 1) {
            return {
                code : 404,
                message : 'Nhập sai số lượng',
            }
        }
        const newBook = new this.Book({
            namebook,
            author,
            year,
            poster,
            description,
            totalBook,
            availableBook : totalBook,
            categoryId : categoryDocs,
            user : nameUser,
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
            data : book,
        }
    }
    async updateBookService({id, userId, namebook, author, year, description, poster, totalBook, category}) {
        const book = await this.Book.findOne({ _id : id });
            if(!book) {
                return {
                    code : 404,
                    message : 'Không tìm thấy sách',
                }
            }
        const newCategory = Array.isArray(category) ? category : category.split(', ');

        const categoryDocs = await Promise.all(
            newCategory.map(async (item) => {
                const categoryDoc = await this.Category.findOne({ category: item });
                if (!categoryDoc) {
                    throw new Error(`Không tìm thấy thể loại: ${item}`);
                }
                return categoryDoc._id;
            })
            );
        const user = await this.User.findOne({_id : userId});
        const username = user.username;
            await book.updateOne({namebook, author, year, description, poster, totalBook, categoryId : categoryDocs, userupdate : username});
            return{
                code : 200,
                message : 'Cập nhật thành công',
                data : book,
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