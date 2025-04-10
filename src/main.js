import { handleSubscription } from './js/services/subscriptions';
import { refs } from './js/constants/refs';
import { handleScrollForScrollTopBtn, scrollToTop } from './js/services/scroll';
import { renderQuote, initFilters} from './js/home';

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

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  // renderQuote();
  
});
