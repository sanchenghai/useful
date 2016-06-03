//定义一个函数，他设置一个DOM节点为黄色，然后把它变为白色。
var fade = function(node){
	var level = 1;
	var step = function(){
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex +hex;
		if(level <15){
			level += 1;
			setTimeout(step,100);
		}
	};
	setTimeout(step,100);
};

fade(document.body);