class Items {
    async getItems() {
        try {
            const response = await fetch("/data/cart-data/cart-items.json")
            const data = await response.json()
            // console.log(data)
            const items = data;
            return items;
        }
        catch (error) {
            console.log(error)
        }
    }
};

class Cart {
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
        if (container) {
            container.insertAdjacentHTML("beforeend", result)
        }
        return items;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const items = new Items();
    const cart = new Cart()

    items.getItems().then(items => {
        cart.displayCartItems(items)
    })
})