const loader = document.getElementById("loader");
const items = document.getElementById("items");

const request = new XMLHttpRequest();

request.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
request.responseType = "json";

request.onload = () => {
  if (request.status === 200) {
    const data = request.response;

    // Скрытие анимации загрузки
    loader.classList.remove("loader_active");
    // Подгрузка данных о курсе валют
    for (let currency in data.response.Valute) {
      const item = document.createElement("div");
      item.classList.add("item");
      const code = document.createElement("div");
      code.classList.add("item__code");
      code.textContent = data.response.Valute[currency].CharCode;
      const value = document.createElement("div");
      value.classList.add("item__value");
      value.textContent = data.response.Valute[currency].Value.toFixed(2);
      const currencyName = document.createElement("div");
      currencyName.classList.add("item__currency");
      currencyName.textContent = "руб.";
      item.appendChild(code);
      item.appendChild(value);
      item.appendChild(currencyName);
      items.appendChild(item);
    }
  }
};

request.send();
