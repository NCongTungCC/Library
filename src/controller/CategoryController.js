const Category = require('../models/categoryModel');
const Log = require('../models/logModel');
const CategoryService = require('../service/categoryService');
const LogService = require('../service/logService');

class CategoryController {
    constructor(CategoryService, logService) {
        this.CategoryService = CategoryService;
        this.logService = logService;
    }

    getCategory = async (req, res) => {
        const result = await this.CategoryService.getCategory();
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
        const {category, description} = req.body;
        const result = await this.CategoryService.createCategory({category, description});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            await this.logService.CreateLog({userId : req.user?.id, action : 'Thêm thể loại',});
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
    }
    deleteCategory = async (req, res) => {
        const {id} = req.params;
        const result = await this.CategoryService.deleteCategory({id});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            await this.logService.CreateLog({userId : req.user?.id, action : 'Xóa thể loại',});
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
    }
    updateCategory = async (req, res) => {
        const {id} = req.params;
        const {category, description} = req.body;
        const result = await this.CategoryService.updateCategory({id, category, description});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
           await this.logService.CreateLog({userId : req.user?.id, action : 'Sửa thể loại',});
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
}
}

const logServiceInstance = new LogService(Log);
const CategoryServiceInstance = new CategoryService(Category);
module.exports = new CategoryController(CategoryServiceInstance, logServiceInstance);