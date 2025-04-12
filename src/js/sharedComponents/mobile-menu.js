import { mobileMenuRefs } from '../constants/refs';

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = '';
};

export const openMobileMenu = () => {
  mobileMenuRefs.backdrop.style.visibility = 'visible';
  mobileMenuRefs.backdrop.style.opacity = 1;
  mobileMenuRefs.mobileMenu.style.transform = 'translateX(0%)';

  disableScroll();
};

export const handleBackdropClick = event => {
  if (event.target === mobileMenuRefs.backdrop) {
    closeMenu();
  }
};

export const handleEscapeKey = event => {
  if (
    event.key === 'Escape' &&
    mobileMenuRefs.mobileMenu.style.transform === 'translateX(0%)'
  ) {
    closeMenu();
  }
};

export const handleNavLinkClick = () => {
  closeMenu();
};

export const closeMenu = () => {
  mobileMenuRefs.mobileMenu.style.transform = 'translateX(100%)';

  setTimeout(() => {
    mobileMenuRefs.backdrop.style.opacity = 0;
    mobileMenuRefs.backdrop.style.visibility = 'hidden';

    enableScroll();
  }, 300);
};
