import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Faq from './pages/Faq/Faq';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='about' element={< About/>}/>
        <Route path='portfolio' element={< Portfolio/>}/>
        <Route path='contact' element={< Contact/>}/>
        <Route path='faq' element={< Faq/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
