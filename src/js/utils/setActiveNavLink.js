export const getPathnameFromHref = link => {
	const href = link.getAttribute('href');
	const url = new URL(href);
	const path = url.pathname;
	return path;
};

export const setActiveLink = () => {
	const links = document.querySelectorAll('.nav-link');
	const currentPath = window.location.pathname;

	console.log('---------------------------------------');

	links.forEach(link => {
		const linkHref = getPathnameFromHref(link);

		console.log('---');
		console.log('🚀 ~ linkHref:', linkHref);
		console.log('🚀 ~ currentPath:', currentPath);

		if (linkHref === currentPath) {
			console.log(`${linkHref} is active`);
			link.classList.add('active');
		} else {
			link.classList.remove('active');
			console.log(`${linkHref} is not active`);
		}

		console.log('---');
	});
};
