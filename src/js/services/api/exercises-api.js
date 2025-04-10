import axios from '../../config/axios';

export const getExercisesByFilters = async params => {
  const { data } = await axios.get('/exercises', { params });
  return data;
};

export const updateExerciseRating = async (id, body) => {
  const { data } = await axios.patch(`/exercises/${id}/rating`, { ...body });
  return data;
};

export const getExerciseById = async id => {
  const { data } = await axios.get(`/exercises/${id}`);
  return data;
};
