const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    unitId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    modelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ModelTest",
      required: true,
    },
    questions: [
      {
        ques: {
          type: String,
          trim: true,
          required: true,
        },
        optionA: {
          type: String,
          trim: true,
          required: true,
        },
        optionB: {
          type: String,
          trim: true,
          required: true,
        },
        optionC: {
          type: String,
          trim: true,
          required: true,
        },
        optionD: {
          type: String,
          trim: true,
          required: true,
        },
        ans: {
          type: String,
          trim: true,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
