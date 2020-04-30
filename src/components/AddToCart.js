import React from 'react';

const AddToCart = ({ handleAddCart }) => {
    return(
        <div className="containerButton">
            <button className="btn btn-success btn-sm" onClick={handleAddCart}>Agregar al carro</button>
        </div>
    )
}

AddToCart.displayName = 'AddToCart';

export default AddToCart;