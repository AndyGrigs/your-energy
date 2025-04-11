export class Loader {
  constructor({
    target,
    path = '/animations/loader.json',
    size = 80,
    color = '#000',
  }) {
    // Цільовий DOM-елемент
    this.target =
      typeof target === 'string' ? document.querySelector(target) : target;

    if (!this.target) throw new Error('Target element not found for Loader');

    this._path = path;
    this._size = size;
    this._color = color;
    this._loaded = false;

    // Обгортка для лоадера
    this.wrapper = document.createElement('div');
    this.wrapper.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      display: none;
      position: relative;
    `;

    // Контейнер, куди буде вставлено Lottie
    this.animContainer = document.createElement('div');
    this.animContainer.style.cssText = `
      width: 100%;
      height: 100%;
    `;

    this.wrapper.appendChild(this.animContainer);
    this.target.appendChild(this.wrapper);
  }

  // Ініціалізація Lottie лише один раз
  async _init() {
    if (this._loaded) return;

    const { default: lottie } = await import('lottie-web');

    const animation = lottie.loadAnimation({
      container: this.animContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: this._path,
    });

    // Після завантаження – застосувати колір, якщо SVG дозволяє
    animation.addEventListener('DOMLoaded', () => {
      const paths = this.animContainer.querySelectorAll('path');
      paths.forEach(p => p.setAttribute('fill', this._color));
    });

    this._loaded = true;

    // Невелика пауза, щоб DOM встиг вставити SVG
    await new Promise(res => setTimeout(res, 50));
  }

  // Показати лоадер
  async show() {
    await this._init();
    this.wrapper.style.display = 'block';
  }

  // Приховати лоадер
  hide() {
    this.wrapper.style.display = 'none';
  }
}
