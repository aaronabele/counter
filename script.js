let counter = 0;
const btn = document.querySelector("#zaehler");
const btnReset = document.querySelector("#reset");

btn.addEventListener("click", function () {
  btn.innerHTML = counter++;
});

btnReset.addEventListener("click", function () {
  counter = 0;
  btn.innerHTML = 0;
});
