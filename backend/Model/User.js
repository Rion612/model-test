
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    hash_password: {
        type: String,
        required: true,
        min: 6
    },
    contact: {
        type: String,
        required: true
    },
    userImage: {
        type: String
    },
    institutionName: {
        type: String,
        trim: true
    },
    gender: {
        type: String
    }


}, { timestamps: true });
userSchema.virtual('password')
    .set(function (password) {
        this.hash_password = bcrypt.hashSync(password, 5);
    });

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hash_password);
    },
    fullname: function (firstname, lastname) {
        const fullname = firstname + " " + lastname;
        return fullname;
    }
}
module.exports = mongoose.model('User', userSchema);