const express = require('express');
const { paymentProcess, getPaymentDetails } = require('../Controller/payment');

const router = express.Router();




router.post('/user/make/payment',paymentProcess);
router.get('/get/payment/details',getPaymentDetails);




module.exports = router;