import { paginationRefs } from '../constants/refs';

export const renderPagination = ({ totalPages, onPageChange, query }) => {
	const currentPage = query.page;
	paginationRefs.paginationContainer.innerHTML = '';

	if (totalPages <= 1) return;

	const createButton = (query, page) => {
		const btn = document.createElement('button');
		btn.textContent = page;
		btn.classList.add('page-button');

		if (page === currentPage) {
			btn.classList.add('active');
		} else {
			btn.addEventListener('click', () => onPageChange(page));
		}

		return btn;
	};

	const start = Math.max(1, currentPage - 2);
	const end = Math.min(totalPages, currentPage + 2);

	for (let i = start; i <= end; i += 1) {
		paginationRefs.paginationContainer.appendChild(createButton(query, i));
	}
};

export const clearPagination = () => {
	paginationRefs.paginationContainer.innerHTML = '';
};
