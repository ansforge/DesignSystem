var fn_target_blank = function() {

    // add icon external link to target="_blank"
    // add (nouvelle fenêtre / new window) in title
    var targetBlankElt = $('a.external-link, [target="_blank"]:not(:has(img))');

    if (document.documentElement.lang === 'fr') {
        var targetBlankText = ' (nouvelle fenêtre)';
    } else {
        var targetBlankText = ' (new window)';
    }

    targetBlankElt.each(function() {
        $(this).addClass('external-link');

        if ($(this).attr('aria-label')) {
            var title = $(this).attr('aria-label').replace(/\s+/g, ' ').trim();

            $(this).attr('title', function() {
                return title + targetBlankText
            });
        } else if ($(this).attr('title')) {
            var title = $(this).attr('title').replace(/\s+/g, ' ').trim();

            $(this).attr('title', function() {
                return title + targetBlankText
            });
        } else {
            $(this).attr('title', function() {
                return $(this).text().replace(/\s+/g, ' ').trim() + targetBlankText
            });
        }
    });

};

var fn_mailto_link = function() {

    // add icon mail to mailto links
    var mailToElt = $('a.mailto-link, [href^="mailto:"]');

    mailToElt.each(function() {
        $(this).addClass('mailto-link');
    });

};

var fn_doc_link = function() {

    // add icon download to file links
    var fileLinkElt = $('a.file-link, [href$=".pdf"], [href$=".odt"], [href$=".doc"], [href$=".docx"], [href$=".xls"], [href$=".xlsx"], [href$=".ods"], [href$=".ppt"], [href$=".pptx"], [href$=".odp"], [href$=".zip"], [href$=".rar"], [href$=".7z"], [href$=".mp3"], [href$=".mp4"], [href$=".ogv"], [href$=".ogg"], [href$=".wmv"], [href$=".mov"], [href$=".mkv"], [href$=".flv"], [href$=".webm"], [href$=".avi"], [href$=".jpg"], [href$=".jpeg"], [href$=".png"], [href$=".bmp"], [href$=".tiff"], [href$=".gif"]');

    fileLinkElt.each(function() {
        $(this).addClass('file-link');
    });

};
