// JS Goes here - ES6 supported
var menu_icon = document.querySelector(".menu-icon");
var nav = document.querySelector("nav");
var content = document.querySelector(".showcase__projects, .container");
var nav_items = document.querySelector("ul");

menu_icon.addEventListener("click", function() {
    this.classList.toggle("animate-menu");
    nav.classList.toggle("menu-open");
    content.classList.toggle("dont-jump");
    nav_items.classList.toggle("show");
});
