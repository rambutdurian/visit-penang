import './Footer.css'; // Import the Footer CSS file

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Visit Penang. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
