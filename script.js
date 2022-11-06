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

  let modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modal.appendChild(modalHeader);

  let modalHeading = document.createElement('div');
  modalHeading.textContent = 'BTC Address';
  modalHeader.appendChild(modalHeading);

  let closeButton = document.createElement('div');
  closeButton.classList.add('close-button');
  closeButton.textContent = 'x';
  closeButton.addEventListener('click', closeModal);
  modalHeader.appendChild(closeButton);

  let modalActionsContainer = document.createElement('div');
  modalActionsContainer.classList.add('modal-actions');
  modal.appendChild(modalActionsContainer);

  let qrCode = document.createElement('img');
  qrCode.height = '200';
  qrCode.width = '200';
  qrCode.src = './img/btc-address.jpg';
  modal.appendChild(qrCode);

  let modalFooter = document.createElement('div');
  modalFooter.classList.add('modal-footer');
  modal.appendChild(modalFooter);

  let confirmButton = document.createElement('button');
  confirmButton.setAttribute('type', 'button');
  confirmButton.classList.add('btn-confirm');
  confirmButton.textContent = 'Confirm';
  confirmButton.addEventListener('click', function() {
    closeModal();
  });
  modalFooter.appendChild(confirmButton);

  document.body.insertBefore(modal, demoContainer);
});
