jQuery(function ($) {
    $(document).ready(function () {
        const EUR = 91.13;
        const USD = 75.97;
        const wallet = $(".object_right_section .price .wallet").data("wallet");
        let wallet_value;
        let current_wallet;
        let wallet_symbol;
        let help_text;
        switch (wallet) {
            case "rub": {
                wallet_value = 1;
                current_wallet = "rub";
                wallet_symbol = "₽";
                help_text = "рубли";
                break;
            }
            case "euro": {
                wallet_value = EUR;
                current_wallet = "euro";
                wallet_symbol = "€";
                help_text = "евро";
                break;
            }
            case "dollar": {
                wallet_value = USD;
                current_wallet = "dollar";
                wallet_symbol = "$";
                help_text = "доллары";
                break;
            }
            default: {
            }
        }
        if (wallet == "rub") {
            $("#convert_wallet").hide();
        }
        $("#convert_wallet").on("click", function (e) {
            e.preventDefault();
            if (
                $(this).parent().find(".wallet").data("wallet") ==
                current_wallet
            ) {
                let value = Number(
                    $(this)
                        .parent()
                        .find(".price_value")
                        .text()
                        .split(" ")
                        .join("")
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
                    .text(numberWithSpaces(value * wallet_value));
                $(this).find("span").text(help_text);

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
                    .text(
                        numberWithSpaces(
                            Math.round((value * wallet_value) / area)
                        )
                    );
            } else if (
                $(this).parent().find(".wallet").data("wallet") == "rub"
            ) {
                let value = Number(
                    $(this)
                        .parent()
                        .find(".price_value")
                        .text()
                        .split(" ")
                        .join("")
                );
                let area = Number(
                    $(this)
                        .parent()
                        .parent()
                        .find(".info")
                        .find("#area > span")
                        .text()
                );
                $(this).parent().find(".wallet").text(wallet_symbol);
                $(this).parent().find(".wallet").data("wallet", current_wallet);
                $(this)
                    .parent()
                    .find(".price_value")
                    .text(numberWithSpaces(value / wallet_value));
                $(this).find("span").text("рубли");
                $(this)
                    .parent()
                    .parent()
                    .find(".subprice")
                    .find(".wallet")
                    .text(wallet_symbol);
                $(this)
                    .parent()
                    .parent()
                    .find(".subprice")
                    .find(".area_value")
                    .text(
                        numberWithSpaces(
                            Math.round(value / wallet_value / area)
                        )
                    );
            }
        });
    });
});

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
