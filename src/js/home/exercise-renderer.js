import { capitalizeFirstLetter } from '../partials/categories';

export function createExerciseCard(item) {
	return `
    <li class="workout-card">
      <div class="workout-header">
        <span class="workout-badge">WORKOUT</span>

        <div class="rating-block">
          <span class="workout-badge-rating">${floorToPointZero(
				item.rating
			)}</span>

          <svg
            class="star-icon"
            width="14"
            height="13"
            style="width: 16px"
          >
            <use href="/img/sprite.svg#star"></use>
          </svg>
        </div>

        <button class="start-button" type="button" data-exercise-id="${
			item._id
		}">
          Start <svg class="start-icon" width="16" height="16">
    <use href="/img/sprite.svg#arrow-right"></use>
  </svg>
        </button>
      </div>

      <div class="workout-body">
        <svg class="running-icon" width="24" height="24" alt="Running Icon">
    <use href="/img/sprite.svg#runner"></use>
  </svg>
       
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

function floorToPointZero(num) {
	return `${Math.floor(num)}.0`;
}
