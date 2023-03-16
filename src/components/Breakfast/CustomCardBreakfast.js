import React, { lazy, Suspense } from "react";
import { Card, Fade } from "react-bootstrap";
import ModalWindow from "../Modal/ModalWindow";
import Loader from "../Loaders/Loader";
const LazyImage = lazy(() => import("./LazyImage"));

const CustomCardBreakfast = ({ picture, name, ingredients }) => {

    return (
        <Fade in={true}>
            <Card style={{ width: '20rem', margin: '5px' }}>
                <Suspense fallback={<Loader />}>
                    <LazyImage image={picture} />
                </Suspense>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center">{name}</Card.Title>
                    <div className="d-flex justify-content-end">
                        <ModalWindow name={name} picture={picture} ingredients={ingredients} />
                    </div>
                </Card.Body>
            </Card>
        </Fade>
    );
};

export default CustomCardBreakfast;