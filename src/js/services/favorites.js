import { modalRefs } from '../constants/refs.js';

export function setFavoriteButtonToAdd() {
  modalRefs.favoriteButton.innerHTML = `
    Add to favorites
    <svg>
      <use href="./img/sprite.svg#heart"></use>
    </svg>`;
}

export function setFavoriteButtonToRemove() {
  modalRefs.favoriteButton.innerHTML = `
    Remove from favorites
    <svg>
      <use href="./img/sprite.svg#trash"></use>
    </svg>`;
}

export function handleFavoriteClick(favorites, exercise) {
  const exerciseIndex = favorites.findIndex(fav => fav.id === exercise.id);

  if (exerciseIndex === -1) {
    // Add to favorites
    favorites.push(exercise);
    setFavoriteButtonToRemove();
  } else {
    // Remove from favorites
    favorites.splice(exerciseIndex, 1);
    setFavoriteButtonToAdd();
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}
