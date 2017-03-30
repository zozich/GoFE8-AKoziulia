$(function () {

    var $grid = $('.ideas__grid').masonry({
        itemSelector: '.ideas__item'
    });

    $.ajax({
        url: "https://pixabay.com/api/?key=4967317-cf3933732a04c09ee425d3446&q=yellow+flowers&image_type=photo",
        success: function (data) {
            console.log(data);
        },
        dataType: 'json',
        error: function (error) {
            console.log(error);
        },
        beforeSend: setHeaders
    });

    $grid.masonry('layout');

});