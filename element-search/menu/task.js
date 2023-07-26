
// Получаем все ссылки меню
const links = document.querySelectorAll('.menu__link');

links.forEach(menuLink => {
  menuLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Находим ближайшее меню
    const menuItem = menuLink.closest('.menu__item');
    const subMenu = menuItem.querySelector('.menu');

    if (menuItem.classList.contains('menu__item_active')) {
      menuItem.classList.remove('menu__item_active');
    } else {
      document.querySelectorAll('.menu__item').forEach(item => item.classList.remove('menu__item_active'));
      menuItem.classList.add('menu__item_active');
    }

    if (subMenu && subMenu.classList.contains('menu_active')) {
      subMenu.classList.remove('menu_active');
    } else if (subMenu) {
      document.querySelectorAll('.menu').forEach(menu => menu.classList.remove('menu_active'));
      subMenu.classList.add('menu_active');
    } else {
      window.location.href = menuLink.getAttribute('href');
    }
  });
});