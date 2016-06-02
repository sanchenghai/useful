//理解内部函数能访问外部函数的实际变量而无需复制是很重要的



//糟糕的例子
//构造一个函数，用错误的方式给一个数组中的节点设置事件处理程序
//当点击一个节点时，想弹出一个对话框显示节点的序号，但总是会显示节点的数目
var add_the_handlers = function(nodes){
	var i;
	for(i = 0; i < nodes.length; i += 1){
		nodes[i].onclick = function(e){
			alert(i);
		}
	}
};



//更好的例子
var add_the_handlers = function(nodes){
	var i;
	for(i = 0; i < nodes.length; i+= 1){
		nodes[i].onclick = function(i){
			return function(e){
				alert(i);
			};
		}(i);
	}
};