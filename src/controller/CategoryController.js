const Category = require('../models/categoryModel');
const Log = require('../models/logModel');

const CategoryService = require('../service/categoryService');
const CategoryServiceInstance = new CategoryService(Category);

const LogService = require('../service/logService');
const logServiceInstance = new LogService(Log);

class CategoryController {
    constructor(CategoryServiceInstance, logServiceInstance) {
        this.CategoryServiceInstance = CategoryServiceInstance;
        this.logServiceInstance = logServiceInstance;
    }

    getCategory = async (req, res) => {
        const result = await this.CategoryServiceInstance.getCategory();
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            return res.status(200).json({
                code : 200,
                message : result.message,
                data : result.data,
            })
    }
    createCategory = async (req, res) => {
        const {tentheloai, mota} = req.body;
        const result = await this.CategoryServiceInstance.createCategory({tentheloai, mota});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            await this.logServiceInstance.CreateLog({userId : req.user?.id, hanhdong : 'Thêm thể loại',});
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
    }
    deleteCategory = async (req, res) => {
        const {id} = req.params;
        const result = await this.CategoryServiceInstance.deleteCategory({id});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            await this.logServiceInstance.CreateLog({userId : req.user?.id, hanhdong : 'Xóa thể loại',});
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
    }
    updateCategory = async (req, res) => {
        const {id} = req.params;
        const {tentheloai, mota} = req.body;
        const result = await this.CategoryServiceInstance.updateCategory({id, tentheloai, mota});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
           await this.logServiceInstance.CreateLog({userId : req.user?.id, hanhdong : 'Sửa thể loại',});
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
}
}
module.exports = new CategoryController(CategoryServiceInstance, logServiceInstance);