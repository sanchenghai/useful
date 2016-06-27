//把a数组中不同的数复制到b数组中
var a = [1, 3, 7, 3, 5, 6, 3, 2, 6, 7, 5, 4, 7, 9];
var b = [];

a.sort();
var i;
for (i = 0; i < a.length; i += 1) {
	if(a[i] != a[i + 1]){
		b.push(a[i]);
	}
}
console.log(b);