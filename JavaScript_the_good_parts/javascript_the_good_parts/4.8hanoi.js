//汉诺塔是一个著名的难题
var hanoi = function(disc,src,aux,dst){
	if(disc > 0){
		hanoi(disc - 1,src,dst,aux);
		document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
		hanoi(disc-1,aux,src,dst);
	}
}

hanio(3,'Src','Aux','Dst');