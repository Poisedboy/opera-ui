import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import About from "../components/About";
import Login from "../components/Login";
// import Authentication from "./Authentication";
import Authorization from "./Authorization";
import PERMISSIONS from "../permissions/Permissions";
import Extra from '../components/Extra';
const Breakfasts = lazy(() => import('../components/Breakfast/Breakfats'));

const RoutePath = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="breakfast" element={
                <Suspense fallback={<div>Loading...</div>}>
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
