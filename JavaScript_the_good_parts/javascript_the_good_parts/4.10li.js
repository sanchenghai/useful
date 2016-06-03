//糟糕的例子

//构造一个函数，用错误的方式给一个数组中的节点设置事件处理程序
//当点击一个节点时，按照预想应该弹出一个对话框显示节点的序号
//但他总是显示节点的数目
var add_the_handlers1 = function(nodes){
	var i;
	for(i = 0;i < nodes.length;i += 1){
		nodes[i].onclick  = function(e){
			alert(i);
		}
	}
};

//结束糟糕的例子






//更好的例子
//构造一个函数，用正确的方式给一个数组中的节点设置事件处理程序
//点击一个节点，将会弹出一个对话框显示节点的序号
var add_the_handlers2 = function(nodes){
	var i;
	for(i = 0;i < nodes.length;i += 1){
		nodes[i].onclick = function(i){
			return function(){
				alert(i);
			};
		}(i);
	}
};


//用li进行测试
var nodes = document.getElementsByTagName('li');
// add_the_handlers1(nodes);
// add_the_handlers2(nodes);