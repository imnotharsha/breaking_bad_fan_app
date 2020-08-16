const characterInitState = [];

const charactersReducers = (state = characterInitState, action) => {
  switch (action.type) {
    case 'SET_START_CHARACTERS': {
      return [...state, ...action.payload];
    }
    default: {
      return [...state];
    }
  }
};
export default charactersReducers;
