import { Container, Row, Col, Alert } from 'react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../Components/Layout/Layout';
import CardComponent from '../../Components/Card/Card';
import { Link } from 'react-router-dom'


const RegisterCourse = () => {

    const user = useSelector(state => state.user);
    const payment = useSelector(state => state.payment.payments);
    const course = useSelector(state => state.course.courses);


    const enrolledCourses = payment.filter(x => x.userId === user.user._id && x.status === "approved");

    const regiCourse = () => {
        const rCourses = [];
        enrolledCourses.forEach(element => {
            const c = course.find(x => x._id === element.courseId);
            const unit = c?.unit.find(y => y._id === element.unitId);

            rCourses.push({
                courseId: c?._id,
                courseName: c?.courseName,
                slug: c.slug,
                courseImage: c?.courseImage,
                unitName: unit ? unit.unitName : ""
            })

        });
        console.log(rCourses);
        return rCourses;
    }
    return (
        <Layout>
            <div className="mainDiv">
                <Container>
                    <h1>Enrolled course list:</h1>
                    <Row>
                        {
                            regiCourse().length > 0 ?
                                regiCourse().map((item, index) => {

                                    return (
                                        <Col md={4} style={{ marginTop: '20px' }} key={index}>
                                            <CardComponent
                                                image={item.courseImage}
                                                name={item.unitName ? (item.courseName + "-" + item.unitName + " unit") : item.courseName}
                                                title={item.slug}


                                            />
                                            <Link to={'/model-tests/' + item.slug}>
                                                <button className="btn btn-primary mt-3 w-100" style={{ fontSize: '20px' }}>
                                                    View All Model-Tests
                                                </button>
                                            </Link>


                                        </Col>
                                    )
                                })
                                : <div style={{ width: '100%', textAlign: 'center', fontSize: '25px' }}>
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