let popupBtn = document.querySelector('.popup__button');
let menu = document.querySelector('.left__sidebar');
let noScroll = document.querySelector('html');

popupBtn.addEventListener('click', function(){
    popupBtn.classList.toggle('active');
    menu.classList.toggle('active');
    noScroll.classList.toggle('no-scroll');
})