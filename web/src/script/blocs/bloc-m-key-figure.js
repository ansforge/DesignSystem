// inViewport jQuery plugin
// http://stackoverflow.com/a/26831113/383904
// Based on Fiddle: https://jsfiddle.net/2v3mq3nh/4/
// From this Answer: http://stackoverflow.com/a/36980280
$(function ($, win) {
    $.fn.inViewport = function (cb) {
        return this.each(function (i, el) {
            function visPx() {
                var H = $(this).height(),
                    r = el.getBoundingClientRect(),
                    t = r.top,
                    b = r.bottom;
                return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
            }
            visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));

var fn_keyfigure_animated = function () {

    // https://jsfiddle.net/medel/8qeyr6pt/
    if ($('.m-key-figure--animated').length > 0) {
        $(".m-key-figure--animated").inViewport(function (px) { // Make use of the `px` argument
            var keyfigureNumber = $(this).text().replace(/\s/g, ""); // remove white space
            // if element entered V.port ( px>0 ) and
            // if prop initNumAnim flag is not yet set
            // if it's a number
            //  = Animate numbers
            if (px > 0 && !this.initNumAnim && !isNaN(keyfigureNumber)) {
                this.initNumAnim = true; // Set flag to true to prevent re-running the same animation

                $(this).prop('Counter', 0).animate({
                    Counter: keyfigureNumber
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(new Intl.NumberFormat('fr-FR').format(parseFloat(now).toFixed()));
                    }
                });
            }
        });
    }

};

$(document).ready(function () {
    fn_keyfigure_animated();
});