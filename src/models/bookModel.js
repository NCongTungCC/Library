const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    tensach : {
        type : String,
        required : true,
    },
    tacgia : {
        type : String,
        required : true,
    },
    namxuatban : {
        type : Number,
        required : true,
    },
    mota : {
        type : String,
        required : true,
    },
    poster : {
        type : String,
        required : true,
    },
    soluong : {
        type : Number,
        required : true,
    }
});

module.exports = mongoose.model("BookModel", BookSchema, "books");