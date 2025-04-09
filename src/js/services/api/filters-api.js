import axios from 'axios';

export const getFilters = async params => {
  const { data } = await axios.get('/filters', { params });
  return data;
};
