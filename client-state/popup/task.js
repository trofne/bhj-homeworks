const modal = document.getElementById('subscribe-modal');
const closeButton = modal.querySelector('.modal__close');

// проверяем, было ли окно уже показано
if (!localStorage.getItem('modalShown')) {
  // показываем окно
  modal.classList.add('modal_visible');

  // закрываем окно при нажатии на крестик
  closeButton.addEventListener('click', function() {
    modal.classList.remove('modal_visible');
    // устанавливаем значение в localStorage
    localStorage.setItem('modalShown', true);
  });

  // закрываем окно при нажатии на любое место вне окна
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('modal_visible');
      // устанавливаем значение в localStorage
      localStorage.setItem('modalShown', true);
    }
  });
}

