const express = require("express");
const { createQuestion, getQuestions } = require("../Controller/quesController");

const router = express.Router();

router.post("/admin/create/questions", createQuestion);
router.get("/get/questions/:slug/:modelId",getQuestions);

module.exports = router;
