"use strict";
document.addEventListener("DOMContentLoaded", init);
let str, newStr;
let i = 0;
let typeCarriageReturn, typekey1, typekey2, typelastkey, typespace;
let audios;
function init() {
  typeCarriageReturn = document.querySelector("typereturn");
  typekey1 = document.querySelector("#typekey1");
  typekey2 = document.querySelector("#typekey2");
  typelastkey = document.querySelector("#typelast");
  typespace = document.querySelector("#typespace");
  document.querySelector("button").addEventListener("click", () => {
    activateAudio();
  });
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
function activateAudio() {}
function loop() {
  //find character
  let curChar = str[i];

  //audio
  if (str[i] == " ") {
    typespace.play();
  } else if (i % 2 == 0) {
    typekey1.play();
  } else if (i % 2 == 1) {
    typekey2.play();
  } else if (i === str.length - 1) {
    typelast.play();
  }
  //add charater to main string
  newStr.innerHTML += curChar;

  //iterator++
  i++;

  //exit case
  if (i < str.length) {
    setTimeout(loop, Math.floor(Math.random() * 300) + 100);
  } else {
    i = 0;
    newStr.innerHTML += "<br />";
    typelastkey.play();
    setTimeout(() => {
      loop();
    }, 1800);
  }
}
