const mongoose = require("mongoose");

const modelTestSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    status:{
      type:String,
      required: true

    },
    unitId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,

    },
    modeltests: [
      {
        modelName: {
          type: String,
          trim: true,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ModelTest", modelTestSchema);
