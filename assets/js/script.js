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
    $(this).parent().toggleClass('open');
})

$('.filter_input_wrap.space').on('mousedown', function(e) {
    $(e.currentTarget).find('.hidden_dropdown').addClass('active');
    $(e.currentTarget).addClass('open');
})

$('.filter_input').on('blur', function() {
    if(!$(this).hasClass('type_input')) {
        $(this).parent().toggleClass('open');
        $(this).parent().find('.hidden_dropdown').toggleClass('active');
    }
})

$('#hidden_space_from').on('change', function() {
    $('#space_from').val($(this).val())
})

$('#hidden_space_to').on('change', function() {
    $('#space_to').val($(this).val())
})

$('#main_filter .custom_dropdown_ul li').on('mousedown', function() {
    $(this).parent().find('li').removeClass('selected');
    $(this).addClass('selected');
    $(this).parent().parent().parent().find('.filter_input').val($(this).text());
})

$('.price_wallet .wallet').on('click', function() {
    $('.price_wallet .wallet').removeClass('active');
    $(this).addClass('active');
    let wallet = $(this).text();
    $('#price_to').attr('data-wallet', wallet)
    $('#price_to').val($('#price_to').val().slice(0, -1) + wallet)
})

$('#price_from_vars > li').on('click', function() {
    $('#hidden_price_from').val($(this).data('value'));
    $('#price_from').val($(this).data('value'));
})

$('#price_to_vars > li').on('click', function() {
    $('#hidden_price_to').val($(this).data('value'));
    $('#price_to').val($(this).data('value') + ' ' + $('#price_to').data('wallet'));
})

$('.filter_top > .price').on('click', function(e) {
    $(e.currentTarget).find('.hidden_dropdown').addClass('active');
    $(e.currentTarget).addClass('open');
})

$('.room_count .room').on('click', function() {
    $(this).toggleClass('active');
})

$(document).mousedown(function (e) {
    if($('.hidden_type_dropdown').hasClass('active')){
            if(e.target.nodeName === 'P') {
                if(!$(e.target).hasClass('hidden_checkbox_title')) {
                    $('.hidden_type_dropdown').removeClass('active');
                    $('.filter_input_wrap').removeClass('open');
                } 
            } else if(e.target.nodeName === 'DIV') {
                if(!$(e.target).hasClass('hidden_type_dropdown')) {
                    $('.hidden_type_dropdown').removeClass('active');
                    $('.filter_input_wrap').removeClass('open');
                } 
            } else if(e.target.nodeName === 'LI') {
                if(!$(e.target).parent().hasClass('hidden_checkbox_menu')) {
                    $('.hidden_type_dropdown').removeClass('active');
                    $('.filter_input_wrap').removeClass('open');
                } 
            } else if(e.target.nodeName === 'LABEL') {
                if(!$(e.target).parent().hasClass('checkbox')) {
                    $('.hidden_type_dropdown').removeClass('active');
                    $('.filter_input_wrap').removeClass('open');
                } 
            }  else {
                $('.hidden_type_dropdown').removeClass('active');
                $('.filter_input_wrap').removeClass('open');
            }
    };

    if($('.hidden_space').hasClass('active')){
        if(e.target.nodeName === 'DIV') {
            if((!$(e.target).hasClass('hidden_space')) && (!$(e.target).hasClass('hidden_space_help'))) {
                $('.hidden_space').removeClass('active');
                $('.filter_input_wrap').removeClass('open');
            } 
        } else if(e.target.nodeName === 'INPUT') {
            if((!$(e.target).hasClass('hidden_space_input')) && (!$(e.target).hasClass('space_input'))) {
                $('.hidden_space').removeClass('active');
                $('.filter_input_wrap').removeClass('open');
            } 
        } else if(e.target.nodeName === 'LABEL') {
            if((!$(e.target).hasClass('hidden_space_label')) && (!$(e.target).hasClass('space_label'))) {
                $('.hidden_space').removeClass('active');
                $('.filter_input_wrap').removeClass('open');
            } 
        }  else {
            $('.hidden_space').removeClass('active');
            $('.filter_input_wrap').removeClass('open');
        }
    };

    if($('.hidden_price').hasClass('active')){
        if(e.target.nodeName === 'DIV') {
            if((!$(e.target).hasClass('hidden_price')) && (!$(e.target).hasClass('hidden_price_help')) && (!$(e.target).hasClass('price_variants'))&& (!$(e.target).hasClass('price_wallet'))) {
                $('.hidden_price').removeClass('active');
                $('.filter_input_wrap').removeClass('open');
            } 
        } else if(e.target.nodeName === 'INPUT') {
            if((!$(e.target).hasClass('hidden_price_input')) && (!$(e.target).hasClass('price_input'))) {
                $('.hidden_price').removeClass('active');
                $('.filter_input_wrap').removeClass('open');
            } 
        } else if(e.target.nodeName === 'LABEL') {
            if((!$(e.target).hasClass('hidden_price_label')) && (!$(e.target).hasClass('price_label'))) {
                $('.hidden_price').removeClass('active');
                $('.filter_input_wrap').removeClass('open');
            } 
        } else if(e.target.nodeName === 'LI') {
            if(!$(e.target).parent().hasClass('price_variants_ul')) {
                $('.hidden_price').removeClass('active');
                $('.filter_input_wrap').removeClass('open');
            } 
        } else if(e.target.nodeName === 'BUTTON') {
            if(!$(e.target).hasClass('wallet')) {
                $('.hidden_price').removeClass('active');
                $('.filter_input_wrap').removeClass('open');
            } 
        } else {
            $('.hidden_price').removeClass('active');
            $('.filter_input_wrap').removeClass('open');
        }
    };
});





// =========================== FILTER ===========================







    // =========================== FORM COUNTRY SELECT ===========================
    
    $(document).on('click', '.hidden_countries > .country', function() {
        let current = $('.country_icon .selected_country').clone(true);
        let selected = $(this).clone();
        
        $('.selected_country').replaceWith(selected);
        $(selected).addClass('selected_country').removeClass('country');
        $(this).replaceWith(current);
        $(current).removeClass('selected_country').addClass('country');
        setMask();
    })
    setMask();
    // =========================== FORM COUNTRY SELECT ===========================


    // =========================== MASK ===========================
    function setMask () {
        let code = $('.selected_country').data('value');
        switch(code) {
            case ('ua'): {
                $('#form_phone').mask('+3 (000) 000 00 00');
                $('#form_phone').attr('placeholder', '+3 (999) 999 99 99')
                $('#form_phone').val('');
                break;
            }
            case ('ru'): {
                $('#form_phone').mask('+7 (000) 000 00 00');
                $('#form_phone').attr('placeholder', '+7 (999) 999 99 99')
                $('#form_phone').val('');
                break;
            }
            case ('kz'): {
                $('#form_phone').mask('8 (000) 000 00 00');
                $('#form_phone').attr('placeholder', '8 (999) 999 99 99')
                $('#form_phone').val('');
                break;
            }
            default: {
                $('#form_phone').mask('+3 (000) 000 00 00'); 
                $('#form_phone').attr('placeholder', '+3 (999) 999 99 99')
                $('#form_phone').val('');
            }
        }
    }
    // =========================== MASK ===========================


});