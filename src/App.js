import './App.css';
import { NavBar } from './components/NavBar';
import { AuthProvider } from './provider/AuthProvider';
import RoutePath from './routes/RoutePath';

function App() {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <RoutePath />
      </AuthProvider>
    </div>
  );
}

export default App;
