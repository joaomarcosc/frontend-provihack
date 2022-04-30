import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://eureciclo.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});
