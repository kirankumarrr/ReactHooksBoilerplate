import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INCREMENT } from 'store/types';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>

        <h2>Counter Value-{this.props.counter.value}</h2>

        <button
          onClick={() => {
            this.props.increment();
          }}
        >
          Increment By +1
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () =>
      dispatch({
        type: INCREMENT,
        payload: 1
      })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
