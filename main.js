const wrapper = document.querySelector(".wrapper");
const signature = document.querySelector(".signature");
qrInput = wrapper.querySelector('.form input');
qrImg = wrapper.querySelector('.qr-code img');
sigText = signature.querySelector('h1')
generateBtn = wrapper.querySelector('.form button');

generateBtn.addEventListener('click', () => {
  let qrValue = qrInput.value;
  if(!qrValue) return;
  generateBtn.innerText = 'Gerando QRCode...'
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener('load', () => {
    wrapper.classList.add('active');
    generateBtn.innerText = 'Criar!'
  });

});

qrInput.addEventListener('keyup',  () => {
  if(!qrInput.value) {
    wrapper.classList,remove('active');
  }
})

sigText.addEventListener('click', () => {
  window.open("https://github.com/Wernekinho")
})