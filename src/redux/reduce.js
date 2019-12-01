import { combineReducers } from 'redux';
import { TEST_ACTION } from './action';

const initState = {
  value: ''
}

const test = (state = initState, action) => {
  console.log(state)
  console.log(action);
  console.log(TEST_ACTION)
  switch(action.type) {
    case TEST_ACTION: 
      console.log(111111)
      return Object.assign({}, state, { value: action.data});
    default: return state;
  }
}

const rootReducer = combineReducers({
  test,
})

export default rootReducer;