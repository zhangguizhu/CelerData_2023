$(window).scroll(function() {
  window.requestAnimationFrame(function(){
    var scrolTop = $(window).scrollTop()
    if($('.home-feature-area').offset().top - scrolTop < 230 &&  $('.home-customer').offset().top - scrolTop < 145) {
      $('.lighting-effect').removeClass('hide');
    } else {
      $('.lighting-effect').addClass('hide');
    }
  })
})
  