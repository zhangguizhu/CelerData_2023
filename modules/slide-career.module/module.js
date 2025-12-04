window.onload = function() {
    new window.Swiper('.swiper-container', {
        loop: true,
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
}