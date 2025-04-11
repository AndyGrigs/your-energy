import { handleGetQuoteOfTheDay } from '../services/quotes.js';

export async function renderQuoteOfTheDay(quoteText, quoteAuthor) {
  try {
    // add logic to retrive data by key "quoteOfTheDay" from LocalStorage
    // check if date is present if yes render if not than proceed with a request
    const data = await handleGetQuoteOfTheDay();

    const authorName = data.author;
    const authorQuote = data.quote;
    quoteText.textContent = authorQuote;
    quoteAuthor.textContent = authorName;
    console.log(quoteText);
  } catch (error) {
    console.log('🚀 ~ error in getQuoteOfTheDay data rendering:', error);
  }
}
