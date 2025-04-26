const Book = require('../models/bookModel');
const Borrow = require('../models/borrowingModel');
const User = require('../models/userModel');
const Statistic = require('../service/statisticService');

const StatisticInstance = new Statistic(Book, Borrow, User);

class StatisticController {
    constructor(StatisticInstance) {
        this.StatisticInstance = StatisticInstance;
    }

    getStaistic = async (req, res) => {
        const result = await StatisticInstance.getStatistic();
        if(result.code !== 200) {
            return res.status(result.code).json({
                code : result.code,
                message : result.message,
            })
        } else return res.status(200).json({
            code : 200,
            message : result.message,
            data : result.data,
        })
    }
}

module.exports = new StatisticController(StatisticInstance);