
import { modalRefs } from '../constants/refs.js';
import { renderQuoteOfTheDay } from '../sharedComponents/quoteOfTheDay.js';
import { preparingCardsMarkup } from '../sharedComponents/exercisesCards.js';
import { handleGetExerciseById } from '../services/exercises.js';

const quoteText = document.querySelector('.quote-day-card-text');
const quoteAuthor = document.querySelector('.quote-day-card-author');
const workuotList = document.querySelector('.workout-list');


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




async function renderFavoritesItems() {
  try {
    let favoritesItems = [];
    const favoritesListJson = localStorage.getItem('favorites');
    const favoritesList = JSON.parse(favoritesListJson);

    for (const id of favoritesList) {
      const data = await handleGetExerciseById(id);
      favoritesItems.push(data);
    }

    preparingCardsMarkup(workuotList, favoritesItems);
  } catch (error) {
    console.log('🚀 ~ error in getFavoritesItems data rendering:', error);
  }
}

renderQuoteOfTheDay(quoteText, quoteAuthor);

const mocked_data_id_1 = '64f389465ae26083f39b17a2';
const mocked_data_id_2 = '64f389465ae26083f39b17a7';
const mocked_data_id_3 = '64f389465ae26083f39b17a4';
const mocked_data_id_4 = '64f389465ae26083f39b17a5';
const mocked_items_list = [
  mocked_data_id_1,
  mocked_data_id_2,
  mocked_data_id_3,
  mocked_data_id_4,
];
const mocked_items_json = JSON.stringify(mocked_items_list);
localStorage.setItem('favorites', mocked_items_json);

renderFavoritesItems();

