const rotatorCases = document.querySelectorAll(".rotator__case");
let activeCaseIndex = 0;

function rotateCases() {
  rotatorCases[activeCaseIndex].classList.remove("rotator__case_active");
  activeCaseIndex = (activeCaseIndex + 1) % rotatorCases.length;
  rotatorCases[activeCaseIndex].classList.add("rotator__case_active");
}

setInterval(rotateCases, 1000);
