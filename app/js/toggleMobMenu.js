function toggleMobMenu() {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLink = document.querySelectorAll(".nav__link");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
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

    if (navLink) {
        navLink.forEach(link => {
            link.addEventListener("click", () => {
                navLink.forEach(l => {
                    l.classList.remove("active-link");
                    this.classList.add("active-link");
                });
            });
        });
    }
}
