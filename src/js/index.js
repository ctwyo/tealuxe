const modalCloseBtn = document.querySelector('.modal__close-button');
const burgerMenu = document.querySelector('.header__burger');
const overlay = document.querySelector('.modal__overlay');
const modalContent = document.querySelector('.modal__content');
const page = document.querySelector('.page')

burgerMenu.addEventListener('click', () => {
  openModal()
})

modalCloseBtn.addEventListener('click', () => {
  closeModal()
})

function openModal() {
  overlay.classList.add('modal__overlay-opened');
  modalContent.classList.add('modal__content-opened')
  page.style['overflow'] = 'hidden';
}

function closeModal() {
  overlay.classList.remove('modal__overlay-opened')
  modalContent.classList.remove('modal__content-opened');
  page.style['overflow'] = '';
}