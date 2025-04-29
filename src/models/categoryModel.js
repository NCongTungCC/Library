const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({ 
    category :{
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    }
 },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model("CategoryModel", CategorySchema, "categorys");