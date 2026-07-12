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

    // Change hamburger icon to X
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

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
