jQuery(function($) {
    // =========================== SLIDERS ===========================

    $('.reviews_slider').slick({
        centerMode: true,
        centerPadding: '118px',
        slidesToShow: 3,
        dots: false,
        arrows: true
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //         }
        //     }
        // ]
    });

// =========================== SLIDERS ===========================
   

// =========================== FILTER ===========================

$('.filter_show_more').on('click', function() {
    $('#main_filter .filter_hidden').toggleClass('active');
    $('#main_filter .filter_controls').toggleClass('active');
    $('#main_section1').toggleClass('unpacked');
})

$('.filter_input').on('focus', function() {
    $(this).parent().find('.hidden_dropdown').toggleClass('active');
})

$('.filter_input').on('blur', function() {
    $(this).parent().find('.hidden_dropdown').toggleClass('active');
})

$('#main_filter .custom_dropdown_ul li').on('mousedown', function() {
    console.log(1)
    // $(this).parent().parent().parent().find('filter_input').val($(this).text())
})
// =========================== FILTER ===========================







    // =========================== FORM COUNTRY SELECT ===========================
    
    $('.hidden_countries .country').on('click', function() {
        let current_country = $('.hidden_countries .selected_country');
        let clicked_countrey = $(this);
        $('.hidden_countries .selected_country').replaceWith(clicked_countrey);
        // $(this).remove();
        $('.hidden_countries').append(this)
    })
    
    // =========================== FORM COUNTRY SELECT ===========================


});