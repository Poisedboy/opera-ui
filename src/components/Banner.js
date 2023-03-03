import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import receptionPicture from '../assets/reception.jpg';
import lux401 from '../assets/lux401.jpg';
import fasad from '../assets/fasad.jpg';
import lux403 from '../assets/lux403.jpg';

const Banner = () => {
    const [smallWidth, setSmallWidth] = useState(false);

    function widthHandler () {
        if (window.innerWidth < 500) {
            setSmallWidth(true);
        } else {
            setSmallWidth(false);
        };
    };

    window.addEventListener('resize', widthHandler);

    const renderImages = [receptionPicture, lux401, fasad, lux403].map((picture, index) => {
        return (
            <Carousel.Item key={index + 1}>
                <Image src={picture} fluid={true} style={smallWidth ? { height: '40vh', minWidth: '100vw', objectFit: 'cover' }
                    : { height: '100vh', minWidth: '100vw', objectFit: 'cover' }} />
            </Carousel.Item>
        );
    });

    return (
        <Carousel controls={false} interval={3000} fade>
            {renderImages}
        </Carousel>
    )
};

export default Banner;
