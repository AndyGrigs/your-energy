import { handleSubscription } from './js/services/subscriptions';
import { mobileMenuRefs, refs } from './js/constants/refs';
import { handleScrollForScrollTopBtn, scrollToTop } from './js/services/scroll';
import { setActiveLink } from './js/utils/setActiveNavLink.js';

import * as mobileMenu from './js/sharedComponents/mobile-menu.js';
import lottie from 'lottie-web';
import './js/partials/rating-modal.js';

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
//

// const redLoader = new Loader({
//   target: '#red-loader',
//   size: 50,
//   color: 'red',
// });

// document.getElementById('red-btn').addEventListener('click', async () => {
//   redLoader.show();
//   await new Promise(res => setTimeout(res, 3000));
//   redLoader.hide();
// });

// const blueLoader = new Loader({
//   target: '#blue-loader',
//   size: 75,
//   color: 'blue',
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
//   blackLoader.show();
//   await new Promise(res => setTimeout(res, 3000));
//   blackLoader.hide();
// });
