import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const Login = () => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        const error = login(user);
        if (error) {
            setError(error);
        }
    };

    const backHome = () => {
        navigate('/');
    };

    const loginAgain = () => {
        setError(prevState => '');
        setUser(prevState => '');
    };

    return (
        <>
            <h1>Login Page</h1>
            {!error ? <div>
                <label>Name</label>
                <input type='text' onChange={e => setUser(e.target.value)} />
                <button type="submit" onClick={handleLogin}>Login</button>
            </div>
                : <div>
                    <h1>{error}</h1>
                    <button onClick={backHome}>На Головну</button>
                    <button onClick={loginAgain} >Спробувати ще раз</button>
                </div>}
        </>
    );
};

export default Login;
