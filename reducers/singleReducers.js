const charInitState = [];
const singleReducers = (state = charInitState, action) => {
  switch (action.type) {
    case 'SET_SINGLE_CHARACTER': {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};
export default singleReducers;
