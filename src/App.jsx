import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Places from './Places.jsx';
import Home from './Home.jsx';


import Contact from './Contact.jsx';
import Hotel from './Hotel.jsx'; // Import the Hotels component
import Food from './Food.jsx'; // Import the Food component


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/food" element={<Food />} />
        <Route path="/contact" element={<Contact  />} />
        <Route path="/places" element={<Places />} />
        <Route path="/hotel" element={<Hotel />} /> {/* Add route for Hotels */}
        <Route path="/food" element={<Food />} /> {/* Add route for Food */}
        <Route path="/attractions" element={<Places />} /> {/* Add route for Attractions */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
