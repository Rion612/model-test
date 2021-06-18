const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    courseImage:{
      type:String,
      required:true
    },
    price :{
      type :String,
      required : true
    },
    description:{
      type:String,
      required:true
    },
    unit: [
      {
        unitName: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
