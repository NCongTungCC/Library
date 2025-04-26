const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
        },
        password : {
            type : String,
            required : true,
        },
        birthday : {
            type : Date,
            required : true,
        },
        gender : {
            type : String,
            required : true,
        },
        isAdmin : {
            type : Boolean,
            required : true,
        }
    }, {
        timestamps: true,
    });

module.exports = mongoose.model("UserModel", UserSchema, "users");