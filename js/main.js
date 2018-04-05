$(document).ready(function () {
    
    $('.bx-slider').bxSlider({
        pager: false,
        nextText: "",
        prevText: "",
        nextSelector: '.next',
        prevSelector: '.prev',
        slideMargin: 15
    })

    $('.accordion-element').on('click', function() {
        $(this).next('.accordion-dropdown').slideToggle();
    });

    if ($(window).width() <= 420) {
        $('.accordion-title').on('click', function() {
            $(this).next('ul').slideToggle();
        });
    }

    if ($(window).width() > 420) {
        $( ".cost-block" ).hover(
        function() {
            $( this ).prev('.cost-title').find('.rank').hide();  
            $( this ).find('.hover-title').css({'display' : 'block'});
            $ ( this ).find('.hide-icon').show();          
        }, function() {
            $( this ).find('.hover-title').hide();
            $( this ).prev('.cost-title').find('.rank').css({'display' : 'block'});
            $( this ).find('.hide-icon').hide();          
        }
        );
    };    
})
   