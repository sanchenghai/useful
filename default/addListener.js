/*
    功能：事件注册
    优点：跨浏览器，特性探测，性能优化
*/
var addListener;
if (window.addEventListener) {
    addListener = function(el, type, listener, useCapture) {
        el.addEventListener(type, listener, useCapture);
    };
} else if (window.attachEvent) {
    addListener = function(el, type, listener) {
        el.attachEvent("on" + type, function() {
            listener.apply(el);
        });
    };
}