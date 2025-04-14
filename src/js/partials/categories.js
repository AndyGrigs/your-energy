import { exerciseLimit } from '../constants/limits';
import { mainHomeRefs } from '../constants/refs';
import { handleGetFilters } from '../services/filters';
import { Loader } from '../services/loader';
import {
	clearPagination,
	renderPagination,
} from '../sharedComponents/pagination';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { removeSpaces } from '../utils/removeSpaces';
import { loadExercises } from './exercises';
import { handleSearchInput } from './search';

export const homeLoader = new Loader({
	size: 200,
});

export const loadCategories = async query => {
	mainHomeRefs.cardsContainer.innerHTML = '';
	clearPagination();

	try {
		await homeLoader.show(mainHomeRefs.cardsContainer.id);

		const data = await handleGetFilters(query);

		await homeLoader.hide(mainHomeRefs.cardsContainer.id);

		const { page, perPage, totalPages, results } = data;

		if (results.length <= 0) {
			mainHomeRefs.cardsContainer.innerHTML =
				'<p class="text-for-n-data">No categories found for this filter.</p>';

			return;
		}

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
		<li
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
		</li>

 	 `;
};

export const handleCategoryClick = (categoryName, filterType, targetEl) => {
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

	loadExercises(query);
};

export const toggleSearchInput = visible => {
	const input = mainHomeRefs.searchInput;

	input.style.display = visible ? 'block' : 'none';

	if (visible) {
		input.addEventListener('submit', handleSearchInput);
	} else {
		input.removeEventListener('submit', handleSearchInput);
	}
};
