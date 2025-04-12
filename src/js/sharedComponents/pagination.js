export const renderPagination = (currentPage, totalPages, onPageChange) => {
	const paginationContainer = document.getElementById('pagination');
	paginationContainer.innerHTML = '';

	const createButton = page => {
		const btn = document.createElement('button');
		btn.textContent = page;
		btn.classList.add('page-button');
		if (page === currentPage) btn.classList.add('active');
		btn.disabled = page === currentPage;
		btn.addEventListener('click', () => onPageChange(page));
		return btn;
	};

	const start = Math.max(1, currentPage - 2);
	const end = Math.min(totalPages, currentPage + 2);

	for (let i = start; i <= end; i++) {
		paginationContainer.appendChild(createButton(i));
	}
};
