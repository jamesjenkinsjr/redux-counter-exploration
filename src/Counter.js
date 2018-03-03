import React from 'react';

const Counter = props => {
    return (
      <div>
        <h1>SWAG</h1>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
        <h1>{props.count}</h1>
      </div>
    );
  };

  export default Counter;