// Fade In Animation on Scroll

const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("show");
        }
    });
    },
    {
    threshold: 0.2,
    }
);

document.querySelectorAll(".fade-element").forEach((el) => {
    observer.observe(el);
});