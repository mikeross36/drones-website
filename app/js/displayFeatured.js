"use strict"

class Featured {
    getItems = async () => {
        try {
            const response = await fetch("/data/featured-data/featured-items.json")
            const items = await response.json()
            // console.log(items)
            return items;
        }
        catch (error) {
            console.error(error)
        }
    }

    displayItems = items => {
        let element = "";
        items.forEach(item => {
            element += `
                <article class="featured__card">
                    <span class="featured__tag">sale</span>
                    <img src="${item.image}" alt="featured" class="featured__img">
                    <div clas="featured__data">
                        <h3 class="featured__title">${item.title}</h3>
                        <span class="featured__price">${item.price}</span>
                        <button class="button featured__button">add to cart</button>
                    </div>
                </article>
            `
        });
        const container = document.querySelector(".featured__container");
        if(container) container.insertAdjacentHTML("beforeend", element)
    }
};

(async () => {
    const featured = new Featured()
    const items = await featured.getItems()
    featured.displayItems(items)
})();