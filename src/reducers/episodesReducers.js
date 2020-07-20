const epiInitState = [];
const episodesReducers = (state = epiInitState, action) => {
  switch (action.type) {
    case 'SET_START_EPISODES': {
      return [...state, ...action.payload];
    }
    default: {
      return [...state];
    }
  }
};
export default episodesReducers;
