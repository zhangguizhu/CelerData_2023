$('.vs-card-wrap .performance-item.increse-effect').each(function () {
    var $this = $(this),
        $ele = $this.find('.increse-number'),
        // $parentBox = $this.parent('.performance-row'),
        // $unit = $this.find('.unit'),
        // $preUnit = $this.find('.pre-unit'),
        countTo = parseFloat($ele.text());

    var digitsCount = countTo.toString().split('.')[1] ? countTo.toString().split('.')[1].length : 0;

    // if( $unit.text().length > 2 ) {
    //     $unit.addClass('small-unit');
    // }
    // if( $preUnit.text().length > 2 ) {
    //     $preUnit.addClass('small-unit');
    // }
    // if($ele.text().length >= 5) {
    //     $parentBox.addClass('small-text')
    // }
    // var step =  countTo / 10 >= 1 ? 1 : 0.1
    $({ countNum:0 }).animate({countNum: countTo}, {
        duration: 2500,
        easing: 'linear',
        step: function (now, fn) {
            var newText = this.countNum.toFixed(digitsCount).toLocaleString();
            $ele.text(newText);
        },
        complete: function () {
            $ele.text(this.countNum);
        }
    });
});
