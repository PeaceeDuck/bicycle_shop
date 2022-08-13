const burgerMenu = document.querySelector('.burger-menu');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const popupItem = popup.querySelectorAll('.popup__item');

burgerMenu.addEventListener('click', function () {
  popup.style.visibility = 'visible';
  popup.style.opacity = '1';
})

closeButton.addEventListener('click', function () {
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
})

popupItem.forEach(function (element) {
  element.addEventListener('click', function () {
    popup.style.visibility = 'hidden';
    popup.style.opacity = '0';
  })
})