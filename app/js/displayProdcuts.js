class Products{
    async getProducts() {
        try {
            const response = await fetch("/data/product-data/product-items.json")
            const products = await response.json()
            return products;
        }
        catch (error) {
            console.log(error)
        }
    }

    displayProducts(products) {
        let result = "";
        products.forEach(product => {
            result += `
                <figure class="products__card">
                    <img src="${product.image}" alt="" class="products__img">
                    <h3 class="products__title">${product.title}</h3>
                    <span class="products__price">${product.price} €</span>
                    <button class="products__button">
                        <img src="/app/images/shopping-cart.svg" alt="" width="30px" height="30px">
                    </button>
                </figure>
            `
        })
        const container = document.querySelector(".products__container")
        if (container) {
            container.insertAdjacentHTML("beforeend", result)
        }
        return products;
    }
};

(async () => {
    const apiProducts = new Products()
    const products = await apiProducts.getProducts()
    apiProducts.displayProducts(products)
})();