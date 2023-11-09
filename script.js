"use strict";

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");


fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {

  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

fill.addEventListener("touchstart", dragStart);
fill.addEventListener("touchend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("touchmove", dragOver);
  empty.addEventListener("touchstart", dragEnter);
  empty.addEventListener("touchend", dragLeave);
  empty.addEventListener("touchend", dragDrop);
}



function dragStart() {
  this.className += " hold";

  setTimeout(() => this.className = "invisible", 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
  // console.log("drag over");
}

function dragEnter(e) {
  e.preventDefault();
  // console.log("drag enter");

  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
  // console.log("drag leave");
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
