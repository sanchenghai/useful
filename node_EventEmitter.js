var events = require("events");
var emitter = new events.EventEmitter();
emitter.on("myEvent", function(msg) {
　　console.log(msg);
});
emitter.emit("myEvent", "Hello World.");