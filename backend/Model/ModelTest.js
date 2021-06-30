const mongoose = require("mongoose");

const modelTestSchema = new mongoose.Schema(
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
    modeltests: [
      {
        modelName: {
          type: String,
          trim: true,
          required: true,
        },
        status: {
          type: String,
          required: true,
          default : "unavailable"
        }
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ModelTest", modelTestSchema);
