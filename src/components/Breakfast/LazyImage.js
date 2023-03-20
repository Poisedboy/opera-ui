import React from 'react';

const LazyImage = ({image}) => {
    return (
            <img src={image} style={{width: '100%', height: '225px', objectFit: 'cover'}} alt='lazy load' />
    );
};

export default LazyImage;
