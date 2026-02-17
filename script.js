let count = 0;

const display = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", () => {
  count++;
  display.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  display.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});
