class Modal {
  constructor() {
    this.modalOpen = document.querySelectorAll('.modal__open');
    this.overlay = document.querySelectorAll('.modal__overlay');
  }

  on = () => {
    this.clickModalOpenEvent();
    this.clickModalOverlayEvent();
    this.clickCloseButtonEvent();
  }

  clickModalOpenEvent = () => {
    this.modalOpen.forEach(v => {
      v.addEventListener('click', (e) => {
        e.currentTarget.querySelector('.modal').classList.remove('hidden');
      });
    });
  }

  clickModalOverlayEvent = () => {
    this.overlay.forEach(v => {
      v.addEventListener('click', (e) => {
        e.stopPropagation();
        e.currentTarget.parentNode.classList.add('hidden');
      });
    });
  }

  clickCloseButtonEvent = () => {
    this.modalOpen.forEach(v => {
      const closeButton = v.querySelector('.modal__close__button');

      closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        v.querySelector('.modal').classList.add('hidden');
      })
    })
  }
}

export default Modal;