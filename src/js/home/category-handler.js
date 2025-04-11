import { handleGetExercisesByFilters } from '../services/exercises';
import { state } from './filter-state';

const filterParamMap = {
	'body parts': 'bodypart',
	muscles: 'muscles',
	equipment: 'equipment',
};

export function handleCategoryClick(categoryName, filterType) {
	state.category = categoryName;
	state.filter = filterType;
	state.page = 1;
	state.keyword = '';

	const input = document.getElementById('search-input');
	if (input) input.value = '';

	const title = document.getElementById('current-category');
	if (title) title.textContent = ` / ${capitalize(categoryName)}`;

	loadExercisesByCategory();
}

export async function loadExercisesByCategory() {
	const container = document.getElementById('exercise-cards-container');
	container.innerHTML = '<p>Loading exercises...</p>';

	try {
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

		if (!exercises.length) {
			container.innerHTML = '<p>No exercises found.</p>';
			return;
		}

		container.innerHTML = exercises.map(createExerciseCard).join('');
	} catch (error) {
		container.innerHTML = '<p>Error loading exercises.</p>';
		console.error('❌ Exercise loading error:', error.message);
	}
}

function createExerciseCard(ex) {
	return `
   <div class="workout-card ex-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          <button class="start-button" data-exercise-id=${ex._id}>Start ➔</button>
        </div>
        <div class="workout-body">
          <span class="workout-icon-running">
            <img
              src="../img/quote_icon_1.svg"
              width="24px"
              height="24px"
              alt="Running Icon"
            />
          </span>        
          <h3 class="workout-name">${ex.name}</h3>
          <p class="workout-stats">
            Burned calories: ${ex.burnedCalories} / ${ex.time} min
            <br>
            Body part: ${ex.bodyPart} <br>  Target: ${ex.target}
          </p>
        </div>
      </div>
  `;
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
