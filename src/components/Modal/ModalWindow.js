import React, { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

const ModalWindow = ({name, picture, ingredients}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button onClick={handleShow} variant='light'>
                ДЕТАЛІ
            </Button>

            <Modal show={show} onHide={handleClose} className='d-flex align-items-center'>
                <Modal.Body>
                    <Card style={{ border: 'none' }}>
                        <Row>
                            <Modal.Title className="d-flex justify-content-center"><Card.Title>{name}</Card.Title></Modal.Title>
                        </Row>
                        <Row>
                            <Card.Img src={picture} />
                        </Row>
                        <Row>
                            <Card.Body>
                                {ingredients || 'Немає даних'}
                            </Card.Body>
                        </Row>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        ЗАКРИТИ
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalWindow;
