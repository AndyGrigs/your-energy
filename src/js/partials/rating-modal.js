// rating-modal.js

import { toggleModal } from '../services/modal';
import { iziToast } from '../config/izi-toast.js';
import * as exercises from '../services/exercises';

// Отримуємо DOM-елементи
const modal = document.querySelector('[data-modal="rating"]');
const form = modal?.querySelector('form');
const ratingInputs = form?.querySelectorAll('input[name="rating"]');
const ratingValue = form?.querySelector('.rating-value');
const closeBtn = modal?.querySelector('[data-modal-close]');
import { Loader } from '../services/loader.js';

const loader = new Loader({
	size: 200,
});

// Динамічне оновлення числа біля зірочок
ratingInputs?.forEach(input => {
	input.addEventListener('change', () => {
		ratingValue.textContent = input.value + '.0';
	});
});

// Обробка сабміту форми
form?.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
	event.preventDefault();

	const form = event.target;
	const rating = +form.querySelector('[name="rating"]:checked')?.value || 0;
	const email = form.querySelector('[name="email"]').value.trim();
	const comment = form.querySelector('[name="comment"]').value.trim();

	// Перевірка заповнення
	if (!rating || !email || !comment) {
		iziToast.error({ title: 'Please fiil in all fields' });
		return;
	}

	// Email валідація
	const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if (!emailRegex.test(email)) {
		iziToast.error({ title: 'Type valid email' });
		return;
	}

	try {
		await loader.show(modal);
		const updateExerciseRatingId = '64f389465ae26083f39b17a2';

		const updateExerciseRatingBody = {
			rate: rating,
			email: email,
			review: comment,
		};
		const data = await exercises.handleUpdateExerciseRating(
			updateExerciseRatingId,
			updateExerciseRatingBody
		);
		console.log('🚀 ~ data in handleUpdateExerciseRating:', data);
	} catch (error) {
		console.log('🚀 ~ error in handleUpdateExerciseRating:', error);
	} finally {
		await loader.hide(modal);
	}
}

// Закриття модалки
closeBtn?.addEventListener('click', closeRatingModal);

function closeRatingModal() {
	modal?.classList.add('hidden');
	toggleModal();
}
