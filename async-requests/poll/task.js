const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

function fetchPollData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      pollTitle.textContent = data.data.title;
      data.data.answers.forEach((answer) => {
        const answerButton = document.createElement("button");
        answerButton.classList.add("poll__answer");
        answerButton.textContent = answer;
        answerButton.addEventListener("click", () => {
          alert("Спасибо, ваш голос засчитан!");
        });
        pollAnswers.appendChild(answerButton);
      });
    }
  };
  xhr.send();
}

fetchPollData();
