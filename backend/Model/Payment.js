const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        courseId: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Course',
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User',
            required: true,
        },
        transactionId: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            default : 'not approved'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
