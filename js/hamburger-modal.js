document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("hamburger-menu-btn");
    const hamburgerModal = document.getElementById("hamburger-modal");
    menuBtn.addEventListener("click", () => {
        hamburgerModal.classList.toggle("show-modal");
    });

});
function onExitMenuClick() {
    const hamburgerModal = document.getElementById("hamburger-modal");

    hamburgerModal.classList.remove("show-modal");
    localStorage.setItem("hamburgerState", "notTransformed");
}