document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider-image-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    // Hiển thị slide đầu tiên
    slides[currentSlide].classList.add('active');

    function showSlide(index) {
        // Ẩn tất cả các slide
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Hiển thị slide hiện tại
        slides[index].classList.add('active');
    }

    prevBtn.addEventListener('click', function () {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', function () {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    });
});