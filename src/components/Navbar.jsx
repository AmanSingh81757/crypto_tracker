import React from 'react';

function Navbar() {
    return (
        <nav>
            <div className="navbar-left">
                <img src="logo.png" alt="Logo" className="logo" />
                <h1 className="navbar-title">CryptoTracker</h1>
            </div>
            <div className="navbar-right">
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/search">Search Coin</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;