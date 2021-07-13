const express = require('express');
const { signUp, userSignin, userUpdate, getAllUser, deleteUser } = require('../Controller/User');

const router = express.Router();

const path = require('path');
const multer = require('multer');
const shortId = require('shortid');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'Uploads'))
    },
    filename:function(req,file,cb){
        cb(null,shortId.generate()+'-'+file.originalname)
    }
})

const upload = multer({storage})



router.post('/user/signup',upload.single('userImage'),signUp);
router.post('/user/signin',userSignin);

router.post('/user/update/profile',upload.single('userImage'),userUpdate);

router.get('/get/all/user/info', getAllUser);

router.post('/delete/user',deleteUser)

module.exports = router;