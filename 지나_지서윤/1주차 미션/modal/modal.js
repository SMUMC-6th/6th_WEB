const openBtn = document.querySelector('.open-btn');

const closeBtn = document.querySelector('.close');

const modalOverlay = document.querySelector('.modal-overlay');

closeBtn.onclick = () => {
  modalOverlay.style.display = 'none';
};

openBtn.onclick = () => {
  modalOverlay.style.display = 'flex';
};
