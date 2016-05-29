// 输出全局变量 __filename 的值
console.log( __filename );



// 输出全局变量 __dirname 的值
console.log( __dirname );



function printHelloO(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHelloO, 2000);



function printHello(){
   console.log( "Hello, World!!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);



process.on('exit', function(code) {

  // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);
  
  console.log('退出码为:', code);
});
console.log("程序执行结束");



// 输出到终端
process.stdout.write("Hello World!!!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路局
console.log(process.execPath);

// 平台信息
console.log(process.platform);



// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());