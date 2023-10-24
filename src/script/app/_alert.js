var fn_alert = function() {

    if($('.o-alert .btn--close').length > 0) {
        $('.o-alert .btn--close').on('click', function(){
            $(this).parents('.o-alert').remove();
        })
    }

};
