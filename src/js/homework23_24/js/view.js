define('View',
    ['jquery', 'lodash'],
    function () {
        return function (model) {
            var self = this;

            function init() {
                var wrapperTemplate = _.template($('#wrapper_template').html());
                var wrapper = wrapperTemplate();
                $('body').append(wrapper);

                self.elements = {
                    input: $('.controls__value'),
                    addBtn: $('.controls__add'),
                    okBtn: $('.controls__ok'),
                    listContainer: $('.list')
                };

                self.renderList(model.data);
            }

            self.renderList = function (data) {
                var listTemplate = _.template($('#list_template').html());
                var list = listTemplate({data: data});
                self.elements.listContainer.html(list);
            };

            self.showEdit = function (text) {
                self.elements.addBtn.css('display', 'none');
                self.elements.okBtn.css('display', 'inline');
            };

            self.hideEdit = function () {
                self.elements.okBtn.css('display', 'none');
                self.elements.addBtn.css('display', 'inline');
            };

            init();
        }
    }
);