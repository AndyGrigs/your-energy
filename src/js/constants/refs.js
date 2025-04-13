export const refs = {
	scrollToTopBtn: document.querySelector('.js-scroll-to-top-btn'),
	exercisesContainer: document.getElementById('exercise-cards-container'),
};

export const modalRefs = {
	modalExercises: document.getElementById('exerciseModal'),
	modalRating: document.getElementById('ratingModal'),
	modalTitle: document.getElementById('modalTitle'),
	modalRatingValue: document.getElementById('modalRating'),
	modalImage: document.getElementById('modalImage'),
	modalTarget: document.getElementById('modalTarget'),
	modalBodyPart: document.getElementById('modalBodyPart'),
	modalEquipment: document.getElementById('modalEquipment'),
	modalPopular: document.getElementById('modalPopular'),
	modalCalories: document.getElementById('modalCalories'),
	modalDescription: document.getElementById('modalDescription'),
	stars: document.querySelectorAll('.star'),
	favoriteButton: document.getElementById('favoriteButton'),
	ratingButton: document.getElementById('ratingButton'),
	closeModalBtn: document.querySelector('.close-button'),
};

export const mobileMenuRefs = {
	burgerButton: document.querySelector('.js-burger-button'),
	mobileMenu: document.querySelector('.mobile-menu-js'),
	backdrop: document.querySelector('.mobile-backdrop-js'),
	closeButton: document.querySelector('.mobile-menu-close-js'),
	navLinks: document.querySelectorAll('.nav-links.mobile-menu .nav-link'),
};

export const paginationRefs = {
	paginationContainer: document.getElementById('pagination'),
};
