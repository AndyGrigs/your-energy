import * as api from './api/filters-api.js';
import * as errorMessages from '../constants/error-messages';

export const handleGetFilters = async query => {
  try {
    const filters = await api.getFilters(query);
    return filters;
  } catch (error) {
    const { status } = error;
    const message =
      errorMessages.getFiltersErrs[status] ||
      `Unexpected error (${error.message || 'unknown'})`;

    throw {
      code: status,
      message: message,
    };
  }
};
