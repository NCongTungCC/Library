const Book = require('../models/bookModel');
const Borrow = require('../models/borrowingModel');
const User = require('../models/userModel');

class StatisticService {
    constructor(Book, Borrow, User) {
        this.Book = Book;
        this.Borrow = Borrow;
        this.User = User;
    }
    async getStatistic() {
        const countBook = await this.Book.countDocuments();
        const countUser = await this.User.countDocuments();
        const booksBorrowed = await this.Borrow.countDocuments({ returnDate: null });

        return {
            code: 200,
            message : 'Lấy thành công thống kê',
            data: {
                countBook,
                countUser,
                booksBorrowed,
            }
    }
}
}

module.exports = StatisticService;