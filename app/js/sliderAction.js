function sliderAction(){
    const slides = [...document.querySelectorAll(".testimonial__slide")]
    const nextBtn = document.querySelector(".slider__button-next")
    const prevBtn = document.querySelector(".slider__button-prev")
    let currentSlide = 0;

    const prevSlide = () => {
        slides[currentSlide].classList.remove("active")
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add("active")
    }

    const nextSlide = () => {
        slides[currentSlide].classList.remove("active")
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active")
    }

    prevBtn.addEventListener("click", prevSlide)
    nextBtn.addEventListener("click", nextSlide)
};