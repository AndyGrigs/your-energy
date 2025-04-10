import axios from 'axios';

const initialized = new WeakSet(); // пам’ятає, які лоадери вже ініціалізовані
const loaderMap = new WeakMap(); // прив’язка config -> loaderId
let nextLoaderId = null; // ID лоадера для наступного axios-запиту

// 🔁 Зберігаємо loaderId при натисканні (раніше за click!)
document.addEventListener('mousedown', e => {
  const container = e.target.closest('[data-loader-id]');
  if (!container) return;

  const id = container.getAttribute('data-loader-id');
  if (!id) return;

  // зберігаємо ID — буде використано в найближчому axios-запиті
  nextLoaderId = id;
});

// 🚀 1. Завантажуємо lottie-анімацію в контейнер (один раз)
async function initLoader(container, animContainer) {
  if (!container || initialized.has(animContainer)) return;

  const { default: lottie } = await import('lottie-web');

  lottie.loadAnimation({
    container: animContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/loader.json', // шлях до анімації
  });

  initialized.add(animContainer);

  // невелика затримка, щоб DOM встиг відрендерити SVG
  await new Promise(res => setTimeout(res, 50));
}

// 🎬 Показує або ховає лоадер по його ID
async function toggleLoader(loaderId, show) {
  const container = document.querySelector(`[data-loader-id="${loaderId}"]`);
  if (!container) return;

  const wrapper = container.querySelector('.loader-wrapper');
  const animContainer = container.querySelector('.loader-container');
  if (!wrapper || !animContainer) return;

  if (show) {
    await initLoader(container, animContainer);
    wrapper.classList.remove('hidden');
  } else {
    wrapper.classList.add('hidden');
  }
}

// ⏳ Класична функція затримки
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 📦 Інтерцептор — перед відправкою запиту
axios.interceptors.request.use(
  config => {
    if (nextLoaderId) {
      // зв’язуємо конфіг запиту з loaderId
      loaderMap.set(config, nextLoaderId);

      // показуємо лоадер
      toggleLoader(nextLoaderId, true);

      // очищаємо — щоб не використалось повторно
      nextLoaderId = null;
    }
    return config;
  },
  error => Promise.reject(error)
);

// 📦 Інтерцептор — після відповіді
axios.interceptors.response.use(
  async response => {
    const id = loaderMap.get(response.config);
    if (id) {
      await delay(5000); // щоб трохи покрутилось
      toggleLoader(id, false);
    }
    return response;
  },
  async error => {
    const id = loaderMap.get(error.config);
    if (id) {
      await delay(1000);
      toggleLoader(id, false);
    }
    return Promise.reject(error);
  }
);

export default axios;
