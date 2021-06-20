import React, { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import { Container, Row, Col, Button, Table, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './course.css';
import { ImPriceTag } from 'react-icons/im';
import { BiTimeFive } from 'react-icons/bi';
import { FaKey } from 'react-icons/fa';
import Input from '../../Components/Input/Input';
const Course = (props) => {
    const slug = props.match.params.slug;
    const courses = useSelector(state => state.course.courses);
    const item = courses.find(x => x.slug === slug);
    const registerCourses = useSelector(state => state.payment.payments);

    const element = registerCourses.find(x => x.courseId === item._id);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                            <td><BiTimeFive /> Length</td>
                                            <td>4 weeks</td>
                                        </tr>
                                        <tr>
                                            <td><FaKey /> Total No. of Model-tests</td>
                                            <td>25</td>
                                        </tr>
                                        <tr>
                                            <td><ImPriceTag /> Price</td>
                                            <td>{item?.price}</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={6} style={{ marginTop: '50px' }}>
                                {
                                    element ?
                                        <Button variant="danger" size="lg" block onClick={handleShow} disabled>
                                            Already enrolled
                                        </Button>
                                        :
                                        <Button variant="danger" size="lg" block onClick={handleShow}>
                                            Enrollment
                                        </Button>
                                }


                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
            <Modal show={show} onHide={handleClose} style={{ marginTop: '40px' }} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Enrollment And Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>

                        <Col><label className="font-weight-bold">Payment Method :</label></Col>
                        <Col>
                            <img
                                src={process.env.PUBLIC_URL + "/bkash_logo.png"}
                                alt="bkash logo"
                                height="60px"
                                width="200px" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>

                        <Col>

                            <br />
                            <img
                                src={process.env.PUBLIC_URL + "/bkash-system.png"}
                                alt="bkash logo"
                                height="400px"
                                width="100%" />
                        </Col>
                    </Row>
                    <hr />
                    <Row className="mt-3" style={{ fontSize: '18px' }}>

                        <Col>
                            <p className="text-danger">If you have completed your payment,
                                you are now requested to submit your transaction
                                ID in the section below.
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="mt-3">

                        <Col>
                            <label className="font-weight-bold">Payment transaction Id:</label>
                            <Input
                                type="text"
                                placeholder="Transaction id"

                            />
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default Course;