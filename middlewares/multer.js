const multer = require('multer');
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'media/img');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}.${ext}`;
        cb(null, uniqueName);
    }
});

module.exports = multer({ storage: multerStorage }).single('photo');