// for testing file upload with multer
const router = require('express').Router();
const upload = require('../middlewares/multer');
const multer = require('multer');


router.route('/')
    .post(async (req, res) => {
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                // return res.status(500).json(err);
            } else if (err) {
                // return res.status(500).json(err);
            }
            console.log(req.file);
            console.log(req.body);
        })

    })


module.exports = router;