export function preparingCardsMarkup(listElement, items, BtnVisible = true) {
	if (!items || items.length === 0) {
		listElement.innerHTML = '';
		return;
	}

	const FavoritesMarkup = items
		.map(
			item => `
    <li class="workout-list-item">
      <div class="workout-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          ${
				BtnVisible
					? `
            <button class="delete-button js-delete-button" aria-label="Delete workout" data-exercise-id=${item._id}>
              <img src="./img/trash-icon.svg" alt="Delete" width="16" height="16">
            </button>
          `
					: ''
			}
          <button class="start-button" data-exercise-id=${
				item._id
			}>Start ➔</button>
        </div>
        <div class="workout-body">
          <span class="workout-icon-running">
            <img
              src="./img/quote_icon_1.svg"
              width="24"
              height="24"
              alt="Running Icon"
            >
          </span>
          <h3 class="workout-name">${item.name}</h3>
          <p class="workout-stats">
            Burned calories: ${item.burnedCalories} / ${item.time} min
            <br>
            Body part: ${item.bodyPart} <br>  Target: ${item.target}
          </p>
        </div>
      </div>
    </li>
    `
		)
		.join('');

	listElement.innerHTML = FavoritesMarkup;
}
