import React from "react";
import { Card } from "react-bootstrap";
import KeyCard from '../../../assets/signs/key-card.png';

const KeyCardFine = () => {
    return (
        <Card style={{ border: 'none' }} className='d-flex flex-row align-items-center'>
            <Card.Body>
                <Card.Title>
                    За втрату або поломку ключ карти, штраф - 200 грн.
                    Ця карта відкриває двері на 1 поверсі які ведуть до готельного ліфта.
                </Card.Title>
            </Card.Body>
            <Card.Img src={KeyCard} alt='Sign key card' style={{ width: '15rem', margin: '5px' }} />
        </Card>
    )
};

export default KeyCardFine;