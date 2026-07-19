var ui_ux = document.getElementById("ui-ux")
if (ui_ux) {
    ui_ux.addEventListener("click", function(){
        window.location.href = "UI-course.html"
    })
}

var sign_up = document.getElementById("sign-up")
if (sign_up) {
    sign_up.addEventListener("click", function(){
        window.location.href = "login.html"
    })
}
var login = document.getElementById("login")
if (login) {
    login.addEventListener("click", function(){
        window.location.href = "student.html"
    })
}
var instructor = document.getElementById("instructor")
if (instructor) {
    instructor.addEventListener("click", function(){
        window.location.href = "instructor.html"
    })
}

var sign_in = document.getElementById("sign-in");

if (sign_in) {
    sign_in.addEventListener("click", function (e) {

        let email = document.getElementById("email").value.trim();

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email.");
            return;
        }

        window.location.href = "student.html";
    });
}