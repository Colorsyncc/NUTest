import React from 'react';

const AddToCart = ({ handleClick }) => {
    return(
        <div className="containerButton">
            <button className="btn btn-success btn-sm" onClick={handleClick}>Agregar al carro</button>
            
        </div>
    )
}

AddToCart.displayName = 'AddToCart';

export default AddToCart;