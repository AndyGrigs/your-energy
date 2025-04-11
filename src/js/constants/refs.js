export const refs = {
	scrollToTopBtn: document.querySelector('.js-scroll-to-top-btn'),
	exercisesContainer: document.getElementById('exercise-cards-container'),
};

export const modalRefs = {
	modal: document.getElementById('exerciseModal'),
	modalTitle: document.getElementById('modalTitle'),
	modalRating: document.getElementById('modalRating'),
	modalImage: document.getElementById('modalImage'),
	modalTarget: document.getElementById('modalTarget'),
	modalBodyPart: document.getElementById('modalBodyPart'),
	modalEquipment: document.getElementById('modalEquipment'),
	modalPopular: document.getElementById('modalPopular'),
	modalCalories: document.getElementById('modalCalories'),
	modalDescription: document.getElementById('modalDescription'),
	stars: document.querySelectorAll('.star'),
	favoriteButton: document.getElementById('favoriteButton'),
	closeModalBtn: document.querySelector('.close-button'),
};
