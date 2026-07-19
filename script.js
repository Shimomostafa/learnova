const loginTab = document.getElementById("login-tab");
const signUpTab = document.getElementById("sign-up-tab");

const loginForm = document.getElementById("login-form");
const signUpForm = document.getElementById("sign-up-form");

loginTab.onclick = function () {
    loginForm.style.display = "block";
    signUpForm.style.display = "none";

    loginTab.classList.add("active");
    signUpTab.classList.remove("active");
};

signUpTab.onclick = function () {
    loginForm.style.display = "none";
    signUpForm.style.display = "block";

    signUpTab.classList.add("active");
    loginTab.classList.remove("active");
};

