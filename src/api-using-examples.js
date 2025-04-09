import * as subscriptions from './services/subscriptions';
import * as exercises from './services/exercises';
import * as filters from './services/filters';
import * as quote from './services/quotes';

const email = 'bonny02@gmail.com';

try {
  await subscriptions.handleSubscription(email);
} catch (error) {
  console.log('🚀 ~ error in handleSubscription:', error);
}

const exercisesQuery = {
  muscles: 'abs',
  //   keyword: 'bike',
  page: 1,
  limit: 10,
};

try {
  const data = await exercises.handleGetExercisesByFilters(exercisesQuery);
  console.log('🚀 ~ data in handleGetExercisesByFilters:', data);
} catch (error) {
  console.log('🚀 ~ error in handleGetExercisesByFilters:', error);
}

const updateExerciseRatingId = '64f389465ae26083f39b17a2';

const updateExerciseRatingBody = {
  rate: 5,
  email: 'bonny01@gmail.com',
  review: 'My best exercise',
};

try {
  const data = await exercises.handleUpdateExerciseRating(
    updateExerciseRatingId,
    updateExerciseRatingBody
  );
  console.log('🚀 ~ data in handleUpdateExerciseRating:', data);
} catch (error) {
  console.log('🚀 ~ error in handleUpdateExerciseRating:', error);
}

const getExerciseByIdId = '64f389465ae26083f39b17a2';

try {
  const data = await exercises.handleGetExerciseById(getExerciseByIdId);
  console.log('🚀 ~ data:', data);
} catch (error) {
  console.log('🚀 ~ error in main:', error);
}

const getFiltersQuery = {
  filter: 'Body parts',
  page: 1,
  limit: 10,
};

try {
  const data = await filters.handleGetFilters(getFiltersQuery);
  console.log('🚀 ~ data:', data);
} catch (error) {
  console.log('🚀 ~ error in main:', error);
}

try {
  const data = await quote.handleGetQuoteOfTheDay();
  console.log('🚀 ~ data:', data);
} catch (error) {
  console.log('🚀 ~ error in main:', error);
}
