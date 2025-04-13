export const getLimitsByViewport = () => {
	const width = window.innerWidth;

	if (width < 768) {
		return { categoryLimit: 9, exerciseLimit: 8 };
	} else {
		return { categoryLimit: 12, exerciseLimit: 10 };
	}
};
