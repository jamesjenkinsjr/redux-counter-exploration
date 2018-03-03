import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

//dispatch


class App extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>SWAG</h1>
        <button onClick={() => {this.props.dispatch({type: "INCREMENT"})}}>+</button>
        <button onClick={() => {this.props.dispatch({type: "DECREMENT"})}}>-</button>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state
  }
}

export default connect(mapStateToProps, null)(App);
