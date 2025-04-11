// rating-modal.js

// Отримуємо DOM-елементи
const modal = document.querySelector('[data-modal="rating"]');
const form = modal?.querySelector('form');
const ratingInputs = form?.querySelectorAll('input[name="rating"]');
const ratingValue = form?.querySelector('.rating-value');
const closeBtn = modal?.querySelector('[data-modal-close]');

// Динамічне оновлення числа біля зірочок
ratingInputs?.forEach(input => {
  input.addEventListener('change', () => {
    ratingValue.textContent = input.value + '.0';
  });
});

// Обробка сабміту форми
form?.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const rating = +form.querySelector('[name="rating"]:checked')?.value || 0;
  const email = form.querySelector('[name="email"]').value.trim();
  const comment = form.querySelector('[name="comment"]').value.trim();

  // Перевірка заповнення
  if (!rating || !email || !comment) {
    iziToast.error({ message: 'Будь ласка, заповніть всі поля' });
    return;
  }

  // Email валідація
  const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!emailRegex.test(email)) {
    iziToast.error({ message: 'Введіть коректний email' });
    return;
  }

  // Надсилаємо запит на backend
  fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ rating, email, comment }),
  })
    .then(res => {
      if (!res.ok) throw new Error('Не вдалося надіслати оцінку');
      closeRatingModal();
      iziToast.success({ message: 'Дякуємо за вашу оцінку!' });
    })
    .catch(err => {
      iziToast.error({ message: err.message });
    });
}

// Закриття модалки
closeBtn?.addEventListener('click', closeRatingModal);

function closeRatingModal() {
  modal?.classList.add('hidden');
}
