import { state } from './filter-state';
import { toggleSearchInput } from './search-handler';
import { loadExercisesByCategory } from './exercise-handler';
import { Loader } from '../services/loader.js';

const reverseFilterMap = {
	muscles: 'Muscles',
	'body parts': 'Body parts',
	equipment: 'Equipment',
};

const loader = new Loader({
	size: 200,
	color: '#f4f4f4',
});

export function handleCategoryClick(categoryName, filterType, targetEl) {
	toggleSearchInput(true);

	state.category = categoryName;
	state.filter = filterType;
	state.page = 1;
	state.keyword = '';

	const input = document.getElementById('search-input');
	if (input) input.value = '';

	const title = document.getElementById('current-category-name');
	if (title) title.textContent = ` / ${capitalize(categoryName)}`;

	loadExercisesByCategory(targetEl);
}

export function renderCategoriesByFilter(filterKey) {
	const container = document.getElementById('exercise-cards-container');

	const title = document.getElementById('current-category-name');
	if (title) title.textContent = '';

	container.innerHTML = '<p>Loading filtered categories...</p>';

	const filterLabel = reverseFilterMap[filterKey];

	if (!filterLabel) {
		console.warn('❗ Невідомий фільтр:', filterKey);
		container.innerHTML = '<p>No filter selected.</p>';
		return;
	}

	const filtered = state.allCategories.filter(
		cat => cat.filter.trim().toLowerCase() === filterLabel.toLowerCase()
	);

	if (!filtered.length) {
		container.innerHTML = '<p>No categories found for this filter.</p>';
		return;
	}

	const markup = filtered.map(createCategoryCard).join('');
	container.innerHTML = markup;
	toggleSearchInput(false);
	bindCategoryClickHandlers();
}

export function bindCategoryClickHandlers() {
	document.querySelectorAll('.category-card').forEach(card => {
		card.addEventListener('click', () => {
			const categoryName = card.dataset.name;
			const categoryType = card.dataset.type?.toLowerCase().trim();
			handleCategoryClick(categoryName, categoryType, card);
		});
	});
}

export function createCategoryCard(category) {
	return `
    <div class="category-card" 
     data-name="${category.name}" 
     data-type="${category.filter}" 
     data-id="${category.id}">
	 <div class="overlay"></div>
  <div class="category-card-bg" style="background-image: url('${
		category.imgURL
  }')">
    <div class="category-card-text">
      <h3 class="category-card-title">${capitalize(category.name)}</h3>
      <p class="category-card-sub">${capitalize(category.filter)}</p>
    </div>
  </div>
</div>

  `;
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
