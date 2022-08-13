const body = document.querySelector('.page');
const toggle = document.querySelectorAll('.switch__input');

toggle.forEach(function (element){
  element.addEventListener('change', function (){
    body.classList.toggle('page_theme_dark');
  })
})
