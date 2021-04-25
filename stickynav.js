const nav = document.getElementById("nav1");
window.addEventListener("scroll", transNav);

function transNav() {
    if (window.scrollY >= 414) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}
