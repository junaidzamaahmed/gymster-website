import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel2 from '../../images/carousel-2.jpg';
import carousel3 from '../../images/carousel-3.jpg';
import carousel4 from '../../images/carousel-4.jpg';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div id="home">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 gray-scale"
                        src={carousel4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="banner-text h-100">
                            <h1 className="primary-text bebas-font">START YOUR FITNESS JOURNEY TODAY</h1>
                            <p>Get your body in shape and stay healthy!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 gray-scale"
                        src={carousel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="banner-text h-100">
                            <h1 className="primary-text bebas-font">START YOUR FITNESS JOURNEY TODAY</h1>
                            <p>Get your body in shape and stay healthy!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 gray-scale"
                        src={carousel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="banner-text h-100">
                            <h1 className="primary-text bebas-font">START YOUR FITNESS JOURNEY TODAY</h1>
                            <p>Get your body in shape and stay healthy!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>
        </div>
    );
};

export default Home;