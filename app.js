"use strict";
let number = 0;

window.addEventListener("load", start);

function start() {
  document
    .querySelector("#btn-increment")
    .addEventListener("click", funnyNumberGoUp);
  document
    .querySelector("#btn-decrement")
    .addEventListener("click", funnyNumberGoDown);
}

function funnyNumberGoUp() {
  number++;
  displayNumber();
}

function funnyNumberGoDown() {
  number--;
  displayNumber();
}

function displayNumber() {
  document.querySelector("#number").textContent = number;
}
