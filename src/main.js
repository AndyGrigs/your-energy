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

changeInteranlLinksBaseURL();

document.addEventListener('DOMContentLoaded', () => {
	initFilters();
});

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

//лише для тесту
// import { Loader } from './js/services/loader.js';

// const redLoader = new Loader();
// document.getElementById('red-btn').addEventListener('click', async () => {
// 	await redLoader.show('red-loader', { color: 'red', size: 50, timeout: 2000 });
// 	await redLoader.hide('red-loader');
// });

// document.getElementById('blue-btn').addEventListener('click', async () => {
// 	await redLoader.show('blue-loader', {
// 		color: 'blue',
// 		size: 100,
// 		timeout: 2000,
// 	});
// 	await redLoader.hide('blue-loader');
// });

// document.getElementById('black-btn').addEventListener('click', async () => {
// 	await redLoader.show('black-loader');
// 	await redLoader.hide('black-loader');
// });

// const blueLoader = new Loader({
// 	target: '#blue-loader',
// 	size: 75,
// 	color: 'blue',
// });
// document.getElementById('blue-btn').addEventListener('click', async () => {
//   blueLoader.show();
//   await new Promise(res => setTimeout(res, 3000));
//   blueLoader.hide();
// });

// const blackLoader = new Loader({
//   target: '#black-loader',
//   size: 100,
//   color: 'black',
// });

// document.getElementById('black-btn').addEventListener('click', async () => {
// 	blackLoader.show();
// 	await new Promise(res => setTimeout(res, 3000));
// 	blackLoader.hide();
// });
