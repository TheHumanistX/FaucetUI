import React from 'react';
import { Navbar } from '../../common';
import logo from './images/tfbw.svg';

import './Header.css';

function Header() {

    return (
        <section className="header">
            <section className="header__logo-name">
                <div className="logo">
                    <img id="logo" src={logo} />
                </div>
                <div className="theFaucet">
                    the<b>Faucet</b>
                </div>
            </section>

            <section className="header__navbar">
                <Navbar />
            </section>
        </section>
    );
}

export default Header;