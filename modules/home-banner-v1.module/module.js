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
  var isInitializing = true
  var firstTranslate = null
  
  new window.Swiper('.home-banner-v1 .swiper-container', {
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
    on: {
      init: function() {
        // 标记初始化完成
        isInitializing = false
        // 立即重置到第一个 slide，无动画
        var self = this
        requestAnimationFrame(function() {
          self.slideTo(0, 0, false)
        })
      },
      setTranslate: function(sw, translate) {
        // 记录首次 translate 值
        if (firstTranslate === null) {
          firstTranslate = translate
        }
        
        // 如果是初始化阶段且首次 translate 值异常（移动了两个位置的距离）
        if (isInitializing && firstTranslate !== null) {
          var slideHeight = sw.height || 140 // slide 高度
          // 如果首次 translate 值超过一个 slide 的高度，说明是 loop 模式的初始化跳转
          if (Math.abs(firstTranslate) > slideHeight * 1.2) {
            // 直接设置 CSS 变量为 0，不触发 Swiper 的内部更新
            if (sw.wrapperEl) {
              sw.wrapperEl.style.setProperty('--swiper-translate-y', '0px');
            }
            return // 跳过这次更新
          }
        }
        
        // 正常更新位置
        if (sw.wrapperEl) {
          sw.wrapperEl.style.setProperty('--swiper-translate-y', translate + 'px');
        }
      }
    }
  })
})

