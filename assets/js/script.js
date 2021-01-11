jQuery(function ($) {
    // =========================== SLIDERS ===========================

    $(".reviews_slider").slick({
        centerMode: true,
        centerPadding: "118px",
        slidesToShow: 3,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    centerPadding: "0px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    centerPadding: "0px",
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    let estate_cards = $(".estate_single_card");
    for (let i = 0; i < estate_cards.length; i++) {
        $(estate_cards[i])
            .find(".estate_main_slider")
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                asNavFor: $(estate_cards[i]).find(".estate_help_slide"),
            });

        $(estate_cards[i])
            .find(".estate_help_slide")
            .slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: $(estate_cards[i]).find(".estate_main_slider"),
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                arrows: false,
            });
    }

    let country_cards = $(".single_country_object");

    for (let i = 0; i < country_cards.length; i++) {
        $(country_cards[i])
            .find(".single_country_object_main_slider")
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                asNavFor: $(country_cards[i]).find(
                    ".single_country_object_help_slider"
                ),
            });

        $(country_cards[i])
            .find(".single_country_object_help_slider")
            .slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: $(country_cards[i]).find(
                    ".single_country_object_main_slider"
                ),
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                arrows: false,
            });
    }

    $(".single_object_main_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".single_object_help_slider",
    });

    $(".single_object_help_slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: ".single_object_main_slider",
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    });

    // $(".estate_single_card .estate_main_slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     fade: true,
    //     asNavFor: ".estate_single_card .estate_help_slide",
    // });
    // $(".estate_single_card .estate_help_slide").slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: ".estate_single_card .estate_main_slider",
    //     dots: false,
    //     centerMode: false,
    //     focusOnSelect: true,
    //     arrows: false,
    // });

    // =========================== SLIDERS ===========================
    function toggleHelpFilter() {
        if ($(window).width() < 576) {
            if ($("#filter_mob_bg").length) {
                $("#filter_mob_bg").toggleClass("active");
            }
        }
    }
    // =========================== FILTER ===========================

    $(".filter_show_more").on("click", function () {
        $("#main_filter .filter_hidden").toggleClass("active");
        $("#main_filter .filter_controls").toggleClass("active");
        $("#main_section1").toggleClass("unpacked");
    });

    $(".filter_input").on("focus", function () {
        $(this).parent().find(".hidden_dropdown").toggleClass("active");
        $(this).parent().toggleClass("open");
    });

    $(".estate_filter_wrap #main_filter .filter_input#country").on(
        "focus",
        function () {
            toggleHelpFilter();
        }
    );

    $(".estate_filter_wrap #main_filter .filter_input#type").on(
        "focus",
        function () {
            toggleHelpFilter();
        }
    );

    $(".estate_filter_wrap #main_filter .filter_input#build_type").on(
        "focus",
        function () {
            toggleHelpFilter();
        }
    );

    $(".filter_input_wrap.space").on("mousedown", function (e) {
        if ($(window).width() < 576) {
            if ($("#filter_mob_bg").length) {
                $("#filter_mob_bg").addClass("active");
            }
        }
        $(e.currentTarget).find(".hidden_dropdown").addClass("active");
        $(e.currentTarget).addClass("open");
    });

    $(".filter_input_wrap.space > label > input").on("mousedown", function (e) {
        if ($(window).width() < 576) {
            if ($("#filter_mob_bg").length) {
                $("#filter_mob_bg").toggleClass("active");
            }
        }
    });

    $(".filter_input").on("blur", function () {
        if (!$(this).hasClass("type_input")) {
            $(this).parent().toggleClass("open");
            $(this).parent().find(".hidden_dropdown").toggleClass("active");
        }
    });

    $(".estate_filter_wrap #main_filter .filter_input#country").on(
        "blur",
        function () {
            toggleHelpFilter();
        }
    );

    $(".estate_filter_wrap #main_filter .filter_input#build_type").on(
        "blur",
        function () {
            toggleHelpFilter();
        }
    );

    $("#hidden_space_from").on("change", function () {
        $("#space_from").val($(this).val());
    });

    $("#hidden_space_to").on("change", function () {
        $("#space_to").val($(this).val());
    });

    $("#main_filter .custom_dropdown_ul li").on("mousedown", function () {
        $(this).parent().find("li").removeClass("selected");
        $(this).addClass("selected");
        $(this)
            .parent()
            .parent()
            .parent()
            .find(".filter_input")
            .val($(this).text());
    });

    $(".hidden_checkbox_menu .checkbox > .custom-checkbox").on(
        "change",
        function () {
            let checked = $(this)
                .parent()
                .parent()
                .parent()
                .find("input:checked");
            let values = [];
            for (let i = 0; i < checked.length; i++) {
                values.push($(checked[i]).val());
            }
            $("#type").val(values.join(" / "));
        }
    );

    $(".price_wallet .wallet").on("click", function () {
        $(".price_wallet .wallet").removeClass("active");
        $(this).addClass("active");
        let wallet = $(this).text();
        $(".input_price_wallet").text(wallet);
        // $('#price_to').val($('#price_to').val().slice(0, -1) + wallet)
    });

    $("#price_from_vars > li").on("click", function () {
        $("#hidden_price_from").val($(this).data("value"));
        $("#price_from").val($(this).data("value"));
    });

    $("#hidden_price_from").mask("000 000 000 000", { reverse: true });
    $("#hidden_price_to").mask("000 000 000 000", { reverse: true });

    $("#hidden_price_from").on("change", function () {
        $("#price_from").val($(this).val());
    });

    $("#hidden_price_to").on("change", function () {
        $("#price_to").val($(this).val());
    });

    $("#price_to_vars > li").on("click", function () {
        $("#hidden_price_to").val($(this).data("value"));
        $("#price_to").val($(this).data("value"));
    });

    $(".filter_top > .price").on("click", function (e) {
        if ($(window).width() < 576) {
            if ($("#filter_mob_bg").length) {
                $("#filter_mob_bg").addClass("active");
            }
        }
        $(e.currentTarget).find(".hidden_dropdown").addClass("active");
        $(e.currentTarget).addClass("open");
    });

    $(".filter_top > .price > label").on("click", function (e) {
        toggleHelpFilter();
    });

    $(".room_count .room").on("mousedown", function () {
        $(this).toggleClass("active");
    });

    $(".room_count .room").on("mouseup", function () {
        let rooms = $(".room_count .room");
        let rooms_count = [];
        for (let i = 0; i < rooms.length; i++) {
            if ($(rooms[i]).hasClass("active")) {
                rooms_count.push($(rooms[i]).text());
            }
        }
        $("#hidden_room_count").val(rooms_count.join(","));
    });

    $(document).mousedown(function (e) {
        if ($(".hidden_type_dropdown").hasClass("active")) {
            if (e.target.nodeName === "P") {
                if (!$(e.target).hasClass("hidden_checkbox_title")) {
                    $(".hidden_type_dropdown").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                    toggleHelpFilter();
                }
            } else if (e.target.nodeName === "DIV") {
                if (!$(e.target).hasClass("hidden_type_dropdown")) {
                    $(".hidden_type_dropdown").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                    toggleHelpFilter();
                }
            } else if (e.target.nodeName === "LI") {
                if (!$(e.target).parent().hasClass("hidden_checkbox_menu")) {
                    $(".hidden_type_dropdown").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                    toggleHelpFilter();
                }
            } else if (e.target.nodeName === "LABEL") {
                if (!$(e.target).parent().hasClass("checkbox")) {
                    $(".hidden_type_dropdown").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                    toggleHelpFilter();
                }
            } else {
                $(".hidden_type_dropdown").removeClass("active");
                $(".filter_input_wrap").removeClass("open");
                toggleHelpFilter();
            }
        }

        if ($(".hidden_space").hasClass("active")) {
            if (e.target.nodeName === "DIV") {
                if (
                    !$(e.target).hasClass("hidden_space") &&
                    !$(e.target).hasClass("hidden_space_help")
                ) {
                    $(".hidden_space").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                    toggleHelpFilter();
                }
            } else if (e.target.nodeName === "INPUT") {
                if (
                    !$(e.target).hasClass("hidden_space_input") &&
                    !$(e.target).hasClass("space_input")
                ) {
                    $(".hidden_space").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                    toggleHelpFilter();
                }
            } else if (e.target.nodeName === "LABEL") {
                if (
                    !$(e.target).hasClass("hidden_space_label") &&
                    !$(e.target).hasClass("space_label")
                ) {
                    $(".hidden_space").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                    toggleHelpFilter();
                }
            } else {
                $(".hidden_space").removeClass("active");
                $(".filter_input_wrap").removeClass("open");
                toggleHelpFilter();
            }
        }

        if ($(".hidden_price").hasClass("active")) {
            if (e.target.nodeName === "DIV") {
                if (
                    !$(e.target).hasClass("hidden_price") &&
                    !$(e.target).hasClass("hidden_price_help") &&
                    !$(e.target).hasClass("price_variants") &&
                    !$(e.target).hasClass("price_wallet")
                ) {
                    $(".hidden_price").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                    toggleHelpFilter();
                }
            } else if (e.target.nodeName === "INPUT") {
                if (
                    !$(e.target).hasClass("hidden_price_input") &&
                    !$(e.target).hasClass("price_input")
                ) {
                    $(".hidden_price").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                    toggleHelpFilter();
                }
            } else if (e.target.nodeName === "LABEL") {
                if (
                    !$(e.target).hasClass("hidden_price_label") &&
                    !$(e.target).hasClass("price_label")
                ) {
                    $(".hidden_price").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                    toggleHelpFilter();
                }
            } else if (e.target.nodeName === "LI") {
                if (!$(e.target).parent().hasClass("price_variants_ul")) {
                    $(".hidden_price").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                }
            } else if (e.target.nodeName === "BUTTON") {
                if (!$(e.target).hasClass("wallet")) {
                    $(".hidden_price").removeClass("active");
                    $(".filter_input_wrap").removeClass("open");
                    toggleHelpFilter();
                }
            } else {
                $(".hidden_price").removeClass("active");
                $(".filter_input_wrap").removeClass("open");
                toggleHelpFilter();
            }
        }
    });

    // =========================== FILTER ===========================

    // =========================== FORM COUNTRY SELECT ===========================

    $(document).on(
        "click",
        ".hidden_modal_counties > .modal_country",
        function () {
            let current = $(".country_icon .selected_modal_country").clone(
                true
            );
            let selected = $(this).clone();

            $(".selected_modal_country").replaceWith(selected);
            $(selected)
                .addClass("selected_modal_country")
                .removeClass("modal_country");
            $(this).replaceWith(current);
            $(current)
                .removeClass("selected_modal_country")
                .addClass("modal_country");
            setMask("#modal_form_phone", ".selected_modal_country");
        }
    );

    $(document).on("click", ".hidden_about_countries > .country", function () {
        let current = $(".country_icon .selected_country").clone(true);
        let selected = $(this).clone();

        $(".selected_country").replaceWith(selected);
        $(selected).addClass("selected_country").removeClass("country");
        $(this).replaceWith(current);
        $(current).removeClass("selected_country").addClass("country");
        setMask("#form_phone", ".selected_country");
    });

    setMask("#modal_form_phone", ".selected_modal_country");
    setMask("#form_phone", ".selected_country");
    // =========================== FORM COUNTRY SELECT ===========================

    // =========================== MASK ===========================
    function setMask(id, selected) {
        let code = $(selected).data("value");
        switch (code) {
            case "ua": {
                $(id).mask("+3 (000) 000 00 00");
                $(id).attr("placeholder", "+3 (999) 999 99 99");
                $(id).val("");
                break;
            }
            case "ru": {
                $(id).mask("+7 (000) 000 00 00");
                $(id).attr("placeholder", "+7 (999) 999 99 99");
                $(id).val("");
                break;
            }
            case "kz": {
                $(id).mask("8 (000) 000 00 00");
                $(id).attr("placeholder", "8 (999) 999 99 99");
                $(id).val("");
                break;
            }
            default: {
                $(id).mask("+3 (000) 000 00 00");
                $(id).attr("placeholder", "+3 (999) 999 99 99");
                $(id).val("");
            }
        }
    }
    // =========================== MASK ===========================

    // =================== MOBILE MENU ========================
    $(".button_menu").click(function () {
        $("body").toggleClass("non_scrolled");
        $(this).toggleClass("active");
        $(".menu_responsive").toggleClass("active");
    });

    $(document).mouseup(function (e) {
        if ($(".menu_responsive").hasClass("active")) {
            var container = $(".menu_responsive");
            if (container.has(e.target).length === 0) {
                $(".button_menu").click();
            }
            if ($(e.target).parent().hasClass("button_menu")) {
                $(".button_menu").click();
            }
            if ($(e.target).hasClass("button_menu")) {
                $(".button_menu").click();
            }
        }
    });
    $(".nav").on("click", function () {
        if ($(".menu_responsive").hasClass("active")) {
            $(".button_menu").click();
        }
    });

    // =================== MOBILE MENU ========================

    // =================== SOME BUTTONS TRIGGERS ========================

    $(".estate_objects_controls > button").on("click", function () {
        $(this).toggleClass("active");
    });

    $(".estate_single_card .info_wrap .price_wrap .liked").on(
        "click",
        function () {
            $(this).find("i").toggleClass("fa-heart-o");
            $(this).find("i").toggleClass("fa-heart");
        }
    );

    $(".single_country_object .info_wrap .price .liked").on(
        "click",
        function () {
            $(this).find("i").toggleClass("fa-heart-o");
            $(this).find("i").toggleClass("fa-heart");
        }
    );

    $(".single_country_object .info_wrap .place .liked").on(
        "click",
        function () {
            $(this).find("i").toggleClass("fa-heart-o");
            $(this).find("i").toggleClass("fa-heart");
        }
    );

    $("#single_object .object_right_section .price button").on(
        "click",
        function () {
            $(this).find("i").toggleClass("fa-heart-o");
            $(this).find("i").toggleClass("fa-heart");
        }
    );

    $("#single_object .object_right_section .views button").on(
        "click",
        function () {
            $(this).find("i").toggleClass("fa-heart-o");
            $(this).find("i").toggleClass("fa-heart");
        }
    );

    $(".single_country_object_wrap > a").on("click", function (e) {
        if (e.target.nodeName === "BUTTON" || e.target.nodeName === "I") {
            e.preventDefault();
        }
    });

    $(".estate_single_card_wrap > a").on("click", function (e) {
        if (e.target.nodeName === "BUTTON" || e.target.nodeName === "I") {
            e.preventDefault();
        }
    });

    $(".city_mobile_filter .current_option").on("click", function (e) {
        e.preventDefault();
        $(this).parent().find("img").toggleClass("active");
        $(this).parent().find(".hidden_options").toggleClass("opened");
    });

    $(".estate_mob_filter_trigger").on("click", function () {
        $(".estate_filter_wrap").toggleClass("mobile_active");
    });
    $(".mobile_filter_header > button").on("click", function () {
        $(".estate_filter_wrap").toggleClass("mobile_active");
    });

    // $(".question_header > button").on("click", function () {
    //     console.log($(this).parent().find(".single_question_body"));
    //     $(this)
    //         .parent()
    //         .parent()
    //         .find(".single_question_body")
    //         .collapse("toggle");
    // });
    // =================== SOME BUTTONS TRIGGERS ========================
});
