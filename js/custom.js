$('.imageChange').on('change',function(event) {
    $('.imageChange').not($(this)).filter('[checked]').removeAttr('checked');
    setTimeout(() => {
        $(this).attr('checked',true);
    $('.changeable-background-image').attr('src',$(this).val());
    }, 50);
});