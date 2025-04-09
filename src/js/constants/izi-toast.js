const isLocalhost =
  window.location.origin.includes('localhost') ||
  window.location.origin.includes('127.0.0.1');

export const iziToastOptions = {
  success: {
    iconUrl: isLocalhost ? './img/success.svg' : '/your-energy/img/success.svg',

    progressBarColor: '#326101',
    backgroundColor: '#59A10D',
  },
  error: {
    iconUrl: isLocalhost ? './img/error.svg' : '/your-energy/img/error.svg',

    progressBarColor: '#B51B1B',
    backgroundColor: '#EF4040',
  },
};
