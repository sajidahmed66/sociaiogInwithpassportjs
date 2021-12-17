require('express-async-errors');
const express = require('express');

const app = express();
const { error } = require('./middlewares/error');

require('./middlewares')(app);
require('./middlewares/routes')(app);
// global error handler (must be called after the routes)
app.use(error);

module.exports = app;