const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const apiRoute = "/libary";
const port = 3000;
const connection = require('./config/db.js');
const { UserRouter, BookRouter, BorrowRouter } = require('./route/index.js');

app.use(bodyParser.json({ extend : true }));
app.use(bodyParser.urlencoded({ extended: true, limit : "50mb" }));

app.use(apiRoute, UserRouter);
app.use(apiRoute, BookRouter);
app.use(apiRoute, BorrowRouter);
app.listen(port, () => {
    console.log(`Server đang khởi chạy tại port ${port}`);
});
