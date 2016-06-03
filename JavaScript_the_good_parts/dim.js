//初始化数组,一维
Array.dim =  function(dimension, initial){
	var a = [], i;
	for(i = 0; i < dimension; i += 1){
		a[i] = initial;
	}
	return a;
};

var myArray = Array.dim(10, 0);



//初始化数组,多维
Array.matrix = function(m, n, initial){
	var a, i, j, mat = [];
	for(i = 0; i < m; i += 1){
		a = [];
		for(j = 0; j < n; j += 1){
			a[j] = initial;
		}
		mat[i] = a;
	}
	return mat;
};

var myMatrix = Array.matrix(4, 4, 1);



//构造一个恒等矩阵的方法,即单位阵
Array.identity = function(n){
	var i, mat = Array.matrix(n, n, 0);
	for(i = 0; i < n; i += 1){
		mat[i][i] = 1;
	}
	return mat;
};

var myIdentity = Array.identity(2);