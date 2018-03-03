import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

//dispatch


class App extends Component {
  render() {
    return (
      <div>
        <h1>SWAG</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
