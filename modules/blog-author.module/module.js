$("document").ready(function($){
  $('.tags a').each(function (index) {
    if (this.href.trim() == window.location) {
      $(this).siblings().removeClass('active');
      $(this).addClass("active");
    }
  });
});