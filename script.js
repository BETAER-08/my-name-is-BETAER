document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const slides = document.querySelectorAll(".slide");
    const nextButton = document.getElementById("nextButton");

    let currentSlideIndex = 0;

    function showSlide(index) {
        container.style.transform = `translateX(-${index * 50}%)`;
        currentSlideIndex = index;

        if (currentSlideIndex === 0) {
            nextButton.classList.remove("hidden");
        } else if (currentSlideIndex === slides.length - 1) {
            nextButton.classList.add("hidden");
        }
    }

    nextButton.addEventListener("click", function() {
        if (currentSlideIndex < slides.length - 1) {
            showSlide(currentSlideIndex + 1);
        }
    });

    showSlide(0);
});
