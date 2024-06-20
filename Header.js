import React from 'react';
import '../styles.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="https://tse4.mm.bing.net/th/id/OIP.RorKqRiMZCwUMJNEv2ArigHaFj?pid=ImgDet&w=474&h=355&rs=1" alt="Lemon Restaurant Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="menu.pdf" target="_blank">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/Bar">Bar</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
