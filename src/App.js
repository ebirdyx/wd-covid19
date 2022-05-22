import './App.css';
import { Routes, Route } from 'react-router-dom';
import Advice from './pages/Advice';
import Vaccine from './pages/Vaccine';
import Stats from './pages/Stats';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SignIn from './pages/auth/SignIn';
import Signup from './pages/auth/SignUp';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/vaccine" element={<Vaccine />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
