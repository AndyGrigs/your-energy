import axios from 'axios';
import { API_URL } from '../../config/api';

axios.defaults.baseURL = API_URL;

export const getQuoteOfTheDay = async () => {
  const { data } = await axios.get('/quote');
  return data;
};
