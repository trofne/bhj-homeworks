const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');

// Открытие окна чата при нажатии на красный боковой бэйдж
chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

// Отправка сообщения по нажатию Enter
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && input.value.trim()) {
    const message = 
      <div class="message message_client">
        <div class="message__time">${getTime()}</div>
        <div class="message__text">${input.value}</div>
      </div>
    ;
    messages.innerHTML += message;
    input.value = '';
    sendResponse();
  }
});

// Получение случайного ответа робота
function getResponse() {
  const responses = [
    'К сожалению, все операторы заняты. Пожалуйста, попробуйте позже.',
    'Мы ничего не будем вам продавать!',
    'Добрый день! До свидания!',
    'Где ваша совесть?!',
  ];
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
}

// Отправка ответа робота
function sendResponse() {
  const message = 
    <div class="message">
      <div class="message__time">${getTime()}</div>
      <div class="message__text">${getResponse()}</div>
    </div>
  ;
  setTimeout(() => {
    messages.innerHTML += message;
  }, 1000);
}

// Получение текущего времени в формате HH:MM
function getTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return ${hours}:${minutes};
}
