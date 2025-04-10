import { refs } from '../constants/refs';

export function handleScrollForScrollTopBtn() {
  const scrollThreshold = window.innerHeight / 4;

  if (window.scrollY > scrollThreshold) {
    refs.scrollToTopBtn.classList.remove('invisible');
  } else {
    refs.scrollToTopBtn.classList.add('invisible');
  }
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
