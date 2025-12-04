// $('.giuhub-img-box .github-img').error(function(){
//     $(this).parent('.giuhub-img-box').addClass('hide').siblings('.github-starred-button').removeClass('hide')
// });
$.ajax("https://img.shields.io/github/stars/StarRocks/starrocks?style=for-the-badge", {
    cache: false,
    dataType: 'xml',
    success: function(data){
        var count = ($(data).text() || '').toUpperCase().replace('STARS', '');
        if(count && !isNaN(count.slice(0, 1))){
            $('#header-github-star #star-count').text(count);
        }
    },
});