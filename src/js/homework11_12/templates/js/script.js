$(function () {

    var motivationParams = {
        title: 'Хочу учить фронт-енд потому что:',
        items:['В работе пригодится', 'Подтянуть надо', 'Не очень хорошо разбираюсь в верстке']
    };

    var templateMotivationBlock = tmpl('motivation_block', motivationParams);
    $('.content-block:first-child').after(templateMotivationBlock);

    var textBlockTemplate = _.template(document.getElementById('text_block').innerHTML);
    var phoneNumber = textBlockTemplate({title: 'Мой контактный телефон:', text: '+38(097)939-11-22'});
    var feedback = textBlockTemplate({title: 'Мой фидбек:', text: 'Могу сверстать простенький сайт'});

    $('#vk_info').before(phoneNumber).after(feedback);
});