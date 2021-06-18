const Course = require("../Model/Course");
const slugify = require('slugify');

exports.createCourse = (req, res) => {
  Course.findOne({ courseName: req.body.courseName }).exec((error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    } else if (data) {
      if (req.body.unit) {
        const item = data.unit.find(
          (c) => c.unitName == req.body.unit.unitName
        );
        if (item) {
          return res.status(400).json({
            message: "Course unit already exist",
          });
        } else {
          Course.findOneAndUpdate(
            { courseName: req.body.courseName },
            {
              $push: {
                unit: req.body.unit,
              },
            }
          ).exec((error, data) => {
            if (error) {
              return res.status(400).json({
                message: "Something wrong",
              });
            } else {
              return res.status(200).json({
                data,
              });
            }
          });
        }
      } else {
        return res.status(400).json({
          message: "Course already exist",
        });
      }
    } else {
      const courseObj = {
        courseName: req.body.courseName,
        slug: slugify(req.body.courseName),
        price : req.body.price,
        description : req.body.description
      };
      if (req.body.unit) {
        courseObj.unit = req.body.unit;
      }
      if (req.file) {
        courseObj.courseImage = process.env.API_URL + 'public/' + req.file.filename;
      }
      const course = new Course(courseObj);
      course.save((error, data) => {
        if (error) {
          return res.status(400).json({
            error,
          });
        } else if (data) {
          return res.status(200).json({
            data,
          });
        }
      });
    }
  });
};


exports.getAllCourses = (req, res) => {
  Course.find({}).exec((error, courses) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    } else if (courses) {
      return res.status(200).json({
        courses
      });
    }
  })
}

exports.getOneCourse = (req, res) => {
  const { slug } = req.params;

  Course.findOne({ slug: slug })
    .exec((error, course) => {
      if (error) {
        return res.status(400).json({
          error
        })

      }
      else if (course) {
        return res.status(200).json({
          course
        })

      }
    })
}
