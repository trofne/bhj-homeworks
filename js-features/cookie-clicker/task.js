let counterWidget = document.getElementById("clicker__counter");
let currentCount = counterWidget.innerHTML;

let cookieWidget = document.getElementById("cookie");

let increase = true;

const defaultWidth = cookieWidget.width;
const defaultHeight = cookieWidget.height;

const maximizedWidth = Number(defaultWidth) + 50;
const maximizedHeight = Number(defaultHeight) + 50;

function onClickCookie() {
  currentCount++;
  counterWidget.innerHTML = currentCount;

  if (increase) {
    increase = false;
    cookieWidget.style.width = maximizedWidth + "px";
    cookieWidget.style.height = maximizedHeight + "px";
    return;
  }
  increase = true;
  cookieWidget.style.width = defaultWidth + "px";
  cookieWidget.style.height = defaultHeight + "px";
}
