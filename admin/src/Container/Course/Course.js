import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const Course = () => {
    const dispatch = useDispatch();

    const courses = useSelector(state => state.course);
    function capitalize(string) {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
    }
    return (
        <div className="mainDiv">
            <h1 className="title">Course</h1>
            <div className="container" style={{ marginTop: "50px" }}>
                <ul style={{ fontSize: "20px" }}>
                    {
                        courses.loading ?
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Spinner animation="border" role="status" variant="primary">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </div>
                            :
                            courses.courses.map((item, index) => {

                                return (
                                    <div>
                                        <li key={item.courseName}>{capitalize(item?.courseName)}</li>
                                        <div>
                                            <ul style={{ marginLeft: '30px' }}>
                                                {
                                                    item?.unit.length > 0 ?
                                                        item.unit.map((element, position) => {
                                                            return (
                                                                <li key={element.unitName}>{element.unitName}</li>
                                                            )

                                                        }) : null
                                                }
                                            </ul>
                                        </div>
                                    </div>


                                )
                            })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Course;