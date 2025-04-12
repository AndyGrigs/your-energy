export class Loader {
	constructor({ path = '/animations/loader.json', size = 80, color = '#000' }) {
		this._path = path;
		this._defaultSize = size;
		this._defaultColor = color;
		this._loadPromise = null;
		this._instances = new Map(); // element => { wrapper, animation }
	}

	async _loadLottie() {
		if (!this._loadPromise) {
			this._loadPromise = import('lottie-web').then(mod => mod.default);
		}
		return this._loadPromise;
	}

	_resolveTarget(target) {
		if (typeof target === 'string') {
			return document.getElementById(target);
		}
		return target;
	}

	async show(target, { size, color } = {}) {
		const el = this._resolveTarget(target);
		if (!el) throw new Error('Target not found');
		if (this._instances.has(el)) return;

		const appliedSize = size ?? this._defaultSize;
		const appliedColor = color ?? this._defaultColor;

		const wrapper = document.createElement('div');
		wrapper.style.cssText = `
      width: ${appliedSize}px;
      height: ${appliedSize}px;
      position: relative;
    `;

		const container = document.createElement('div');
		container.style.cssText = 'width: 100%; height: 100%;';
		wrapper.appendChild(container);
		el.appendChild(wrapper);

		const lottie = await this._loadLottie();
		const animation = lottie.loadAnimation({
			container,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: this._path,
		});

		animation.addEventListener('DOMLoaded', () => {
			const paths = container.querySelectorAll('path');
			paths.forEach(p => p.setAttribute('fill', appliedColor));
		});

		this._instances.set(el, { wrapper, animation });
	}

	hide(target) {
		const el = this._resolveTarget(target);
		if (!el || !this._instances.has(el)) return;

		const { wrapper, animation } = this._instances.get(el);
		animation.destroy();
		wrapper.remove();
		this._instances.delete(el);
	}
}
