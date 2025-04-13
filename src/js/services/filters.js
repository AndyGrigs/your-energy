import { iziToast } from '../config/izi-toast.js';
import 'izitoast/dist/css/iziToast.min.css';
import { iziToastOptions } from '../constants/izi-toast.js';

import * as api from './api/filters-api.js';
import * as errorMessages from '../constants/error-messages.js';

export const handleGetFilters = async query => {
	try {
		const filters = await api.getFilters(query);
		return filters;
	} catch (error) {
		const { status } = error;
		const message =
			errorMessages.getFiltersErrs[status] ||
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
