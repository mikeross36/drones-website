function toggleSearch() {
    const searchBtn = document.querySelector(".nav__search")
    const navSearchForm = document.querySelector(".nav__search-form")
    const closeSearch = document.querySelector(".close__search")
    const input = document.querySelector(".nav__search-input");

    if (navSearchForm) {
        searchBtn.addEventListener("click", () => {
            navSearchForm.classList.toggle("active-form")
        })

        closeSearch.addEventListener("click", () => {
            navSearchForm.classList.remove("active-form")
            input.value = "";
        })
    }
}

function filterSearch() {
    const input = document.querySelector(".nav__search-input")
    const searchTerm = input.value.toLowerCase()
    const sections = document.querySelectorAll("section")

    sections.forEach(section => {
        if (searchTerm && section.id.toString().toLowerCase().indexOf(searchTerm) > -1) {
            document.getElementById(section.id).scrollIntoView()
        }
    })
};