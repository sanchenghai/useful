//构造一个用来产生序列号的对象
var serial_maker = function(){
	//返回一个用来产生唯一字符串的对象
	//该对象包含一个设置前缀的方法和设置序列号的方法和产生唯一字符串的gensym方法
	var prefix = "";
	var seq = 0;
	return {
		set_prefix : function(p){
			prefix = String(p);
		},
		set_seq : function(s){
			seq = s;
		},
		gensym : function(){
			var result = prefix + seq;
			seq += 1;
			return result;
		}
	};
};

var seqer = serial_maker();
seqer.set_prefix("Q");
seqer.set_seq(1000);
var unique = seqer.gensym();    //Q1000