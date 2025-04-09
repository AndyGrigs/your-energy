export const getExercisesByFiltersErrs = {
  404: 'Exercises not found for the given filters.',
  409: 'Filters are required to perform the search.',
  500: 'Something went wrong while fetching exercises. Please try again later.',
};

export const updateExerciseRatingErrs = {
  400: 'Invalid request. Please check the body.',
  404: 'Exercise not found. Please ensure the exercise ID is correct.',
  409: 'Rating update conflict. The rating already exists with this email.',
  500: 'Something went wrong while updating the rating. Please try again later.',
};

export const getExerciseByIdErrs = {
  400: 'Invalid request. Please check the exercise ID format.',
  404: 'Exercise not found with the provided ID.',
  500: 'Something went wrong while fetching the exercise. Please try again later.',
};

export const getFiltersErrs = {
  404: 'Filters not found. Please check the filters configuration.',
  500: 'Something went wrong while fetching filters. Please try again later.',
};

export const getQuoteOfTheDayErrs = {
  404: 'Quote not found.',
  500: 'Something went wrong while fetching the quote. Please try again later.',
};

export const createSubscriptionErrs = {
  400: 'Invalid request. Please check the email format.',
  404: 'Endpoint not found. Please try again later.',
  409: 'You are already subscribed.',
  500: 'Something went wrong on the server. Please try again later.',
};
