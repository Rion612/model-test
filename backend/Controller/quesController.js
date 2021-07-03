const Course = require("../Model/Course");
const Question = require("../Model/Question");

exports.createQuestion = (req, res) => {
  Question.findOne({
    courseId: req.body.courseId,
    modelId: req.body.modelId,
  }).exec((error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    } else if (data) {
      if (data.modelId == req.body.modelId) {
        Question.findOneAndUpdate(
          {
            courseId: req.body.courseId,
            modelId: req.body.modelId,
          },
          {
            $push: {
              questions: req.body.questions,
            },
          }
        ).exec((error, _data) => {
          if (error) {
            return res.status(400).json({
              error,
            });
          } else {
            return res.status(200).json({
              _data,
            });
          }
        });
      } else {
        return res.status(200).json({
          message: "Something going wrong",
        });
      }
    } else {
      const quesObject = {
        courseId: req.body.courseId,
        modelId: req.body.modelId,
        questions: [req.body.questions],
      };
      if (req.body.unitId) {
        quesObject.unitId = req.body.unitId;
      }
      const ques = new Question(quesObject);
      ques.save((error, data) => {
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

exports.getQuestions = (req, res) => {

  const { slug , modelId } = req.params;
  Course.findOne({
    slug : slug
  }).exec((error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    } else if (data) {
      Question.findOne({ courseId : data._id, modelId : modelId})
      .exec((error,questions)=>{
        if(questions){
          return res.status(200).json({
            questions
          });
        }
        else{
          return res.status(400).json({
            error,
          });
        }
      })
    }

  })

}
