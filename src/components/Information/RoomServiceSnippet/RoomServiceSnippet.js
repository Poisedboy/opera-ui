import React from "react";
import serviceSign from '../../../assets/signs/room-service.png';
import { Col, Row, Card } from 'react-bootstrap';

const RoomServiceSnippet = () => {
    return (
        <Row>
            <Col xs={12} sm={4} className='d-flex justify-content-center'>
                <Card.Img src={serviceSign} alt='Sign no smoke' style={{ maxWidth: '200px' }} />
            </Col>
            <Col xs={12} sm={8} className='d-flex align-items-center'>
                <Card.Title>
                    Щоденне прибирання в номер,
                    повісьте табличку «Прошу прибрати» на ручку дверей до 13:00 – 14:00.
                </Card.Title>
            </Col>
        </Row>
    )
};

export default RoomServiceSnippet;
