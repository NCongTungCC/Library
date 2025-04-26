const Log = require('../models/logModel');

class LogService {
    constructor(Log) {
        this.Log = Log;
    }

    async CreateLog({userId, bookId, hanhdong}) {
        await this.Log.create({
            userId,
            bookId,
            hanhdong,
        })
    }
}

module.exports = LogService;