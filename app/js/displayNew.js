"use strict"

class Drones {
    async getDrones() {
        try {
            const response = await fetch("/data/new-data/new-data.json")
            const drones = await response.json()
            return drones;
        }
        catch (error) {
            console.error(error)
        }
    }

    displayDrones = drones => {
        const container = document.querySelector(".new__container")
        drones.forEach(drone => {
            container.insertAdjacentHTML("beforeend", `
                <article class="new__card">
                    <span class="new__tag">New</span>
                    <img src="${drone.image}" alt="new drone" class="new__img">
                    <div class="new__data">
                        <h3 class="new__title">${drone.title}</h3>
                        <span class="new__price">${drone.price}</span>
                    </div>
                    <ul class="new__social">
                        <li>
                            <a href="${drone.faceUrl}" target="_blank" class="new__social-link">
                                <img src="${drone.faceIcon}" alt="" width="30px" height="30px">
                            </a>
                        </li>
                        <li>
                            <a href="${drone.twitterUrl}" target="_blank" class="new__social-link">
                                <img src="${drone.twitterIcon}" alt="" width="30px" height="30px">
                            </a>
                        </li>
                        <li>
                            <a href="${drone.instaUrl}" target="_blank" class="new__social-link">
                                <img src="${drone.instaIcon}" alt="" width="30px" height="30px">
                            </a>
                        </li>
                    </ul>
                </article>`
            )
        })
    }
};

(async () => {
    const drones = new Drones()
    const apiDrones = await drones.getDrones()
    drones.displayDrones(apiDrones)
})();