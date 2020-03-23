var Popup = document.getElementById('popup');

function popup(){
  Popup.style.display = 'block';
  console.log('carregando')
}

setTimeout(popup, 2000);

function Fechar(){
  document.body.removeChild(Popup);
}