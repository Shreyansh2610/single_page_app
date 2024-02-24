$('.imageChange').on('change',function(event) {
    $('.imageChange').not($(this)).filter('[checked]').removeAttr('checked');
    setTimeout(() => {
        $(this).attr('checked',true);
    $('.changeable-background-image').attr('src',$(this).val());
    }, 50);
});


$('.moving-card-blocks').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:100,
    autoplayHoverPause:true,
    navText: [ '<span class="icofont-thin-left"></span>', '<span class="icofont-thin-right"></span>' ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1024:{
            items:2
        },
        1200:{
            items:3
        },
        1500:{
            items:4
        }
    }
});