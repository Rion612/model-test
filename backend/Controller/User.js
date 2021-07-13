const User = require('../Model/User');

const jwt = require('jsonwebtoken');

exports.signUp = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({
                    message: "something is wrong !"
                })
            }
            else if (user) {
                return res.status(400).json({
                    message: "User already exist"
                })
            }
            else {
                const userObj = {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: req.body.password,
                    contact: req.body.contact,
                    gender: req.body.gender,
                    institutionName: req.body.institutionName

                }
                if (req.file) {
                    userObj.userImage = process.env.API_URL + 'public/' + req.file.filename;
                }
                const _user = new User(userObj);

                _user.save((error, _user) => {
                    if (error) {
                        return res.status(400).json({
                            message: "Something wrong !"
                        })
                    }
                    else {
                        return res.status(201).json({
                            _user
                        })
                    }
                })
            }
        })
}
exports.userSignin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({
                    error
                });
            }
            else if (user) {
                if (user.authenticate(req.body.password)) {
                    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });
                    const { firstname, lastname, email, contact, _id, gender, institutionName, userImage } = user;
                    const fullname = user.fullname(firstname, lastname);
                    return res.status(200).json({
                        token,
                        user: {
                            _id,
                            fullname,
                            email,
                            contact,
                            gender,
                            institutionName,
                            userImage

                        }


                    })
                }
                else {
                    return res.status(400).json({
                        message: "Password didnot match"
                    });

                }

            }
            else {
                return res.status(400).json({
                    message: "User not found"
                });
            }
        });

}

exports.userUpdate = (req, res) => {
    const userUpdateObj = {};
    if (req.body.firstname) {
        userUpdateObj.firstname = req.body.firstname;
    }
    if (req.body.lastname) {
        userUpdateObj.lastname = req.body.lastname;
    }
    if (req.body.contact) {
        userUpdateObj.contact = req.body.contact;
    }
    if (req.body.institutionName) {
        userUpdateObj.institutionName = req.body.institutionName;
    }
    if (req.body.gender) {
        userUpdateObj.gender = req.body.gender;
    }
    if (req.file) {
        userUpdateObj.userImage = process.env.API_URL + 'public/' + req.file.filename;
    }
    User.findOneAndUpdate({ email: req.body.email }, {
        "$set": userUpdateObj,
        "$currentDate": { lastModified: true }
    })
        .exec((error, result) => {
            if (result) {
                User.findOne({ email: result.email })
                    .exec((error, user) => {
                        if (error) {
                            return res.status(400).json({
                                error
                            });
                        }
                        else if (user) {
                            const { firstname, lastname, email, contact, _id, gender, institutionName, userImage } = user;
                            const fullname = user.fullname(firstname,lastname);
                            return res.status(200).json({
                                user :{
                                    _id,
                                    fullname,
                                    email,
                                    contact,
                                    gender,
                                    institutionName,
                                    userImage
        
                                }
                            });
                        }
                    })
            }
            else {
                return res.status(400).json({
                    error
                });

            }

        })
}

exports.getAllUser = (req,res)=>{
    User.find({})
    .select("_id firstname lastname email contact gender institutionName userImage")
    .exec((error,users)=>{
        if(users){
            return res.status(200).json({
                users
            });
        }
        else {
            return res.status(400).json({
                error
            });

        }
    })
}