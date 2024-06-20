import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import '../styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-details">
                    <h2>Contact Us</h2>
                    <p>Email: info@littlelemon.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
                <div className="social-media">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://web.telegram.org/littlelemon" target="_blank" rel="noopener noreferrer">
                            <FaTelegramPlane />
                        </a>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
            <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

