const bikeType = document.querySelectorAll('.bike__type');
const bikeSelect = document.querySelector('.bike__select');
const radioButton = document.getElementById('radio1');

bikeType.forEach(function (element) {
  element.addEventListener('click', function () {
    if (!element.classList.contains('bike__type_selected')) {
      let bikeTypeSelected = document.querySelector('.bike__type_selected');
      bikeTypeSelected.classList.remove('bike__type_selected');
      element.classList.add('bike__type_selected');
      if (element.textContent === 'Шоссе') {
        let bikeCardsSelected = document.querySelector('.bike__cards_selected');
        let bikeCardsHighway = document.querySelector('.bike__cards_type_highway');
        bikeCardsSelected.classList.remove('bike__cards_selected');
        bikeCardsHighway.classList.add('bike__cards_selected');
      } else {
        if (element.textContent === 'Грэвел') {
          let bikeCardsSelected = document.querySelector('.bike__cards_selected');
          let bikeCardsHighway = document.querySelector('.bike__cards_type_gravel');
          bikeCardsSelected.classList.remove('bike__cards_selected');
          bikeCardsHighway.classList.add('bike__cards_selected');
        } else {
          let bikeCardsSelected = document.querySelector('.bike__cards_selected');
          let bikeCardsHighway = document.querySelector('.bike__cards_type_tt');
          bikeCardsSelected.classList.remove('bike__cards_selected');
          bikeCardsHighway.classList.add('bike__cards_selected');
        }
      }
    }
  })
})

bikeSelect.addEventListener('change', function () {
  radioButton.checked = true;
  if (bikeSelect.value === 'Шоссе') {
    let bikeCardsSelected = document.querySelector('.bike__cards_selected');
    let bikeCardsHighway = document.querySelector('.bike__cards_type_highway');
    let bikeFirstCard = bikeCardsSelected.querySelector('.bike-card:first-of-type')
    bikeFirstCard.style.marginLeft = "calc(50vw - 142px)";
    bikeCardsSelected.classList.remove('bike__cards_selected');
    bikeCardsHighway.classList.add('bike__cards_selected');
  } else {
    if (bikeSelect.value === 'Грэвел') {
      let bikeCardsSelected = document.querySelector('.bike__cards_selected');
      let bikeCardsHighway = document.querySelector('.bike__cards_type_gravel');
      let bikeFirstCard = bikeCardsSelected.querySelector('.bike-card:first-of-type')
      bikeFirstCard.style.marginLeft = "calc(50vw - 142px)";
      bikeCardsSelected.classList.remove('bike__cards_selected');
      bikeCardsHighway.classList.add('bike__cards_selected');
    } else {
      let bikeCardsSelected = document.querySelector('.bike__cards_selected');
      let bikeCardsHighway = document.querySelector('.bike__cards_type_tt');
      let bikeFirstCard = bikeCardsSelected.querySelector('.bike-card:first-of-type')
      bikeFirstCard.style.marginLeft = "calc(50vw - 142px)";
      bikeCardsSelected.classList.remove('bike__cards_selected');
      bikeCardsHighway.classList.add('bike__cards_selected');
    }
  }
})
