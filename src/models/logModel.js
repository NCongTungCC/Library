const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        required : true,
    },
    bookId : {
        type : mongoose.Types.ObjectId,
        default : null,
    },
    hanhdong : {
        type : String,
        required : true,
    },
    time : {
        type: Date,
        default : Date.now,
    },
}, {
    timestamps : true,
})

module.exports = mongoose.model("LogModel", LogSchema, "logs");