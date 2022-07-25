function toggleMobMenu() {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLink = document.querySelectorAll(".nav__link");
    const navSearchForm = document.querySelector(".nav__search-form")

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
            closeSearchForm()
        });
    }

    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    }

    if (navLink) {
        navLink.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show-menu");
            });
        });
    }

    function closeSearchForm() {
        if (navSearchForm.classList.contains("active-form")) {
            return navSearchForm.classList.remove("active-form")
        }
    }
}
