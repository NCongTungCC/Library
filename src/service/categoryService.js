const Category = require('../models/categoryModel');

class CategoryService {
    constructor(Category) {
        this.Category = Category;
    }

    async getCategory() {
        const category = await this.Category.find();
        if(!category) {
            return {
                code : 404,
                message : 'Không tìm thấy thể loại',
            }
        }
        return {
            code : 200,
            message : 'Lấy thành công',
            data : category,
        }
    }
    async createCategory({tentheloai, mota}) {
        const category = await this.Category.findOne({tentheloai});
        if(category) {
            return {
                code : 400,
                message : 'Đã có thể loại rồi',
            }
        }
        const newCategory = new this.Category({
            tentheloai,
            mota,
        })
        await newCategory.save();
        return {
            code : 200,
            message : 'Thêm thể loại thành công',
        }
    }
    async deleteCategory({id}) {
        const category = await this.Category.findOne({_id : id});
        if(!category) {
            return {
                code : 404,
                message : 'Không tìm thấy thể loại',
            }
        }
        await category.deleteOne();
        return {
            code : 200,
            message : 'Xóa thể loại thành công',
        }
    }
    async updateCategory({id, tentheloai, mota}) {
        const category = await this.Category.findOne({_id : id});
        if(!category) {
            return {
                code : 404,
                message : 'Không tìm thấy thể loại',
            }
        }
        await category.updateOne({tentheloai, mota});
        return {
            code : 200,
            message : 'Sửa thành công'
        }
    }
}

module.exports = CategoryService;