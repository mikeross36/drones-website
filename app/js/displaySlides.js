"use strict"

const globals = () => {
    const containers = [...document.querySelectorAll(".testimonial__slide")]
    const nextBtn = document.querySelector(".slider__button-next")
    const prevBtn = document.querySelector(".slider__button-prev")
    let currentSlide = 0;

    return {containers, nextBtn, prevBtn, currentSlide}
}

let {containers, nextBtn, prevBtn, currentSlide} = globals()

class Testimonials {
    getSlides = async () => {
        try {
            const response = await fetch("/data/slider-data/slides.json")
            const slides = await response.json()
            return slides;
        }
        catch (error) {
            console.error(error)
        }
    }

    displaySlides = slides => {
        if (containers) {
            containers.forEach((container, cIdx) => {
                slides.forEach((slide, sIdx) => {
                    if (cIdx === sIdx) {
                        container.innerHTML = `
                        <div class="testimonial__quote">
                            <img src="${slide.quote}" alt="" width="30px" height="30px">
                        </div>
                        <p class="testimonial__description">${slide.description}</p>
                        <h3 class="testimonial__date">${slide.date}</h3>
                        <div class="testimonial__profile">
                            <img src="${slide.image}" alt="user slide" class="testimonial__profile-img">
                            <div class="testimonial__profile-data">
                                <span class="testimonial__profile-name">${slide.name}</span>
                                <span class="testimonial__profile-detail">${slide.detail}</span>
                            </div>
                        </div>`
                    }
                })
            })
        }
    }

    removeActive = (item, element) => {
        item[element].classList.remove("active")
    }

    addActive = (item, element) => {
        item[element].classList.add("active")
    }

    sliderAction(){
        if (prevBtn) {
            prevBtn.onclick = () => {
                this.removeActive(containers, currentSlide)
                currentSlide = (currentSlide - 1 + containers.length) % containers.length;
                this.addActive(containers, currentSlide)
            }
        }
    
        if (nextBtn) {
            nextBtn.onclick = () => {
                this.removeActive(containers, currentSlide)
                currentSlide = (currentSlide + 1) % containers.length;
                this.addActive(containers, currentSlide)
            }
        }
    }
};

(async () => {
    const testimonials = new Testimonials()
    const slides = await testimonials.getSlides()
    testimonials.displaySlides(slides)
    testimonials.sliderAction()
})();