const imageInitState = [];

const imageReducers = (state = imageInitState, action) => {
  switch (action.type) {
    case 'SET_START_IMAGE': {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};
export default imageReducers;
