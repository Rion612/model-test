import { Container, Card, Button, Row, Col,Badge } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import axios from '../../helpers/axios';
import { useSelector } from 'react-redux';
import {Link }  from 'react-router-dom'

const ModeltestUnit = (props) => {
    const [modeltests, setModeltests] = useState({});
    const [error, setError] = useState("");
    const courses = useSelector(state => state.course.courses);
    const course = courses.find(x => x._id === modeltests?.courseId);
    useEffect(async () => {
        try {
            const res = await axios.get(`/get/model-tests/${props.match.params.slug}/${props.match.params.unitId}`);
            setModeltests(res.data.modeltest);
        } catch (err) {
            setError("Something wrong!");
        }
    }, []);
    return (
        <Layout>
            <div className="mainDiv">
                <Container>
                    <h1>All the model tests :</h1>
                    <Row>
                        {modeltests?.modeltests?.map((item, index) => {
                            return (
                                <Col key={index} md={4}>
                                    <Card>
                                        <Card.Header className="font-weight-bold">{(course?.courseName)?.toUpperCase()}</Card.Header>
                                        <Card.Body>
                                            {
                                                item.status === "available" ?
                                                    <div>
                                                        <Card.Text>{item?.modelName.toUpperCase()}
                                                        {' '}<Badge variant="success">available</Badge>
                                                        </Card.Text>
                                                        <Link to={'/model-tests/' + course.slug + '/'+ item._id + '/questions'}><Button variant="primary">Start Exam</Button></Link>

                                                    </div>

                                                    :
                                                    <div>
                                                        <Card.Text>{item?.modelName.toUpperCase()}
                                                            {' '}<Badge variant="danger">Not available</Badge>
                                                        </Card.Text>
                                                        <Button variant="primary" disabled>Start Exam</Button>

                                                    </div>


                                            }
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )
                        })
                        }
                    </Row>

                </Container>
            </div>

        </Layout>

    );
};

export default ModeltestUnit;