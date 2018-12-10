import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from "../../app/common/util/reducerUtil";
// import { INCREMENT_COUNTER, DECREMENT_COUNTER} from './testConstants';
const initialState = {
  data: "42"
};
// instead of switch, create individual functions for our scenarios

export const incrementCounter = (state, payload) => {
  return { ...state, data: state.data + 1 };
};

export const decrementCounter = (state, payload) => {
  return { ...state, data: state.data - 1 };
};
// const testReducer = (state = initialState, action) => {
//  switch-which will take action based on which type of action is coming in
// switch (action.type) {
//   case INCREMENT_COUNTER:
//     return { ...state, data: state.data + 1 };
//   case DECREMENT_COUNTER:
//     return { ...state, data: state.data - 1 };
//   default:
//     return state;
// }
// };
// return modified state, the state inside redux store is immutable, and should not change directly but we have object assign etc of updating but creating copy of data and returning that
// create reducer utility, taken from reducing boiler plate section in the redux documentation
// export default testReducer;

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});

// pass in initial state and look up table which will match our actions to what we created above-createReducer function
