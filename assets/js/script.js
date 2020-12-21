jQuery(function($) {
    // =========================== SLIDERS ===========================

    $('.reviews_slider').slick({
        centerMode: true,
        centerPadding: '118px',
        slidesToShow: 3,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
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

$('.hidden_checkbox_menu .checkbox > .custom-checkbox'). on('change', function() {
    let checked = $(this).parent().parent().parent().find('input:checked');
    let values = [];
    for(let i = 0; i < checked.length; i++) {
        values.push($(checked[i]).val());
    }
    $('#type').val(values.join(' / '));
})

$('.price_wallet .wallet').on('click', function() {
    $('.price_wallet .wallet').removeClass('active');
    $(this).addClass('active');
    let wallet = $(this).text();
    $('.input_price_wallet').text(wallet);
    // $('#price_to').val($('#price_to').val().slice(0, -1) + wallet)
})

$('#price_from_vars > li').on('click', function() {
    $('#hidden_price_from').val($(this).data('value'));
    $('#price_from').val($(this).data('value'));
})

$('#hidden_price_from').mask('000 000 000 000', {reverse: true}); 
$('#hidden_price_to').mask('000 000 000 000', {reverse: true}); 

$('#hidden_price_from').on('change', function() {
    $('#price_from').val($(this).val());
})

$('#hidden_price_to').on('change', function() {
    $('#price_to').val($(this).val());
})


$('#price_to_vars > li').on('click', function() {
    $('#hidden_price_to').val($(this).data('value'));
    $('#price_to').val($(this).data('value'));
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
    
    $(document).on('click', '.hidden_modal_counties > .modal_country', function() {
        let current = $('.country_icon .selected_modal_country').clone(true);
        let selected = $(this).clone();
        
        $('.selected_modal_country').replaceWith(selected);
        $(selected).addClass('selected_modal_country').removeClass('modal_country');
        $(this).replaceWith(current);
        $(current).removeClass('selected_modal_country').addClass('modal_country');
        setMask('#modal_form_phone', '.selected_modal_country');
    })


    $(document).on('click', '.hidden_about_countries > .country', function() {
        let current = $('.country_icon .selected_country').clone(true);
        let selected = $(this).clone();
        
        $('.selected_country').replaceWith(selected);
        $(selected).addClass('selected_country').removeClass('country');
        $(this).replaceWith(current);
        $(current).removeClass('selected_country').addClass('country');
        setMask('#form_phone', '.selected_country');
    })


    setMask('#modal_form_phone', '.selected_modal_country');
    setMask('#form_phone', '.selected_country');
    // =========================== FORM COUNTRY SELECT ===========================


    // =========================== MASK ===========================
    function setMask (id, selected) {
        let code = $(selected).data('value');
        switch(code) {
            case ('ua'): {
                $(id).mask('+3 (000) 000 00 00');
                $(id).attr('placeholder', '+3 (999) 999 99 99')
                $(id).val('');
                break;
            }
            case ('ru'): {
                $(id).mask('+7 (000) 000 00 00');
                $(id).attr('placeholder', '+7 (999) 999 99 99')
                $(id).val('');
                break;
            }
            case ('kz'): {
                $(id).mask('8 (000) 000 00 00');
                $(id).attr('placeholder', '8 (999) 999 99 99')
                $(id).val('');
                break;
            }
            default: {
                $(id).mask('+3 (000) 000 00 00'); 
                $(id).attr('placeholder', '+3 (999) 999 99 99')
                $(id).val('');
            }
        }
    }
    // =========================== MASK ===========================



    // =================== MOBILE MENU ========================
    $('.button_menu').click(function(){
        $(this).toggleClass('active'); 
        $('.menu_responsive').toggleClass('active');
      });

      $(document).mouseup(function (e) {
        if($('.menu_responsive').hasClass('active')){
            var container = $(".menu_responsive");
            if ((container.has(e.target).length === 0)){
                $('.button_menu').click();
            }
            if ($(e.target).parent().hasClass('button_menu')){
                $('.button_menu').click();
            }
            if ($(e.target).hasClass('button_menu')){
                $('.button_menu').click();
            }

        };
    });
    $('.nav').on('click', function() {
        if($('.menu_responsive').hasClass('active')) {
            $('.button_menu').click();
        }
    });
    
    // =================== MOBILE MENU ========================



});