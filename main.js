$(document).ready(function () {
    $('#marioLink').click(function () {
        $('#marioExample').show();
        $('#popUpExample, #shoppingCartExample, #flipCardExample').hide();
    })
    $('#popUpLink').click(function () {
        $('#popUpExample').show();
        $('#marioExample, #shoppingCartExample, #flipCardExample').hide();
    })
    $('#shopLink').click(function () {
        $('#shoppingCartExample').show();
        $('#popUpExample, #marioExample, #flipCardExample').hide();
    })
    $('#flipCardLink').click(function () {
        $('#flipCardExample').show();
        $('#popUpExample, #shoppingCartExample, #marioExample').hide();
    })
})

