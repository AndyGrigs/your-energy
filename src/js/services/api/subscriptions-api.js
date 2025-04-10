import axios from '../../config/axios';

export const createSubscription = async email => {
  const { data } = await axios.post('/subscription', { email });

  return data;
};
