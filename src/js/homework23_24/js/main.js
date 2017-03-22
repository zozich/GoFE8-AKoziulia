requirejs.config({
    paths: {
        'jquery': '../lib/jquery/jquery-3.1.1.min',
        'lodash': '../lib/lodash/lodash.min'
    }
});

require(['jquery', 'lodash', 'Model', 'View', 'Controller'], function ($, _, Model, View, Controller) {

    var model = new Model(['Learn HTML', 'Learn CSS', 'Learn Javascript']);
    var view = new View(model);
    var controller = new Controller(model, view);

});
