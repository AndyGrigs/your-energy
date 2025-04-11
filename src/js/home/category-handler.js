import { handleGetExercisesByFilters } from '../services/exercises';
import { state } from './filter-state';

const filterParamMap = {
'body parts': 'bodypart',
  muscles: 'muscles',
  equipment: 'equipment',
};

export function handleCategoryClick(categoryName) {
  state.category = categoryName;
  state.page = 1;
  state.keyword = '';

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
    <div class="exercise-card">
      <div class="top-row">
        <span class="tag">WORKOUT</span>
        <span class="rating">${ex.rating.toFixed(1)} ★</span>
      </div>
      <h4>${ex.name}</h4>
      <p>Burned: ${ex.burnedCalories} / 3 min</p>
      <p>Body part: ${ex.bodyPart}</p>
      <p>Target: ${ex.target}</p>
      <button class="start-btn" data-id="${ex._id}">Start →</button>
    </div>
  `;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
