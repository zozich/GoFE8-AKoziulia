$(function () {

    var $grid = $('.ideas__grid').masonry({
        itemSelector: '.ideas__item'
    });

    var topics = ['Sport and Activity', 'Wellness and Health', 'Extreme Sports and Expeditions',
        'Games', 'Culture and Education', 'Relaxation', 'Travelling'];
    var ideaIds = ['idea0', 'idea1', 'idea2', 'idea3', 'idea4', 'idea5', 'idea6']
    var imageGetUrl = "https://pixabay.com/api/?key=4967317-cf3933732a04c09ee425d3446&orientation=horizontal&image_type=photo&per_page=7&min_width=620&min_height=310&q=";

    for (var i = 0; i < topics.length; i++) {
        //replaceImages(topics[i], i);
    }

    function replaceImages(searchKey, imagePos) {
        $.ajax({
            url: imageGetUrl + encodeURIComponent(searchKey),
            success: function (data) {
                if (imagePos) {
                    $('#' + ideaIds[imagePos]).attr('src', data.hits[0].webformatURL);
                    $('#' + ideaIds[imagePos] + "_title").text(searchKey);
                } else {
                    for (var i = 0; i < ideaIds.length; i++) {
                        $('#' + ideaIds[i]).attr('src', data.hits[i].webformatURL);
                        $('#' + ideaIds[i] + "_title").text(searchKey);
                    }
                }
                $grid.masonry('layout');
            },
            dataType: 'json',
            error: function (error) {
                console.log(error);
            }
        });
    }

    $('#searchForm').on('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var searchText = $('#search__input').val();

        replaceImages(searchText);
    });

});