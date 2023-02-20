import React from 'react';

import './Navbar.css';

function Navbar () {
    return(
        <section className="navbar">
            <div className="navbar__home navlinks">home</div>
            <div className="navbar__blog navlinks">blog</div>
            <div className="navbar__whitepaper navlinks">whitepaper</div>
        </section>
    );
}

export default Navbar;