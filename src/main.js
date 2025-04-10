import * as quote from './js/services/quotes';

import { handleSubscription } from './js/services/subscriptions';
import { refs } from './js/constants/refs';
import { handleScrollForScrollTopBtn, scrollToTop } from './js/services/scroll';
import lottie from 'lottie-web';

try {
  const data = await quote.handleGetQuoteOfTheDay();
  console.log('🚀 ~ data:', data);
} catch (error) {
  console.log('🚀 ~ error in main:', error);
}

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

// ініціалізація loader
lottie.loadAnimation({
  container: document.getElementById('loader'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/animations/loader.json',
});

//лише для тесту
import axios from './js/services/axios-loader.js';
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
