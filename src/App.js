import React, { Component } from 'react';
//Assets
import api_url from './constants/api_url';
//Components

import '../src/App.css';
import Header from './components/Header';
import Product from './components/Product';
import AddToCart from './components/AddToCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      count: 0,
      subTotal: 0
     }
  }

  componentDidMount() {
    fetch(api_url).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        this.setState({ data: data})
    }).catch( err => {
        console.log(err);
    });
  }

  render() {
    const { data, count, subTotal } = this.state;
        
    return (
      <div className="App">
        <Header 
          count={count}
          subTotal={subTotal}
        />
        { data.map(product => {
          const { id, photo, name, price } = product;
            return(
                <Product
                    data={data}
                    key={id}
                    photo={photo}
                    productName={name}
                    price={price}
                />)
        })}
      </div>
    )
  }
}

export default App;