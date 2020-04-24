import React from 'react';

const Counter = ({ handleIncrement, handleSubtract}) => {
    return (
        <div className="containerCount">
            <button className="btn btn-default" onClick={e =>  handleIncrement(e)}>+</button>
            <input type="text" size="1"/>
            <button className="btn btn-default" onClick={e => handleSubtract(e)}>-</button>
        </div>
    )
}

Counter.displayName = 'Counter';

export default Counter;