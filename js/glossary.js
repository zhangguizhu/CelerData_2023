var headerHeight = 0;
$(window).on("load resize change ready", function() {
    headerHeight = $(".glossary-banner-area").outerHeight();
});

$('.glossary-blog-item.active').click(function(){
    var classify = $(this).text().trim('');
    var classifyItem = $(`.glossary-line-item.${classify}`)[0]
    if(classifyItem){
        window.scrollTo({
            top: classifyItem.offsetTop + headerHeight - 30,
            behavior: 'smooth'
        })
    }
});
  