$(function () {

    $('.carousel').jcarousel();

    $('.carousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .jcarouselPagination({
            'item': function(page, carouselItems) {
                return '<a href="#" onclick="return false;"></a>';
            }
        });

    $(".accordion").accordion({
        active: 0,
        animate: 200,
        header: "h3",
        icons: null
    });
});