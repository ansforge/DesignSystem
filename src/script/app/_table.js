var fn_table = function () {

    // a11y: Critère 10.1 Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l’information ?
    // https://www.numerique.gouv.fr/publications/rgaa-accessibilite/documentation-rgaa/methodologie-test/#crit%C3%A8re-101-dans-le-site-web-des-feuilles-de-styles-sont-elles-utilis%C3%A9es-pour-contr%C3%B4ler-la-pr%C3%A9sentation-de-linformation
    // Remove styling attributes, use CSS instead
    $('table').removeAttr('border cellpadding cellspacing style')
        .wrap("<div class='table-responsive'></div>")
        .addClass('table table-bordered');

};