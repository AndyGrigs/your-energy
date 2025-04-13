import { homeLoader } from './categories';

export async function loadExercises(query, keyword) {
	console.log('🚀 ~ query:', query);
	try {
		if (keyword) {
			query.keyword = keyword;
		}

		await homeLoader.show(mainHomeRefs.cardsContainer.id);
		const data = await handleGetExercisesByFilters(query);
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

		const exercises = data.results;
		state.exercises = exercises;
		if (!exercises.length) {
			container.innerHTML = '<p>No exercises found.</p>';
			return;
		}
		container.innerHTML = exercises.map(createExerciseCard).join('');
		initExerciseSearch();
	} catch (error) {
		container.innerHTML = '<p>Error loading exercises.</p>';
		console.error('❌ Exercise loading error:', error.message);
	}
}
