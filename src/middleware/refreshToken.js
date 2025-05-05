const jwt = require('jsonwebtoken');

const refreshTokenHandler = (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) 
        return res.status(401).json({ 
            message: 'Thiếu refresh token' 
        });

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY, (err, user) => {
        if (err) 
            return res.status(403).json({ 
                message: 'Refresh token không hợp lệ' 
            });
        const newAccessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '15m',
        });

        res.json({ accessToken: newAccessToken });
    });
};

module.exports = refreshTokenHandler;
