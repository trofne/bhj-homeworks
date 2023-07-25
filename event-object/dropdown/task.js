// Получаем все необходимые элементы
const dropdowns = document.querySelectorAll(".dropdown");

// Добавляем обработчик события click на каждую кнопку
dropdowns.forEach((dropdown) => {
  const value = dropdown.querySelector(".dropdown__value");
  const list = dropdown.querySelector(".dropdown__list");

  value.onclick = function () {
    list.classList.toggle("dropdown__list_active");
  };

  // Добавляем обработчик события click на каждый пункт списка
  const items = Array.from(list.querySelectorAll(".dropdown__item"));
  items.forEach((item) => {
    item.onclick = function (event) {
      event.preventDefault(); // Запрещаем переход по ссылке

      value.textContent = this.textContent; // Устанавливаем новое значение

      list.classList.remove("dropdown__list_active"); // Закрываем список
    };
  });
});
