const express = require('express');
const authenToken = require('../middleware/authenticateToken');
const StatisticController = require('../controller/StatisticController');

const router = express.Router();

router.get("/statistic", authenToken, StatisticController.getStaistic);

module.exports = router;