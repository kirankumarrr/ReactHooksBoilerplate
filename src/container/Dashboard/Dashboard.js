import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { checkAction } from 'store/Dashboard/action';
import Counter from 'container/Counter';
import { CounterByValue } from 'container/CounterByValue';
const Dashboard = props => {
  const dispatch = useDispatch();

  const { a } = useSelector(state => state.dashboard);

  useEffect(() => {
    dispatch(checkAction());
    // return () => {
    //     cleanup
    // };
  }, []);

  return (
    <div>
      Dashboard: {a}
      <br />
      <Counter />
      <hr />
      <hr />
      <CounterByValue />
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
