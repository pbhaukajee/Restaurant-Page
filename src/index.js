import "./style.css";

import homepage from "./homepage";
import menu from "./menu";
import contact from "./contact";

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    reset(content);
    if (button.textContent === "Home") {
      homepage();
    } else if (button.textContent === "Menu") {
      menu();
    } else if (button.textContent === "Contact") {
      contact();
    } else {
      homepage();
    }
  });
});

function reset(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
