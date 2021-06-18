const express = require('express');

const router = express.Router();

const path = require('path');
const multer = require('multer');
const shortId = require('shortid');
const { createCourse, getAllCourses, getOneCourse } = require('../Controller/courseController');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'Uploads'))
    },
    filename:function(req,file,cb){
        cb(null,shortId.generate()+'-'+file.originalname)
    }
})

const upload = multer({storage})



router.post('/create/course',upload.single('courseImage'),createCourse);
router.get('/get/all/courses',getAllCourses);

router.get('/get/course/:slug',getOneCourse);




module.exports = router;