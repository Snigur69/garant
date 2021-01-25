jQuery(function ($) {
    const EUR = 91.13;

    $("#convert_wallet").on("click", function (e) {
        e.preventDefault();
        if ($(this).parent().find(".wallet").data("wallet") == "euro") {
            let value = Number(
                $(this).parent().find(".price_value").text().split(" ").join("")
            );
            let area = Number(
                $(this)
                    .parent()
                    .parent()
                    .find(".info")
                    .find("#area > span")
                    .text()
            );
            $(this).parent().find(".wallet").text("₽");
            $(this).parent().find(".wallet").data("wallet", "rub");
            $(this)
                .parent()
                .find(".price_value")
                .text(numberWithSpaces(value * EUR));
            $(this).find("span").text("евро");

            $(this)
                .parent()
                .parent()
                .find(".subprice")
                .find(".wallet")
                .text("₽");
            $(this)
                .parent()
                .parent()
                .find(".subprice")
                .find(".area_value")
                .text(numberWithSpaces(Math.round((value * EUR) / area)));
        } else if ($(this).parent().find(".wallet").data("wallet") == "rub") {
            let value = Number(
                $(this).parent().find(".price_value").text().split(" ").join("")
            );
            let area = Number(
                $(this)
                    .parent()
                    .parent()
                    .find(".info")
                    .find("#area > span")
                    .text()
            );
            $(this).parent().find(".wallet").text("€");
            $(this).parent().find(".wallet").data("wallet", "euro");
            $(this)
                .parent()
                .find(".price_value")
                .text(numberWithSpaces(value / EUR));
            $(this).find("span").text("рубли");
            $(this)
                .parent()
                .parent()
                .find(".subprice")
                .find(".wallet")
                .text("€");
            $(this)
                .parent()
                .parent()
                .find(".subprice")
                .find(".area_value")
                .text(numberWithSpaces(Math.round(value / EUR / area)));
        }
    });
});

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
