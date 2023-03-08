import React, { useState } from "react";
import {Offcanvas, Image } from "react-bootstrap";

const CustomCardInfo = ({picture, title, text}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="d-flex flex-column" style={{width: '250px',}} onClick={() => setOpen(!open)}>
            <Image src={picture} style={{ width: '100%', maxHeight: '200px' }} />
            <h2>{title}</h2>
            <Offcanvas show={open} onHide={() => setOpen(!open)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>{text}</Offcanvas.Body>
            </Offcanvas>
        </div>
    )
};

export default CustomCardInfo;
