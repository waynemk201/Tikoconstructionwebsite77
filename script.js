// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});


// ===============================
// CLOSE MENU WHEN LINK IS CLICKED
// ===============================

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});


// ===============================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href === "#") return;

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ===============================
// ABOUT SECTION SCROLL ANIMATION
// ===============================

const aboutEls = document.querySelectorAll(
    ".about-label, .about h2, .about-subheading, .about-text"
);

const aboutObserver = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }

    });

}, {
    threshold: 0.2
});

aboutEls.forEach(el => aboutObserver.observe(el));
