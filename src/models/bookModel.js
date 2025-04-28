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
    totalBook : {
        type : Number,
        required : true,
    },
    availableBook : {
        type : Number,
        required : true,
    },
    borrowBook : {
        type : Number,
        default : 0,
    },
    theloai : {
        type : String,
        required : true,
    }, 
    nguoitao : {
        type : String,
        required : true,
    },
    nguoicapnhat : {
        type : String,
        default : null,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("BookModel", BookSchema, "books");