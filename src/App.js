import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChakraNavbar from './components/ChakraNavbar';
import ChakraFooter from './components/ChakraFooter';
import Advice from './pages/Advice';
import Vaccine from './pages/Vaccine';
import Stats from './pages/Stats';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <ChakraNavbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Advice />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/vaccine" element={<Vaccine />} />
      </Routes>
      <ChakraFooter />
    </div>
  );
}

export default App;
