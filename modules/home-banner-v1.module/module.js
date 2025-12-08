$(window).load( function() {
  // setTimeout(function () {
    bodymovin.loadAnimation({
      container: document.getElementById('banner-lottie-container-v1'), // required
      path: 'https://celerdata.com/hubfs/js/home-banner-v2.json', // required
      renderer: 'svg', // required
      loop: true, // optional
      autoplay: true, // optional
      name: "Flow", // optional
    })
  // }, 100)
});

window.addEventListener('load', function() {
  var bannerV1Swiper = new window.Swiper('.home-banner-v1 .swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 2000,
    allowTouchMove: false,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
  })

  // 强制让 wrapper 只沿 Y 轴移动
  bannerV1Swiper.on('setTranslate', (sw, translate) => {
    sw.wrapperEl.style.setProperty('--swiper-translate-y', `${translate}px`);
  });
})