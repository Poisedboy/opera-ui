import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import NoSmoking from '../../../assets/signs/no-smoking.png';
// import './no-smoking.css';

const NoSmokingSnippet = () => {
    return (
        <Row>
            <Col xs={12} sm={4} className='d-flex justify-content-center'>
                <Card.Img src={NoSmoking} alt='Sign no smoke' style={{ maxWidth: '250px'}} />
            </Col>
            <Col xs={12} sm={8} className='d-flex align-items-center'>
                <Card.Title>
                    Kімната для паління на 3 поверсі.
                    НЕ палити в номері штраф - 3000 грн.
                </Card.Title>
            </Col>
        </Row>
    )
};

export default NoSmokingSnippet;
