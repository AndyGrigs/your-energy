import { handleSubscription } from './js/services/subscriptions';
import { refs } from './js/constants/refs';
import { handleScrollForScrollTopBtn, scrollToTop } from './js/services/scroll';
import lottie from 'lottie-web';

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
import axios from './js/services/axios-loader.js';
document.getElementById('load-btn1').addEventListener('click', async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    console.log('Дані 1 з API отримано: ' + response.data.title);
  } catch (err) {
    console.error('Помилка при запиті:', err);
  }
});

document.getElementById('load-btn2').addEventListener('click', async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    console.log('Дані 2 з API отримано: ' + response.data.title);
  } catch (err) {
    console.error('Помилка при запиті:', err);
  }
});

document.getElementById('load-btn3').addEventListener('click', async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    console.log('Дані 3 з API отримано: ' + response.data.title);
  } catch (err) {
    console.error('Помилка при запиті:', err);
  }
});
