import React, { useState, useEffect } from 'react';
import { Form, Spinner, Table, Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const Course = () => {
    const dispatch = useDispatch();

    const courses = useSelector(state => state.course);

    return (
        <div className="mainDiv">
            <h1 className="title">Course</h1>
            <div className="container" style={{ marginTop: "50px" }}>
                { /* 
                    courses.loading ?
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Spinner animation="border" role="status" variant="primary">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div>
                        :
                        <ul>
                            <li>Coffee</li>
                            <li>Tea
                                <ul>
                                    <li>Black tea</li>
                                    <li>Green tea</li>
                                </ul>
                            </li>
                            <li>Milk</li>
                        </ul>

               */ }
                <ul>
                    <li> Managing Director
                        <ul>
                            <li> Sales Director </li>
                            <li> IT Director
                                <ul>
                                    <li> Technical Lead
                                        <ul>
                                            <li> Software Developer </li>
                                            <li> Support Technicial </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li> HR Department
                                <ul>
                                    <li> HR Officer
                                        <ul>
                                            <li> HR Assistant 1 </li>
                                            <li> HR Assistant 2 </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Course;