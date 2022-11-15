import { INCREMENT, INCREMENTBY } from 'store/types';

export const incrementCounter = data => async dispatch => {
  dispatch({
    type: INCREMENT,
    payload: 1
  });
};

export const incrementCounterBy = data => async dispatch => {
  dispatch({
    type: INCREMENTBY,
    payload: data
  });
};
