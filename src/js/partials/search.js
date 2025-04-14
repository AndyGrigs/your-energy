import { exerciseLimit } from '../constants/limits';
import { mainHomeRefs } from '../constants/refs';
import { removeSpaces } from './categories';
import { loadExercises } from './exercises';

export const handleSearchInput = e => {
	e.preventDefault();

	const keyword = e.target.elements.search.value.trim().toLowerCase();

	if (!keyword) {
		return;
	}

	const filterType = document.querySelector('.filter-btn.active').textContent;

	const query = {
		[removeSpaces(filterType).toLowerCase()]:
			mainHomeRefs.sectionSubTitle.textContent.toLowerCase(),
		page: 1,
		limit: exerciseLimit,
	};

	loadExercises(query, keyword);
};
