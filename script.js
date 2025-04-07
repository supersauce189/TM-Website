const menu = document.getElementsByClassName("menu-icon")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];

menu.addEventListener("click", () => {
    menu.classList.toggle("close-icon");
    sidebar.classList.toggle("active");
})