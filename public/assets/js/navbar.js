window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > navbarHeight) {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
});


const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

const btnMenu01 = document.getElementById("btn-menu01");
const menu01 = document.getElementById("menu01");

btnMenu.addEventListener("click", () => {
    if (menu.style.display == "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

document.addEventListener("click", (event) => {
    if (!btnMenu.contains(event.target)) {
        if (!menu.contains(event.target)) {
            menu.style.display = "none";
        }
    }
});



btnMenu01.addEventListener("click", () => {
    if (menu01.style.display == "flex") {
        menu01.style.display = "none";
    } else {
        menu01.style.display = "flex";
    }
});

document.addEventListener("click", (event) => {
    if (!btnMenu01.contains(event.target)) {
        if (!menu01.contains(event.target)) {
            menu01.style.display = "none";
        }
    }
});

