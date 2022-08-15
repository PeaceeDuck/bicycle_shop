const radioButtons = document.querySelector('.bike__radio-buttons')

radioButtons.addEventListener('change', function () {
  const cardsSelected = document.querySelector('.bike__cards_selected');
  let radioButton = radioButtons.querySelector('.bike__radio:checked');
  if (radioButton.id === 'radio1') {
    const firstCard = cardsSelected.querySelector('.bike-card:first-of-type');
    firstCard.style.marginLeft = "calc(50vw - 142px)";
  } else {
    if (radioButton.id === 'radio2') {
      const firstCard = cardsSelected.querySelector('.bike-card:first-of-type');
      firstCard.style.marginLeft = "calc(25vw - 426px)";
    } else {
      const firstCard = cardsSelected.querySelector('.bike-card:first-of-type');
      firstCard.style.marginLeft = "-710px";
    }
  }
})

// Работа слайдера при свайпах

const bikeCards = document.querySelectorAll('.bike__cards');
const sensitivity = 20;
let touchStart = null; //Точка начала касания
let touchPosition = null; //Текущая позиция

bikeCards.forEach(function (element) {
  element.addEventListener("touchstart", function (e) {
    TouchStart(e);
  }); //Начало касания
  element.addEventListener("touchmove", function (e) {
    TouchMove(e);
  }); //Движение пальцем по экрану
  element.addEventListener("touchend", function (e) {
    TouchEnd(e);
  }); //Пользователь отпустил экран
  element.addEventListener("touchcancel", function (e) {
    TouchEnd(e);
  }); //Отмена касания

})

function TouchStart(e) {
  //Получаем текущую позицию касания
  touchStart = {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};
  touchPosition = {x: touchStart.x, y: touchStart.y};
}

function TouchMove(e) {
  //Получаем новую позицию
  touchPosition = {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};
}

function TouchEnd() {
  CheckAction(); //Определяем, какой жест совершил пользователь
  //Очищаем позиции
  touchStart = null;
  touchPosition = null;
}

function CheckAction() {
  let d = //Получаем расстояния от начальной до конечной точек по обеим осям
    {
      x: touchStart.x - touchPosition.x,
      y: touchStart.y - touchPosition.y
    };

  if (Math.abs(d.x) > Math.abs(d.y)) //Проверяем, движение по какой оси было длиннее
  {
    if (Math.abs(d.x) > sensitivity) //Проверяем, было ли движение достаточно длинным
    {
      if (d.x > 0) //Если значение больше нуля, значит пользователь двигал пальцем справа налево
      {
        const cardsSelected = document.querySelector('.bike__cards_selected');
        const radioButton = radioButtons.querySelector('.bike__radio:checked');
        const firstRadioButton = document.getElementById('radio1');
        const secondRadioButton = document.getElementById('radio2');
        const thirdRadioButton = document.getElementById('radio3');
        if (radioButton.id === 'radio1') {
          const firstCard = cardsSelected.querySelector('.bike-card:first-of-type');
          firstCard.style.marginLeft = "calc(25vw - 426px)";
          firstRadioButton.checked = false;
          secondRadioButton.checked = true;
        } else {
          if (radioButton.id === 'radio2') {
            const firstCard = cardsSelected.querySelector('.bike-card:first-of-type');
            firstCard.style.marginLeft = "-710px";
            secondRadioButton.checked = false;
            thirdRadioButton.checked = true;
          }
        }
      } else //Иначе он двигал им слева направо
      {
        const cardsSelected = document.querySelector('.bike__cards_selected');
        const radioButton = radioButtons.querySelector('.bike__radio:checked');
        const firstRadioButton = document.getElementById('radio1');
        const secondRadioButton = document.getElementById('radio2');
        const thirdRadioButton = document.getElementById('radio3');
        if (radioButton.id === 'radio2') {
          const firstCard = cardsSelected.querySelector('.bike-card:first-of-type');
          firstCard.style.marginLeft = "calc(50vw - 142px)";
          secondRadioButton.checked = false;
          firstRadioButton.checked = true;
        } else {
          if (radioButton.id === 'radio3') {
            const firstCard = cardsSelected.querySelector('.bike-card:first-of-type');
            firstCard.style.marginLeft = "calc(25vw - 426px)";
            thirdRadioButton.checked = false;
            secondRadioButton.checked = true;
          }
        }
      }
    }
  }
}

