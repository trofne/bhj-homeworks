function getHole(index) {
   // return document.getElementById(hole${index});
    return document.getElementById(`hole${index}`);
  }
  
  let score = 0;
  let misses = 0;
  
  function registerHoleHandlers() {
    for (let i = 1; i <= 9; i++) {
      const hole = getHole(i);
      hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
          score++;
          document.getElementById('dead').textContent = score;
          if (score === 10) {
            resultOfGame('Вы победили!');
            score = 0;
            misses = 0;
            document.getElementById('dead').textContent = score;
            document.getElementById('lost').textContent = misses;
          }
        } else {
          misses++;
          document.getElementById('lost').textContent = misses;
          if (misses === 5) {
            resultOfGame('Вы проиграли!');
            score = 0;
            misses = 0;
            document.getElementById('dead').textContent = score;
            document.getElementById('lost').textContent = misses;
          }
        }
      });
    }
  }
  
  registerHoleHandlers();

  function resultOfGame(message)  {
    alert(message);
    score = 0;
    misses = 0;
    document.getElementById('dead').textContent = score;
    document.getElementById('lost').textContent = misses;
  }