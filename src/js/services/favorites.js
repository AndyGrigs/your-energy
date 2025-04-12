import { mobileMenuRefs, modalRefs, refs } from '../constants/refs.js';
import { renderQuoteOfTheDay } from '../sharedComponents/quoteOfTheDay.js';
import { preparingCardsMarkup } from '../sharedComponents/exercisesCards.js';
import { handleGetExerciseById } from '../services/exercises.js';
import { setActiveLink } from '../utils/setActiveNavLink.js';
import * as mobileMenu from '../sharedComponents/mobile-menu.js';
import { handleScrollForScrollTopBtn, scrollToTop } from './scroll.js';

const quoteText = document.querySelector('.quote-day-card-text');
const quoteAuthor = document.querySelector('.quote-day-card-author');
const workuotList = document.querySelector('.workout-list');

// Mobile menu
mobileMenuRefs.burgerButton.addEventListener(
	'click',
	mobileMenu.openMobileMenu
);
mobileMenuRefs.closeButton.addEventListener('click', mobileMenu.closeMenu);
mobileMenuRefs.backdrop.addEventListener(
	'click',
	mobileMenu.handleBackdropClick
);
document.addEventListener('keydown', mobileMenu.handleEscapeKey);
mobileMenuRefs.navLinks.forEach(link =>
	link.addEventListener('click', mobileMenu.handleNavLinkClick)
);

// Detect current page and add 'active' class to the corresponding navigation link
document.addEventListener('DOMContentLoaded', setActiveLink());

// Scroll to top button
window.addEventListener('scroll', handleScrollForScrollTopBtn);
refs.scrollToTopBtn.addEventListener('click', scrollToTop);

export function setFavoriteButtonToAdd() {
	modalRefs.favoriteButton.innerHTML = `
    Add to favorites
    <svg>
      <use href="./img/sprite.svg#heart"></use>
    </svg>`;
}

export function setFavoriteButtonToRemove() {
	modalRefs.favoriteButton.innerHTML = `
    Remove from favorites
    <svg>
      <use href="./img/sprite.svg#trash"></use>
    </svg>`;
}

export function handleFavoriteClick(favorites, exercise) {
	const exerciseIndex = favorites.findIndex(fav => fav._id === exercise._id);

	if (exerciseIndex === -1) {
		// Add to favorites
		favorites.push(exercise);
		setFavoriteButtonToRemove();
	} else {
		// Remove from favorites
		favorites.splice(exerciseIndex, 1);
		setFavoriteButtonToAdd();
	}

	localStorage.setItem('favorites', JSON.stringify(favorites));
}

async function renderFavoritesItems() {
	try {
		const favoritesListJson = localStorage.getItem('favorites');
		const favoritesList = JSON.parse(favoritesListJson);
		if (favoritesList && favoritesList.length > 0) {
			preparingCardsMarkup(workuotList, favoritesList);
		} else {
			const error = document.querySelector('.not-items-message');
			error.style.display = 'block';
		}
	} catch (error) {
		console.log('🚀 ~ error in getFavoritesItems data rendering:', error);
	}
}

renderQuoteOfTheDay(quoteText, quoteAuthor);
renderFavoritesItems();
