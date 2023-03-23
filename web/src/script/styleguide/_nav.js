var sg_fn_nav = function () {

    $('.sg-navbar-toggler-close').on('click', function() {
        $('.navbar-toggler').focus();
    });

    // Access: Changement du texte dans les boutons collapse (déplier/fermer)
    $(".sg-header-principal__nav .navbar-collapse .nav-btn-collapse").on('click', function() {
        var ariaExpandedState = $(this).attr('aria-expanded');
        var textIsClosed = $(this).attr('data-is-closed-text');
        var textIsOpened = $(this).attr('data-is-opened-text');
        var changeTextElt = $(".nav-btn-collapse-action", this);

        if (ariaExpandedState === "false") {
            // aria-expanded va devenir true
            changeTextElt.text(textIsOpened);
        } else {
            // aria-expanded va devenir false
            changeTextElt.text(textIsClosed);
        }
    });

    // Desktop only
    if ($(window).width() > 991) {
        // Navbar left desktop
        // When there is a current page, all parents are opened
        $('.sg-header-principal__nav .navbar-nav .is-active').parents('.nav-collapse').collapse('show');
    }

    // Active navbar link
    $(".sg-header-principal__nav .navbar-nav .nav-link").each(function(){
        var $this = $(this);
        if($this.attr('href') == window.location.href.substr(window.location.href.lastIndexOf('/') + 1)){
            $this.parent('li').addClass('is-active');
            $this.append('<span class="sr-only">(page courante)</span>');
            $this.parents('.nav-collapse').collapse('show');
        }
    });
};