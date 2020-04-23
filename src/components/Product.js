import React from 'react';

const Product = ({ photo, name, price }) => {
    return (
        <div className="container-product">
            <img src={photo} alt="product"></img>
            <small>{name}</small>
            <h4>{`$ ${price}`}</h4>
        </div>
    )
}

Product.displayName = 'Product';

export default Product;