let counter = 0;
const mainBtn = document.querySelector("main");
const mainCounter = document.querySelector("#zaehler");
const btnReset = document.querySelector("#reset");

//Increase Counter
function increaseCounter() {
  mainCounter.innerHTML = counter++;
  if (counter === 101) {
    counter = 1;
  }
  mainBtn.style.setProperty("--counter", counter + "%");
}

mainBtn.addEventListener("click", increaseCounter);

//Reset Counter
function resetCounter() {
  counter = 0;
  mainCounter.innerHTML = 0;
  mainBtn.style.setProperty("--counter", 0 + "%");
}

btnReset.addEventListener("click", resetCounter);

//stop Propagation
btnReset.addEventListener("click", function (e) {
  e.stopPropagation();
  resetCounter();
});

//Enble Space and Enter for Counting
document.addEventListener("keypress", function (e) {
  if (e.code === "Space" || e.code === "Enter") {
    increaseCounter();
  }
});
