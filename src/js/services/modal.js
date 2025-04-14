import { handleGetExerciseById } from './exercises.js';
import { modalRefs, refs } from '../constants/refs.js';
import {
	setFavoriteButtonToAdd,
	setFavoriteButtonToRemove,
	handleFavoriteClick,
} from './favorites.js';

function firstLetterUpperCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function openModal(exercise) {
	modalRefs.modalTitle.textContent = firstLetterUpperCase(exercise.name);
	modalRefs.modalRatingValue.textContent = exercise.rating;
	modalRefs.modalImage.src = exercise.gifUrl;
	modalRefs.modalImage.alt = exercise.name;

	modalRefs.modalTarget.textContent = firstLetterUpperCase(exercise.target);
	modalRefs.modalBodyPart.textContent = firstLetterUpperCase(
		exercise.bodyPart
	);
	modalRefs.modalEquipment.textContent = firstLetterUpperCase(
		exercise.equipment
	);
	modalRefs.modalPopular.textContent = exercise.popularity;

	modalRefs.modalCalories.textContent = `${exercise.burnedCalories}/${exercise.time} min`;
	modalRefs.modalDescription.textContent = exercise.description;

	modalRefs.stars.forEach((star, index) => {
		if (index < Math.floor(exercise.rating)) {
			star.classList.add('filled');
		} else {
			star.classList.remove('filled');
		}
	});

	const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
	const isInFavorites = favorites.some(fav => fav._id === exercise._id);
	console.log('exercise:', exercise);
	console.log('favorites:', favorites);
	console.log('isInFavorites:', isInFavorites);

	if (isInFavorites) {
		setFavoriteButtonToRemove();
	} else {
		setFavoriteButtonToAdd();
	}
	const favoriteClickHandler = () => handleFavoriteClick(favorites, exercise);

	modalRefs.favoriteButton.addEventListener('click', favoriteClickHandler);
	modalRefs.closeModalBtn.addEventListener('click', closeModal);

	const handleWindowClick = event => {
		if (event.target === modalRefs.modalExercises) {
			closeModal();
		} else if (event.target === modalRefs.modalRating) {
			toggleModal();
		}
	};

	window.addEventListener('click', handleWindowClick);
	modalRefs.modalExercises._windowClickHandler = handleWindowClick;
	modalRefs.modalExercises._favoriteClickHandler = favoriteClickHandler;

	showModal(modalRefs.modalExercises);

	modalRefs.ratingButton.addEventListener('click', toggleModal);
}

function showModal(modal) {
	modal.classList.remove('hidden');

	setTimeout(() => {
		modal.classList.add('show');
	}, 10);

	document.body.style.overflow = 'hidden';
}

export function toggleModal() {
	modalRefs.modalExercises.classList.toggle('hidden');
	modalRefs.modalExercises.classList.toggle('show');
	modalRefs.modalRating.classList.toggle('hidden');
	modalRefs.modalRating.classList.toggle('show');
}

function closeModal() {
	modalRefs.modalExercises.classList.remove('show');

	setTimeout(() => {
		modalRefs.modalExercises.classList.add('hidden');
		document.body.style.overflow = '';
	}, 300);

	document.body.style.overflow = '';
	modalRefs.closeModalBtn.removeEventListener('click', closeModal);
	modalRefs.favoriteButton.removeEventListener(
		'click',
		modalRefs.modalExercises._favoriteClickHandler
	);
	modalRefs.ratingButton.removeEventListener('click', toggleModal);

	window.removeEventListener(
		'click',
		modalRefs.modalExercises._windowClickHandler
	);

	modalRefs.modalTitle.textContent = '';
	modalRefs.modalRatingValue.textContent = '';
	modalRefs.modalImage.src = '';
	modalRefs.modalImage.alt = '';

	modalRefs.modalTarget.textContent = '';
	modalRefs.modalBodyPart.textContent = '';
	modalRefs.modalEquipment.textContent = '';
	modalRefs.modalPopular.textContent = '';

	modalRefs.modalCalories.textContent = '';
	modalRefs.modalDescription.textContent = '';
}

refs.exercisesContainer.addEventListener('click', async function (event) {
	const startButton = event.target.closest('.start-button');

	if (startButton) {
		const exerciseId = startButton.dataset.exerciseId;

		if (exerciseId) {
			try {
				const exercise = await handleGetExerciseById(exerciseId);

				openModal(exercise);
			} catch (error) {
				console.error('Error fetching exercise:', error);
			} finally {
			}
		}
	}
});
