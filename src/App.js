import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { AuthProvider } from './provider/AuthProvider';
import RoutePath from './routes/RoutePath';
import {RingLoader} from 'react-spinners';

const override = {
  height: '100vh',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  margin: "0 auto",
  color: "red",
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
      {/* {loading ? <div className='d-flex justify-content-center align-items-center'><RingLoader color='#ffff29' loading={loading} cssOverride={override} size={150} /></div> : */}
        <AuthProvider>
          <NavBar />
          <RoutePath />
        </AuthProvider>
      {/* } */}
    </div>
  );
}

export default App;
