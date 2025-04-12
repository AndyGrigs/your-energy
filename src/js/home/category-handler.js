import { handleGetExercisesByFilters } from '../services/exercises';
import { state } from './filter-state';
import { toggleSearchInput } from './home';

const filterParamMap = {
	'body parts': 'bodypart',
	muscles: 'muscles',
	equipment: 'equipment',
};

export function handleCategoryClick(categoryName, filterType) {
	toggleSearchInput(true);

	state.category = categoryName;
	state.filter = filterType;
	state.page = 1;
	state.keyword = '';

	const input = document.getElementById('search-input');
	if (input) input.value = '';

	const title = document.getElementById('current-category-name');
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

    state.exercises = exercises;

		if (!exercises.length) {
			container.innerHTML = '<p>No exercises found.</p>';
			return;
		}

		container.innerHTML = exercises.map(createExerciseCard).join('');
	} catch (error) {
		container.innerHTML = '<p>Error loading exercises.</p>';
		console.error('❌ Exercise loading error:', error.message);
	}
  initExerciseSearch()
}

function initExerciseSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;

  input.addEventListener('input', e => {
    const value = e.target.value.trim().toLowerCase();

    const filtered = state.exercises.filter(ex =>
      ex.name.toLowerCase().includes(value)
    );

    const container = document.getElementById('exercise-cards-container');

    if (!filtered.length) {
      container.innerHTML = '<p>No matching exercises found.</p>';
      return;
    }

    container.innerHTML = filtered.map(createExerciseCard).join('');
  });
}


function createExerciseCard(ex) {
	console.log(ex);
	return `
   <div class="workout-card ex-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          <div class="rating-block">
             <span class="workout-badge-rating">${ex.rating}</span>
            <svg class="star-icon" width="14" height="13" style="width:16px">
              <use href="/img/sprite.svg#star"></use>
            </svg>
          </div>
            
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
          <h3 class="workout-name">${capitalize(ex.name)}</h3>
          <p class="workout-stats">
          <span>Burned calories: <b>${ex.burnedCalories}/${ex.time} min</b></span> 
          <span> Body part: <b>${ex.bodyPart}</b></span>
          <span>Target: <b>${ex.target}</b></span> 
          </p>
        </div>
      </div>
  `;
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
