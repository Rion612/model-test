const ModelTest = require('../Model/ModelTest');
const Course = require("../Model/Course");


exports.createModelTest = (req, res) => {
    ModelTest.findOne({
        courseId: req.body.courseId,
        unitId: req.body.unitId
    }).exec((error, data) => {
        if (error) {
            return res.status(400).json({
                error,
            });
        } else if (data) {
            const item = data.modeltests.find(
                (c) => c.modelName == req.body.modeltests.modelName
            );
            if (item) {
                return res.status(400).json({
                    message: "Model test already exist",
                });
            } else {
                ModelTest.findOneAndUpdate(
                    { courseId: req.body.courseId, unitId: req.body.unitId },
                    {
                        $push: {
                            modeltests: req.body.modeltests,
                        },
                    }
                ).exec((error, _data) => {
                    if (error) {
                        return res.status(400).json({
                            error,
                        });
                    } else if (_data) {
                        ModelTest.findOne({_id : _data._id})
                        .exec((error,m)=>{
                            if (error) {
                                return res.status(400).json({
                                    error,
                                });
                            } 
                            else{
                                return res.status(200).json({
                                    modeltest : m
                                });

                            }

                        })
                    }
                });
            }
        } else {
            const modelObj = {
                courseId: req.body.courseId,
                unitId :req.body.unitId,
                modeltests: req.body.modeltests,
            };
            const modeltest = new ModelTest(modelObj);

            modeltest.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        error,
                    });
                } else if (data) {
                    return res.status(200).json({
                        data,
                    });
                }
            });
        }
    });
};


exports.getAllModelTest = (req,res)=>{
    ModelTest.find({})
    .exec((error,modeltests)=>{
        if (error) {
            return res.status(400).json({
                error
            });
        }
        else{
            return res.status(200).json({
                modeltests
            });

        }

    })
}
exports.getOneModeltest = (req,res)=>{
    const {slug,unitId} = req.params;

    Course.findOne({slug : slug})
    .exec((error,data)=>{
        if(error){
            return res.status(400).json({
                error
            });
        }
        else if(data){
            ModelTest.findOne({courseId : data._id, unitId : unitId})
            .exec((error,modeltest)=>{
                if(error){
                    return res.status(400).json({
                        error
                    });
                }
                else{
                    return res.status(200).json({
                        modeltest
                    });
                }

            })

        }
    })

    
}