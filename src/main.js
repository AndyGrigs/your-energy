import lottie from 'lottie-web';
import { handleSubscription } from './js/services/subscriptions';
import { mobileMenuRefs, refs } from './js/constants/refs';
import { handleScrollForScrollTopBtn, scrollToTop } from './js/services/scroll';
import { setActiveLink } from './js/utils/setActiveNavLink.js';

import * as mobileMenu from './js/sharedComponents/mobile-menu.js';
import { initFilters } from './js/home/home';
import './js/partials/rating-modal.js';
import './js/services/modal.js';

import { changeInteranlLinksBaseURL } from './js/config/internalLinksHandler.js';
import { renderQuoteOfTheDay } from './js/sharedComponents/quoteOfTheDay.js';
import { renderFavoritesItems } from './js/services/favorites.js';

function main() {
	changeInteranlLinksBaseURL();
	const pageURL = window.location.href;
	console.log(pageURL);

	if (pageURL.includes('your-energy'))
		document.addEventListener('DOMContentLoaded', () => {
			initFilters();
		});

	if (
		pageURL.includes('/favorites') ||
		pageURL.includes('/your-energy/favorites')
	)
		document.addEventListener('DOMContentLoaded', () => {
			renderFavoritesItems();
		});

	renderQuoteOfTheDay();

	window.addEventListener('scroll', handleScrollForScrollTopBtn);
	refs.scrollToTopBtn.addEventListener('click', scrollToTop);

	const subscribeForm = document.querySelector('#subscribe-form');
	if (subscribeForm) {
		subscribeForm.addEventListener('submit', async event => {
			event.preventDefault();
			try {
				const email = subscribeForm.email.value;
				await handleSubscription(email);
				subscribeForm.reset();
			} catch (error) {
				console.log(error);
			}
		});
	}

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
}

main();
