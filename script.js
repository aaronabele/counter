let counter = 0;
const btn = document.querySelector("#zaehler");
const btnReset = document.querySelector("#reset");

btnReset.addEventListener("click", function (e) {
  btn.value = 0;
  btn.innerHTML = 0;
});

btn.addEventListener("click", function (e) {
  btn.value = counter++;
  btn.innerHTML = counter++;
});
