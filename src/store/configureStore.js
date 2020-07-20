import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import charactersReducers from '../reducers/charactersReducers';
import imageReducers from '../reducers/imageReducers';
import singleReducers from '../reducers/singleReducers';
import episodesReducers from '../reducers/episodesReducers';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      characters: charactersReducers,
      image: imageReducers,
      single: singleReducers,
      episodes: episodesReducers,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
