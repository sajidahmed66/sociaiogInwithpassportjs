const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models/user');
const _ = require('lodash');

const Strategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL

}, async (accessToken, refreshToken, profile, cb) => {
    let user = await User.findOne({ googleId: profile.id, email: profile._json.email });
    if (!user) {
        user = await User.create({ //User.create() is shorthand for new User({}).save()
            name: profile._json.name,
            email: profile._json.email,
            googleId: profile.id
        });
        const token = user.generateAuthToken();
        const response = {
            user: _.pick(user, ['_id', 'email',]),
            token: token
        };
        return cb(null, response);
    } else {
        const token = user.generateAuthToken();
        const response = {
            user: _.pick(user, ['_id', 'email',]),
            token: token
        };
        return cb(null, response);
    }
});

passport.use(Strategy);

// this config file contains google strategy for passport!
//