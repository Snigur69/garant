jQuery(function ($) {
    $("#main_filter .country_wrap .help_cities > span").on(
        "click",
        function () {
            $(this)
                .parent()
                .parent()
                .find("#country")
                .val($(this).data("value"));
        }
    );

    $(".filter_additional_prices .variant").on("click", function () {
        $(this)
            .parent()
            .parent()
            .find("#hidden_price_from")
            .val($(this).data("from"));
        $(this)
            .parent()
            .parent()
            .parent()
            .find("#price_from")
            .val($(this).data("from"));

        $(this)
            .parent()
            .parent()
            .find("#hidden_price_to")
            .val($(this).data("to"));
        $(this)
            .parent()
            .parent()
            .parent()
            .find("#price_to")
            .val($(this).data("to"));
        $(".price_wallet #euro").trigger("click");
    });

    $(".addition_hidden_space #space_variants_from > li").on(
        "click",
        function () {
            $(this)
                .parent()
                .parent()
                .parent()
                .find("#hidden_space_from")
                .val($(this).data("value"));
            $(this)
                .parent()
                .parent()
                .parent()
                .parent()
                .find("#space_from")
                .val($(this).data("value"));
        }
    );

    $(".addition_hidden_space #space_variants_to > li").on(
        "click",
        function () {
            $(this)
                .parent()
                .parent()
                .parent()
                .find("#hidden_space_to")
                .val($(this).data("value"));
            $(this)
                .parent()
                .parent()
                .parent()
                .parent()
                .find("#space_to")
                .val($(this).data("value"));
        }
    );
});
