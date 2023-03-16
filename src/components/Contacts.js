import React from "react";
import { Container } from "react-bootstrap";
import email from '../assets/email.png';
import instagram from '../assets/instagram.png';

const Contacts = () => {
    return (
        <>
            <Container style={{ marginTop: '60px', textAlign: 'center' }}>
                <h3>Ми Завжди Онлайн</h3>
                <hr></hr>
                <div>
                    <span style={{marginRight: '10px'}}>
                        Телефони:
                        <a href="tel: +38 063 649 68 86">+38 063 649 68 86</a>
                        <a href="tel: +38 097 826 22 85">+38 097 826 22 85</a>
                        <a href="tel: +38 050 506 05 03">+38 050 506 05 03</a>
                    </span>
                    <a href='mailto: op.aparthotel@gmail.com'>
                        <img src={email} alt='email' style={{maxWidth: '50px', maxHeight: '50px'}}/>
                    </a>
                    <a href='instagram.com'>
                        <img src={instagram} alt='instagram' style={{maxWidth: '50px', maxHeight: '50px'}}/>
                    </a>
                </div>
                <hr></hr>
                <p style={{fontWeight: '700'}}>проспект Свободи, 27, Львів, Львівська область, 79000</p>
            </Container>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.9280436805798!2d24.02469424944527!3d49.841727327872455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add726ae40001%3A0x1e862664d860a4c2!2sOpera%20Passage%20Apart%20Hotel!5e0!3m2!1suk!2sua!4v1678992846762!5m2!1suk!2sua"
                title="Opera Passage"
                style={{ width: '100%', height: '75vh' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    );
};

export default Contacts;
