/**
 * Updates element by diffing
 *
 * @depends https://github.com/fiduswriter/diffDOM
 */
(function ($) {
    $.fn.diffHTML = function (html) {
        $.fn.diffHTML.diffDOM || ($.fn.diffHTML.diffDOM = new diffDOM);
        $.fn.diffHTML.diffDOM.apply(this.get(0), $.fn.diffHTML.diffDOM.diff(this.get(0), $(html).get(0)));
    };
})(jQuery);
