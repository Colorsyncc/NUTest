import React, { Component } from 'react';

//Components
import ProductGrid from './ProductGrid';
import Header from './Header';


class MainComponent extends Component {
    constructor() {
        super();
        this.state = { count: 0}
    }

    handleIncrement = e => {
            if (e.target) {
                this.setState({
                    count: this.state.count +1
                })
            }
    }

    handleSubtract = e => {
        console.log('clickkkkk');
    }

    render() {
        const { data } = this.props;
        const { count } = this.state;
        return (
            <div className="main-content">
                <Header/>
                <ProductGrid 
                    counter={count}
                    data={data}
                    increment={this.handleIncrement}
                    subtract={this.handleSubtract}
                />
            </div>
        )
    }
}

MainComponent.displayName = 'MainComponent';

export default MainComponent;