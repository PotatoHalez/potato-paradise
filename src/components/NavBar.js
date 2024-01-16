import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = ( { toggleTheme }) => {
    return (
        <nav className='navbar'>
            <button onClick={toggleTheme}> Change Theme</button>
            <Link to ='/'>Home</Link>
            <Link to ='/AboutPotato'>About Potato</Link>
            <Link to ='/Quotes'>Quotes</Link>
            <Link to ='/PotatoPics'> Potato Pics</Link>
            <Link to ='/PotatoGame'> Potato Game</Link>
        </nav>
    );
};

export default Navbar;