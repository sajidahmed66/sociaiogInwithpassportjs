require('dotenv').config();

const mongoose = require('mongoose');

const app = require('./app');

mongoose.connect(process.env.MONGODB_URL_LOCAL)
    .then(() => console.log('Connected to MongoDB....'))
    .catch(err =>
        console.log("could not conncet to MongoDB", err));


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server Listening on port ${port}...`);
});
