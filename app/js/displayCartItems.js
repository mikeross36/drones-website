"use strict"

class Cart {
    async getItems() {
        try {
            const response = await fetch("/data/cart-data/cart-items.json")
            const items = await response.json()
            return items;
        }
        catch (error) {
            console.log(error)
        }
    }

    displayCartItems(items) {
        let result = "";
        items.forEach(item => {
            result += `
                <figure class="cart__card">
                    <div class="cart__box">
                        <img src="${item.image}" alt="" class="cart__img">
                    </div>
                    <div class="cart__details">
                        <h4 class="cart__title">${item.title}</h4>
                        <span class="cart__price">${item.price} €</span>
                        <div class="cart__amount">
                            <div class="cart__amount-content">
                                <span class="cart__amount-box">
                                    <img src="/app/images/chevron-down.svg" alt="" width="20px" height="20px">
                                </span>
                                <span class="cart_amount-number">0</span>
                                <span class="cart__amount-box">
                                    <img src="/app/images/chevron-up.svg" alt="" width="20px" height="20px">
                                </span>
                            </div>
                            <img src="/app/images/can-trash.svg" alt="" class="cart__amount-trash" width="20px" height="20px">
                        </div>
                    </div>
                </figure>
            `
        })
        const container = document.querySelector(".cart__container")
        if (container) container.insertAdjacentHTML("beforeend", result)
    }

    toggleCart() {
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
};

(async () => {
    const cart = new Cart()
    const items = await cart.getItems()
    cart.displayCartItems(items)
    cart.toggleCart()
})();