import axios from 'axios';
import { API_URL } from '../../config/api';

axios.defaults.baseURL = API_URL;

export const createSubscription = async email => {
  const { data } = await axios.post('/subscription', { email });

  return data;
};
