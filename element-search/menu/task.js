// Получаем все ссылки меню
const links = document.querySelectorAll(".menu__link");

// Обходим все ссылки и регистрируем обработчик события click
links.forEach((link) => {
  link.onclick = function () {
    // Находим ближайшее меню
    const menu = this.closest(".menu");
    if (menu) {
      // Если меню есть, переключаем у него класс menu_active
      menu.classList.toggle("menu_active");
      // Предотвращаем переход по ссылке
      return false;
    }
    // Если меню нет, разрешаем переход по ссылке
    return true;
  };
});
