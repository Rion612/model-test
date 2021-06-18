import React from 'react';
import { useSelector } from 'react-redux';
import CardComponent from '../../Components/Card/Card';
import CarouselSlider from '../../Components/Carousel/Carousel';
import Layout from '../../Components/Layout/Layout'
import './home.css';
import { Row, Col } from 'react-bootstrap'
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Home = () => {

    const coursesList = useSelector(state => state.course.courses);
    return (
        <Layout>
            <CarouselSlider />
            <div className="mainDiv">
                <Container>
                    <h1>Explore the courses:</h1>
                    <Row>
                        {coursesList.map((item, index) => {
                            return (
                                <Col md={4} style={{ marginTop: '20px' }} key={index}>
                                    <Link to={'/course/' + item.slug}>
                                    <CardComponent
                                        image={item.courseImage}
                                        name={item.courseName}
                                        title={item.courseName}
                                        
                                    />
                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default Home;