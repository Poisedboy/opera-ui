import React from 'react';

const LazyImage = ({image}) => {
    return (
        <img src={image} alt='lazy load' />
    );
};

export default LazyImage;
