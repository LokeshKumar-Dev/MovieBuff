import axios from 'axios';

export default axios.create({
  baseURL:'http://www.omdbapi.com',
  headers:{
    apikey: '4d49aebe'
  }
});
