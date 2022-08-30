"use strict";
document.addEventListener("DOMContentLoaded", init);
let str, newStr;
let i = 0;

function init() {
  console.log("init");
  str = document.querySelector("#typewriter").textContent;
  newStr = document.createElement("h1");
  newStr.classList.add("typewritten");
  newStr.textContent = "";
  document.querySelector("body").appendChild(newStr);
  if (str) {
    loop();
  } else {
    return;
  }
}

function loop() {
  //find character
  let curChar = str[i];

  //add charater to main string
  newStr.textContent += curChar;

  //iterator++
  i++;

  //   console.log(newStr.textContent);
  //exit case
  if (i < str.length) {
    setTimeout(loop, Math.floor(Math.random() * 200) + 30);
  } else {
    i = 0;
    setTimeout(() => {
      newStr.textContent = "";
      loop();
    }, 1000);
  }
}
