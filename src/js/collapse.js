export default class Collapse {
  constructor(btn, container) {
    this.btn = btn;
    this.container = container;

    this.animate = this.animate.bind(this);
  }

  init() {
    this.btn.addEventListener('click', this.animate);
    
  }

  animate() {
    if (!this.container.className.includes('animation')) {
      this.container.classList.add('animation');
      this.container.classList.remove('reversAnimation');
    } else {
      this.container.classList.add('reversAnimation');
      this.container.classList.remove('animation');
    }
  }
}
