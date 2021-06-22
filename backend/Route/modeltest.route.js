const express = require('express');
const { createModelTest } = require('../Controller/modelTest');


const router = express.Router();




router.post('/create/model-test',createModelTest);


module.exports =  router;