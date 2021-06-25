const express = require('express');
const { createModelTest, getAllModelTest } = require('../Controller/modelTest');


const router = express.Router();




router.post('/create/model-test',createModelTest);

router.get('/get/all/model-tests',getAllModelTest);


module.exports =  router;