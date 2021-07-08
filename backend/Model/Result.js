const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
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
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,

        },
        mark :{
            type:Number,
            required:true
        },
        attempt:{
            type:Number,
            default:1
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);
