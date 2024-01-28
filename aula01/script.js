const btnIncrement = document.querySelector("#increment");
const btnDecrement = document.querySelector("#decrement");
const h1 = document.querySelector("h1");

let count = 0;

btnIncrement.addEventListener("click", () => {
  count++;
  h1.innerText = count;
});

btnDecrement.addEventListener("click", () => {
  count--;
  h1.innerText = count;
});
