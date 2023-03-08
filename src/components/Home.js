import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import Information from "./Information/Information";

const Home = () => {

    return (
        <div>
            <Banner />
            <Container
                style={{padding: '15px'}}
            >
                <Information />
            </Container>
        </div>
    );
};

export default Home;
