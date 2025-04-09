import { handleGetQuoteOfTheDay } from './quotes.js';
import { handleGetExerciseById } from './exercises.js';

const quoteText = document.querySelector('.quote-day-card-text');
const quoteAuthor = document.querySelector('.quote-day-card-author');

async function renderQuoteOfTheDay() {
  try {
    const data = await handleGetQuoteOfTheDay();

    const authorName = data.author;
    const authorQuote = data.quote;
    quoteText.textContent = authorQuote;
    quoteAuthor.textContent = authorName;
  } catch (error) {
    console.log('🚀 ~ error in getQuoteOfTheDay data rendering:', error);
  }
}

async function renderFavoritesItems() {
  try {
    let favoritesItems = [];
    const favoritesListJson = localStorage.getItem('favorites');
    const favoritesList = JSON.parse(favoritesListJson);

    for (const id of favoritesList) {
      const data = await handleGetExerciseById(id);
      favoritesItems.push(data);
    }

    console.log(favoritesItems);
  } catch (error) {
    console.log('🚀 ~ error in getFavoritesItems data rendering:', error);
  }
}

renderQuoteOfTheDay();

const mocked_data_id_1 = '64f389465ae26083f39b17a2';
const mocked_data_id_2 = '64f389465ae26083f39b17a7';
const mocked_items_list = [mocked_data_id_1, mocked_data_id_2];
const mocked_items_json = JSON.stringify(mocked_items_list);
localStorage.setItem('favorites', mocked_items_json);
const items = renderFavoritesItems();
