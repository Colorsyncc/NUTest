import React from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
//Components
//Assets
import '../styles/product.css';

const Product = ({ photo, name, price, increment, subtract, counter }) => {
    return (
        <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
            <Paper className="paperMain">
            <div className="container-product">
                <img src={photo} alt="product"></img>
                <small>{name}</small>
                <h4>{`$ ${price}`}</h4>
            <div className="containerCount">
                <button className="btn btn-default" onClick={e=> increment(e)}>+</button>
                <input type="text" size="1" value={counter} readOnly/>
                <button className="btn btn-default" onClick={e=> subtract(e)}>-</button>
            </div>
            </div>
            </Paper>
        </Grid>
    )
}

Product.displayName = 'Product';

export default Product;