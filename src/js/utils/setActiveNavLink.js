export const getPathnameFromHref = link => {
	const href = link.getAttribute('href');
	const url = new URL(href);
	const path = url.pathname;
	return path;
};

export const setActiveLink = () => {
	const links = document.querySelectorAll('.nav-link');
	const currentPath = window.location.pathname;

	links.forEach(link => {
		const linkHref = getPathnameFromHref(link);

		if (linkHref === currentPath) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
};
