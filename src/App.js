import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Advice from './pages/Advice';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Advice />
    </div>
  );
}

export default App;
