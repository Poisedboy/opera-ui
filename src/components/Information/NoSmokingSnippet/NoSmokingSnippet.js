import React from "react";
import { Card } from "react-bootstrap";
import NoSmoking from '../../../assets/signs/no-smoking.png';
import './no-smoking.css';

const NoSmokingSnippet = () => {
    return (
        <Card style={{ border: 'none' }} className='d-flex flex-row align-items-center'>
            <Card.Img src={NoSmoking} alt='Sign no smoke' style={{ width: '15rem', margin: '5px' }} />
            <Card.Body>
                <Card.Title>
                    НЕ палити в номері штраф - 3000 грн.
                    Якщо Ви палите є кімната для паління на 3 поверсі.
                    Її можна відкрити ключ картою від номеру.
                </Card.Title>
            </Card.Body>
        </Card>
    )
};

export default NoSmokingSnippet;
