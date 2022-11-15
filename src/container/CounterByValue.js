import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounterBy } from 'store/Counter/action';
export const CounterByValue = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  return (
    <div>
      <h1>CounterByValue</h1>
      <h2>CounterByValue-{counter.value}</h2>

      <button
        onClick={() => {
          dispatch(incrementCounterBy(5));
        }}
      >
        Increment By +5
      </button>
    </div>
  );
};
