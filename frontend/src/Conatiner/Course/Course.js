import React, { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import { Container, Row, Col, Button, Table, Modal, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './course.css';
import { ImPriceTag } from 'react-icons/im';
import { BiTimeFive } from 'react-icons/bi';
import { FaKey } from 'react-icons/fa';
import Input from '../../Components/Input/Input';
import axios from '../../helpers/axios';
import { Link } from 'react-router-dom';
const Course = (props) => {
    const slug = props.match.params.slug;
    const courses = useSelector(state => state.course.courses);
    const user = useSelector(state => state.user.user)
    const item = courses.find(x => x.slug === slug);
    const registerCourses = useSelector(state => state.payment.payments);

    const element = registerCourses.find(x => x.courseId === item?._id && x.userId === user._id && x.status === "approved");

    const [amount, setAmount] = useState("");
    const [courseId, setCourseId] = useState("");
    const [userId, setUserId] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [unitId, setUnitId] = useState("");


    const [show, setShow] = useState(false);

    const [view, setView] = useState(false);

    const manageClose = () => {
        setView(false);
    }

    const handleClose = async () => {
        

        const paymentObj = {
            transactionId,
            courseId,
            userId,
            amount
        }
        if(unitId && unitId != 'Select Unit'){
            paymentObj.unitId = unitId

        }
        console.log(paymentObj);
        await axios.post('/user/make/payment', paymentObj)
            .then((res) => {
                console.log(res);
                setTransactionId("");
                setUnitId("");
                setShow(false);
                setView(true);
            }).catch((error) => {
                setUnitId("");
                setTransactionId("");
                setShow(false)
                console.log(error);
            })

    };
    const handleShow = () => {
        setAmount(item.price);
        setUserId(user._id);
        setCourseId(item._id);
        setUnitId(unitId);
        setShow(true)
    };
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
            <Modal show={show} onHide={() => setShow(false)} style={{ marginTop: '40px' }} size="lg">
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
                                ID and unit name in the section below.
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
                                value={transactionId}
                                onChange={(e) => setTransactionId(e.target.value)}

                            />
                        </Col>
                    </Row>
                    <Row className="mt-3">

                        <Col>
                            {
                                item?.unit.length > 0 ?
                                    <select
                                        className="form-control"
                                        value={unitId}
                                        onChange={(e) => setUnitId(e.target.value)}
                                    >
                                        <option>Select Unit</option>
                                        {item.unit.map((option) => (
                                            <option key={option._id} value={option._id}>
                                                {option.unitName}
                                            </option>
                                        ))}
                                    </select>
                                    :
                                    null

                            }

                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={view} onHide={manageClose} style={{ marginTop: '140px' }} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-justify">

                    <Alert variant="success">
                        <p>
                            Your payment details has been submitted.
                            It may take atleast 10 -20 minutes to add the course in your course
                            enrollment section. Please Go to <Link to={"/enrolled/courses"}>Enrolled courses</Link> and refresh your
                            page after 10-30 minutes.
                        </p>
                    </Alert>

                </Modal.Body>
            </Modal>



        </div>
    );
};

export default Course;