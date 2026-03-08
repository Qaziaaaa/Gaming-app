import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Games from './pages/Games';
import Features from './pages/Features';
import About from './pages/About';
import Product from './pages/Product';
import Support from './pages/Support';

import './App.css';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-gaming-black">

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
