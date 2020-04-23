import React from 'react';

//Assets
import '../styles/Header.css';

const Header = () => {
    return ( 
        <div className="header-container">
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand"><span>NU Test</span></div>
            </nav>
        </div>
    )
}

Header.displayName = 'Header';

export default Header;