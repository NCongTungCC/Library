const mongoose = require('mongoose');

const BorrowingSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : 'UserModel',
    },
    bookId : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : 'BookModel',
    },
    borrowDate : {
        type : Date,
        required : true,
    },
    returnDate : {
        type : Date,
        default : null,
    },
    status : {
        type : String,
        default : 'Chưa trả',
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("BrrowModel", BorrowingSchema, "borrowings");