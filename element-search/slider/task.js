// Получаем все необходимые элементы
const sliderItems = document.querySelectorAll(".slider__item");
const arrows = document.querySelectorAll(".slider__arrow");
const dots = document.querySelectorAll(".slider__dot");
sliderItems[0].classList.add("slider__item_active");
dots[0].classList.add("slider__dot_active");
sliderItems.currentIndex = 0;

// Функция для переключения на следующий слайд
function nextSlide() {
  let newIndex=controlIndex(sliderItems.currentIndex+1);
  changeSlider(sliderItems.currentIndex,newIndex);
  sliderItems.currentIndex = newIndex;
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
  // Уменьшаем индекс слайда
  let newIndex=controlIndex(sliderItems.currentIndex-1);
  changeSlider(sliderItems.currentIndex,newIndex);
  sliderItems.currentIndex = newIndex;
}

// Устанавливаем обработчики события click на кнопки «Влево» и «Вправо»
arrows.forEach((arrow) => {
  arrow.onclick = function () {
    if (this.classList.contains("slider__arrow_prev")) {
      prevSlide();
    } else if (this.classList.contains("slider__arrow_next")) {
      nextSlide();
    }
  };
});

// Устанавливаем обработчики события click на точки
dots.forEach((dot, index) => {
  dot.onclick = function () {
    let oldIndex=sliderItems.currentIndex;
    changeSlider(oldIndex,index);
    sliderItems.currentIndex = index;
  };
});

function controlIndex( index){
  if (index >= sliderItems.length)     index = 0;
  if (index < 0)     index = sliderItems.length-1;
  return index;
}
function changeSlider(oldIndex,newIndex ){
   // Скрываем текущий слайд
  sliderItems[oldIndex].classList.remove("slider__item_active");
  dots[oldIndex].classList.remove("slider__dot_active");
  // Показываем выбранный слайд
   sliderItems[newIndex].classList.add("slider__item_active");
   dots[newIndex].classList.add("slider__dot_active");
}