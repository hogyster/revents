import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
};
// sending type of action to reducer

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};
