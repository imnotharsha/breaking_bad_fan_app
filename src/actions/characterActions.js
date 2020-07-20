import axios from '../config/axios';
export const setAllCharacters = () => {
  return dispatch => {
    axios
      .get('/characters')
      .then(response => {
        const data = response.data;
        dispatch(setStartCharacters(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const setStartCharacters = data => {
  return {type: 'SET_START_CHARACTERS', payload: data};
};
{
  /*export const getRandomCharacter = () => {
  return dispatch => {
    axios
      .get('character/random')
      .then(response => {
        const data = response.data;
        console.log(data, 'random');
        dispatch(setImage(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const setImage = data => {
  return {type: 'SET_START_IMAGE', payload: data};
};
*/
}

export const getSingleCharacterInfo = id => {
  return dispatch => {
    axios
      .get(`characters/${id}`)
      .then(response => {
        const data = response.data;

        dispatch(setSingleCharacter(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const setSingleCharacter = data => {
  return {type: 'SET_SINGLE_CHARACTER', payload: data};
};
