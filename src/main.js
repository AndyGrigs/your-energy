import { handleSubscription } from './js/services/subscriptions';
import { refs } from './js/constants/refs';
import { handleScrollForScrollTopBtn, scrollToTop } from './js/services/scroll';
import lottie from 'lottie-web';
import './js/partials/rating-modal.js';

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
