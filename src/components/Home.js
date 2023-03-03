import React from "react";
import { Card, Container } from "react-bootstrap";
import Banner from "./Banner";
import KeyCardFineSnippet from "./Information/KeyCardFineSnippet/KeyCardFineSnippet";
import NoSmokingSnippet from "./Information/NoSmokingSnippet/NoSmokingSnippet";
import RoomServiceSnippet from "./Information/RoomServiceSnippet/RoomServiceSnippet";

const Home = () => {

    return (
        <div>
            <Banner />
            <Container
                className="d-flex flex-column justify-content-center align-items-center"
                style={{padding: '15px'}}
            >
                <Card.Title>ПРАВИЛА НАШОГО ГОТЕЛЮ</Card.Title>
                <RoomServiceSnippet />
                <KeyCardFineSnippet />
                <NoSmokingSnippet />
            </Container>
        </div>
    );
};

export default Home;
