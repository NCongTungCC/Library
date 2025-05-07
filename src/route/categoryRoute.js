const express = require('express');
const authenToken = require('../middleware/authenticateToken');
const { createCategoryValidator, updateCategoryValidator, deleteCategoryValidator } = require('../validator/categoryValidator');
const validateResult = require('../middleware/validateRequest');
const CategoryController = require('../controller/categoryController');

const router = express.Router();

router.post("/category", authenToken, createCategoryValidator, validateResult, CategoryController.getCategory);

router.get("/category", authenToken, CategoryController.createCategory);

router.delete("/category/:id", deleteCategoryValidator, validateResult, authenToken, CategoryController.deleteCategory);

router.put("/category/:id", authenToken, updateCategoryValidator, validateResult, CategoryController.updateCategory);

module.exports = router;

