import { mainHomeRefs } from '../constants/refs';
import { handleGetExercisesByFilters } from '../services/exercises';
import {
	clearPagination,
	renderPagination,
} from '../sharedComponents/pagination';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { floorToPointZero } from '../utils/floorToPointZero';
import { homeLoader, toggleSearchInput } from './categories';

export async function loadExercises(query, keyword) {
	mainHomeRefs.cardsContainer.innerHTML = '';
	clearPagination();

	try {
		if (keyword) {
			query.keyword = keyword;
		}

		await homeLoader.show(mainHomeRefs.cardsContainer.id);
		const data = await handleGetExercisesByFilters(query);
		await homeLoader.hide(mainHomeRefs.cardsContainer.id);

		const { page, perPage, totalPages, results } = data;

		if (results.length <= 0) {
			mainHomeRefs.cardsContainer.innerHTML =
				'<p class="text-for-n-data">No exercises found for this filter.</p>';
			return;
		}

		renderExercises(results);

		console.log('after render');

		const paginationProps = {
			totalPages,
			query,
			onPageChange: newPage => {
				const updatedQuery = {
					...query,
					page: newPage,
				};
				loadExercises(updatedQuery);
			},
		};

		renderPagination(paginationProps);
	} catch (error) {
		console.log('error');
		mainHomeRefs.cardsContainer.innerHTML = '';
	} finally {
		await homeLoader.hide(mainHomeRefs.cardsContainer.id);
	}
}

export const renderExercises = async data => {
	toggleSearchInput(true);

	const markup = data.map(createExerciseCard).join('');
	mainHomeRefs.cardsContainer.innerHTML = markup;
};

export function createExerciseCard(item) {
	return `
    <li class="workout-card">
      <div class="workout-header">
        <span class="workout-badge">WORKOUT</span>

        <div class="rating-block">
          <span class="workout-badge-rating">${floorToPointZero(
				item.rating
			)}</span>
          <img class="star-icon"
              src="/img/star.svg"
              width="18px"
              height="18px"
              alt="Star Icon"
            />
        </div>

        <button class="start-button" type="button" data-exercise-id="${
			item._id
		}">
          Start <img class="start-icon"
              src="/img/arrow-right.svg"
              width="16px"
              height="16px"
              alt="Arrow right Icon"
            />
        </button>
      </div>

      <div class="workout-body">
        <img class="running-icon"
              src="/img/runner.svg"
              width="24px"
              height="24px"
              alt="Running Man Icon"
            />
       
        <h3 class="workout-name">${capitalizeFirstLetter(item.name)}</h3>
      </div>

      <div class="workout-stats">
        <div class="workout-stats-item stats-calories">
        <p class="workout-stats-text">Burned calories:</p>
          <span class="workout-stats-value">${item.burnedCalories} / ${
		item.time
	} min</span>
        </div>
        <div class="workout-stats-item stats-part">
        <p class="workout-stats-text">Body part:</p><span class="workout-stats-value">${capitalizeFirstLetter(
			item.bodyPart
		)}</span></div>
        <div class="workout-stats-item stats-target"><p class="workout-stats-text">Target:</p><span class="workout-stats-value">${capitalizeFirstLetter(
			item.target
		)}</span></div>
      </div>
    </li>
  `;
}
