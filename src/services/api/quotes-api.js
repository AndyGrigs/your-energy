import axios from 'axios';

export const getQuoteOfTheDay = async () => {
  const { data } = await axios.get('/quote');
  return data;
};
