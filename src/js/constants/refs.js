export const refs = {
  scrollToTopBtn: document.querySelector('.js-scroll-to-top-btn'),
};

export const modalRefs = {
  modal: document.getElementById('exerciseModal'),
  modalTitle: document.getElementById('modalTitle'),
  modalRating: document.getElementById('modalRating'),
  modalImage: document.getElementById('modalImage'),
  modalTarget: document.getElementById('modalTarget'),
  modalBodyPart: document.getElementById('modalBodyPart'),
  modalEquipment: document.getElementById('modalEquipment'),
  modalPopular: document.getElementById('modalPopular'),
  modalCalories: document.getElementById('modalCalories'),
  modalDescription: document.getElementById('modalDescription'),
  stars: document.querySelectorAll('.star'),
  favoriteButton: document.getElementById('favoriteButton'),
  closeModalBtn: document.querySelector('.close-button'),
};

export const mobileMenuRefs = {
  burgerButton: document.querySelector('.js-burger-button'),
  mobileMenu: document.querySelector('.mobile-menu-js'),
  backdrop: document.querySelector('.mobile-backdrop-js'),
  closeButton: document.querySelector('.mobile-menu-close-js'),
  navLinks: document.querySelectorAll('.nav-links.mobile-menu .nav-link'),
};
