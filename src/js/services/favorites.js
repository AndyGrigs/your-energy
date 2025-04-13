import { mobileMenuRefs, modalRefs, refs } from '../constants/refs.js';
import { preparingCardsMarkup } from '../sharedComponents/exercisesCards.js';

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
	const exerciseIndex = favorites.findIndex(fav => fav._id === exercise._id);

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

export function removeFromFavorites(event) {
	const exerciseId =
		event.target.closest('.js-delete-button').dataset.exerciseId;
	console.log(
		'🚀 ~ exerciseId:',
		exerciseId,
		event.target.closest('.js-delete-button')
	);
	const favoritesListJson = localStorage.getItem('favorites');
	const favoritesList = JSON.parse(favoritesListJson);
	const updatedFavorites = favoritesList.filter(
		exercise => exercise._id !== exerciseId
	);
	localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
	renderFavoritesItems();
}

export async function renderFavoritesItems() {
	try {
		const favoritesListJson = localStorage.getItem('favorites');
		const favoritesList = JSON.parse(favoritesListJson);
		if (favoritesList && favoritesList.length > 0) {
			preparingCardsMarkup(workuotList, favoritesList);
			document.querySelectorAll('.js-delete-button').forEach(button => {
				button.addEventListener('click', event => {
					removeFromFavorites(event);
				});
			});
		} else {
			const error = document.querySelector('.not-items-message');
			error.style.display = 'block';
		}
	} catch (error) {
		console.log('🚀 ~ error in getFavoritesItems data rendering:', error);
	}
}
