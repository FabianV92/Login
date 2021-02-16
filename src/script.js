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
const userIconEl = document.querySelector(".user-icon");

// Test account data :  access number and pin
const accessNmb = 123;
const pin = 123;

// Hiding the elements
layerEl.classList.add("hidden");
loginEl.classList.add("hidden");

// Hide layer and login function
const hide = () => {
    layerEl.classList.add("hidden");
    loginEl.classList.add("hidden");
}
// Toggle layer/login function
const hideToggle = () => {
    loginEl.classList.toggle("hidden");
    layerEl.classList.toggle("hidden");
}

// Toggle the login via login banking text
loginLinkEl.addEventListener("click", hideToggle)

// Closing login field
closeLoginEl.addEventListener("click", hide);
layerEl.addEventListener("click", hide);

// Hide layer and login with "Esc button"
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        layerEl.classList.add("hidden");
        loginEl.classList.add("hidden");
    }
})

// Small arrow functions for writing text to the placeholder of the Id and Pin field
const userIdEmptyText = () => userIdEl.placeholder = "Information is required";
const userPinEmptyText = () => userPinEl.placeholder = "Information is required";

// If method gets called will display that the user is logged in and hide some elements
const loggedIn = () => {
    loginUserInf.textContent = "You,re logged in !"
    loginUserInf.style.color = "green";
    loginUserInf.style.alignSelf = "center";
    userIdEl.style.display = "none";
    userPinEl.style.display = "none";
    labelIdEl.style.display = "none";
    labelPinEl.style.display = "none";
    loginBtnEL.style.display = "none";
    loginLinkEl.classList.add("hidden");
    userIconEl.classList.remove("hidden");
}

// Reset all values like it has been before user logged in
const reset = () => {
    loginUserInf.textContent = "Type in your login information";
    loginUserInf.style.color = "black";
    loginUserInf.style.alignSelf = "left";
    userIdEl.style.display = "block";
    userPinEl.style.display = "block";
    labelIdEl.style.display = "block";
    labelPinEl.style.display = "block";
    loginBtnEL.style.display = "block";
    loginLinkEl.classList.remove("hidden");
    loginEl.classList.add("hidden");
    layerEl.classList.add("hidden");
    userIconEl.classList.add("hidden");
    userIdEl.value = "";
    userPinEl.value = "";
    userPinEl.placeholder = "";
    userIdEl.placeholder = "";
    loginUserInf.style.cursor = "unset";
}

// Logout function is called will call the reset function if "logout" is pressed and resetting the variables
const logoutFunc = () => {
    loginUserInf.textContent = "Logout";
    layerEl.classList.remove("hidden");
    loginEl.classList.remove("hidden");
    loginUserInf.style.cursor = "pointer";
    loginUserInf.addEventListener("click", () => {
        reset();
    });
}

// Logic function checking if user input is right or not
const informationCheck = () => {
    const wrongPinOrId = "Wrong access number or Pin.";
    if (userIdEl.value === "" && userPinEl.value === "") {
        userIdEmptyText();
        userPinEmptyText();
    } else if (userIdEl.value === "" || userPinEl.value === "") {
        userIdEl.value === "" ? userIdEmptyText() : userPinEmptyText();
    } else if (Number(userIdEl.value) !== accessNmb || Number(userPinEl.value) !== pin) {
        loginUserInf.textContent = wrongPinOrId;
        loginUserInf.style.color = "red";
    } else {
        loggedIn();
    }
}

// Login button function
loginBtnEL.addEventListener("click", informationCheck);

// On pressing the "enter" key login gets pressed
document.addEventListener("keydown", (e) => {
    if (String(loginEl.classList) == "login" && e.keyCode === 13) {
        informationCheck();
    }
});

// User icon displays on click a logout field and calls the logout function
userIconEl.addEventListener("click", logoutFunc);






