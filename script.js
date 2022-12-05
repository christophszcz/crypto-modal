let backdrop;
let modal;
let openModalButton = document.querySelector('.btc-qr-code-button');
const ADDRESS = document.querySelector('.btc-qr-code-button').value;

toastr.options = {
  "closeButton": true
};

const closeModal = () => {
  if (backdrop) {
    backdrop.remove();
  }

  if (modal) {
    modal.remove();
  }
};

const copyToClipboard = async () => {
  try {
    const addressValue = document.querySelector('.address').innerText;
    await navigator.clipboard.writeText(addressValue);
    toastr.info('Address copied');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

openModalButton.addEventListener('click', () => {
  let modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');
  document.body.appendChild(modalContainer);

  backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');
  backdrop.addEventListener('click', closeModal);
  modalContainer.appendChild(backdrop);
  backdrop.addEventListener('click', closeModal);

  modal = document.createElement('div');
  modal.classList.add('modal');
  modalContainer.appendChild(modal);

  let modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modal.appendChild(modalHeader);

  let modalHeading = document.createElement('div');
  modalHeading.classList.add('modal-title');
  modalHeading.textContent = 'BTC Address';
  modalHeader.appendChild(modalHeading);

  let closeButton = document.createElement('div');
  closeButton.classList.add('close-button');
  closeButton.textContent = 'x';
  closeButton.addEventListener('click', closeModal);
  modalHeader.appendChild(closeButton);

  let modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modal.appendChild(modalBody);

  let qrCode = document.createElement('img');
  qrCode.classList.add('address-qr-code');
  qrCode.height = '400';
  qrCode.width = '400';
  qrCode.src = './img/btc-address.jpg';
  modalBody.appendChild(qrCode);

  let modalFooter = document.createElement('div');
  modalFooter.classList.add('modal-footer');
  modal.appendChild(modalFooter);

  let modalAddress = document.createElement('div');
  modalAddress.classList.add('address');
  modalAddress.textContent = ADDRESS;
  modalFooter.appendChild(modalAddress);

  let copyButton = document.createElement('button');
  copyButton.setAttribute('type', 'button');
  copyButton.classList.add('copy-button');
  copyButton.setAttribute('title', 'Copy to clipboard');
  copyButton.addEventListener('click', copyToClipboard);
  modalFooter.appendChild(copyButton);

  let copyIcon = document.createElement('i');
  copyIcon.classList.add('fa-regular', 'fa-copy');
  copyButton.appendChild(copyIcon);
});
