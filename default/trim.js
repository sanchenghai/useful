//检查一下，如不存在 trim 这个方法，定义一个。
if(!String.prototype.trim) {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	};
}