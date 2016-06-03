//数组判断
var is_array = function(value){
	return value && typeof value === 'object' &&
	       typeof value.length === 'number' &&
	       typeof value.splice === 'function' &&
	       !(value.propertyIsEnumerable('length'));
};

alert(is_array([]));
alert(is_array({}));