//
// Launch youtube player on click
//
// see: https://www.labnol.org/internet/light-youtube-embeds/27941/?_ga=2.182400295.1672380290.1540981837-952603589.1540981837
// https://codepen.io/JacobLett/pen/xqpEYE

function createIframe() {
    var iframe = document.createElement("iframe");

    iframe.setAttribute("src", this.dataset.iframeUrl);
    iframe.setAttribute("title", this.dataset.iframeTitle);
    iframe.setAttribute("allowfullscreen", "");

    document.getElementById("modalVideoLabelTeaser").innerHTML = this.dataset.iframeTitle;
    document.getElementById("m-teaser__iframe").appendChild(iframe);
}

document.addEventListener("DOMContentLoaded", function () {
    var n,
        v = document.getElementsByClassName("m-teaser--video");

    for (n = 0; n < v.length; n++) {
        v[n].onclick = createIframe;
    }

});

// stop playing the youtube video when the modal is closed
$(document).ready(function () {
    $('#modalVideoTeaser').on('hide.bs.modal', function (e) {
        $("#m-teaser__iframe iframe").remove();
    });
});