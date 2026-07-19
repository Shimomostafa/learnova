
//                                 instructor page
const buttons = document.querySelectorAll(".follow");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        const isFollowing = this.textContent === "Following";

        buttons.forEach(btn => {
            btn.textContent = isFollowing ? "Follow" : "Following";
        });

    });
});

const btn = document.getElementById("readMore");
const more = document.getElementById("more");
const dots = document.getElementById("dots");

btn.addEventListener("click", () => {

    if (more.style.display === "inline") {

        more.style.display = "none";
        dots.style.display = "inline";
        btn.textContent = "See More";

    } else {

        more.style.display = "inline";
        dots.style.display = "none";
        btn.textContent = "See Less";

    }

});