import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { AuthProvider } from './provider/AuthProvider';
import RoutePath from './routes/RoutePath';
import {HashLoader} from 'react-spinners';

const override = {
  height: '100vh',
  display: "flex",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? <HashLoader color='black' loading={loading} cssOverride={override} size={150} /> :
        <AuthProvider>
          <NavBar />
          <RoutePath />
        </AuthProvider>
      }
    </div>
  );
}

export default App;
