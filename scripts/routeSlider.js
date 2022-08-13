const buttonRight = document.querySelector('.route__buttons  .nav-btn_direction_right');
const buttonLeft = document.querySelector('.route__buttons  .nav-btn_direction_left');
const imagesRoute = document.querySelector('.route__items');

buttonRight.addEventListener('click', function(){
  const imageRoute = imagesRoute.querySelector('.route__container');
  let trackRoute = imagesRoute.querySelector('.route__track');
  let titleRoute = imagesRoute.querySelector('.route__track');
  let textRoute = imagesRoute.querySelector('.route__track');
  trackRoute.style.visibility = "hidden";
  titleRoute.style.visibility = "hidden";
  textRoute.style.visibility = "hidden";
  imagesRoute.appendChild(imageRoute);
  trackRoute = imagesRoute.querySelector('.route__track');
  titleRoute = imagesRoute.querySelector('.route__track');
  textRoute = imagesRoute.querySelector('.route__track');
  trackRoute.style.visibility = "visible";
  titleRoute.style.visibility = "visible";
  textRoute.style.visibility = "visible";
})

buttonLeft.addEventListener('click', function(){
  const imageRoute = imagesRoute.querySelectorAll('.route__container');
  let trackRoute = imagesRoute.querySelector('.route__track');
  let titleRoute = imagesRoute.querySelector('.route__track');
  let textRoute = imagesRoute.querySelector('.route__track');
  trackRoute.style.visibility = "hidden";
  titleRoute.style.visibility = "hidden";
  textRoute.style.visibility = "hidden";
  imagesRoute.insertBefore(imageRoute[2], imageRoute[0]);
  trackRoute = imagesRoute.querySelector('.route__track');
  titleRoute = imagesRoute.querySelector('.route__track');
  textRoute = imagesRoute.querySelector('.route__track');
  trackRoute.style.visibility = "visible";
  titleRoute.style.visibility = "visible";
  textRoute.style.visibility = "visible";
})
