// import this to all of our reducers we create
// fnmap-function map-act as look up table for our actuions
// type and payload coming from our actions
export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
    // retrun handler with state and payload or simply return state
  };
};
