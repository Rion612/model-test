import { Container, Row, Col, Alert } from 'react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../Components/Layout/Layout';
import CardComponent from '../../Components/Card/Card';


const RegisterCourse = () => {

    const user = useSelector(state => state.user);
    const payment = useSelector(state => state.payment.payments);
    const course = useSelector(state => state.course.courses);


    const enrolledCourses = payment.filter(x => x.userId === user.user._id && x.status === "approved");
    return (
        <Layout>
            <div className="mainDiv">
                <Container>
                    <h1>Enrolled course list:</h1>
                    <Row>
                        {
                            enrolledCourses.length > 0 ?
                                enrolledCourses.map((item, index) => {
                                    const element = course.find(x => x._id === item.courseId);
                                    const unit = element.unit.find(y => y._id === item.unitId);

                                    return (
                                        <Col md={4} style={{ marginTop: '20px' }} key={index}>
                                            <CardComponent
                                                image={element.courseImage}
                                                name={element.courseName + "-" + unit?.unitName + " Unit"}
                                                title={element.courseName}


                                            />

                                            <button className="btn btn-primary mt-3 w-100" style={{ fontSize: '20px' }}>
                                                View All Model-Tests
                                            </button>
                                        </Col>
                                    )
                                })
                                :
                                <div style={{ width: '100%', textAlign: 'center', fontSize: '25px' }}>
                                    <Alert variant="info">
                                        There is no course registered yet.
                                    </Alert>

                                </div>


                        }
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default RegisterCourse;