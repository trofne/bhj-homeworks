const revealElems = document.querySelectorAll(".reveal");

function checkReveal() {
  revealElems.forEach((elem) => {
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;

    if (elemTop < window.innerHeight && elemBottom > 0) {
      elem.classList.add("reveal_active");
    } else {
      elem.classList.remove("reveal_active");
    }
  });
}

window.addEventListener("scroll", checkReveal);
