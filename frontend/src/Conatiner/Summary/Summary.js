import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout'
import { Container } from 'react-bootstrap'
import axios from '../../helpers/axios';
import './summary.css'


const Summary = (props) => {

    const { state } = props.location;
    const [resultSummary, setResultSummary] = useState({});
    const [error, setError] = useState("")

    useEffect(async () => {
        try {
            const res = await axios.get(`/result/summary/${state.modelId}`);
            setResultSummary(res.data.result);
            console.log(res);
        } catch (err) {
            setError("Something wrong!");
        }
    }, []);
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
                        <h3 className="text-center">Better luck next time!</h3>
                        <p className="text-primary text-center" style={{fontSize:'60px'}}>Your score {resultSummary?.mark}</p>
                    </div>

                </Container>
            </div>
        </Layout>
    );
};

export default Summary;