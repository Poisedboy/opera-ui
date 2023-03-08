import React from 'react';
import { Card } from 'react-bootstrap';

const Description = () => {
    return (
        <>
            <Card className='d-flex justify-content-center align-items-center' style={{marginTop: '50px', border: 'none'}} >
                <Card.Title style={{ fontSize: '3rem' }}>A la Carte</Card.Title>
                <Card.Text>
                        Сніданки подають з 8:00 до 11:00 в кафе на четвертому поверсі.
                </Card.Text>
            </Card>
        </>
    )
};

export default Description;
