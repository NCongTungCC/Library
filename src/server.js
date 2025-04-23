const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const apiRoute = "/libary";
const port = 3000;
const connection = require('./config/db.js');
const UserRoute = require('./route/userRoute.js');

app.use(bodyParser.json({ extend : true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(apiRoute, UserRoute);

app.listen(port, () => {
    console.log(`Server đang khởi chạy tại port ${port}`);
});
