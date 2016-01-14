var events = require("events");
var emitter = new events.EventEmitter();
emitter.on("myEvent", function(msg) {
　　console.log(msg);
});
emitter.emit("myEvent", "Hello World.");

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   emitter.emit('data_received');
};

// 绑定 connection 事件处理程序
emitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
emitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件 
emitter.emit('connection');

console.log("程序执行完毕。");