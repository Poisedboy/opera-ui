import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import KeyCard from '../../../assets/signs/key-card.png';

const KeyCardFine = () => {
    return (
        <Row>
            <Col xs={12} sm={4}>
                <Card.Img src={KeyCard} alt='Sign key card' />
            </Col>
            <Col xs={12} sm={8} className='d-flex align-items-center'>
                <Card.Title>
                    За втрату або поломку ключ-карти, штраф - 200 грн.
                    Ця карта відкриває двері на 1 поверсі, які ведуть до готельного ліфта.
                </Card.Title>
            </Col>
        </Row>
            // <Card style={{ border: 'none' }} className='d-flex flex-wrap flex-row justify-content-center'>
    )
};

export default KeyCardFine;