import { exerciseLimit } from '../constants/limits';
import { mainHomeRefs } from '../constants/refs';
import { handleGetFilters } from '../services/filters';
import { Loader } from '../services/loader';
import {
	clearPagination,
	renderPagination,
} from '../sharedComponents/pagination';
import { loadExercises } from './exercises';

export const homeLoader = new Loader({
	size: 200,
});

export const loadCategories = async query => {
	clearPagination();

	try {
		mainHomeRefs.cardsContainer.innerHTML = '';
		await homeLoader.show(mainHomeRefs.cardsContainer.id);

		const data = await handleGetFilters(query);

		await homeLoader.hide(mainHomeRefs.cardsContainer.id);

		const { page, perPage, totalPages, results } = data;

		if (results.length <= 0) {
			mainHomeRefs.cardsContainer.innerHTML =
				'<p class="text-for-n-data">No categories found for this filter.</p>';

			return;
		}

		// todo implement render function
		renderCategories(results);

		const paginationProps = {
			totalPages,
			query,
			onPageChange: newPage => {
				const updatedQuery = {
					...query,
					page: newPage,
				};
				loadCategories(updatedQuery);
			},
		};

		renderPagination(paginationProps);
	} catch (error) {
		mainHomeRefs.cardsContainer.innerHTML = '';
	}
};

export const renderCategories = async data => {
	mainHomeRefs.sectionTitle.textContent = 'Exercises';
	mainHomeRefs.sectionSubTitle.textContent = '';

	toggleSearchInput(false);

	const markup = data.map(createCategoryCard).join('');
	mainHomeRefs.cardsContainer.innerHTML = markup;

	bindCategoryClickHandlers();
};

export const bindCategoryClickHandlers = () => {
	document.querySelectorAll('.category-card').forEach(card => {
		card.addEventListener('click', () => {
			const categoryName = card.dataset.name;
			const categoryType = card.dataset.type?.toLowerCase().trim();

			handleCategoryClick(categoryName, categoryType, card);
		});
	});
};

export const createCategoryCard = category => {
	return `
		<div
			class="category-card"
			data-name="${category.name}"
			data-type="${category.filter}"
			data-id="${category.id}"
			style="
				background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url('${
					category.imgURL
				}');
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			"
		>
			<div class="category-card-text">
				<h3 class="category-card-title">${capitalizeFirstLetter(category.name)}</h3>
				<p class="category-card-sub">${category.filter}</p>
			</div>
		</div>

 	 `;
};

export const capitalizeFirstLetter = str => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const handleCategoryClick = (categoryName, filterType, targetEl) => {
	console.log('🚀 ~ categoryName:', categoryName);
	toggleSearchInput(true);

	mainHomeRefs.searchInput.value = '';
	mainHomeRefs.sectionTitle.textContent = `Exercises /`;
	mainHomeRefs.sectionSubTitle.textContent = `${capitalizeFirstLetter(
		categoryName
	)}`;

	const query = {
		[removeSpaces(filterType)]: categoryName,
		page: 1,
		limit: exerciseLimit,
	};
	console.log('🚀 ~ query:', query);

	loadExercises(query);
};

export const toggleSearchInput = visible => {
	mainHomeRefs.searchInput.style.display = visible ? 'block' : 'none';
};

export function initExerciseSearch() {
	const input = document.getElementById('search-input');
	const container = document.getElementById('exercise-cards-container');

	input.addEventListener('input', e => {
		const value = e.target.value.trim().toLowerCase();

		const filtered = state.exercises.filter(ex =>
			ex.name.toLowerCase().includes(value)
		);

		if (!filtered.length) {
			container.innerHTML = '<p>No matching exercises found.</p>';
			return;
		}

		container.innerHTML = filtered.map(createExerciseCard).join('');
	});
}

export const removeSpaces = str => {
	return str.replace(/\s+/g, '');
};
