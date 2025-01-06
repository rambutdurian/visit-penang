import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="navbar">
                <h1 className="title">Visit Penang</h1>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link></li>
                        <li><Link to="/hotel" onClick={() => setMenuOpen(false)}>Hotels</Link></li>
                        <li><Link to="/food" onClick={() => setMenuOpen(false)}>Foods</Link></li>
                        <li><Link to="/places" onClick={() => setMenuOpen(false)}>Attractions</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
