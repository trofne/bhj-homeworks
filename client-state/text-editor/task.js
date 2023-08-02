// Получаем элемент textarea
const editor = document.getElementById("editor");

// Получаем сохраненное значение из локального хранилища
const savedValue = localStorage.getItem("editorValue");

// Если сохраненное значение есть, устанавливаем его в textarea
if (savedValue) {
  editor.value = savedValue;
}

// Слушаем событие изменения значения в textarea
editor.addEventListener("input", () => {
  // Сохраняем новое значение в локальное хранилище
  localStorage.setItem("editorValue", editor.value);
});
