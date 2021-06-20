const Payment = require("../Model/Payment")


exports.paymentProcess = (req,res)=>{
    Payment.findOne({transactionId : req.body.transactionId})
    .exec((error,result)=>{
        if(error){
            return res.status(400).json({
                error
            })
        }
        else if(result){
            return res.status(400).json({
                message :"You have already submitted once!"
            })
        }
        else{
            const paymentObj = {
                courseId,
                userId,
                transactionId,
                amount,
                status
        
            } = req.body;
        
            const payment = new Payment(paymentObj);
        
        
            payment.save((error,_payment)=>{
                if(error){
                    return res.status(400).json({
                        error
                    })
                }
                else{
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