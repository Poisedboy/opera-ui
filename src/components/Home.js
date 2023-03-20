import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import Information from "./Information/Information";
import Parking from "./Parking";

const Home = () => {

    return (
        <div>
            <Banner />
            <Container
                style={{padding: '15px'}}
            >
                <Information />
                <hr></hr>
            </Container>
        </div>
    );
};

export default Home;
