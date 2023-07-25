const fontControls = document.querySelectorAll(".font-size");

function changeFontSize(event) {
  event.preventDefault();
  const size = event.target.dataset.size;
  fontControls.forEach((control) =>
    control.classList.remove("font-size_active")
  );
  event.target.classList.add("font-size_active");
  const book = document.getElementById("book");
  book.classList.remove("book_fs-big", "book_fs-small");
  if (size === "big") {
    book.classList.add("book_fs-big");
  } else if (size === "small") {
    book.classList.add("book_fs-small");
  }
}

fontControls.forEach((control) =>
  control.addEventListener("click", changeFontSize)
);
