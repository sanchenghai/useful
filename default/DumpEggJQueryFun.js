(function(win, undefined) {
    var jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
    },
    document = window.document,
    push = Array.prototype.push,
    slice = Array.prototype.slice;
 
    win.$ = win.jQuery = jQuery;
})(window);