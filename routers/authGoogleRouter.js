const router = require('express').Router();
const passport = require('passport');

/* ************************* 
this file loads,and passport uses the google strategy.
must be lexically scoped to the router./ placed above the router code.
**************************** */
require('../config/authGoogleConfig');
//********************** *****************************/
router.route('/')
    .get(passport.authenticate('google', // handle the google strategy 
        { scope: ['profile', 'email'] })
    );
router.route('/redirect')
    .get(passport.authenticate('google', { session: false }), //handel the callback from googleStrategy that is passed in authGoogleConfig.js file 
        (req, res) => {
            res.send(req.user);
        });

module.exports = router;