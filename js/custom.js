$('.imageChange').on('change',function(event) {
    $('.imageChange').not($(this)).filter('[checked]').removeAttr('checked');
    setTimeout(() => {
        $(this).attr('checked',true);
    $('.changeable-background-image').attr('src',$(this).val());
    }, 50);
});
setInterval(() => {
    $('#carousel1').trigger('click');
    $('#carousel2click').trigger('click');

}, 4500);