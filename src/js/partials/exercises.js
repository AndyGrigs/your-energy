import { mainHomeRefs } from '../constants/refs';
import { createExerciseCard } from '../home/exercise-renderer';
import { handleGetExercisesByFilters } from '../services/exercises';
import {
	clearPagination,
	renderPagination,
} from '../sharedComponents/pagination';
import {
	capitalizeFirstLetter,
	homeLoader,
	toggleSearchInput,
} from './categories';

export async function loadExercises(query, keyword) {
	mainHomeRefs.cardsContainer.innerHTML = '';
	clearPagination();

	try {
		if (keyword) {
			query.keyword = keyword;
		}

		console.log('🚀 ~ query with keyword:', query);

		await homeLoader.show(mainHomeRefs.cardsContainer.id);
		const data = await handleGetExercisesByFilters(query);
		await homeLoader.hide(mainHomeRefs.cardsContainer.id);

		const { page, perPage, totalPages, results } = data;

		if (results.length <= 0) {
			mainHomeRefs.cardsContainer.innerHTML =
				'<p class="text-for-n-data">No exercises found for this filter.</p>';
			return;
		}

		// todo implement render function
		renderExercises(results);

		console.log('after render');

		const paginationProps = {
			totalPages,
			query,
			onPageChange: newPage => {
				const updatedQuery = {
					...query,
					page: newPage,
				};
				loadExercises(updatedQuery);
			},
		};

		renderPagination(paginationProps);
	} catch (error) {
		console.log('error');
		mainHomeRefs.cardsContainer.innerHTML = '';
	} finally {
		await homeLoader.hide(mainHomeRefs.cardsContainer.id);
	}
}

export const renderExercises = async data => {
	toggleSearchInput(true);

	const markup = data.map(createExerciseCard).join('');
	mainHomeRefs.cardsContainer.innerHTML = markup;

	// initExerciseSearch();
};
