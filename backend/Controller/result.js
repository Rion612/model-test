const Result = require("../Model/Result")

exports.createResult = (req, res) => {
    let searchObj = {}
    if (req.body.unitId) {
        searchObj = {
            userId: req.body.userId,
            courseId: req.body.courseId,
            modelId: req.body.modelId,
            unitId: req.body.unitId
        }
    }
    else {
        searchObj = {
            userId: req.body.userId,
            courseId: req.body.courseId,
            modelId: req.body.modelId
        }

    }
    Result.findOne(searchObj)
        .exec((error, data) => {
            if (error) {
                return res.status(400).json({
                    error,
                });

            }
            else if (data) {
                Result.findOneAndUpdate(searchObj, {
                    "$set": {
                        attempt: data.attempt + 1,
                        mark: req.body.mark,
                        wrongAns: req.body.wrongAns,
                        correctAns: req.body.correctAns,
                        totalQuestions: req.body.totalQuestions,
                        attemptQuestions: req.body.attemptQuestions

                    }
                }
                ).exec((error, result) => {
                    if (error) {
                        return res.status(400).json({
                            error,
                        });
                    }
                    else {
                        return res.status(200).json({
                            result: result
                        });

                    }
                })

            }
            else {
                const obj = {
                    userId: req.body.userId,
                    courseId: req.body.courseId,
                    modelId: req.body.modelId,
                    mark: req.body.mark,
                    wrongAns: req.body.wrongAns,
                    correctAns: req.body.correctAns,
                    totalQuestions: req.body.totalQuestions,
                    attemptQuestions: req.body.attemptQuestions
                }
                if (req.body.unitId) {
                    obj.unitId = req.body.unitId
                }
                const result = new Result(obj);
                result.save((error, _result) => {
                    if (error) {
                        return res.status(400).json({
                            error,
                        });

                    }
                    else {
                        return res.status(200).json({
                            result: _result
                        });

                    }
                })
            }
        })
}
exports.getAllResults = (req, res) => {
    const { userId } = req.params;
    Result.find({ userId: userId })
        .exec((error, result) => {
            if (error) {
                return res.status(400).json({
                    message: "Something is wrong!"
                })
            }
            else {
                return res.status(200).json({
                    result
                })
            }
        })
}
exports.getOneResult = (req, res) => {
    const { id } = req.params;
    Result.findOne({ modelId: id })
        .exec((error, result) => {
            if (error) {
                return res.status(400).json({
                    message: "Something is wrong!"
                })
            }
            else {
                return res.status(200).json({
                    result
                })
            }
        })
}