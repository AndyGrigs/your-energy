export const setActiveLink = () => {
	const links = document.querySelectorAll('.nav-link');
	const currentPath = window.location.pathname;
	const isLocalhost =
		window.location.hostname === 'localhost' ||
		window.location.hostname === '127.0.0.1';

	console.log('---------------------------------------');

	console.log('🚀 ~ isLocalhost:', isLocalhost);

	links.forEach(link => {
		const linkHref = isLocalhost
			? link.getAttribute('href')
			: `/your-energy-test${link.getAttribute('href')}`;

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
