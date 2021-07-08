const express = require("express");
const { createResult, getAllResults, getOneResult } = require("../Controller/result");

const router = express.Router();

router.post("/create/results", createResult);
router.get("/get/all/results/:userId",getAllResults);

router.get("/result/summary/:id",getOneResult);

module.exports = router;