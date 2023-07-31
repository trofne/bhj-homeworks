$("#tasks__form").submit(function (e) {
  e.preventDefault(); // отменяем стандартное поведение формы

  var taskTitle = $("#task__input").val(); // получаем текст задачи из поля ввода
  if (taskTitle.trim() === "") {
    // проверяем, что текст не пустой
    return;
  }

  var taskTemplate =
    '<div class="task">' +
    '<div class="task__title">' +
    taskTitle +
    "</div>" +
    '<a href="#" class="task__remove">&times;</a>' +
    "</div>"; // создаем шаблон задачи

  $("#tasks__list").append(taskTemplate); // добавляем задачу в список

  $("#task__input").val(""); // очищаем поле ввода
});

$("#tasks__list").on("click", ".task__remove", function (e) {
  e.preventDefault(); // отменяем стандартное поведение ссылки

  $(this).closest(".task").remove(); // удаляем родительский элемент задачи
});
