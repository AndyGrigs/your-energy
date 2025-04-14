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

function floorToPointZero(num) {
	return `${Math.floor(num)}.0`;
}
