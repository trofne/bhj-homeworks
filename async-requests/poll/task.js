// функция для получения случайного опроса
function getPoll() {
  $.getJSON('https://students.netoservices.ru/nestjs-backend/poll', function(data) {
    // получаем данные опроса и отображаем его вопрос и ответы
    $('#poll__title').text(data.data.title); // отображаем вопрос
    var answersHtml = ''; // создаем пустую строку для хранения HTML-кода ответов

    $.each(data.data.answers, function(index, answer) { // проходимся по каждому ответу в массиве
      answersHtml += '<button class="poll__answer">' + answer + '</button>'; // формируем HTML-код для каждого ответа
    });

    $('#poll__answers').html(answersHtml); // добавляем HTML-код всех ответов в элемент #poll__answers

    // добавляем обработчик клика на каждую кнопку ответа
    $('.poll__answer').click(function() {
      alert('Спасибо, ваш голос засчитан!'); // выводим диалоговое окно с сообщением об успешной отправке ответа
    });
  });
}

// вызываем функцию для получения и отображения случайного опроса при загрузке страницы
getPoll();