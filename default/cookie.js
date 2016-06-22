function setCookie(key, value, expiredays){
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = key+ "=" + value + ";expires=" + exdate.toGMTString();
}

function getCookie(c_name){
	if(document.cookie.length > 0){
		var c_start = document.cookie.indexOf(c_name + "=");
		if(c_start != -1){
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if(c_end == -1){
				c_end = document.cookie.length;
			}
			return document.cookie.substring(c_start,c_end);
		}
	}
	return "";
}

setCookie("jmGameL", 1, 365);

var res = getCookie("jmGameL");

console.log(typeof res);
console.log(res);