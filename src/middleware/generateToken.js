const jwt = require('jsonwebtoken');
const generateToken = (user) => {
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '15m',
    });
    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET_KEY, {
        expiresIn: '7d',
    });
    return {accessToken, refreshToken};
}

module.exports = generateToken;