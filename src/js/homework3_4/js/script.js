var documentCreator = {
    createDiv: function (className) {
        var div = document.createElement("div");
        if (className) {
            div.className = className;
        }
        return div;
    },
    createHeader: function (text) {
        var header = document.createElement("h1");
        header.textContent = text;
        header.className = "header";
        return header;
    },
    createLabel: function(text, cols, idFor) {
        var label = document.createElement("label");
        label.className = "label control-label";
        label.classList.add("col-xs-" + cols);
        label.textContent = text;
        if (idFor) {
            label.htmlFor = idFor;
        }
        return label;
    },
    createCheckBox: function(id) {
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = id;
        checkBox.value = true;
        checkBox.className = "col-xs-1";
        return checkBox;
    },
    createButton: function(text) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-primary pagination-centered";
        button.textContent = text;
        return button;
    }
}

var header = documentCreator.createHeader("Тест по программированию");

var question1Wrapper = documentCreator.createDiv();
var question1 = documentCreator.createLabel("1. Вопрос №1", 12);
var answer11 = documentCreator.createCheckBox(11);
var answer11Label = documentCreator.createLabel("Вариант ответа №1", 11, 11);
var answer12 = documentCreator.createCheckBox(12);
var answer12Label = documentCreator.createLabel("Вариант ответа №2", 11, 12);
var answer13 = documentCreator.createCheckBox(13);
var answer13Label = documentCreator.createLabel("Вариант ответа №3", 11, 13);
question1Wrapper.appendChild(question1);
question1Wrapper.appendChild(answer11);
question1Wrapper.appendChild(answer11Label);
question1Wrapper.appendChild(answer12);
question1Wrapper.appendChild(answer12Label);
question1Wrapper.appendChild(answer13);
question1Wrapper.appendChild(answer13Label);

var question2Wrapper = documentCreator.createDiv();
var question2 = documentCreator.createLabel("2. Вопрос №2", 12);
var answer21 = documentCreator.createCheckBox(21);
var answer21Label = documentCreator.createLabel("Вариант ответа №1", 11, 21);
var answer22 = documentCreator.createCheckBox(22);
var answer22Label = documentCreator.createLabel("Вариант ответа №2", 11, 22);
var answer23 = documentCreator.createCheckBox(23);
var answer23Label = documentCreator.createLabel("Вариант ответа №3", 11, 23);
question2Wrapper.appendChild(question2);
question2Wrapper.appendChild(answer21);
question2Wrapper.appendChild(answer21Label);
question2Wrapper.appendChild(answer22);
question2Wrapper.appendChild(answer22Label);
question2Wrapper.appendChild(answer23);
question2Wrapper.appendChild(answer23Label);

var question3Wrapper = documentCreator.createDiv();
var question3 = documentCreator.createLabel("3. Вопрос №3", 12);
var answer31 = documentCreator.createCheckBox(31);
var answer31Label = documentCreator.createLabel("Вариант ответа №1", 11, 31);
var answer32 = documentCreator.createCheckBox(32);
var answer32Label = documentCreator.createLabel("Вариант ответа №2", 11, 32);
var answer33 = documentCreator.createCheckBox(33);
var answer33Label = documentCreator.createLabel("Вариант ответа №3", 11, 33);
question3Wrapper.appendChild(question3);
question3Wrapper.appendChild(answer31);
question3Wrapper.appendChild(answer31Label);
question3Wrapper.appendChild(answer32);
question3Wrapper.appendChild(answer32Label);
question3Wrapper.appendChild(answer33);
question3Wrapper.appendChild(answer33Label);

var buttonWrapper = documentCreator.createDiv("text-center");
var button = documentCreator.createButton("Проверить мои результаты");
buttonWrapper.appendChild(button);

document.body.appendChild(header);
document.body.appendChild(question1Wrapper);
document.body.appendChild(question2Wrapper);
document.body.appendChild(question3Wrapper);
document.body.appendChild(buttonWrapper);