const express = require('express');
const authenToken = require('../middleware/authenticateToken');

const CategoryController = require('../controller/categoryController');

const router = express.Router();

router.get("/category", authenToken, CategoryController.getCategory);

router.post("/category", authenToken, CategoryController.createCategory);

router.delete("/category/:id", authenToken, CategoryController.deleteCategory);

router.put("/category/:id", authenToken, CategoryController.updateCategory);

module.exports = router;

