import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import PortfolioPage from './pages/PortfolioPage';
import Contact from './pages/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
