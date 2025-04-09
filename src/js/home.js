import { getQuoteOfTheDay } from './services/api/quotes-api';

export async function renderQuote() {
  const container = document.getElementById('quote-card');
  const today = new Date().toISOString().slice(0, 10);

  // 1. Перевіряємо localStorage
  try {
    const raw = localStorage.getItem('quote');
    if (raw) {
      const stored = JSON.parse(raw);

      if (stored?.date === today && stored?.quote) {
        container.innerHTML = createQuoteMarkup(stored.quote);
        return;
      }
    }
  } catch (err) {
    console.warn('Invalid quote data. Clearing...');
    localStorage.removeItem('quote');
  }

  // 2. Якщо не знайдено або стара дата — отримуємо нову
  try {
    const quote = await getQuoteOfTheDay();
    container.innerHTML = createQuoteMarkup(quote);

    // 3. Записуємо в localStorage тільки після успішного запиту
    localStorage.setItem('quote', JSON.stringify({ date: today, quote }));
  } catch (error) {
    container.innerHTML = `<p>Failed to load quote.</p>`;
    console.error('Quote API error:', error);
  }
}



function createQuoteMarkup({ author, quote }) {
  return `
    <div class="quote-block">
      <p class="quote-text">"${quote}"</p>
      <p class="quote-author">${author}</p>
    </div>
  `;
}
