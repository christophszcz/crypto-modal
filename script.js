let backdrop;
let modal;
let editValueButton = document.querySelector('button');
let demoContainer = document.querySelector('.demo-container');

let closeModal = () => {
  if (backdrop) {
    backdrop.remove();
  }

  if (modal) {
    modal.remove();
  }
};

editValueButton.addEventListener('click', function() {
  backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');
  backdrop.addEventListener('click', closeModal);
  document.body.insertBefore(backdrop, demoContainer);
  backdrop.addEventListener('click', closeModal);

  modal = document.createElement('div');
  modal.classList.add('modal');

  let modalHeading = document.createElement('h1');
  modalHeading.textContent = 'BTC Address';
  modal.appendChild(modalHeading);

  let qrCode = document.createElement('img');
  qrCode.height = '200';
  qrCode.width = '200';
  qrCode.src = "./img/btc-address.jpg";
  modal.appendChild(qrCode);

  let modalActionsContainer = document.createElement('div');
  modalActionsContainer.classList.add('modal-actions');
  modal.appendChild(modalActionsContainer);

  let cancelButton = document.createElement('button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.classList.add('btn-cancel');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', closeModal);
  modalActionsContainer.appendChild(cancelButton);

  let confirmButton = document.createElement('button');
  confirmButton.setAttribute('type', 'button');
  confirmButton.classList.add('btn-confirm');
  confirmButton.textContent = 'Confirm';
  confirmButton.addEventListener('click', function() {
    closeModal();
  });
  modalActionsContainer.appendChild(confirmButton);

  document.body.insertBefore(modal, demoContainer);
});
