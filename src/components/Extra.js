import React from "react";
import { useAuth } from "../provider/AuthProvider";

const Extra = () => {
    const { user, logout } = useAuth();
    const logoutHandler = () => {
        logout();
    };

    return (
        <>
            <h1>Welcome {user.username}</h1>
            <button type="submit" onClick={logoutHandler}>Logout</button>
        </>
    );
};

export default Extra;
