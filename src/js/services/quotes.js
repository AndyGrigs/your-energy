import * as api from './api/quotes-api';
import * as errorMessages from '../constants/error-messages';

export const handleGetQuoteOfTheDay = async () => {
  try {
    const quote = await api.getQuoteOfTheDay();
    return quote;
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
