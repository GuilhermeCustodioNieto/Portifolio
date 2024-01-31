let atual = 0;
let items = undefined;
let buttons = undefined;

document.querySelectorAll(".carousel").forEach((carousel) => {
  items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
  );

  buttons = carousel.querySelectorAll(".carousel__button");
  const nexts = carousel.querySelectorAll(".next");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });

    atual = i;
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});

function next(btn = 0) {
  items.forEach((item, i) => {
    item.classList.remove("carousel__item--selected");

    if (i === btn) {
      item.classList.add("carousel__item--selected");
      atual = i;
    }

    buttons.forEach((button) => {
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );
    });
    buttons[atual].classList.add("carousel__button--selected");
  });
}

function nextLeft() {
  if (atual <= 0) {
    atual = items.length;
  }
  atual--;
  next(atual);
}

function nextRight() {
  atual++;

  if (atual >= items.length) {
    atual = 0;
  }
  next(atual);
}
