import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Contacts from "../components/Contacts";
import Login from "../components/Login";
// import Authentication from "./Authentication";
import Authorization from "./Authorization";
import PERMISSIONS from "../permissions/Permissions";
import Extra from '../components/Extra';
import Loader from "../components/Loaders/Loader";
import Parking from "../components/Parking";
const Breakfasts = lazy(() => import('../components/Breakfast/Breakfats'));

const RoutePath = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="parking" element={<Parking />} />
            <Route path="breakfast" element={
                <Suspense fallback={<Loader />}>
                    <Breakfasts />
                </Suspense>}
            />
            <Route element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_EXTRA]} />}>
                <Route path="extra" element={<Extra />} />
            </Route>
            <Route path="login" element={<Login />} />
        </Routes>
    );
};

export default RoutePath;
