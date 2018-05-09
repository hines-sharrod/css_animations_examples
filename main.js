$(document).ready(function () {
    $('#marioLink').click(function () {
        $('#marioExample').show();
        $('#popUpExample, #shoppingCartExample, #flipCardExample').hide();
    })
    $('#popUpLink').click(function () {
        $('#popUpExample').show();
        $('#marioExample, #shoppingCartExample, #flipCardExample').hide();
        $('#signUpForm').addClass('pop-up');
    })
    $('#shopLink').click(function () {
        $('#shoppingCartExample').show();
        $('#popUpExample, #marioExample, #flipCardExample').hide();
    })
    $('#flipCardLink').click(function () {
        $('#flipCardExample').show();
        $('#popUpExample, #shoppingCartExample, #marioExample').hide();
    })

    $('#shopExample button').click(function () {
        $(this).closest('li').find('img').clone().addClass('add-to-cart').appendTo('body');
    })
})

