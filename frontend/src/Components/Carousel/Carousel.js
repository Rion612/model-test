import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ImageOne from '../../Images/image5.jpg'
import ImageTwo from '../../Images/image2.jpg'
import ImageThree from '../../Images/image3.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const CarouselSlider = (props) => {
    const user = useSelector(state => state.user);
    return (
        <div>
            <Carousel style={{ height: "450px" }}>
                <Carousel.Item style={{ height: "450px" }}>
                    <img
                        className="d-block w-100 h-100"
                        src={ImageOne}
                        alt="First slide"
                        style={{  opacity: "0.5" }}
                    />
                    <Carousel.Caption style={{ color: "#2c387e" }}>
                        <h3 className="text-danger">Admission Test Preparation</h3>
                        <p>This platform will help you to take a good preparation for upcoming admission exam</p>
                        {
                            user.authenticate ?
                                <div></div>
                                : <Link to='/signup' className="text-white" style={{ textDecoration: 'none' }} ><button className="btn btn-warning text-white">Join Now</button></Link>

                        }

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "450px" }}>
                    <img
                        className="d-block w-100"
                        src={ImageTwo}
                        alt="Second slide"
                        style={{ height: "450px", opacity: "0.4" }}
                    />
                    <Carousel.Caption style={{ color: "#2c387e" }}>
                        <h3 className="text-danger">Admission Test Preparation</h3>
                        <p>This platform will help you to take a good preparation for upcoming admission exam</p>
                        {
                            user.authenticate ?
                                <div></div>
                                : <Link to='/signup' className="text-white" style={{ textDecoration: 'none' }} ><button className="btn btn-warning text-white">Join Now</button></Link>

                        }
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "450px" }}>
                    <img
                        className="d-block w-100"
                        src={ImageThree}
                        alt="Third slide"
                        style={{ height: "450px", opacity: "0.4" }}
                    />
                    <Carousel.Caption style={{ color: "#2c387e" }}>
                        <h3 className="text-danger">Admission Test Preparation</h3>
                        <p>This platform will help you to take a good preparation for upcoming admission exam</p>
                        {
                            user.authenticate ?
                                <div></div>
                                : <Link to='/signup' className="text-white" style={{ textDecoration: 'none' }} ><button className="btn btn-warning text-white">Join Now</button></Link>

                        }
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default CarouselSlider;