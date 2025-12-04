var mySwiper
var windowClientWidth = document.body.clientWidth
var realWidth = windowClientWidth > 1596 ? 1596 : windowClientWidth;
var slidesPerView = Math.floor(realWidth / 220)
function initSwiper(){
   mySwiper && mySwiper.destroy(true, true)
    mySwiper = new window.Swiper('.swiper-container', {
        // resizeObserver: true,
        direction: 'horizontal',
        slidesPerView: slidesPerView,
        loop: true,
        speed: 8000,
        autoplay: {
            delay: 0,
            stopOnLastSlide: false,
        },
        on: {
            // resize: function(a, b){
            // }
        }
    })
}
window.onresize = debounceFn()
window.onload = function() {
   initSwiper()
}
function debounceFn(){
    let timer = null
    return function (){
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            var windowClientWidth = document.body.clientWidth
            var realWidth = windowClientWidth > 1596 ? 1596 : windowClientWidth;
            var newSlidesPerView = Math.floor(realWidth / 220)
            if (newSlidesPerView !== slidesPerView) {
                slidesPerView = newSlidesPerView
                initSwiper();
            }
        }, 500)
    }
}