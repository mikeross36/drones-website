function toggleSearch() {
    const searchBtn = document.querySelector(".nav__search")
    const navSearchForm = document.querySelector(".nav__search-form")
    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
            navSearchForm.classList.toggle("active-form")
        })
    }
}

function toggleCart() {
    const cart = document.getElementById("cart")
    const cartShop = document.getElementById("cart-shop")
    const cartClose = document.getElementById("cart-close")

    if (cartShop) {
        cartShop.addEventListener("click", () => {
            cart.classList.add("show-cart")
        })
    }

    if (cartClose) {
        cartClose.addEventListener("click", () => {
            cart.classList.remove("show-cart")
        })
    }
}

function headerOnScroll() {
    const header = document.getElementById("header");

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.style.background = "#1f1f1f";
        header.style.boxShadow = "0 1px 4px #0a0a0a4d";
    }
    else if(document.body.scrollTop === 0 || document.documentElement.scrollTop === 0){
        header.style.background = "transparent";
        header.style.boxShadow = "none"
    }
};


window.onscroll = function() {
    headerOnScroll()
};

(function () {
    toggleMobMenu()
    toggleSearch()
    toggleCart()
    sliderAction()
})();
