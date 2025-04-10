import lottie from 'lottie-web';
import { refs } from './js/constants/refs';
import { handleSubscription } from './js/services/subscriptions';
import { handleScrollForScrollTopBtn, scrollToTop } from './js/services/scroll';
import { initFilters } from './js/home/home';

import axios from './js/services/axios-loader.js';


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
document.getElementById('load-btn').addEventListener('click', async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    console.log('Дані з API отримано: ' + response.data.title);
  } catch (err) {
    console.error('Помилка при запиті:', err);
  }
});
