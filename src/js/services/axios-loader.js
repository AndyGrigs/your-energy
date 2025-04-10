import axios from 'axios';

function showLoader() {
  const el = document.getElementById('loader-overlay');
  if (el) el.style.display = 'flex';
}

function hideLoader() {
  const el = document.getElementById('loader-overlay');
  if (el) el.style.display = 'none';
}

// Затримка перед хованням лоадера
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Request interceptor — показуємо лоадер
axios.interceptors.request.use(
  config => {
    showLoader();
    return config;
  },
  error => {
    hideLoader();
    return Promise.reject(error);
  }
);

// Response interceptor — чекаємо, потім ховаємо
axios.interceptors.response.use(
  async response => {
    await delay(1000); // ← тут затримка (в мс)
    hideLoader();
    return response;
  },
  async error => {
    await delay(1000); // ← і в разі помилки теж
    hideLoader();
    return Promise.reject(error);
  }
);

export default axios;
