$("#filterTag .filter-tag").on("click", function(e) {
    e.preventDefault();
    var $this = $(this), 
    $parent = $this.closest(".content-wrapper"), 
    $grid = $parent.find("#resourceListing");

    if ($grid.length > 0) {
        $this.siblings('a').removeClass("active"),
        $this.addClass("active");
        var filterClass = $this.attr("href").substring(1);
        if(!filterClass) {
            return;
        }
        filterClass = "all" == filterClass ? "*" : filterClass;

        var $animatedItems = $grid.find(".resource-item");
        if($animatedItems.length > 0) {
            $animatedItems.each(function() {
                var $this = $(this);
                if($this.hasClass(filterClass) || filterClass === '*'){
                    $this.show();
                } else {
                    $this.hide();
                }
            })
        }
    }
})
let hashArr = (location.hash || '').split('#')
if(hashArr[1]){
    $(`#filterTag .${hashArr[1]}`).click();
}

window.addEventListener('hashchange', () => {
    let hashArr = (location.hash || '').split('#')
    if(hashArr[1]){
        $(`#filterTag .${hashArr[1]}`).click();
    }
}) 