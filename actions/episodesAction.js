import axios from '../config/axios';

export const getStartingEpisode = () => {
  return dispatch =>
    axios
      .get('/episodes')
      .then(response => {
        const data = response.data;
        dispatch(setEpisodes(data));
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
};
export const setEpisodes = data => {
  return {type: 'SET_START_EPISODES', payload: data};
};
