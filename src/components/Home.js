import React from "react";
import { Card, Container } from "react-bootstrap";
import Banner from "./Banner";
import KeyCardFine from "./Information/KeyCardFine/KeyCardFine";
import NoSmokingSnippet from "./Information/NoSmokingSnippet/NoSmokingSnippet";

const Home = () => {

    return (
        <div>
            <Banner />
            <Container
                className="d-flex flex-column justify-content-center align-items-center"
                style={{padding: '15px'}}
            >
                <Card.Title>ПРАВИЛА НАШОГО ГОТЕЛЮ</Card.Title>
                <NoSmokingSnippet />
                <KeyCardFine />
            </Container>
        </div>
    );
};

export default Home;
