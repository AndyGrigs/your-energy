import { state } from './filter-state';
import { createExerciseCard } from './exercise-renderer';

export function initExerciseSearch() {
	const input = document.getElementById('search-input');
	console.log(input)
	const container = document.getElementById('exercise-cards-container');

	input.addEventListener('input', e => {
		const value = e.target.value.trim().toLowerCase();

		const filtered = state.exercises.filter(ex =>
			ex.name.toLowerCase().includes(value)
		);

		if (!filtered.length) {
			container.innerHTML = '<p>No matching exercises found.</p>';
			return;
		}

		container.innerHTML = filtered.map(createExerciseCard).join('');
	});
}

export function toggleSearchInput(visible) {
	const searchInput = document.querySelector('.search');
	if (!searchInput) return;
	searchInput.style.display = visible ? 'block' : 'none';
}
