// is middleware for checking if user is authorized to access the page or not by decoding the token
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.headers('Authorization');
    if (!token) return res.status(401).send('Access Denied! No token provided.');
    else token = token.split(' ')[1].trim();
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch {
        return res.status(400).send('Access Denied! Invalid token.');
    }
}