import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to ='/'>Home</Link>
            <Link to='/AboutPotato'></Link>
            <Link to='/Login'></Link>
            <Link to='/PotatoPics'></Link>
        </nav>
    );
};

export default Navbar;