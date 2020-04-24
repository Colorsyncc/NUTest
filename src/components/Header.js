import React from 'react';

//Assets
import '../styles/header.css';

const Header = () => {
    return ( 
        <div className="header-container">
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="navbar-brand"><span>NU Test</span></div>
            </nav>
        </div>
    )
}

Header.displayName = 'Header';

export default Header;