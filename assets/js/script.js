const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

mobileMenuButton.addEventListener("click", () => {
    // Toggle mobile menu
    mobileMenu.style.display = mobileMenu.style.display === "none" ? "block" : "none";
    
    // Toggle icons
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});