import { iziToast } from '../config/izi-toast.js';
import 'izitoast/dist/css/iziToast.min.css';
import { iziToastOptions } from '../constants/izi-toast.js';

import * as api from './api/subscriptions-api.js';
import * as errorMessages from '../constants/error-messages.js';

export const handleSubscription = async email => {
  try {
    const { message } = await api.createSubscription(email);
    iziToast.show({
      ...iziToastOptions.success,
      message,
      timeout: 5000,
    });

    return message;
  } catch (error) {
    const { status } = error;
    const message =
      errorMessages.createSubscriptionErrs[status] ||
      `Unexpected error (${error.message || 'unknown'})`;

    iziToast.show({
      ...iziToastOptions.error,
      message,
    });

    throw {
      code: status,
      message: message,
    };
  }
};
