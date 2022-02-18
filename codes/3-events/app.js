const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => {
  console.log("Called listener", data);
});

logger.log("Hello World!");
logger.log("Goodbye World!");
logger.log("What The Hell World!");

// const EventEmitter = require("events");
// const Logger = require("./Logger");

// const logger = new Logger();

// logger.on("message", (data) => {
//   console.log(`called listener: ${data}`);
// });

// //create class
// class MyEmitter extends EventEmitter {}

// //init class
// const myEmitter = new MyEmitter();

// //event listener
// myEmitter.on("event", () => {
//   console.log("Event fired!");
// });

// //Init event
// myEmitter.emit("event");
// myEmitter.emit("event");
// myEmitter.emit("event");
