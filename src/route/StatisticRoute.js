const express = require('express');
const authenToken = require('../middleware/authenticateToken');
const StatisticController = require('../controller/statisticController');

const router = express.Router();

router.get("/statistic", authenToken, StatisticController.getStaistic);

module.exports = router;