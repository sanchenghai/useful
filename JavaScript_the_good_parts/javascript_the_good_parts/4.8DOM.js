//定义walk_the_DOM函数，它从某个给定的节点开始，按HTML源码中的顺序
//访问该书的每个节点
//它会调用一个函数，并依次传递，每个节点给他
var walk_the_DOM = function walk(node,func){
	func(node);
	node = node.firstChild;
	while(node){
		walk(node,func);
		node = node.nextSibling;
	}
};


//定义getElementsByAttrbute函数。他取得一个属性名称字符串
//和一个可选的匹配值
//他调用walk_the_DOM，传递一个用来查找节点属性名的函数。
//匹配节点会累积到一个结果数组中。
var getElementsByAttribute = function(att,value){
	var results = [];
	walk_the_DOM(document.body,function(node){
		var actual = node.nodeType === 1 && node.getAttribute(att);
		if(typeof actual === 'string' && (actual === value || typeof value !== 'string')){
			results.push(node);
		}
	});
	return results;
};