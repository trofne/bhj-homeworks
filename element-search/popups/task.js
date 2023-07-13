// Получаем элементы окон и кнопок закрытия
const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalCloseButtons = document.querySelectorAll(".modal__close");

// Показываем окно #modal_main при загрузке страницы
modalMain.classList.add("modal_active");

// Добавляем обработчики клика на кнопки закрытия окон
modalCloseButtons.forEach(button => {
  button.addEventListener("click", () => {
    const parentModal = button.closest(".modal");
    parentModal.classList.remove("modal_active");
  });
});

// Добавляем обработчик клика на кнопку show-success
const showSuccessButton = document.querySelector(".show-success");
showSuccessButton.addEventListener("click", () => {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
});