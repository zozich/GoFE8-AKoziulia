define('Controller',
    ['jquery'],
    function () {
        return function (model, view) {
            var self = this;

            view.elements.addBtn.on('click', addItem);
            view.elements.okBtn.on('click', confirmEdit);
            view.elements.listContainer.on('click', '.list__delete ', removeItem);
            view.elements.listContainer.on('click', '.list__edit ', editItem);

            function addItem() {
                var newItem = view.elements.input.val();

                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function removeItem() {
                var item = $(this).attr('data-value');

                model.removeItem(item);
                view.renderList(model.data);
            }

            function editItem() {
                var item = $(this).attr('data-value');
                view.elements.input.attr('data-value', item);
                view.elements.input.val(item);

                view.showEdit(item);
            }

            function confirmEdit() {
                var editedItem = view.elements.input.attr('data-value');
                var newName = view.elements.input.val();

                view.elements.input.val('');
                view.hideEdit();
                model.editItem(editedItem, newName);
                view.renderList(model.data);
            }
        }
    }
);

