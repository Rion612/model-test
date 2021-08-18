import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout'
import { Container } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import axios from '../../helpers/axios';
import { useSelector } from 'react-redux';


const Result = (props) => {
    const userId = props.match.params.userId;
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    const [modeltests, setModeltests] = useState([]);
    const courses = useSelector(state => state.course.courses);
    useEffect(async () => {
        try {
            const res = await axios.get(`/get/all/results/${userId}`);
            setResults(res.data.result);
        } catch (err) {
            setError("Something wrong!");
        }
    }, []);
    useEffect(async () => {
        try {
            const res = await axios.get(`/get/all/model-tests`);
            setModeltests(res.data.modeltests);
        } catch (err) {
            setError("Something wrong!");
        }
    }, []);
    function capitalize(str) {
        return str?.charAt(0).toUpperCase() + str?.slice(1);
    }
    function percentageScore(item) {
        return Math.floor((item.correctAns / item.totalQuestions) * 100)
    } 
    return (
        <Layout>
            <div className="mainDiv">
                <Container>
                    <h1>Your all result history : </h1>
                    <div style={{ marginTop: '30px' }}>
                        <Table responsive="md" className="text-center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Model test Name</th>
                                    <th>Course Name</th>
                                    <th>Unit Name</th>
                                    <th>Number of attempts</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    results.length > 0 ?
                                    results.map((item, index) => {

                                        const course = courses?.find(x => x._id === item?.courseId);
                                        const modeltest = modeltests?.find(x => x.courseId === item?.courseId)
                                        const m = modeltest?.modeltests?.find(y => y._id === item?.modelId)
                                        const c = course?.unit?.find( z => z._id === item?.unitId);
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{capitalize(m?.modelName)}</td>
                                                <td>{capitalize(course?.courseName)}</td>
                                                <td>{
                                                    item?.unitId ? c?.unitName : '-'
                                                }</td>
                                                <td>{item?.attempt}</td>
                                                <td>{percentageScore(item)}{'%'}</td>
                                            </tr>

                                        )
                                    }) : 
                                    <div>
                                        <p style={{fontSize:'20px',marginTop:'10px'}} className="text-danger">There is no result history</p>
                                    </div>
                                }

                            </tbody>
                        </Table>
                    </div>

                </Container>
            </div>
        </Layout>
    );
};

export default Result;