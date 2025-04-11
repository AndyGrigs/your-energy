import * as api from './api/quotes-api';
import * as errorMessages from '../constants/error-messages';
import { getTodayDate } from '../utils/getTodayDate';

export const handleGetQuoteOfTheDay = async () => {
  try {
    const quote = await api.getQuoteOfTheDay();
    const today = getTodayDate();

    const quoteWithDate = {
      ...quote,
      date: today,
    };

    localStorage.setItem('quoteOfTheDay', JSON.stringify(quoteWithDate));

    return quoteWithDate;
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
