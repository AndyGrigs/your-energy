
import { getFilters } from '../services/api/filters-api';


const state = {
  filter: 'Muscles', // обраний фільтр
  category: null, // обрана категорія (наприклад "abs")
  page: 1, // номер сторінки
  limit: 12, // кількість елементів на сторінку
  keyword: '', // пошук за ключовим словом
};

export function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', e => {
      const clickedFilter = e.currentTarget.dataset.type;

      state.filter = clickedFilter;
      state.page = 1;
      state.category = null;
      state.keyword = '';

      document.querySelector('.filter-btn.active')?.classList.remove('active');
      button.classList.add('active');

      console.log('🔘 Обраний фільтр:', state.filter);
      loadCategories(clickedFilter);
    });
  });
  loadCategories(state.filter);
}

async function loadCategories(filter) {
  const container = document.getElementById('exercise-cards-container');
  container.innerHTML = '<p>Loading categories...</p>';
  try {
    const response = await getFilters({
      filter: filter,
      page: 1,
      limit: 50,
    });

    const categories = response.results;

    console.clear();
    console.log(`📦 Категорії для фільтра "${filter}":`);
    console.table(categories);

    if (!categories.length) {
      container.innerHTML = '<p>No categories found.</p>';
      return;
    }

    const markup = categories.map(createCategoryCard).join('');
    container.innerHTML = markup;

    // 🚀 Додай обробку кліку на категорію (наступним кроком)
    // document.querySelectorAll('.category-card').forEach(card => {
    //   card.addEventListener('click', () => {
    //     const categoryName = card.dataset.name;
    //     console.log('📌 Обрана категорія:', categoryName);
    //     // TODO: завантажити вправи по цій категорії
    //   });
    // });
  } catch (error) {
    console.error('❌ Помилка при завантаженні категорій:', error.message);
    alert(
      'Error loading categories. Please check the console for more details.'
    );
  }
}

function createCategoryCard(category) {
  return `
    <div class="category-card" data-name="${category.name}">
      <img src="${category.imgURL}" alt="${category.name}" />
      <div class="info">
        <h3>${capitalize(category.name)}</h3>
        <p>${category.filter}</p>
      </div>
    </div>
  `;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function loadExercises() {}

function renderPagination(totalPages) {}
