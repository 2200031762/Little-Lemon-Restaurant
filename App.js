import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
    // State for reservation confirmation
    const [reservationConfirmed, setReservationConfirmed] = useState(false);

    return (
        <div className="app">
            <Header />
            <div className="video-container">
                <video autoPlay loop muted>
                    <source src="7084478-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-text">
                    <h1 className="video-heading">Little Lemon</h1>
                    <p className="video-description">
                        Little Lemon is a Mediterranean inspired bar<br />
                        and small plates restaurant focusing on fresh produce<br />
                        and big flavours, offering bespoke cocktails<br />
                        and a premium wine selection.
                    </p>
                    {/* Book a Table button */}
                    <button
                        className="book-table-btn"
                        onClick={() => window.open("D:/little lemon website/lemon/public/Little Lemon – Mediterranean Tapas _ Wine _ Cocktails _ Dublin_files", "_self")}
                    >
                        Book a Table
                    </button>
                </div>
            </div>
            <div className="content">
               
            </div>
            <Footer />
        </div>
    );
};

export default App;
