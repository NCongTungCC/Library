const mongoose = require('mongoose');

const BrrowingSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : users,
    }
})