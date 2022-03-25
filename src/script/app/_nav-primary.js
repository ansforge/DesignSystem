var menu_open = function() {
    $("body").addClass('nav-is-open').removeClass('nav-is-closed');
};

var menu_close = function() {
    $("body").removeClass('nav-is-open').addClass('nav-is-closed');
};

var fn_nav_primary = function () {

    $('[data-target="#menuPrincipal"]').on('click', function() {
        if ($(this).attr('aria-expanded') === "true") {
            menu_close();
        } else {
            menu_open();
        }
    });

    // Close collapse item with Esc key
    document.addEventListener('keyup', function (event) {
        if (event.defaultPrevented) {
            return;
        }

        var key = event.key || event.keyCode;

        if (key === 'Escape' || key === 'Esc' || key === 27) {
            $('.collapse.show').prev().focus();
            $('.collapse.show').collapse('hide');

            $('[data-toggle="tooltip"]').tooltip('hide');
            menu_close();
        }
    });

    //  Close item nav when click outside parent
    $(document).mouseup(function(e) {
        var sub_menu = $(".header-principal-right .nav-collapse");
        var except_body = $(".header-principal-right");

        // If the target of the click isn't the nav-collapse
        if ((!except_body.is(e.target) && except_body.has(e.target).length === 0)) {
            sub_menu.removeClass("show");
            sub_menu.prev().attr('aria-expanded', false);
            $('.search-backdrop').remove();
        }
    });

    // Close all items when a current item is open
    $('.common-nav-item > button').on('click', function(e){
        var EltToToggle = $(this).next('.nav-collapse');

        $(".header-principal-right .nav-collapse").not(EltToToggle).removeClass("show");
        $('.search-backdrop').remove();

        // aria-expanded toggle
        if ($(this).attr('aria-expanded') ===  "false") {
            $(this).attr('aria-expanded', true);
            $('.header-principal-right .nav-collapse').prev().attr('aria-expanded', false);
        }
        else if ($(this).attr('aria-expanded') ===  "true") {
            $(this).attr('aria-expanded', false);
        }
    });

    // Add/remove
    $('#collapseSearch').on('shown.bs.collapse', function () {
        if(!$('.search-backdrop').length) {
            $('body').append('<div class="modal-backdrop search-backdrop fade show"></div>');
        }
    });
    $('#collapseSearch').on('hidden.bs.collapse', function () {
        $('.search-backdrop').remove();
    });
};
