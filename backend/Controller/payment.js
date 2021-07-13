const Payment = require("../Model/Payment")


exports.paymentProcess = (req, res) => {
    Payment.findOne({ transactionId: req.body.transactionId })
        .exec((error, result) => {
            if (error) {
                return res.status(400).json({
                    error
                })
            }
            else if (result) {
                return res.status(400).json({
                    message: "You have already submitted once!"
                })
            }
            else {

                const paymentObj = {
                    courseId,
                    userId,
                    transactionId,
                    amount,
                    status

                } = req.body;

                if (req.body.unitId) {
                    paymentObj.unitId = req.body.unitId
                }

                const payment = new Payment(paymentObj);


                payment.save((error, _payment) => {
                    if (error) {
                        return res.status(400).json({
                            error
                        })
                    }
                    else {
                        return res.status(201).json({
                            _payment
                        })
                    }
                })

            }
        })

}

exports.getPaymentDetails = (req, res) => {
    Payment.find({}).exec((error, paymentDetails) => {
        if (error) {
            return res.status(400).json({
                error,
            });
        } else if (paymentDetails) {
            return res.status(200).json({
                paymentDetails
            });
        }
    })
}

exports.makeApproved = (req, res) => {
    Payment.findOneAndUpdate({_id: req.body._id}, {
        "$set": {
            status : req.body.status

        }
    }
    ).exec((error,d) => {
        if (error) {
            return res.status(400).json({
                error,
            });
        }
        else {
            Payment.findOne({_id : d._id})
            .exec((error,data)=>{
                if (error) {
                    return res.status(400).json({
                        error,
                    });
                }
                else{
                    return res.status(200).json({
                        data
                    });
                }
            })

        }
    })
}

exports.deletePayment = (req, res) => {
    Payment.findOneAndDelete({ _id: req.body._id })
        .exec((error, payment) => {
            if (error) {
                return res.status(400).json({
                    message: "Something Wrong"
                });
            }
            else if (payment) {

                return res.status(200).json(
                    { message: "Item is deleted successfully" }
                );
            }

        })
}