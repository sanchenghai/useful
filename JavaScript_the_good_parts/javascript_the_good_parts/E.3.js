//这是一个用JavaScript编写JSON解析器的实现方案
var json_parse = function(){
	//这是一个能把JSON文本解析成JavaScript数据结构的函数
	//他是一个简单的递归降序解析器
	//我们在另一个函数中定义此函数，以避免创建全局变量
	var at , //当前字符的索引
	    ch,  //当前字符
	    escape = {
	    	'"':'"',
	    	'\\':'\\',
	    	'/':'/',
	    	b:'b',
	    	f:'\f',
	    	n:'\n',
	    	r:'\r',
	    	t:'\t'
	    },
	    text,
	    error = function(m){
	    	//当某处出错时，调用error
	    	throw{
	    		name:'SyntaxError',
	    		message:m,
	    		at:at,
	    		text:text
	    	}
	    },
	    next = function(c){
	    	//如果提供了参数c，那么检验它是否匹配当前字符
	    	if(c && c !== ch){
	    		error("Excepted '" + c + "' instead of '" + ch + "'");
	    	}
	    	ch = text.charAt(at);
	    	ar += 1;
	    	return ch;
	    }
	    number = function(){
	    	//解析一个数字值
	    	var number,
	    	    string = '';
	    	if(ch === '-'){
	    		string = '-';
	    		next('-');
	    	}
	    	while(ch >= '0' && ch <= '9'){
	    		string += ch;
	    		next();
	    	}
	    	if(ch === '.'){
	    		string += '.';
	    		while(next() && ch >= '0' && ch <= '9'){
	    			string += ch;
	    		}
	    	}
	    	if(ch === 'e' || ch === 'E'){
	    		string += ch;
	    		next();
	    		if(ch === '-' || ch === '+'){
	    			string += ch;
	    			next();
	    		}
	    		while(ch >= '0' && ch <= '9'){
	    			string += ch;
	    			next();
	    		}
	    	}
	    	number = +string;
	    	if(isNaN(number)){
	    		error("Bad number");
	    	}else{
	    		return number;
	    	}
	    },
	    string = function(){
	    	//解析一个字符串值
	    	var hex,
	    	    i,
	    	    string = '',
	    	    uffff;
	    	if(ch === '"'){
	    		while(next()){
	    			if(ch === '"'){
	    				next();
	    				return string;
	    			}else if(ch === '\\'){
	    				next();
	    				if(ch === 'u'){
	    					uffff = 0;
	    					for(i = 0;i < 4;i += 1){
	    						hex = parseInt(next(),16);
	    						if(!isFinite(hex)){
	    							break;
	    						}
	    						uffff = uffff * 16 + hex;
	    					}
	    					string += String.fromCharCode(uffff);
	    				}else if(typeof escapee[ch] === 'string'){
	    					string += escapee[ch];
	    				}else{
	    					break;
	    				}
	    			}else{
	    				string += ch;
	    			}
	    		}
	    	}
	    	error("Bad string");
	    },
	    white = function(){
	    	//跳过空白
	    	while(ch && ch <= ' '){
	    		next();
	    	}
	    },
	    word = function(){
	    	//true、false或null
	    	switch(ch){
	    		case 't':
	    			next('t');
	    			next('r');
	    			next('u');
	    			next('e');
	    			return true;
	    		case 'f':
	    			next('f');
	    			next('a');
	    			next('l');
	    			next('s');
	    			next('e');
	    			return false;
	    		case 'n':
	    			next('n');
	    			next('u');
	    			next('l');
	    			next('l');
	    			return null;
	    	}
	    	error("Unexpected '" + ch + "'");
	    },
	    value, //值函数的占位符
	    array = function(){
	    	//解析一个数组值
	    	var array = [];
	    	if(ch === '['){
	    		next('[');
	    		white();
	    		if(ch === ']'){
	    			next(']');
	    			return array; //空数组
	    		}
	    		while(ch){
	    			array.push(value());
	    			white();
	    			if(ch === ']'){
	    				next(']');
	    				return array;
	    			}
	    			next(',');
	    			white();
	    		}
	    	}
	    	error("Bad array");
	    },
	    object = function(){
	    	//解析一个对象值
	    	var key,
	    	    object = {};
	    	if(ch === '{'){
	    		next('{');
	    		white();
	    		if(ch === '}'){
	    			next('}');
	    			return object; //空对象
	    		}
	    		while(ch){
	    			key = string();
	    			white();
	    			next(':');
	    			object[key] = value();
	    			white();
	    			if(ch === '}'){
	    				next('}');
	    				return object;
	    			}
	    			next(',');
	    			white();
	    		}
	    	}
	    	error("Bad object");
	    };

	value = function(){
		//解析一个JSON值，他可以是对象、数组、字符串、数字或一个词
		white();
		switch(ch){
			caes '{':
				return object();
			caes '[':
				return array();
			caes '"':
				return string();
			caes 'number':
				return number();
			default:
				return ch >= '0' && ch <= '9' ? number() : word();
		}
	};

	//返回json_parse函数，它将能访问上述所有的函数和变量
	return function(source,reviver){
		var result;

		text = source;
		at = 0;
		ch = ' ';
		result = value();
		white();
		if(ch){
			error("Syntax error");
		}
		//
		//
		//
		//
		return typeof reviver === 'function' ? function walk(holder,key){
													var k,v,value = holder[key];
													if(value && typeof value === 'object'){
														for(k in value){
															if(Object.hasOwnProperty.call(value,k)){
																v = walk(value,k);
																if(v !== undefined){
																	value[k] = v;
																}else{
																	delete value[k];
																}
															}
														}
													}
													return reviver.call(holder,key,value);
												}({'':result},'') : result;
	};
}();