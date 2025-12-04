

/************************* Banner Js *******************************/

// var banner_area = document.querySelector('.banner_sec');

// if (banner_area) {
//   document.body.classList.add("hasBanner");
// }
// else{
//   document.body.classList.add("noBanner");
// }

// $(window).on("load resize change ready", function() {
//   var a = $("header.header").outerHeight();

//   $("body.noBanner").css("padding-top", a);
// });

/************************* Banner Js *******************************/

/************************* scroll Js *******************************/
// $(window).load( function() {
//   if($(window).scrollTop() > 10 ){
//     $('body').addClass('fixed');
//   }
//   else{
//     $('body').removeClass('fixed');
//   }
//   $(window).scroll( function() {
//     if($(this).scrollTop() > 10 ){
//       $('body').addClass('fixed');
//     }
//     else{
//       $('body').removeClass('fixed');
//     }
//   });
// });

/************************* scroll Js End *******************************/
$('.header-navigation .hs-menu-wrapper>ul>li.hs-item-has-children>a').wrapInner('<span class="menu-arrow"></span>');
// $('.header-navigation .hs-menu-wrapper>ul>li.hs-item-has-children>a>span.menu-arrow').append('<svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 1024 1024" width="12" class="rotate"><path d="M130.65572488 363.9945282L512 745.33880511 893.34427512 363.9945282Z"></path></svg>');
$('.header-navigation .hs-menu-wrapper>ul>li.hs-item-has-children>a>span.menu-arrow').append('<svg t="1683698605723" class="icon rotate" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="945" width="20" height="20"><path d="M536.132267 570.538667c-13.346133 13.346133-34.952533 13.346133-48.264533 0l-136.635733-136.635733c-6.485333-6.485333-9.898667-15.36-9.898667-24.234667s3.413333-17.749333 9.898667-24.234667c13.312-13.312 35.157333-13.312 48.469333 0l112.298667 112.298667 112.298667-112.298667c13.312-13.312 35.157333-13.312 48.469333 0 6.485333 6.485333 9.898667 15.36 9.898667 24.234667s-3.413333 17.749333-9.898667 24.234667L536.132267 570.538667z" p-id="946"></path></svg>');


$('.mobil-trigger').click(function(){
//   $('.header-navigation').slideToggle(250);
  $('body').toggleClass('menu-open');
});

$('.header-navigation .hs-menu-wrapper > ul li a').each(function(){
  var link_data = $(this).text();
  var link_data_modified = link_data.trim().split(" ").join("-").toLowerCase();
  $(this).parent().addClass(link_data_modified)
});

$('.header-navigation .hs-menu-wrapper>ul>li.hs-item-has-children>a').click(function(){
  $(this).next('.header-navigation .hs-menu-wrapper>ul>li>ul').slideToggle(250); 
  $(this).parent().toggleClass('child-open');
});
(function(){
  $('.header-navigation .hs-menu-wrapper>ul>li.products>ul.hs-menu-children-wrapper').addClass('has-menu-extra')
  var extraDom = `<li class="hs-col-flex menu-extra" role="none">
     <div class="hs-row-flex">
       <div class="left-text">The fastest, easy-to-use analytics platform on the planet</div>
       <div class="right-img"><img src="https://celerdata.com/hubfs/celerdata_2023/navigation-product-bg.png" role="menuitem" alt="fastest platform" /></div>
     </div>
      <div class="button button-secondary">
        <a href="/celerdata-cloud-free-trial" role="menuitem">
            <span>FREE TRIAL</span>
        </a>
      </div>
    </li>`

  $('.header-navigation .hs-menu-wrapper>ul>li.products>ul.hs-menu-children-wrapper').append(extraDom);
})()
$('.download-wrapper .popup_btn, .contact-btn, .pop__btn').click(function(){
  $('body').toggleClass('search-open');
});
$('.apply-dialog svg').click(function(){
  $('body').removeClass('search-open');
});



$('.active_wrap ').click(function(){
  event.stopPropagation();
});


$('.apply-dialog ').click(function(){
  $('body').removeClass('search-open');
});


$(window).load( function() {
  setTimeout(function(){
    $('<svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 1024 1024" width="12" class="arrow"><path d="M130.65572488 363.9945282L512 745.33880511 893.34427512 363.9945282Z"></path></svg>').appendTo('.apply-dialog .hs_reason_for_application_ .input ');
  },1500);
});








$(function () {
  $('.body-container-wrapper a[href*=#]:not([href*=#tab])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 0
        }, 1000);
        return false;
      }
    }
  });
});
