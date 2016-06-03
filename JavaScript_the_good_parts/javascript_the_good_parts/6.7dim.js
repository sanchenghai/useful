Array.dim = function(dimension,initial){
	var a = [],i;
	for(i = 0;i < dimension;i += 1){
		a[i] = initial;
	}
	return a;
}

//创建一个包含10个0的数组
var myArray = Array.dim(10,0);



Array.matrix = function(m,n,initial){
	var a,i,j,mat = [];
	for(i = 0;i < m;i += 1){
		a = [];
		for(j = 0;j < n;j += 1){
			a[j] = initial;
		}
		mat[i] = a;
	}
	return mat;
}
var myMatrix = Array.matrix(4,4,4);
console.log(myMatrix);



//构造一个恒等矩阵的方法,好像应该是“单位矩阵”,
Array.identity = function(n){
	var i,mat = Array.matrix(n,n,0);
	for(i = 0;i < n;i += 1){
		mat[i][i] = 1;
	}
	return mat;
}

myMatrix = Array.identity(4);
console.log(myMatrix);
