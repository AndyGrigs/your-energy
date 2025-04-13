import { state } from './filter-state';
import { initExerciseSearch } from './search-handler';
import { createExerciseCard } from './exercise-renderer';
import { handleGetExercisesByFilters } from '../services/exercises';

const container = document.getElementById('exercise-cards-container');

const reverseFilterMap = {
	muscles: 'Muscles',
	'body parts': 'Body parts',
	equipment: 'Equipment',
};

export async function loadExercisesByCategory() {
	container.innerHTML = '<p>Loading exercises...</p>';

	try {
		const filterParamMap = {
			'body parts': 'bodypart',
			muscles: 'muscles',
			equipment: 'equipment',
		};

		const filterKey = filterParamMap[state.filter.toLowerCase()];
		if (!filterKey) {
			console.warn('❗ Невідомий фільтр:', state.filter);
			return;
		}

		const query = {
			[filterKey]: state.category,
			keyword: state.keyword,
			page: state.page,
			limit: state.limit,
		};

		const response = await handleGetExercisesByFilters(query);
		const exercises = response.results;

		state.exercises = exercises;

		if (!exercises.length) {
			container.innerHTML = '<p>No exercises found.</p>';
			return;
		}

		container.innerHTML = exercises.map(createExerciseCard).join('');
		initExerciseSearch();
	} catch (error) {
		container.innerHTML = '<p>Error loading exercises.</p>';
		console.error('❌ Exercise loading error:', error.message);
	}
}


