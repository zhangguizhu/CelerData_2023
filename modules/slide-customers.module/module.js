document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.swiper-container .slide-item')
    slides.forEach(item => {
        item.style.visibility = 'visible'
    })
    new window.Swiper('.swiper-container', {
        loop: false,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 260,
            depth: 100,
            modifier: 3,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});
