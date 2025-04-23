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
    brrowDate : {
        type : Date,
        required : true,
    },
    returnDate : {
        type : Date,
    }
})

module.exports = mongoose.model("BrrowModel", BorrowingSchema, "borrowings");