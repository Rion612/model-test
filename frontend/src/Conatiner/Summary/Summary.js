import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout'
import { Button, Container } from 'react-bootstrap'
import axios from '../../helpers/axios';
import {Row,Col} from 'react-bootstrap';
import './summary.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Summary = (props) => {
    const { state } = props.location;
    const [resultSummary, setResultSummary] = useState({});
    const [error, setError] = useState("");

    const score = Math.floor((resultSummary?.mark / resultSummary?.totalQuestions)*100);
    const scoreStatus =(score)=>{
        if(score <= 30){
            return "You need more practice!";
        }
        else if(score > 30 && score <=50){
            return "Better luck next time!";
        }
        else if(score > 50 && score <=70){
            return "You can do better!";
        }
        else if(score > 70 && score <=85){
            return "You didi great!";
        }
        else{
            return "You are an absolute genius!";
        }
    }
    

    useEffect(async () => {
        try {
            const res = await axios.get(`/result/summary/${state.modelId}/${state.userId}`);
            setResultSummary(res.data.result);
            console.log(res);
        } catch (err) {
            setError("Something wrong!");
        }
    }, []);
    const course = useSelector(state=>state.course.courses).find(x => x._id === resultSummary.courseId);
    return (
        <Layout>
            <div className="mainDiv">
                <Container>
                    <div class="flex-container">
                        <div className="div1">
                            <img src={process.env.PUBLIC_URL + "/right.png"} alt="right" height="200px" width="200px" />
                        </div>
                    </div>
                    <h1 className="text-success text-center">Your exam has ended</h1>
                    <div className="textDiv">
                        <h3 className="text-center">
                            {scoreStatus(score)}
                        </h3>
                        <p className="text-center text-primary" style={{fontSize:'60px'}}>Your score {score}{'%'}</p>
                        <hr/>
                        <Row>
                            <Col className="ml-5">Total number of questions</Col>
                            <Col className="mr-5 text-right">{resultSummary?.totalQuestions}</Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col className="ml-5">Number of attempted questions</Col>
                            <Col className="mr-5 text-right">{resultSummary?.attemptQuestions}</Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col className="ml-5">Number of correct answers</Col>
                            <Col className="mr-5 text-right">{resultSummary?.correctAns}</Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col className="ml-5">Number of wrong answers</Col>
                            <Col className="mr-5 text-right">{resultSummary?.wrongAns}</Col>
                        </Row>
                        <hr/>
                        <div style={{marginTop:'20px', marginLeft: '40px'}}>
                            <Link to={`/model-tests/${course?.slug}`}><button className="btn btn-outline-primary">Go back</button></Link>
                            <Link to={`/all/model-tests/result/${resultSummary.userId}`}><button className="btn btn-outline-primary ml-2">View all result</button></Link>
                        </div>
                    </div>

                </Container>
            </div>
        </Layout>
    );
};

export default Summary;