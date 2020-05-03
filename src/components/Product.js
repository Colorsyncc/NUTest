import React from 'react';
//Assets
import '../styles/product.css';
import AddToCart from './AddToCart';

const Product = ({ id, photo, productName, price}) => {
    return(
        <div className='containerProduct col-sm-3'>
            <div className="main-product">
                <ul className="product-list col-md-2">
                    <li key={id}>
                        <img src={photo} alt="product"></img>
                        <small>{productName}</small>
                        <h4>{`$ ${parseFloat(price).toLocaleString()}`}</h4>
                        <AddToCart/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

Product.displayName = 'Product';

export default Product;