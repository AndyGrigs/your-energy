import axios from 'axios';

const initialized = new WeakSet();
const loaderMap = new WeakMap();
let nextLoaderId = null;

// ⏱ перехоплюємо раніше — ще до click
document.addEventListener('mousedown', e => {
  const container = e.target.closest('[data-loader-id]');
  if (!container) return;

  const id = container.getAttribute('data-loader-id');
  if (!id) return;

  nextLoaderId = id;
});

async function initLoader(container, animContainer) {
  if (!container || initialized.has(animContainer)) return;

  const { default: lottie } = await import('lottie-web');

  lottie.loadAnimation({
    container: animContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/loader.json',
  });

  initialized.add(animContainer);
  await new Promise(res => setTimeout(res, 50)); // дочекатись вставки в DOM
}

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

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

axios.interceptors.request.use(
  config => {
    if (nextLoaderId) {
      loaderMap.set(config, nextLoaderId);
      toggleLoader(nextLoaderId, true);
      nextLoaderId = null;
    }
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  async res => {
    const id = loaderMap.get(res.config);
    if (id) {
      await delay(3000);
      toggleLoader(id, false);
    }
    return res;
  },
  async err => {
    const id = loaderMap.get(err.config);
    if (id) {
      await delay(1000);
      toggleLoader(id, false);
    }
    return Promise.reject(err);
  }
);

export default axios;
