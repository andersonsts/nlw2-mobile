import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.43:3333' // Insera seu IP
});

export default api;
