import React from 'react';

//Components
import ProductGrid from './ProductGrid';
import Header from './Header';


const MainComponent = ({ data }) => {
        return (
            <div className="main-content">
                <Header/>
                <ProductGrid data={data}/>
            </div>
        )
    }

MainComponent.displayName = 'MainComponent';

export default MainComponent;