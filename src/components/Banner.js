import React from 'react';
import Image from 'react-bootstrap/Image';
import receptionPicture from '../assets/reception.jpg';

const Banner = () => {

    return (
        <div>
            <Image src={receptionPicture} fluid={true} />
        </div>
    )
};

export default Banner;
