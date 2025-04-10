import { handleGetQuoteOfTheDay } from './quotes.js';
import { handleGetExerciseById } from './exercises.js';

const quoteText = document.querySelector('.quote-day-card-text');
const quoteAuthor = document.querySelector('.quote-day-card-author');
const workuotList = document.querySelector('.workout-list');

async function renderQuoteOfTheDay() {
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

async function renderFavoritesItems() {
  try {
    let favoritesItems = [];
    const favoritesListJson = localStorage.getItem('favorites');
    const favoritesList = JSON.parse(favoritesListJson);

    for (const id of favoritesList) {
      const data = await handleGetExerciseById(id);
      favoritesItems.push(data);
    }

    preparingFavoritesMarkup(favoritesItems);
  } catch (error) {
    console.log('🚀 ~ error in getFavoritesItems data rendering:', error);
  }
}

function preparingFavoritesMarkup(items) {
  if (!items || items.length === 0) {
    workuotList.innerHTML = '';
    return;
  }

  const FavoritesMarkup = items
    .map(
      item => `
    <li class="workout-list-item">
      <div class="workout-card">
        <div class="workout-header">
          <span class="workout-badge">WORKOUT</span>
          <button class="delete-button" aria-label="Delete workout">🗑️</button>
          <button class="start-button">Start ➔</button>
        </div>
        <div class="workout-body">
          <h3 class="workout-name">${item.name}</h3>
          <p class="workout-stats">
            Burned calories: ${item.burnedCalories} / ${item.time} min
            <br>
            Body part: ${item.bodyPart}  Target: ${item.target}
          </p>
        </div>
      </div>
    </li>
    `
    )
    .join('');

  workuotList.innerHTML = FavoritesMarkup;
}

renderQuoteOfTheDay();

const mocked_data_id_1 = '64f389465ae26083f39b17a2';
const mocked_data_id_2 = '64f389465ae26083f39b17a7';
const mocked_items_list = [mocked_data_id_1, mocked_data_id_2];
const mocked_items_json = JSON.stringify(mocked_items_list);
localStorage.setItem('favorites', mocked_items_json);

renderFavoritesItems();
