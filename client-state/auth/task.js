const signInBtn = document.getElementById("signin__btn");
const form = document.getElementById("signin__form");
const signInContainer = document.getElementById("signin");
const welcomeContainer = document.getElementById("welcome");
const userIdSpan = document.getElementById("user_id");

signInBtn.onclick = () => {
  signIn();
};

function signIn() {
  const request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://students.netoservices.ru/nestjs-backend/auth",
    true
  );
  request.responseType = "json";
  request.onreadystatechange = () => {
    if (request.status != 200 && request.status != 201) {
      return;
    }
    const data = request.response;
    if (data.success) {
      signInContainer.classList.remove("signin_active");
      welcomeContainer.classList.add("welcome_active");
      userIdSpan.textContent = data.user_id;
    } else {
      alert("Неверные логин/пароль");
    }
  };

  const formData = new FormData(form);
  request.send(formData);
}
