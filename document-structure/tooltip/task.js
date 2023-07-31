$(document).ready(function () {
  var currentTooltip = null; // переменная для хранения текущей подсказки

  $(".has-tooltip").click(function (e) {
    e.preventDefault();

    var tooltipText = $(this).attr("title"); // текст подсказки
    var tooltip = $(".tooltip"); // выбираем элемент с классом tooltip

    if (currentTooltip !== null) {
      // если уже есть открытая подсказка
      currentTooltip.fadeOut(200, function () {
        // скрываем ее с анимацией
        tooltip.text(tooltipText); // устанавливаем новый текст подсказки
        tooltip.fadeIn(200); // показываем новую подсказку с анимацией
      });
    } else {
      // если нет открытой подсказки
      tooltip.text(tooltipText); // устанавливаем текст подсказки
      tooltip.fadeIn(200); // показываем подсказку с анимацией
    }

    currentTooltip = tooltip; // сохраняем ссылку на текущую подсказку
  });
});
