const event = require("events");
var eventEmitter = new event();
eventEmitter.on("myEvent", (msg)=>{
    console.log(msg);
});
eventEmitter.emit("myEvent","Event Emitted");