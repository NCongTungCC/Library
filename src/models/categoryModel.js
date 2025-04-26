const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({ 
    tentheloai :{
        type : String,
        required : true,
    },
    mota : {
        type : String,
        required : true,
    }
 },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model("CategoryModel", CategorySchema, "categorys");