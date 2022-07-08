function sliderAction() {
    const slides = [...document.querySelectorAll(".testimonial__slide")];
    const prevBtn = document.querySelector(".slider__button-prev");
    const nextBtn = document.querySelector(".slider__button-next");

    let currentSlide = 0;

    const changeSlide = slide => {
        if (slide >= slides.length) {
            slide = 0;
        } else if (slide < 0) {
            slide = slides.length - 1;
        }

        slides[currentSlide].classList.toggle("active");
        slides[slide].classList.toggle("active");

        currentSlide = slide;
    };

    nextBtn.addEventListener("click", () => {
        changeSlide(currentSlide + 1);
    });

    prevBtn.addEventListener("click", () => {
        changeSlide(currentSlide - 1);
    });
}
;
