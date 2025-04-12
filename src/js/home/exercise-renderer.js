
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createExerciseCard(ex) {
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
              src="./img/quote_icon_1.svg"
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