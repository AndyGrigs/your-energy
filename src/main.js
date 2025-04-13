import lottie from 'lottie-web';
import { handleSubscription } from './js/services/subscriptions';
import { mobileMenuRefs, refs } from './js/constants/refs';
import { handleScrollForScrollTopBtn, scrollToTop } from './js/services/scroll';
import { setActiveLink } from './js/utils/setActiveNavLink.js';

import * as mobileMenu from './js/sharedComponents/mobile-menu.js';
import { init } from './js/partials/filters.js';
import './js/partials/rating-modal.js';
import './js/services/modal.js';

import { changeInteranlLinksBaseURL } from './js/config/internalLinksHandler.js';
import { renderQuoteOfTheDay } from './js/sharedComponents/quoteOfTheDay.js';
import { renderFavoritesItems } from './js/services/favorites.js';

function main() {
	changeInteranlLinksBaseURL();
	const pagePath = window.location.pathname;
	console.log(pagePath);

	document.addEventListener('DOMContentLoaded', () => {
		const path = window.location.pathname;
		console.log('🚀 ~ path:', path);

		if (path === '/your-energy/' || path === '/') {
			console.log('homepage');
			init();
		}

		if (path === '/favorites' || path === '/your-energy/favorites') {
			console.log('favorites page');
			renderFavoritesItems();
		}
	});

	renderQuoteOfTheDay();

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
