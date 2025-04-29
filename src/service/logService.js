const Log = require('../models/logModel');

class LogService {
    constructor(Log) {
        this.Log = Log;
    }

    async CreateLog({userId, bookId, action}) {
        await this.Log.create({
            userId,
            bookId,
            action,
        })
    }
}

module.exports = LogService;