// combine multiple reducers together and pass it to the store

import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
