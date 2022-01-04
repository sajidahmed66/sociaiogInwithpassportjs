const authGoogleRouter = require('../routers/authGoogleRouter');
const postRouter = require('../routers/postRouter');

module.exports = (app) => {
    app.use('/auth/google', authGoogleRouter);
    app.use('/api/post', postRouter);
}