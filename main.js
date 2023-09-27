/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/board.js
class Board {
  constructor() {
    this.size = 4;
  }
  draw() {
    const container = document.querySelector(".container");
    for (let i = 0; i < this.size * this.size; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      container.appendChild(block);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/goblin.js
function rawPosition() {
  const position = [...document.querySelectorAll(".block")];
  const value = Math.floor(Math.random() * position.length);
  position[value].classList.add("goblin");
  setInterval(changePosition, 1000, position);
}
function changePosition() {
  const position = [...document.querySelectorAll(".block")];
  const goblin = document.querySelector(".goblin");
  const goblinPosition = position.indexOf(goblin);
  const value = Math.floor(Math.random() * position.length);
  if (goblinPosition !== value) {
    position[goblinPosition].classList.remove("goblin");
    position[value].classList.add("goblin");
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


let board = new Board();
board.draw();
rawPosition();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;