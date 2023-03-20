import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { AuthProvider } from './provider/AuthProvider';
import RoutePath from './routes/RoutePath';
import Author from './components/Author';

function App() {

  return (
    <div>
      {/* {loading ? <div className='d-flex justify-content-center align-items-center'><RingLoader color='#ffff29' loading={loading} cssOverride={override} size={150} /></div> : */}
        <AuthProvider>
          <NavBar />
          <RoutePath />
          <Author />
        </AuthProvider>
      {/* } */}
    </div>
  );
}

export default App;
