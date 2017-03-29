$(function () {

    var $grid = $('.ideas__grid').imagesLoaded( function() {
        $grid.masonry({
            itemSelector: '.ideas__item'
            // options...
        });
    });

});