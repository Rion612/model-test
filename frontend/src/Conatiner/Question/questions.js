import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../Components/Layout/Layout';
import { useSelector } from 'react-redux';
import axios from '../../helpers/axios';
import { Row, Col, Container, Button, Modal } from 'react-bootstrap';
import { BiTime } from 'react-icons/bi'
import {  useHistory } from 'react-router-dom';




const Question = (props) => {
    const history = useHistory();
    const [modeltests, setModeltests] = useState({});
    const [questions, setQuestions] = useState({});
    const [error, setError] = useState("");
    const courses = useSelector(state => state.course.courses);
    const course = courses.find(x => x._id === modeltests?.courseId);
    const [hour, setHour] = useState(0);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswer] = useState([]);
    const [examFinish, setExamFinish] = useState(false);
    const [examDetails, setExamDetails] = useState({});

    const userId = useSelector(state => state.user.user._id);
    const [show, setShow] = useState(false);



    const d = new Date();
    useEffect(async () => {
        try {
            const res = await axios.get(`/get/model-tests/${props.match.params.slug}`);
            setModeltests(res.data.modeltest);
        } catch (err) {
            setError("Something wrong!");
        }
    }, []);
    useEffect(async () => {
        try {
            const res = await axios.get(`/get/questions/${props.match.params.slug}/${props.match.params.modelId}`);

            setQuestions(res.data.questions);
        } catch (err) {
            setError("Something wrong!");
        }
    }, []);

    const modeltest = modeltests?.modeltests?.find(x => x._id === props.match.params.modelId);

    const handleShow = () => {
        setShow(true);
    };

    function capitalize(str) {
        return str?.charAt(0).toUpperCase() + str?.slice(1);
    }
    let Interval = useRef();
    const startTimer = () => {
        const countDowntime = Date.now() + 15000;
        Interval = setInterval(() => {
            const now = new Date();
            const distance = countDowntime - now;

            const hour = Math.floor(distance / (60 * 60 * 1000));

            const minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));

            const s = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                clearInterval(Interval);
                setSecond(0);
                setMinute(0);
                setHour(0);
                handleShow();

            }
            else {
                setSecond(s);
                setMinute(minute);
                setHour(hour);
            }

        }, 1000)


    }
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(Interval.current);
        }
    }, [])
    const handleChange = (e, index) => {
        const value = e.target.value;
        answers[index] = value;
        if (answers[index] === questions.questions[index].ans) {
            correctAnswers[index] = 1;

        }
        else {
            correctAnswers[index] = 0;
        }

    }
    const endExam = async () => {

        let marks = 0;
        let wrongAns =0;
        correctAnswers.forEach((element, index) => {
            if (element === 1) {
                marks = marks + 1;
            }
            else if(element === 0 || element === null)
            {
                wrongAns = wrongAns +1;

            }
        })
        const obj = {
            userId: userId,
            modelId: props.match.params.modelId,
            courseId: course?._id,
            mark: marks,
            totalQuestions : questions.questions.length,
            attemptQuestions : marks + wrongAns,
            correctAns : marks,
            wrongAns : wrongAns,

        }
        if (modeltests?.unitId) {
            obj.unitId = modeltests?.unitId
        }
        console.log(obj);
        setExamDetails(obj);
        try {
            const res = await axios.post("/create/results", obj);
            setExamFinish(true);
        } catch (err) {
            setError("Something wrong!");
        }
        setShow(false);

    }
    if (examFinish) {
        history.push({
            pathname:'/model-test/exam/summary',
            state: examDetails
        })
    }




    return (
        <Layout>
            <div className="mainDiv">
                <Container>
                    <h3 style={{ textAlign: 'center' }}>
                        {modeltest?.modelName ? capitalize(modeltest?.modelName) + ', ' : null}{course?.courseName ? capitalize(course?.courseName) : null}
                    </h3>
                    <Row >
                        <Col><p style={{ fontSize: '20px' }}><BiTime /> Time:{hour} : {minute} : {second}</p></Col>
                        <Col className="text-right"><p style={{ fontSize: '20px' }}>Total marks: 100</p></Col>
                    </Row>
                </Container>

                <Container>
                    <hr />
                    {
                        questions?.questions?.map((item, index) => {
                            return (
                                <div>
                                    <Row>
                                        <Col><p>{index + 1} {item.ques}</p></Col>
                                    </Row>
                                    <Row>
                                        <Col key={item.optionA + index}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name={"radio-" + index} value={item.optionA} onChange={(e) => handleChange(e, index)} />
                                                <label className="form-check-label">A. {item.optionA}</label>

                                            </div>
                                        </Col>
                                        <Col key={item.optionB + index}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name={"radio-" + index} value={item.optionB} onChange={(e) => handleChange(e, index)} />
                                                <label className="form-check-label">B. {item.optionB}</label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col key={item.optionC + index}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name={"radio-" + index} value={item.optionC} onChange={(e) => handleChange(e, index)} />
                                                <label className="form-check-label">C. {item.optionC}</label>
                                            </div>
                                        </Col>
                                        <Col key={item.optionD + index}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name={"radio-" + index} value={item.optionD} onChange={(e) => handleChange(e, index)} />
                                                <label className="form-check-label">D. {item.optionD}</label>
                                            </div>
                                        </Col>
                                    </Row>

                                </div>

                            )
                        })
                    }
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        style={{ marginTop: '40px' }}
                        onClick={endExam}
                    >
                        Finish exam
                    </Button>
                </Container>

            </div>
            <Modal show={show} style={{ marginTop: '200px' }} animation={false}>
                <Modal.Body>Time is over!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" style={{ marginRight: '180px' }} onClick={endExam}>
                        Finish exam
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>

    );
};

export default Question;