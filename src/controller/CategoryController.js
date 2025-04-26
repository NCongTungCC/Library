const CategoryService = require('../service/categoryService');
const Category = require('../models/categoryModel');

const CategoryServiceInstance = new CategoryService(Category);

class CategoryController {
    constructor(CategoryServiceInstance) {
        this.CategoryServiceInstance = CategoryServiceInstance;
    }

    getCategory = async (req, res) => {
        const result = await CategoryServiceInstance.getCategory();
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
        const result = await CategoryServiceInstance.createCategory({tentheloai, mota});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
    }
    deleteCategory = async (req, res) => {
        const {id} = req.params;
        const result = await CategoryServiceInstance.deleteCategory({id});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
    }
    updateCategory = async (req, res) => {
        const {id} = req.params;
        const {tentheloai, mota} = req.body;
        const result = await CategoryServiceInstance.updateCategory({id, tentheloai, mota});
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
           } else
            return res.status(200).json({
                code : 200,
                message : result.message,
            })
}
}
module.exports = new CategoryController(CategoryServiceInstance);