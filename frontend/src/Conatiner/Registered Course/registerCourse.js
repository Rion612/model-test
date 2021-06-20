import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import CardComponent from '../../Components/Card/Card';


const RegisterCourse = () => {

    const user = useSelector(state => state.user);
    const payment = useSelector(state => state.payment.payments);
    const course = useSelector(state => state.course);


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
                                    const element = course.courses.find(x => x._id === item.courseId);
                                    return (
                                        <Col md={4} style={{ marginTop: '20px' }} key={index}>
                                            <Link>
                                                <CardComponent
                                                    image={element.courseImage}
                                                    name={element.courseName}
                                                    title={element.courseName}

                                                />
                                            </Link>
                                        </Col>
                                    )
                                })
                                :
                                <p>There is no course registered yet.</p>

                        }
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default RegisterCourse;