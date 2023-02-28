import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import NoSmoking from '../../../assets/signs/no-smoking.png';
import './no-smoking.css';

const NoSmokingSnippet = () => {
    return (
        <Row>
            <Col xs={12} sm={4}>
                <Card.Img src={NoSmoking} alt='Sign no smoke' />
            </Col>
            <Col xs={12} sm={8} className='d-flex align-items-center'>
                <Card.Title>
                    НЕ палити в номері штраф - 3000 грн.
                    Kімната для паління на 3 поверсі.
                </Card.Title>
            </Col>
        </Row>
    )
};

export default NoSmokingSnippet;
