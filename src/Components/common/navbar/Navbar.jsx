import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import bluedot from './images/bluedot.svg';
import './Navbar.css';

function Navbar() {
    return (
        <section className="navbar">
            <div className="navbar__home">
                <NavLink
                    className="navlinks"
                    to="/">
                    home
                </NavLink>
            </div>
            <div className="navbar__blog">
                <NavLink
                    className="navlinks"
                    to="/blog">
                    blog
                </NavLink>
            </div>
            <div className="navbar__whitepaper">
                <NavLink
                    className="navlinks"
                    activeClassName="selected"
                    to="/whitepaper">
                    whitepaper
                </NavLink>
            </div>
        </section >
    );
}

export default Navbar;