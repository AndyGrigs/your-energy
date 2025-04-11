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
	modalRefs.modalBodyPart.textContent = firstLetterUpperCase(exercise.bodyPart);
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
	const isInFavorites = favorites.some(fav => fav.id === exercise.id);

	if (isInFavorites) {
		setFavoriteButtonToRemove();
	} else {
		setFavoriteButtonToAdd();
	}

	modalRefs.favoriteButton.addEventListener('click', () =>
		handleFavoriteClick(favorites, exercise)
	);
	modalRefs.closeModalBtn.addEventListener('click', closeModal);
	window.addEventListener('click', event => {
		if (event.target === modalRefs.modalExercises) {
			closeModal();
		}
	});

	modalRefs.modalExercises.classList.remove('hidden');

	setTimeout(() => {
		modalRefs.modalExercises.classList.add('show');
	}, 10);

	document.body.style.overflow = 'hidden';

	modalRefs.ratingButton.addEventListener('click', () => {
		console.log('Rating button clicked');
		console.log(modalRefs.ratingButton);
		modalRefs.modalExercises.classList.toggle('hidden');
		console.log(modalRefs.modalRating);
		modalRefs.modalRating.classList.toggle('hidden');
	});
}

function closeModal() {
	modalRefs.modalExercises.classList.remove('show');

	setTimeout(() => {
		modalRefs.modalExercises.classList.add('hidden');
		document.body.style.overflow = '';
	}, 300);

	document.body.style.overflow = '';
	modalRefs.closeModalBtn.removeEventListener('click', closeModal);
	modalRefs.favoriteButton.removeEventListener('click', () =>
		handleFavoriteClick(favorites, exercise)
	);
	window.removeEventListener('click', closeModal);
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
			}
		}
	}
});
