const express = require('express');
const { paymentProcess, getPaymentDetails, makeApproved, deletePayment } = require('../Controller/payment');

const router = express.Router();




router.post('/user/make/payment',paymentProcess);
router.get('/get/payment/details',getPaymentDetails);

router.post('/user/apyment/approve',makeApproved);
router.post('/user/apyment/delete',deletePayment);




module.exports = router;