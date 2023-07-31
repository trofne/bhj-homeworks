// функция для отправки формы и отслеживания прогресса загрузки
function uploadFile() {
  var form = $("#form")[0]; // получаем элемент формы
  var formData = new FormData(form); // создаем объект FormData для отправки формы

  $.ajax({
    url: "https://students.netoservices.ru/nestjs-backend/upload", // адрес для отправки формы
    type: "POST",
    data: formData, // данные для отправки формы
    processData: false, // отключаем обработку данных перед отправкой
    contentType: false, // отключаем установку заголовка Content-Type
    xhr: function () {
      var xhr = $.ajaxSettings.xhr(); // создаем объект XMLHttpRequest

      // добавляем обработчик изменения состояния загрузки
      xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
          // проверяем, что длина загруженного файла известна
          var percentComplete = (event.loaded / event.total) * 100; // вычисляем процент загрузки
          $("#progress").val(percentComplete); // устанавливаем значение прогресс-бара
        }
      };

      return xhr; // возвращаем объект XMLHttpRequest
    },
    success: function (data) {
      alert("Файл успешно загружен!"); // выводим диалоговое окно с сообщением об успешной загрузке файла
    },
    error: function (xhr, status, error) {
      alert("Произошла ошибка при загрузке файла: " + error); // выводим диалоговое окно с сообщением об ошибке загрузки файла
    },
  });
}

// добавляем обработчик клика на кнопку отправки формы
$("#send").click(function (event) {
  event.preventDefault(); // отменяем стандартное поведение кнопки
  uploadFile(); // вызываем функцию для отправки формы и отслеживания прогресса загрузки
});
