const mongoose = require('mongoose');

const mongoose_url = 'mongodb://localhost:27017/libary';

const connection = mongoose.connect(mongoose_url)
.then(() => {
    console.log('Kết nối đến MongoDB thành công!');
})
.catch((err) => {
    console.error('Lỗi kết nối đến MongoDB:', err);
});

module.exports = connection;