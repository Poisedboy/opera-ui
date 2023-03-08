import React from "react";
import { Card, Row } from "react-bootstrap";
import KeyCard from '../../../assets/signs/key-card.png';

const KeyCardFineSnippet = () => {
    return (
        <>
            <Row className="flex-row-reverse" xs={12} sm={4}>
                <Card.Img src={KeyCard} alt='Sign key card' style={{ maxWidth: '200px' }} />
            </Row>
            <Row xs={12} sm={8}>
                <Card.Title>
                    За втрату або поломку ключ-карти, штраф - 200 грн.
                    Ця карта відкриває двері на 1 поверсі, які ведуть до готельного ліфта.
                </Card.Title>
            </Row>
        </>
            // <Card style={{ border: 'none' }} className='d-flex flex-wrap flex-row justify-content-center'>
    )
};

export default KeyCardFineSnippet;