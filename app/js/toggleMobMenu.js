function toggleMobMenu() {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navSearchForm = document.querySelector(".nav__search-form")

    if (navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
            closeSearchForm()
        });

        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    }

    function closeSearchForm() {
        if (navSearchForm.classList.contains("active-form")) {
            return navSearchForm.classList.remove("active-form")
        }
    }
};
