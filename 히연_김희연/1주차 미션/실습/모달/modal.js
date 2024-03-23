const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal-wrapper');

openBtn.onclick = () => {
  modalWrapper.style.display = 'flex';
};

closeBtn.onclick = () => {
  modalWrapper.style.display = 'none';
};
