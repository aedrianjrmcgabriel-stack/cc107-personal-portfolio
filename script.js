// Wait until the HTML document is ready before selecting page elements.
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const themeToggle = document.getElementById("theme-toggle");
    const yearDisplay = document.getElementById("current-year");

    // Update the copyright year automatically.
    if (yearDisplay) {
        yearDisplay.textContent = new Date().getFullYear();
    }

    // Open and close the mobile navigation menu.
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
        });

        // Close the mobile menu after a navigation link is selected.
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            });
        });
    }

    // Toggle between the dark and light color themes.
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const isLightTheme = document.body.classList.toggle("light-theme");
            themeToggle.textContent = isLightTheme ? "☀" : "☾";
            themeToggle.setAttribute(
                "aria-label",
                isLightTheme ? "Switch to dark theme" : "Switch to light theme"
            );
        });
    }
});
