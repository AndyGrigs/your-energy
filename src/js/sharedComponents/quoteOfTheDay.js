import { handleGetQuoteOfTheDay } from '../services/quotes.js';
import { getTodayDate } from '../utils/getTodayDate.js';
import { Loader } from '../services/loader.js';

const loader = new Loader({
	size: 200,
	color: '#f4f4f4',
});
export async function renderQuoteOfTheDay() {
	const quoteTextcontainer = document.querySelector('.quote-day-card-text');
	const quoteAuthorContainer = document.querySelector(
		'.quote-day-card-author'
	);

	try {
		const ls_data = JSON.parse(localStorage.getItem('quoteOfTheDay'));

		await loader.show(quoteTextcontainer);
		const todayDate = getTodayDate();

		let authorName;
		let authorQuote;

		if (ls_data != null && ls_data.date === todayDate) {
			authorName = ls_data.author;
			authorQuote = ls_data.quote;
		} else {
			const requestData = await handleGetQuoteOfTheDay();
			authorName = requestData.author;
			authorQuote = requestData.quote;
		}

		quoteTextcontainer.textContent = authorQuote;
		quoteAuthorContainer.textContent = authorName;
	} catch (error) {
		console.log('🚀 ~ error in getQuoteOfTheDay data rendering:', error);
	} finally {
		await loader.hide(quoteText);
	}
}
