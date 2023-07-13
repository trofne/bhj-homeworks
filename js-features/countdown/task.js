const timerElement = document.getElementById('timer');
const statusElement = document.getElementById('status');

// Устанавливаем стартовое значение таймера
let secondsLeft = 40;

// Функция для обновления таймера
function updateTimer() {
  // Уменьшаем значение таймера на 1
  secondsLeft--;

  // Обновляем текст на странице
  timerElement.textContent = secondsLeft;

  // Если таймер закончился
  if (secondsLeft === 0) {
    // Выводим сообщение о победе
    alert('Вы победили в конкурсе!');
    // Останавливаем таймер
    clearInterval(timerInterval);
    // Скрываем статус таймера
    statusElement.style.display = 'none';
  }
}

// Вызываем функцию обновления таймера каждую секунду
const timerInterval = setInterval(updateTimer, 1000);
