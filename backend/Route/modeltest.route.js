const express = require('express');
const { createModelTest, getAllModelTest, getOneModeltest } = require('../Controller/modelTest');


const router = express.Router();




router.post('/create/model-test',createModelTest);

router.get('/get/all/model-tests',getAllModelTest);

router.get('/get/model-tests/:slug/:unitId',getOneModeltest);


module.exports =  router;