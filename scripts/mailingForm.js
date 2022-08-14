const form = document.querySelector('.mailing-form');
const formInput = form.querySelector('.mailing-form__input')
const formContainer = form.querySelector('.mailing-form__container');
const buttonSubmit = form.querySelector('.mailing-form__submit');

formContainer.addEventListener('click', function (){
  buttonSubmit.style.display = "block";
});

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  console.log(formInput);
  formInput.value = 'Круто!';
  buttonSubmit.style.display = "none";
});