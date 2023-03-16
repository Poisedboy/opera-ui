import React, { useState } from "react";
import {Offcanvas, Card, Button } from "react-bootstrap";

const CustomCardInfo = ({picture, title, text}) => {
    const [open, setOpen] = useState(false);
    return (
        <Card className="d-flex flex-column me-2" style={{width: '250px', marginBottom: '10px'}} onClick={() => setOpen(!open)}>
            <Card.Img src={picture} style={{padding: '5px'}} />
            <Card.Title className="d-flex justify-content-center">{title}</Card.Title>
            <Button variant="light">ДЕТАЛІ</Button>
            <Offcanvas show={open} onHide={() => setOpen(!open)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>{text}</Offcanvas.Body>
            </Offcanvas>
        </Card>
    )
};

export default CustomCardInfo;
