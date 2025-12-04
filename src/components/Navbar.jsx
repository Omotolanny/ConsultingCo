import { useState } from 'react';

function Navbar () {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">ConsultingCo</div>
                <div className='vertical-divider'></div>
                <button className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
                    <li><a href="#services" onClick={toggleMenu}>SERVICES</a></li>
                    <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
                    <li><a href="#blog" onClick={toggleMenu}>BLOG</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
                </ul> 
                <ul className="nav-menu-desktop">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#blog">BLOG</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul> 
                <div className="nav-right">
                    <div className="social-icons"> 
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Facebook</a>
                    </div>
                    <div className="phone-box">
                        <p className="phone-label">Need Help</p>
                        <p className="phone-number">+234 8095 634 565</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;