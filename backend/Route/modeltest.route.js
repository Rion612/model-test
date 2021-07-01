const express = require('express');
const { createModelTest, getAllModelTest, getOneModeltest, getSingleModeltest } = require('../Controller/modelTest');


const router = express.Router();




router.post('/create/model-test',createModelTest);

router.get('/get/all/model-tests',getAllModelTest);

router.get('/get/model-tests/:slug/:unitId',getOneModeltest);
router.get('/get/model-tests/:slug',getSingleModeltest);


module.exports =  router;