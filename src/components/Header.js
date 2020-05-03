import React from 'react';

//Assets
import '../styles/header.css';

const Header = ({ count, subTotal }) => {
    return(
        <div className="containerHeader">
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="navbar-brand"><span>NU Test</span></div>
                <div className="cart-info">
                    <span className="text">{`Total de Productos: ${count}`}</span>
                    <br></br>
                    <span className="text">{`Sub Total: ${subTotal}`}</span>
                </div>
            </nav>
        </div>
    )
}

Header.displayName = 'Header';

export default Header;