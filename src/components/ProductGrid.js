import React from 'react';
import { Grid } from '@material-ui/core';
//Assets
import '../styles/product.css';
//Components
import Product from './Product';

const ProductGrid = ({ data, increment, subtract, counter }) => {
    return(
        <div className="container">
            <Grid container justify="flex-start" spacing={ 3 }>
                { data.map(res => {
                    const { id, photo, name, price } = res;
                    return(
                    <Product 
                    counter={counter}
                    increment={increment}
                    subtract={subtract}
                    photo={photo}
                    name={name}
                    price={price}
                    key={id}
                    />
                );
            })
            
        }
            </Grid>
        </div>
    )
}

ProductGrid.displayName = 'ProductGrid'

export default ProductGrid;
