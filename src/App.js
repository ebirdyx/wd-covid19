import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Advice from './pages/Advice';
import Vaccine from './pages/Vaccine';
import Stats from './pages/Stats';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Advice />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/vaccine" element={<Vaccine />} />
      </Routes>
    </div>
  );
}

export default App;
