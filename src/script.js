"use script";

// Selecting elements
const layerEl = document.querySelector(".layer");
const loginEl = document.querySelector(".login");
const loginLinkEl = document.querySelector(".login-link");
const bodyEl = document.querySelector("body");

// Hiding the elements
layerEl.classList.add("hidden");
loginEl.classList.add("hidden");

// Toggle the login via login banking text
loginLinkEl.addEventListener("click" , function () {
    loginEl.classList.toggle("hidden");
})
