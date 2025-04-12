import { handleGetQuoteOfTheDay } from '../services/quotes.js';
import { getTodayDate } from '../utils/getTodayDate.js';

export async function renderQuoteOfTheDay(quoteText, quoteAuthor) {
	try {
		const ls_data = JSON.parse(localStorage.getItem('quoteOfTheDay'));

		const todayDate = getTodayDate();
		let qouteDate;

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

		quoteText.textContent = authorQuote;
		quoteAuthor.textContent = authorName;
	} catch (error) {
		console.log('🚀 ~ error in getQuoteOfTheDay data rendering:', error);
	}
}
