import { combineReducers } from 'redux';
// import catalog from "store/catalog/reducer";
import dashboard from 'store/Dashboard/reducer';
import CounterReducer from 'store/Counter/reducer';

export default combineReducers({
  // catalog
  dashboard,
  counter: CounterReducer
});
