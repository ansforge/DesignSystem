// * * * * * * * * * * * * * * * * * * * *
//
// On donne le focus à la fenêtre du site et non au navigateur
//
// * * * * * * * * * * * * * * * * * * * *
$(window).focus();

// * * * * * * * * * * * * * * * * * * * *
//
// DOM READY : init function
//
// * * * * * * * * * * * * * * * * * * * *

$(document).ready(function() {
    fn_target_blank();
    fn_mailto_link();
    fn_doc_link();
    fn_table();
    fn_nav_primary();
    fn_widget_access();
    fn_alert();
    fn_tooltip();
});