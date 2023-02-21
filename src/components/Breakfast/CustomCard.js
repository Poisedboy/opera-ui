import React from "react";
import { Card, Fade } from "react-bootstrap";

const CustomCard = ({ picture, name }) => {

    return (
        <Fade in={true}>
            <Card style={{ width: '20rem', margin: '5px' }}>
                <Card.Img src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Fade>
    );
};

export default CustomCard;