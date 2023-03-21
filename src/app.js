/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
  let simbol = ["♦", "♥", "♠", "♣"];
  let randomNumber = Math.floor(Math.random() * number.length);
  let randomSimbol = Math.floor(Math.random() * simbol.length);
  let simbolTop = document.querySelector(".top");
  simbolTop.innerHTML = simbol[randomSimbol];
  let simbolBottom = document.querySelector(".bottom");
  simbolBottom.innerHTML = simbol[randomSimbol];
  let numberCenter = document.querySelector(".number");
  numberCenter.innerHTML = number[randomNumber];

  if (simbol[randomSimbol] === "♥" || simbol[randomSimbol] === "♦") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }
};
