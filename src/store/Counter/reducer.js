import { INCREMENT, INCREMENTBY } from 'store/types';
const initialState = {
  value: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case INCREMENTBY:
      return { ...state, value: state.value + action.payload };
    default:
      return state;
  }
}
