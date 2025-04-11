
// import { getFilters } from '../services/api/filters-api';
// import { handleCategoryClick } from './category-handler';
// import {state} from './filter-state'



// export function initFilters() {
//   const filterButtons = document.querySelectorAll('.filter-btn');
//   filterButtons.forEach(button => {
//     button.addEventListener('click', e => {
//       const clickedFilter = e.currentTarget.dataset.type;
//       console.log(clickedFilter)
//       state.filter = clickedFilter;
//       state.page = 1;
//       state.category = null;
//       state.keyword = '';

//       document.querySelector('.filter-btn.active')?.classList.remove('active');
//       button.classList.add('active');

      
//       loadCategories(clickedFilter);
//     });
//   });
//   loadCategories(state.filter);
// }

// async function loadCategories(filter) {
//   const container = document.getElementById('exercise-cards-container');
//   container.innerHTML = '<p>Loading categories...</p>';
//   try {
//     const response = await getFilters({
//       filter: filter,
//       page: 1,
//       limit: 50,
//     });

//     const categories = response.results;



//     if (!categories.length) {
//       container.innerHTML = '<p>No categories found.</p>';
//       return;
//     }

//     const markup = categories.map(createCategoryCard).join('');
//     container.innerHTML = markup;

//     document.querySelectorAll('.category-card').forEach(card => {
//       card.addEventListener('click', () => {
//         const categoryName = card.dataset.name;
//         handleCategoryClick(categoryName);
//       });
//     });

  
//   } catch (error) {
//     console.error('❌ Помилка при завантаженні категорій:', error.message);
//     alert(
//       'Error loading categories. Please check the console for more details.'
//     );
//   }
// }

// function createCategoryCard(category) {
//   return `
//     <div class="category-card" data-name="${category.name}">
//       <img src="${category.imgURL}" alt="${category.name}" />
//       <div class="info">
//         <h3>${capitalize(category.name)}</h3>
//         <p>${category.filter}</p>
//       </div>
//     </div>
//   `;
// }

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }



import { getFilters } from '../services/api/filters-api';
import { handleCategoryClick } from './category-handler';
import { state } from './filter-state';

const reverseFilterMap = {
  muscles: 'Muscles',
  bodypart: 'Body parts',
  equipment: 'Equipment',
};

export function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', e => {
      const clickedLabel = e.currentTarget.dataset.type.toLowerCase().trim();
      state.filter = clickedLabel;
      state.page = 1;
      state.category = null;
      state.keyword = '';

      document.querySelector('.filter-btn.active')?.classList.remove('active');
      button.classList.add('active');

      loadCategories(state.filter);
    });
  });

  loadCategories(state.filter); // при старті
}

async function loadCategories(filterKey) {
  const container = document.getElementById('exercise-cards-container');
  container.innerHTML = '<p>Loading categories...</p>';

  const filterLabel = reverseFilterMap[filterKey];

  try {
    const response = await getFilters({
      filter: filterLabel,
      page: 1,
      limit: 50,
    });

    const categories = response.results;

    if (!categories.length) {
      container.innerHTML = '<p>No categories found.</p>';
      return;
    }

    const markup = categories.map(createCategoryCard).join('');
    container.innerHTML = markup;

    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const categoryName = card.dataset.name;
        handleCategoryClick(categoryName);
      });
    });

  } catch (error) {
    console.error('❌ Категорії не завантажено:', error.message);
    container.innerHTML = '<p>Error loading categories.</p>';
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
