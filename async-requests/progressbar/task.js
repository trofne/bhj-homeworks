const form = document.getElementById("signin__form");
const loginInput = form.querySelector('[name="login"]');
const passwordInput = form.querySelector('[name="password"]');
const signInBtn = document.getElementById("signin__btn");
const welcomeBlock = document.getElementById("welcome");
const welcomeUserId = document.getElementById("user_id");

signInBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch("https://students.netoservices.ru/nestjs-backend/auth", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem("userId", data.user_id);
        welcomeUserId.textContent = data.user_id;
        welcomeBlock.classList.add("welcome_active");
      } else {
        alert("Неверный логин/пароль");
      }
    })
    .catch((error) => console.error(error));
});

if (localStorage.getItem("userId")) {
  welcomeUserId.textContent = localStorage.getItem("userId");
  welcomeBlock.classList.add("welcome_active");
}
