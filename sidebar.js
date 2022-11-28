let popupBtn = document.querySelector('.popup__button');
let menu = document.querySelector('.left__sidebar');

popupBtn.addEventListener('click', function(){
    popupBtn.classList.toggle('active');
    menu.classList.toggle('active');
})