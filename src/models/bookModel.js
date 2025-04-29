const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    namebook : {
        type : String,
        required : true,
    },
    author : {
        type : String,
        required : true,
    },
    year : {
        type : Number,
        required : true,
    },
    description : {
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
    categoryId : [ {
        type : mongoose.Types.ObjectId,
        required : true,
    } ], 
    user : {
        type : String,
        required : true,
    },
    userupdate : {
        type : String,
        default : null,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("BookModel", BookSchema, "books");