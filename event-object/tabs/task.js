//Напишем функцию, которая будет регистрировать обработчики событий на переключателях вкладок:

function registerTabHandlers() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      activateTab(index);
    });
  });
}

//Добавим функцию activateTab, которая будет активировать нужную вкладку:

function activateTab(index) {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab__content");

  tabs.forEach((tab, tabIndex) => {
    if (tabIndex === index) {
      tab.classList.add("tab_active");
      contents[tabIndex].classList.add("tab__content_active");
    } else {
      tab.classList.remove("tab_active");
      contents[tabIndex].classList.remove("tab__content_active");
    }
  });
}

//Вызовем функцию registerTabHandlers в конце скрипта, чтобы она зарегистрировала обработчики событий на странице:

registerTabHandlers();
