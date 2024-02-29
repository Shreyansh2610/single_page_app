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
    setTimeout(() => {
        $('.sliderCarouselBtn').removeClass('btn-style-one');
        $('.sliderCarouselBtn[data-bs-slide-to="'+$('.sliderCarousel').filter('.active').data('bs-slide-to')+'"]').addClass('btn-style-one');
    }, 700);
}, 4500);

$('.sliderCarouselBtn').on('click',function() {
        $('.sliderCarouselBtn').removeClass('btn-style-one');
        $(this).addClass('btn-style-one');

});