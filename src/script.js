"use strict";

// Selecting elements
const layerEl = document.querySelector(".layer");
const loginEl = document.querySelector(".login");
const loginLinkEl = document.querySelector(".login-link");
const closeLoginEl = document.querySelector(".close-icon");
const loginBtnEL = document.querySelector(".login-button");
const loginUserInf = document.querySelector(".user-info");
const userIdEl = document.querySelector("#id-field");
const userPinEl = document.querySelector("#pin-field");
const labelIdEl = document.querySelector(".labelId");
const labelPinEl = document.querySelector(".labelPin");

// Test access number and pin
const accessNmb = 123;
const pin = 123;

// Hiding the elements
layerEl.classList.add("hidden");
loginEl.classList.add("hidden");

// Hide layer and login function
const hide = function () {
    layerEl.classList.add("hidden");
    loginEl.classList.add("hidden");
}
// Toggle layer/login function
const hideToggle = function () {
    loginEl.classList.toggle("hidden");
    layerEl.classList.toggle("hidden");
}

// Toggle the login via login banking text
loginLinkEl.addEventListener("click", hideToggle)

// Closing login field
closeLoginEl.addEventListener("click", hide);
layerEl.addEventListener("click", hide);

// Hide layer and login with "Esc button"
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
        layerEl.classList.add("hidden");
        loginEl.classList.add("hidden");
    }
})

const userIdEmptyText = () => userIdEl.placeholder = "Information is required";
const userPinEmptyText = () => userPinEl.placeholder = "Information is required";
const loggedIn = () => {
    loginUserInf.textContent = "You,re logged in !"
    loginUserInf.style.color = "green";
    loginUserInf.style.alignSelf = "center";
    userIdEl.style.display = "none";
    userPinEl.style.display = "none";
    labelIdEl.style.display = "none";
    labelPinEl.style.display = "none";
    loginBtnEL.style.display = "none";
}
// Logic function checking if user input is right or not
const informationCheck = function () {
    const wrongPinOrId = "Wrong access number or Pin.";
    if (userIdEl.value === "" && userPinEl.value === "") {
        userIdEmptyText();
        userPinEmptyText();
    } else if (userIdEl.value === "" || userPinEl.value === "") {
        userIdEl === "" ? userIdEmptyText() : userPinEmptyText();
    } else if (userIdEl.value != accessNmb || userPinEl.value != pin) {
        loginUserInf.textContent = wrongPinOrId;
        loginUserInf.style.color = "red";
    }
    else {
        loggedIn();
    }
    console.log(userIdEl.value == accessNmb);
}

// Login button function
loginBtnEL.addEventListener("click", informationCheck);

