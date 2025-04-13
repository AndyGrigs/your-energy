import { Loader } from '../services/loader.js';
import { mainHomeRefs } from '../constants/refs.js';
import { loadCategories } from './categories.js';
import { categoryLimit } from '../constants/limits.js';

const loader = new Loader({
	size: 200,
});

export const addEventListeners = () => {
	mainHomeRefs.filterButtons.forEach(button => {
		button.addEventListener('click', handleFilterClick);
	});
};

export const handleFilterClick = event => {
	const clickedButton = event.target;

	if (clickedButton.classList.contains('active')) return;

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

// export async function initFilters() {
// 	mainHomeRefs.filterButtons.forEach(button => {
// 		button.addEventListener('click', e => {
// 			const clickedLabel = e.currentTarget.dataset.type
// 				.toLowerCase()
// 				.trim();

// 			state.filter = clickedLabel;
// 			state.page = 1;
// 			state.category = null;
// 			state.keyword = '';

// 			document
// 				.querySelector('.filter-btn.active')
// 				?.classList.remove('active');
// 			button.classList.add('active');

// 			renderCategories(state.filter);
// 		});
// 	});

// 	await loadCategories().then(() => {
// 		state.filter = 'muscles';

// 		document
// 			.querySelector('.filter-btn[data-type="Muscles"]')
// 			?.classList.add('active');

// 		renderCategoriesByFilter(state.filter);
// 	});
// }

// async function loadAllCategories() {
// 	try {
// 		await loader.show(mainHomeRefs.cardsContainer.id);
// 		const response = await getFilters({
// 			page: 1,
// 			limit: 10,
// 		});

// 		state.allCategories = response.results;

// 		const markup = state.allCategories.map(createCategoryCard).join('');
// 		mainHomeRefs.cardsContainer.innerHTML = markup;

// 		bindCategoryClickHandlers();
// 	} catch (error) {
// 		console.error('❌ Категорії не завантажено:', error.message);
// 		mainHomeRefs.cardsContainer.innerHTML =
// 			'<p>Error loading categories.</p>';
// 	} finally {
// 		await loader.hide(mainHomeRefs.cardsContainer.id);
// 	}
// }
