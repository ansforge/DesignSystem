$(document).ready(function () {
    sliderControlsObserver();
    sliderToggleHeaderAlign();
});

function sliderControlsObserver() {
    // observer to check updates on target
    let tnsControls = document.querySelectorAll('.tns-controls');

    const observer = new MutationObserver(function (mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for(const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                //console.log(mutation.target.style.display);
                sliderToggleHeaderAlign();
            }
        }
    });

    for (const tnsControl of tnsControls) {
        observer.observe(tnsControl, { attributes: true });
    }
}

// change Slider Header Alignment when Slider Controls are hidden
function sliderToggleHeaderAlign() {
    let tnsControls = document.querySelectorAll('.tns-controls');

    if (tnsControls.length > 0) {
        let paragraphHeaderElt;
        let filter = ':hidden';
        let filteredControls;

        for (let index = 0; index < 2; index++) {
            filteredControls = $(tnsControls).filter(filter);
            paragraphHeaderElt = filteredControls.closest('.container').children('.paragraph__header');

            if (filter === ':hidden') {
                if (!paragraphHeaderElt.hasClass('justify-content-center')) {
                    paragraphHeaderElt.addClass('justify-content-center');
                    paragraphHeaderElt.children().addClass('text-center');
                }
            }
            else if (filter === ':visible') {
                if (paragraphHeaderElt.hasClass('justify-content-center')) {
                    paragraphHeaderElt.removeClass('justify-content-center');
                    paragraphHeaderElt.children().removeClass('text-center');
                }
            }

            filter = ':visible';
        }
    }
}

// init sliders
var fn_slider = function (componentName, componentSliderClass, controlsPosition, nbItems576, nbItems992, nbItems1200, gutter = 30) {
    var sliderElt = Array.from(document.querySelectorAll(componentName));

    if(typeof(sliderElt) != 'undefined' && sliderElt != null) {
        sliderElt.forEach(function (slider) {
            var parentElt = slider.querySelector(componentSliderClass);
            // console.log(parentElt)

            if(parentElt.children.length > 1) {
                var slider = tns({
                    container: parentElt,
                    items: 1,
                    gutter: gutter,
                    loop: false,
                    nav: false,
                    controlsPosition: controlsPosition,
                    controlsText: ["élément précédent", "élément suivant"],
                    responsive: {
                        576: {
                            items: nbItems576
                        },
                        992: {
                            items: nbItems992
                        },
                        1200: {
                            items: nbItems1200
                        }
                    }
                });
            }
        });
    }
};