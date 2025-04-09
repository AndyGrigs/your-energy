import { iziToast } from '../config/izi-toast.js';
import 'izitoast/dist/css/iziToast.min.css';
import { iziToastOptions } from '../constants/izi-toast.js';

import * as api from './api/exercises-api.js';
import * as errorMessages from '../constants/error-messages.js';

export const handleGetExercisesByFilters = async query => {
  try {
    const exercises = await api.getExercisesByFilters(query);
    return exercises;
  } catch (error) {
    const { status } = error;
    const message =
      errorMessages.getExercisesByFiltersErrs[status] ||
      `Unexpected error (${error.message || 'unknown'})`;

    throw {
      code: status,
      message: message,
    };
  }
};

export const handleUpdateExerciseRating = async (id, body) => {
  try {
    const response = await api.updateExerciseRating(id, body);
    return response;
  } catch (error) {
    const { status } = error;
    const message =
      errorMessages.updateExerciseRatingErrs[status] ||
      `Unexpected error (${error.message || 'unknown'})`;

    iziToast.show({
      ...iziToastOptions.error,
      message,
    });

    throw {
      code: status,
      message: message,
    };
  }
};

export const handleGetExerciseById = async id => {
  try {
    const exercise = await api.getExerciseById(id);
    return exercise;
  } catch (error) {
    const { status } = error;
    const message =
      errorMessages.getExerciseByIdErrs[status] ||
      `Unexpected error (${error.message || 'unknown'})`;

    throw {
      code: status,
      message: message,
    };
  }
};
