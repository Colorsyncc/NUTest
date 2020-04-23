import React from 'react';

//Components
import Product from './Product';
import Header from './Header';


const MainComponent = ({ data }) => {
        return (
            <div className="main-content">
                <Header/>
                    {data.map(res => {
                    const { photo, name, price, id } = res;
                    return (
                        <Product 
                        photo={photo}
                        name={name}
                        price={price}
                        key={id}
                        />
                    )
                })}
            </div>
        )
    }

MainComponent.displayName = 'MainComponent';

export default MainComponent;