import React from 'react';

//Assets
import '../styles/cart.css';

const Cart = ({ subTotal, totalProducts }) => {
    return( 
        <div className="containerCart">
            <span className="text">Numero de productos: {totalProducts}</span>
            <br></br>
            <span className="text">Sub Total: {subTotal}</span>
        </div>
    )
}

Cart.displayName = 'Cart';

export default Cart;