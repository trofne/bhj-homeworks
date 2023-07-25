// Получаем все необходимые элементы
const sliderItems = document.querySelectorAll(".slider__item");
const arrows = document.querySelectorAll(".slider__arrow");
const dots = document.querySelectorAll(".slider__dot");

// Устанавливаем начальный индекс слайда
let currentIndex = 0;

// Функция для переключения на следующий слайд
function nextSlide() {
  // Скрываем текущий слайд
  sliderItems[currentIndex].classList.remove("slider__item_active");
  // Увеличиваем индекс слайда
  currentIndex++;
  // Если достигли конца, переходим на первый слайд
  if (currentIndex >= sliderItems.length) {
    currentIndex = 0;
  }
  // Показываем следующий слайд
  sliderItems[currentIndex].classList.add("slider__item_active");
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
  // Скрываем текущий слайд
  sliderItems[currentIndex].classList.remove("slider__item_active");
  // Уменьшаем индекс слайда
  currentIndex--;
  // Если достигли начала, переходим на последний слайд
  if (currentIndex < 0) {
    currentIndex = sliderItems.length - 1;
  }
  // Показываем предыдущий слайд
  sliderItems[currentIndex].classList.add("slider__item_active");
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
    // Скрываем текущий слайд
    sliderItems[currentIndex].classList.remove("slider__item_active");
    // Устанавливаем новый индекс слайда
    currentIndex = index;
    // Показываем выбранный слайд
    sliderItems[currentIndex].classList.add("slider__item_active");
  };
});
