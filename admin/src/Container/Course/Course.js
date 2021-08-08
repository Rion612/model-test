import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const Course = () => {
    const dispatch = useDispatch();

    const courses = useSelector(state => state.course);
    const modeltests = useSelector(state => state.modeltest);
    function capitalize(string) {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
    }
    return (
        <div className="mainDiv">
            <h1 className="title">Course</h1>
            <div className="container" style={{ marginTop: "50px" }}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div><h2>All the courses, units and modeltests :</h2></div>
                    <div><button className="btn btn-primary">Create Course</button></div>
                </div>
                <div style={{marginTop:'30px',marginLeft:'50px'}}>
                <ol style={{ fontSize: "20px" }}>
                    {
                        courses.loading ?
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Spinner animation="border" role="status" variant="primary">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </div>
                            :
                            courses.courses.map((item, index) => {
                                const mt = modeltests.modeltests.find(y => y.courseId === item._id);
                                return (
                                    <div>
                                        <li key={item.courseName}>{capitalize(item?.courseName)}</li>
                                        <div>
                                            <ul style={{ marginLeft: '30px' }}>
                                                {
                                                    item?.unit.length > 0 ?
                                                        item.unit.map((element, position) => {
                                                            const m = modeltests.modeltests.find(x => x?.courseId === item?._id && x?.unitId === element?._id)
                                                            return (
                                                                <div>

                                                                    <li key={element.unitName}>{element.unitName}</li>
                                                                    <div>
                                                                        <ul style={{ marginLeft: '30px' }}>
                                                                            {
                                                                                m ? 
                                                                                m?.modeltests.map((ele , i)=>{
                                                                                    return(
                                                                                        <li key={ele.modelName}>{ele.modelName}</li>
                                                                                    )

                                                                                }): null
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            )

                                                        }) : 
                                                        <div>
                                                            {
                                                                mt?.modeltests?.map((it, K)=>{
                                                                    return(
                                                                        <div>
                                                                            <ul>
                                                                                <li>{it?.modelName}</li>
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                })
                                                                
                                                            }
                                                        </div>
                                                }
                                            </ul>
                                        </div>
                                    </div>


                                )
                            })
                    }
                </ol>
                </div>
            </div>
        </div>
    );
};

export default Course;