import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
//Components
import AddToCart from './AddToCart';
//Assets
import '../styles/product.css';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            count: 0 ,
            dataPrice: this.props.price,
            subTotal: ''
        }

    }
    
    handleIncrement = e => {
        const total = Number(parseFloat(this.state.count +1) * (this.state.dataPrice)).toLocaleString();

        if (e.target) {
            this.setState({
                count: this.state.count +1,
                dataPrice: this.props.price,
                subTotal: total
            });      
        }
    }

    handleDecrement = () => {
        const subtract = Number(parseFloat((this.state.count -1) * this.state.dataPrice)).toLocaleString();
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count -1,
                dataPrice: this.props.price,
                subTotal: subtract
            });
        }
    }

     addToCart = e => {
        const data = {
            count: this.state.count,
            subTotal: this.state.subTotal
        }
        if (e.target) {
            return data;
        }
    }

    render() {
        const { photo, name, price } = this.props;
        console.log(this.state);
       
        return (
                <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
                    <Paper className="paperMain">
                    <div className="container-product">
                        <img src={photo} alt="product"></img>
                        <small>{name}</small>
                        <h4>{`$ ${parseFloat(price).toLocaleString()}`}</h4>    
                    </div>
                    <div className="containerCount">
                        <button className="btn btn-default" onClick={e => this.handleDecrement(e)}>-</button>
                        <input type="text" size="1" value={this.state.count} readOnly/>
                        <button className="btn btn-default" onClick={e => this.handleIncrement(e)}>+</button>
                    </div>
                    <AddToCart handleAddCart={e => this.addToCart(e)}/>
                    </Paper>
                </Grid>
            )
    }
}

Product.displayName = 'Product';

export default Product;