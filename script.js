"use strict";

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

fill.addEventListener("touchstart", touchStart);
fill.addEventListener("touchend", touchEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);

  empty.addEventListener("touchmove", touchMove);
  empty.addEventListener("touchstart", touchEnter);
  empty.addEventListener("touchend", touchLeave);
  empty.addEventListener("touchend", touchDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
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

function touchStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function touchEnd() {
  this.className = "fill";
}

function touchMove(e) {
  e.preventDefault();
  // Handle touch move if needed
}

function touchEnter() {
  this.className += " hovered";
}

function touchLeave() {
  this.className = "empty";
}

function touchDrop() {
  this.className = "empty";
  this.append(fill);
}
