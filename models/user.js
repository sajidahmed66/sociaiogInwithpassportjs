// create a user model 
const { Schema, model } = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 1024
    },
}, { timestamps: true });


userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name
    }, process.env.JWT_SECRET_KEY, { expiresIn: '12h' });
    return token;
}

const validateUser = (user) => {
    const schema = joi.object({
        email: joi.string().min(5).max(255).required().email(),
    })
    return schema.validate(user);
}

module.exports.User = model('User', userSchema);
module.exports.validate = validateUser;