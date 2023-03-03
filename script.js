/* 
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
*/

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    clickIncrement() {
      this.counter = this.counter + 1;

      if (this.counter === 101) {
        this.counter = 1;
      }

      const bgMain = document.querySelector("main");
      bgMain.style.setProperty("--counter", this.counter + "%");
    },
    resetCounter() {
      this.counter = 0;

      const bgMain = document.querySelector("main");
      bgMain.style.setProperty("--counter", 0 + "%");
    },
    enableSpaceAndEnterForIncrement() {
      const docIncrement = document.querySelector("document");

      docIncrement.addEventListener("keypress", (e) => {
        if (e.code === "Space" || e.code === "Enter") {
          this.clickIncrement();
        }
      });
    },
  },
}).mount("#app");
