import { getFilters } from '../services/api/filters-api';
import {
	renderCategoriesByFilter,
	bindCategoryClickHandlers,
	createCategoryCard,
} from './category-handler';
import { state } from './filter-state';
import { Loader } from '../services/loader.js';

const container = document.getElementById('exercise-cards-container');

const loader = new Loader({
	size: 200,
});

export async function initFilters() {
	const filterButtons = document.querySelectorAll('.filter-btn');

	filterButtons.forEach(button => {
		button.addEventListener('click', e => {
			const clickedLabel = e.currentTarget.dataset.type
				.toLowerCase()
				.trim();

			state.filter = clickedLabel;
			state.page = 1;
			state.category = null;
			state.keyword = '';

			document
				.querySelector('.filter-btn.active')
				?.classList.remove('active');
			button.classList.add('active');

			renderCategoriesByFilter(state.filter);
		});
	});

	await loadAllCategories().then(() => {
		state.filter = 'muscles';

		document
			.querySelector('.filter-btn[data-type="Muscles"]')
			?.classList.add('active');

		renderCategoriesByFilter(state.filter);
	});
}

async function loadAllCategories() {
	try {
		await loader.show(container.id);
		const response = await getFilters({
			page: 1,
			limit: 10,
		});

		state.allCategories = response.results;

		const markup = state.allCategories.map(createCategoryCard).join('');
		container.innerHTML = markup;

		bindCategoryClickHandlers();
	} catch (error) {
		console.error('❌ Категорії не завантажено:', error.message);
		container.innerHTML = '<p>Error loading categories.</p>';
	} finally {
		await loader.hide(container.id);
	}
}
