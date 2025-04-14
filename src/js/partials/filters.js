import { mainHomeRefs } from '../constants/refs.js';
import { loadCategories } from './categories.js';
import { categoryLimit } from '../constants/limits.js';

export const init = () => {
	addEventListeners();
	const filter = document
		.querySelector('.filter-btn.active')
		.textContent.trim();

	const query = {
		filter,
		page: 1,
		limit: categoryLimit,
	};

	loadCategories(query);
};

export const addEventListeners = () => {
	mainHomeRefs.filterButtons.forEach(button => {
		button.addEventListener('click', handleFilterClick);
	});
};

export const handleFilterClick = event => {
	const clickedButton = event.target;

	setActiveButton(clickedButton);

	const filter = clickedButton.textContent.trim();

	const query = {
		filter,
		page: 1,
		limit: categoryLimit,
	};

	loadCategories(query);
};

export const setActiveButton = activeButton => {
	mainHomeRefs.filterButtons.forEach(btn => btn.classList.remove('active'));
	activeButton.classList.add('active');
};
