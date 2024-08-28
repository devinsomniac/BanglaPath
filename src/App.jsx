import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Document from './pages/Document'
import Appointment from './pages/HospitalAppointment'
import Visa from './pages/Visa'
import Recommendation from './pages/Recommendation'
import LogIn from './pages/LogIn'
import Register from './pages/Register';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/document" element={<Document />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/recommendation" element={<Recommendation />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
    </>
  );
}

export default App;
