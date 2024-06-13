import React from 'react';
import '../index.css';

function Navbar() {
    return (
        <nav className='flex justify-between bg-slate-400 px-10 items-center'>
            <div className="navbar-left flex p-5">
                {/* <img src="logo.png" alt="Logo" className="logo" /> */}
                <h1 className="navbar-title">CryptoTracker</h1>
            </div>
            <div className="navbar-right px-8">
                <ul className="navbar-links flex flex-row gap-10">
                    <li className='border-black border px-4 py-2 rounded-md hover:bg-slate-500'><a href="/">Home</a></li>
                    <li className='border-black border px-4 py-2 rounded-md hover:bg-slate-500'><a href="/about">About</a></li>
                    <li className='border-black border px-4 py-2 rounded-md hover:bg-slate-500'><a href="/contact">Contact Us</a></li>
                    <li className='border-black border px-4 py-2 rounded-md hover:bg-slate-500'><a href="#search">Search Coin</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;