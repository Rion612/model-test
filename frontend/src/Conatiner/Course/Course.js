import React from 'react';
import Layout from '../../Components/Layout/Layout';
import { Container, Row, Col, Button,Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './course.css';
import { ImPriceTag } from 'react-icons/im';
import { BiTimeFive } from 'react-icons/bi';
import { FaKey } from 'react-icons/fa';
const Course = (props) => {
    const slug = props.match.params.slug;
    const courses = useSelector(state => state.course.courses);
    const item = courses.find(x => x.slug === slug);
    return (
        <div>
            <Layout>
                <div className="mainDiv">
                    <Container>
                        <Row>
                            <Col md={6} classname="p-2">
                                <h2>{(item?.courseName)?.toUpperCase()}</h2>
                                <p className="text-justify mt-5">Attend the Model Test formatted in this course to prepare
                                    yourself for the upcoming {item?.courseName} exam and be confident.</p>

                                <p className="text-justify mt-5"> {item?.description}</p>
                            </Col>
                            <Col md={6}>
                                <img
                                    src={item?.courseImage}
                                    alt="courseimage"
                                    height="350px"
                                    width="100%"

                                />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '50px' }}>
                            <Col md={6} >
                                <Table bordered>
                                    <tbody>
                                        <tr>
                                            <td><BiTimeFive/> Length</td>
                                            <td>4 weeks</td>
                                        </tr>
                                        <tr>
                                            <td><FaKey/> Total No. of Model-tests</td>
                                            <td>25</td>
                                        </tr>
                                        <tr>
                                            <td><ImPriceTag/> Price</td>
                                            <td>{item?.price}</td>
                                        </tr>
                                       
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={6} style={{ marginTop: '50px' }}>
                                <Button variant="danger" size="lg" block>
                                    Enrollment
                                </Button>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>

        </div>
    );
};

export default Course;