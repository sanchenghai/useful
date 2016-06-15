/***
innerheight	返回窗口的文档显示区的高度。
innerwidth	返回窗口的文档显示区的宽度。

只读属性，声明了窗口的文档显示区的高度和宽度，以像素计。
这里的宽度和高度不包括菜单栏、工具栏以及滚动条等的高度。
IE 不支持这些属性。
它用 document.documentElement 或 document.body （与 IE 的版本相关）的 
clientWidth 和 clientHeight 属性作为替代。
***/
//这是浏览器的可视宽高
var w = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
var h = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
console.log("浏览器内部窗口的宽度：" + w + "，高度：" + h);



/***
outerheight	返回窗口的外部高度。
outerwidth	返回窗口的外部宽度。

只读属性，声明了整个窗口的高度和宽度。
IE 不支持此属性，且没有提供替代的属性。
***/
var w = window.outerWidth;
var h = window.outerHeight;
console.log("浏览器窗口的宽度：" + w + "，高度：" + h);



/***
availHeight	返回显示屏幕的高度 (除 Windows 任务栏之外)。
availWidth	返回显示屏幕的宽度 (除 Windows 任务栏之外)。

属性声明了显示浏览器的屏幕的可用高度和宽度，以像素计。
在 Windows 这样的操作系统中，
不包括分配给半永久特性（如屏幕底部的任务栏）的垂直空间。
***/
var w = screen.availWidth;
var h = screen.availHeight;
console.log("窗口的宽度：" + w + "，高度：" + h);



/***
height	返回显示屏幕的高度。
width	返回显示器屏幕的宽度。

属性声明了显示浏览器的屏幕的高度和宽度，以像素计。
***/
var w = screen.width;
var h = screen.height;
console.log("窗口的宽度：" + w + "，高度：" + h);



/***
element.clientHeight	返回元素的可见高度。
element.clientWidth	返回元素的可见宽度。

element.offsetHeight	返回元素的高度。
element.offsetWidth	返回元素的宽度。

element.scrollHeight	返回元素的整体高度。
element.scrollWidth	返回元素的整体宽度。
***/
var ele = document.getElementById("wrapper");
console.log("窗口的宽度：" + ele.clientWidth + "，高度：" + ele.clientHeight);
console.log("窗口的宽度：" + ele.offsetWidth + "，高度：" + ele.offsetHeight);
console.log("窗口的宽度：" + ele.scrollWidth + "，高度：" + ele.scrollHeight);