import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
});

export default axios;
