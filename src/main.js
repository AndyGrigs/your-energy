import lottie from 'lottie-web';
import { refs } from './js/constants/refs';
import { handleSubscription } from './js/services/subscriptions';
import { handleScrollForScrollTopBtn, scrollToTop } from './js/services/scroll';
import { initFilters } from './js/home/home';
import './js/partials/rating-modal.js';

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

document.addEventListener('DOMContentLoaded', () => {
  initFilters();


  // ініціалізація loader
  lottie.loadAnimation({
    container: document.getElementById('loader'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/loader.json',
  });
});


burger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');

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
import { Loader } from './js/services/loader.js';

const redLoader = new Loader({
  target: '#red-loader',
  size: 50,
  color: 'red',
});

document.getElementById('red-btn').addEventListener('click', async () => {
  redLoader.show();
  await new Promise(res => setTimeout(res, 3000));
  redLoader.hide();
});

const blueLoader = new Loader({
  target: '#blue-loader',
  size: 75,
  color: 'blue',
});

document.getElementById('blue-btn').addEventListener('click', async () => {
  blueLoader.show();
  await new Promise(res => setTimeout(res, 3000));
  blueLoader.hide();
});

const blackLoader = new Loader({
  target: '#black-loader',
  size: 100,
  color: 'black',
});

document.getElementById('black-btn').addEventListener('click', async () => {
  blackLoader.show();
  await new Promise(res => setTimeout(res, 3000));
  blackLoader.hide();
});

