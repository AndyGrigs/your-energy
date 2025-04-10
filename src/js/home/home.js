import { getFilters } from '../services/api/filters-api';
import { handleCategoryClick } from './category-handler';
import { state } from './filter-state';

const container = document.getElementById('exercise-cards-container');

const reverseFilterMap = {
	muscles: 'Muscles',
	'body parts': 'Body parts',
	equipment: 'Equipment',
};

let allCategories = [];

export function initFilters() {
	const filterButtons = document.querySelectorAll('.filter-btn');

	filterButtons.forEach(button => {
		button.addEventListener('click', e => {
			const clickedLabel = e.currentTarget.dataset.type.toLowerCase().trim();

			state.filter = clickedLabel;
			state.page = 1;
			state.category = null;
			state.keyword = '';

			document.querySelector('.filter-btn.active')?.classList.remove('active');
			button.classList.add('active');

			// loadCategories(state.filter);
			renderCategoriesByFilter(state.filter);
		});
	});

	loadAllCategories(); // при старті
}

async function loadAllCategories() {
	container.innerHTML = '<p>Loading categories...</p>';

	try {
		const response = await getFilters({
			page: 1,
			limit: 100,
		});

		allCategories = response.results;
		const markup = allCategories.map(createCategoryCard).join('');
		container.innerHTML = markup;
    bindCategoryClickHandlers();
	} catch (error) {
		console.error('❌ Категорії не завантажено:', error.message);
		container.innerHTML = '<p>Error loading categories.</p>';
	}
  initSearch();
}

function renderCategoriesByFilter(filterKey) {
	container.innerHTML = '<p>Loading filtered categories...</p>';

	const filterLabel = reverseFilterMap[filterKey];

	if (!filterLabel) {
		console.warn('❗ Невідомий фільтр:', filterKey);
		container.innerHTML = '<p>No filter selected.</p>';
		return;
	}

	const filtered = allCategories.filter(
		cat => cat.filter.trim().toLowerCase() === filterLabel.toLowerCase()
	);

	if (!filtered.length) {
		container.innerHTML = '<p>No categories found for this filter.</p>';
		return;
	}

	const markup = filtered.map(createCategoryCard).join('');
	container.innerHTML = markup;

	bindCategoryClickHandlers();
}

function bindCategoryClickHandlers() {
	document.querySelectorAll('.category-card').forEach(card => {
		card.addEventListener('click', () => {
			const categoryName = card.dataset.name;
      const categoryType = card.dataset.type?.toLowerCase().trim();
			handleCategoryClick(categoryName, categoryType);
		});
	});
}

function createCategoryCard(category) {
  
	return `
    <div class="category-card" 
     data-name="${category.name}" 
     data-type="${category.filter}" 
     data-id="${category.id}">
	 <div class="overlay"></div>
  <div class="category-card-bg" style="background-image: url('${category.imgURL}')">
    <div class="category-card-text">
      <h3 class="category-card-title">${capitalize(category.name)}</h3>
      <p class="category-card-sub">${capitalize(category.filter)}</p>
    </div>
  </div>
</div>

  `;
}

function initSearch() {
	const input = document.getElementById('search-input');
	if (!input) return;

	input.addEventListener('input', e => {
		const value = e.target.value.trim().toLowerCase();
		const filtered = allCategories.filter(cat =>
			cat.name.toLowerCase().startsWith(value)
		);
		if (!filtered.length) {
			container.innerHTML = '<p>Нічого не знайдено.</p>';
			return;
		}
		const markup = filtered.map(createCategoryCard).join('');
		container.innerHTML = markup;
		bindCategoryClickHandlers();
	});
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
