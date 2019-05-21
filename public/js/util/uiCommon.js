var uiCommon = new function () {
    this.showAlertBox = function (elem) {
        var windowWidth = document.documentElement.clientWidth,
            windowHeight = document.documentElement.clientHeight,
            popupHeight = $(window).height() * 0.4,
            popupWidth = $('#' + elem + ' .overlay-content').width();

        $('#' + elem + ' .overlay-content').css({
            "position": "absolute",
            "top": "20%"
            // "top": windowHeight / 2 - popupHeight / 2//,
            /*"left": windowWidth/2-popupWidth/2*/
        });

        $('#' + elem + ' .overlay-content').show();
        $('#' + elem + ' .overlay').show();
        $('#' + elem).show();
        if ($('#popupOKButton')) {
            $('#popupOKButton').trigger("focus");
        }
        if (!Modernizr.touch) {
            try {
                $('#' + elem + ' .overlay-content').draggable({ containment: "window" });
            } catch (e) {
                //draggable not working.
            }
        }
        var D = document;
        $('#' + elem).height(Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight)) - 8);
        $('#' + elem).width(Math.max(Math.max(D.body.scrollWidth, D.documentElement.scrollWidth), Math.max(D.body.offsetWidth, D.documentElement.offsetWidth), Math.max(D.body.clientWidth, D.documentElement.clientWidth)) - 8);
        $(window).scrollTop($(window).scrollTop() - 1);
    };
}();